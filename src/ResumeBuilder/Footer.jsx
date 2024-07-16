import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#fefefe] text-[#F2931C] border-2 font-ubuntu p sticky bottom-0">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a href="/" className="text-[#4b5cc9] no-underline hover:bg-blue-950 hover:ttext-[#4b5cc9] p-2">Home</a>
        <a href="https://blog.abroadium.com/terms-conditions/" className="text-[#4b5cc9] no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Terms</a>
        <a href="https://blog.abroadium.com/privacy-policy-3/" className="text-[#4b5cc9] no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Privacy Policy</a>
        <a href="/contact" className="text-[#4b5cc9] no-underline hover:bg-blue-950 hover:text-[#4b5cc9] p-2">Contact</a>
        <span className="text-[#4b5cc9]">© Copyright By Abroadium.com | All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
