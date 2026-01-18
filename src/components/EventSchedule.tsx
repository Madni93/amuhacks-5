import React, { useState, useEffect, useCallback } from 'react';

// --- Types ---
interface EventCard {
  title: string;
  description: string;
  image: string;
  location: string;
  dateTime: string;
  mode: string;
  platform: string;
  fee: string;
  targetDate: string; 
  isMain?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// --- Individual Timer Component for Accuracy ---
const EventTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculate = useCallback(() => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [calculate]);

  if (!timeLeft) return <span>EVENT LIVE</span>;

  const f = (n: number) => n.toString().padStart(2, '0');
  return (
    <span className="text-[#93E9BE] font-black tracking-widest uppercase">
      {f(timeLeft.days)}d : {f(timeLeft.hours)}h : {f(timeLeft.minutes)}m : {f(timeLeft.seconds)}s
    </span>
  );
};

// --- Main Component ---
const EventSchedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventCard | null>(null);

  const events: EventCard[] = [
    {
      title: "Software Hackathon (National)",
      description: "The flagship event of AMUHACKS 5.0. A 30-hour innovation marathon where teams build software solutions for real-world problems.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      location: "Virtual / Dept. of Computer Science, AMU",
      dateTime: "06 – 08 February 2026",
      mode: "Online",
      platform: "DevFolio",
      fee: "Registration Fee: Nil",
      targetDate: "2026-02-06T18:00:00",
      isMain: true
    },
    {
      title: "Quiz Competition",
      description: "A competitive platform to test your knowledge across computer science fundamentals and emerging digital trends.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      location: "Conference Hall, Dept. of Computer Science, AMU",
      dateTime: "09 February 2026 | 3:00 PM – 5:00 PM",
      mode: "Offline",
      platform: "On-Campus",
      fee: "Registration Fee: ₹100 per team",
      targetDate: "2026-02-09T15:00:00",
    },
    {
      title: "Coding Competition",
      description: "Showcase your algorithmic thinking and programming prowess in a multi-level challenge on HackerRank.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      location: "Conference Hall, Dept. of Computer Science, AMU",
      dateTime: "10 February 2026 | 3:00 PM – 5:00 PM",
      mode: "Offline",
      platform: "HackerRank",
      fee: "Registration Fee: ₹40 per participant",
      targetDate: "2026-02-10T15:00:00",
    },
    {
      title: "Capture The Flag (CTF)",
      description: "A cybersecurity battleground focusing on cryptography, web security, and reverse engineering skills.",
      image: "https://certify.cybervista.net/wp-content/uploads/2020/05/BLOG_Capture-the-Flag.png",
      location: "Virtual Environment",
      dateTime: "13 February 2026 | 6:00 PM – 10:00 PM",
      mode: "Online",
      platform: "To be announced",
      fee: "Registration Fee: ₹50 per participant",
      targetDate: "2026-02-13T18:00:00",
    },
    {
      title: "Ideathon (District Level)",
      description: "Propose original ideas for local societal issues and get judged on feasibility and potential grassroots impact.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      location: "Conference Hall, Dept. of Computer Science, AMU",
      dateTime: "14 February 2026 | 11:00 AM – 1:00 PM",
      mode: "Offline",
      platform: "DevFolio",
      fee: "Registration Fee: Nil",
      targetDate: "2026-02-14T11:00:00",
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0EAD6] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <div className="flex items-center space-x-3 bg-white/50 border border-[#93E9BE] px-6 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#93E9BE] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#93E9BE]"></span>
            </span>
            <span className="text-[#2C4A41] text-[10px] font-black uppercase tracking-[0.4em]">Event Lineup 2026</span>
          </div>
          <h2 className="text-[#2C4A41] text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9]">
            AMUHACKS <span className="text-[#93E9BE] italic">Timeline</span>
          </h2>
          <p className="text-[#2C4A41]/60 max-w-2xl text-lg font-medium italic">Innovate. Compete. Succeed.</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mb-20">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative bg-white/40 border border-[#93E9BE]/20 rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2"
            >
              <div className="absolute top-8 left-8 z-20 bg-[#2C4A41] text-[#F0EAD6] px-5 py-2 rounded-xl font-bold text-[10px] shadow-lg">
                 <EventTimer targetDate={event.targetDate} />
              </div>
              
              <div className="h-72 overflow-hidden relative">
                <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>

              <div className="p-10 pt-6 text-left flex flex-grow bg-white/20 backdrop-blur-sm flex-col">
                <h3 className="text-[#2C4A41] text-2xl font-black mb-3 tracking-tighter flex items-center justify-between">
                  {event.title}
                  {event.isMain && <span className="text-[10px] bg-[#93E9BE] text-[#2C4A41] px-3 py-1 rounded-full uppercase tracking-widest font-black">Flagship</span>}
                </h3>
                <p className="text-[#2C4A41]/70 text-base leading-relaxed mb-6 font-medium line-clamp-3">{event.description}</p>
                
                <div className="mt-auto pt-4 border-t border-[#2C4A41]/10">
                  <button onClick={() => setSelectedEvent(event)} className="text-[#2C4A41] font-black text-[10px] uppercase tracking-widest flex items-center hover:text-[#93E9BE] transition-colors">
                    View Full Guidelines 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="w-full flex flex-col items-center">
            <div className="bg-[#2C4A41] border border-[#93E9BE]/30 px-12 py-6 rounded-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 shadow-2xl">
               <div className="text-center md:text-left w-full">
                  <h4 className="text-[#93E9BE] font-black uppercase tracking-widest text-xs mb-1">Registrations Open</h4>
                  <p className="text-[#F0EAD6] text-sm font-medium opacity-70">Participate AMUHACKS5.0</p>
               </div>
               <button className="bg-[#93E9BE] text-[#2C4A41] px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#F0EAD6] transition-all">
                 Register Now
               </button>
            </div>
        </div>
      </div>

      {/* GUIDELINES MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-[#2C4A41]/90 backdrop-blur-md" onClick={() => setSelectedEvent(null)} />
          <div className="relative bg-[#F0EAD6] w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden border-2 border-[#93E9BE]/30 animate-in fade-in zoom-in duration-300">
            <div className="p-10 md:p-14">
              <button onClick={() => setSelectedEvent(null)} className="absolute top-8 right-8 text-[#2C4A41] hover:text-[#93E9BE] transition-colors"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg></button>
              
              <span className="text-[#93E9BE] text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Official Guidelines</span>
              <h3 className="text-[#2C4A41] text-4xl md:text-5xl font-black mb-10 tracking-tighter leading-none">{selectedEvent.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-1">
                  <span className="text-[#2C4A41]/40 text-[10px] font-black uppercase tracking-widest">Schedule</span>
                  <p className="text-[#2C4A41] font-bold text-lg">{selectedEvent.dateTime}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#2C4A41]/40 text-[10px] font-black uppercase tracking-widest">Mode & Platform</span>
                  <p className="text-[#2C4A41] font-bold text-lg">{selectedEvent.mode} — {selectedEvent.platform}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#2C4A41]/40 text-[10px] font-black uppercase tracking-widest">Location</span>
                  <p className="text-[#2C4A41] font-bold text-lg">{selectedEvent.location}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#2C4A41]/40 text-[10px] font-black uppercase tracking-widest">Registration</span>
                  <p className="text-[#2C4A41] font-bold text-lg">{selectedEvent.fee}</p>
                </div>
              </div>

              <div className="p-6 bg-white/50 rounded-2xl border border-[#93E9BE]/20">
                <p className="text-[#2C4A41]/80 text-sm font-medium leading-relaxed italic">
                  "Ensure you are registered on the respective platform before the deadline. Late entries will not be accommodated."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventSchedule;