
const AboutOurStuff = () => {
  return (
    <section id="about-events" className="py-32 px-6 md:px-12 lg:px-24 bg-[#F0EAD6]">
      <div className="md:max-w-7xl max-w-9/10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Styled Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#93E9BE]/20 rounded-[2.5rem] transform -rotate-3 transition-transform group-hover:rotate-0" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&fit=crop" 
              alt="Hackathon event" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -top-6 -right-6 h-28 w-28 bg-[#2C4A41] rounded-2xl flex flex-col items-center justify-center border-4 border-[#93E9BE] shadow-xl rotate-12">
            <span className="text-[#93E9BE] text-2xl font-black">5.0</span>
            <span className="text-[#F0EAD6] text-[10px] font-bold uppercase tracking-widest">Edition</span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-[#71d2a1]">
              <div className="h-[1px] w-12 bg-[#7bd8a9]" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">The Legacy</span>
            </div>
            <h2 className="text-[#2C4A41] text-6xl md:text-7xl font-light tracking-tighter leading-none">
              About Our <br />
              <span className="text-[#71d2a1] font-black italic">Event</span>
            </h2>
          </div>

          <p className="text-[#2C4A41]/70 text-lg leading-relaxed max-w-lg font-medium">
            AMU Hacks 5.0 is the premier tech gathering where builders, visionaries, and code-enthusiasts meet to shape the future of digital solutions.
          </p>

          <div className="grid grid-cols-2 gap-8 py-4">
            <div>
              <span className="block text-[#71d2a1] text-4xl font-black tracking-tighter">10k+</span>
              <span className="text-[#2C4A41]/40 text-xs font-bold uppercase tracking-widest">Prize Pool</span>
            </div>
            <div>
              <span className="block text-[#71d2a1] text-4xl font-black tracking-tighter">36h</span>
              <span className="text-[#2C4A41]/40 text-xs font-bold uppercase tracking-widest">Hardcore Hacking</span>
            </div>
          </div>

          <button className="w-fit flex items-center space-x-4 bg-[#71d2a1] text-[#2C4A41]/70 px-10 py-4 rounded-full font-bold hover:bg-[#93E9BE] hover:text-[#2C4A41] transition-all hover:shadow-xl hover:shadow-[#93E9BE]/30">
            <span>JOIN WHATSAPP COMMUNITY</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutOurStuff;