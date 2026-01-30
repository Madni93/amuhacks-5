

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center bg-[#F0EAD6] w-full h-full py-12 jetbrains-mono">
        <div className="flex items-center space-x-3 bg-white/50 border border-[#93E9BE] px-6 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#93E9BE] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#93E9BE]"></span>
            </span>
            <span className="text-[#2C4A41] text-[15px] font-black uppercase tracking-[0.4em]">About Us</span>
        </div>
        <h2 className="text-[#2C4A41] text-2xl md:text-4xl font-black mb-6 tracking-tighter leading-[0.9]">
            Computer Science Society
          </h2>
        <div className="flex flex-col max-w-4/5 gap-5">
            <p className="text-[#2C4A41]/70 text-lg leading-relaxed max-w-75% font-medium">
                The Computer Science Society (CSS) is the dynamic and official club of the Department of Computer Science at Aligarh Muslim University (AMU). With Prof. Arman Rasool Faridi as the esteemed President and Ms. Tuba Rahman as the dedicated Coordinator for this year's session, CSS continues to thrive as a hub of innovation and excellence.
            </p>
            <p className="text-[#2C4A41]/70 text-lg leading-relaxed max-w-75% font-medium">
                Founded in December 2018 as the Area of Dominant Coders (ADC), CSS has rapidly evolved into a vibrant platform for knowledge sharing, technical growth, and practical learning within the department. Our mission is to empower students with cutting-edge skills, fostering their readiness for the fast-evolving tech industry.CSS actively collaborates with the Training and Placement Office (TPO) of both the department and the university to provide students with invaluable industry insights, skill enhancement programs, and career-building opportunities.
            </p>
            <p className="text-[#2C4A41]/70 text-lg leading-relaxed max-w-75% font-medium">
                One of our hallmark initiatives, AMUHACKS, organized in collaboration with GDSC AMU, has gained significant recognition as a premier platform for innovation, creativity, and teamwork. This event attracts brilliant minds from across the country, creating a competitive yet collaborative environment where participants push the boundaries of technology.
            </p>
            <p className="text-[#2C4A41]/70 text-lg leading-relaxed max-w-75% font-medium">
                Recognized by the university in March 2021, CSS remains steadfast in its mission to nurture creativity, foster collaboration, and equip students with industry-relevant skills.
            </p>
        </div>
    </div>
  )
}

export default AboutUs
