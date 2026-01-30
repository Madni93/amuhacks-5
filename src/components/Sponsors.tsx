import React from 'react'

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-[#F0EAD6] jetbrains-mono">
        <div className="flex items-center space-x-3 bg-white/50 border border-[#93E9BE] px-6 py-2 rounded-full mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#93E9BE] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#93E9BE]"></span>
            </span>
            <span className="text-[#2C4A41] text-[15px] font-black uppercase tracking-[0.4em]">Sponsored by</span>
            <div className="gold"></div>
            <div className="silver"></div>
          </div>
    </div>
  )
}

export default Sponsors
