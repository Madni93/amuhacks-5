

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-[#F0EAD6] jetbrains-mono">
        <div className="flex items-center space-x-3 mb-10 bg-white/50 border border-[#93E9BE] px-6 py-2 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#93E9BE] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#93E9BE]"></span>
            </span>
            <span className="text-[#2C4A41] text-[15px] font-black uppercase tracking-[0.4em]">Sponsored by</span>
          </div>
          <div className="logo flex flex-col items-center gap-4 justify-center">
            <div>
            <h2 className="text-3xl font-bold mb-4 uppercase text-center text-[#ceaf01]">Gold Sponsor</h2>
              <div className="gold rounded-full bg-white py-8 px-20 mb-8 shadow-lg shadow-grey/30">
                <img src="/assets/softentials.png" alt="Softentials" className="w-xs"/>
              </div>
            </div>
            <div>
            <h2 className="text-3xl font-bold my-10 uppercase text-center text-[#5e5e5d]">Silver Sponsor</h2>
              <div className="silver rounded-full bg-white py-8 px-20 mb-8 shadow-lg shadow-grey/30">
                <img src="/assets/eelogo.png" alt="E&E" className="w-xs"/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Sponsors
