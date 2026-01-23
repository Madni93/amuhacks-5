import { LinkedinIcon, InstagramIcon, } from 'lucide-react'

import { Separator } from '@/components/ui/separator'



const Footer = () => {
  
  return (
    <footer id='footer'>
      <div className='text-sm mx-auto flex max-w-7xl items justify-between gap-3 p-10 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <div className="flex text-left gap-2 whitespace-nowrap flex-col">
          <img src="/assets/ahlogoc.png" alt="" className='w-15 rounded'/>
          <p>Computer Science Society</p>
          <p>Department Of Computer Science</p>
          <p>Aligarh Muslim University (AMU)</p>
          <p>202001, Aligarh</p>
          <p>9807284891, 7302165711</p>
          <p>society.cs@myamu.ac.in</p>
        </div>

        <div className='hidden md:flex lg:flex text-xl font-bold items-center py-10 gap-12 h-full justify-center'>
          <img src="/assets/amulogo.png" alt="logo" className='w-30'/>
          <img src="/assets/cslogo.png" alt="logo" className='w-30'/>
        </div>        
      </div>

      <Separator />

      <div className='flex items-center gap-4 justify-center pt-8'>
          <a href="https://www.linkedin.com/company/cssamu/" target="_blank">
            <LinkedinIcon className='size-5' />
          </a>
          <a href="https://www.instagram.com/css.amu" target="_blank">
            <InstagramIcon className='size-5' />
          </a>
          <a href="">
            <svg className="w-6 h-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="whatsapp-icon">
              <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
            </svg>
          </a>

        </div>

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-center font-medium text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='#' className='hover:underline'>
            Computer Science Society Copyright-All rights reserved
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
