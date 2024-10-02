import React from 'react'

const Footer = () => {
  return (
    <div>
            {/* separator */}
       <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
    <div className="bg-black text-white text-2xl max-w-full mx-auto px-10 py-11">
  <div className="questions text-center font-bold py-7">
   Made by Akash Sharma
  </div>
  <div className='text-center'>
    Github : <a href="https://github.com/Akash-Sharma-9804" className="cursor-pointer transition-all ease-out hover:bg-gray-600 underline">Github</a>
  </div>
 
</div>
    </div>
  )
}

export default Footer
