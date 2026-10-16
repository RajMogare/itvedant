import React from 'react';

export default function Partners() {
  return (
    <section className="py-14 border-y border-[#EAEDEB] bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center font-medium text-[#565656]">
          <p className="text-sm tracking-wide text-[#686868] font-medium">
            Trusted by 5,000+ Companies Worldwide
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-10 mt-8 w-full max-w-5xl">
            {/* Google */}
            <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
              <img 
                src="/assets/google-76-GYqTX.svg" 
                alt="Google" 
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain transition-all hover:scale-105 opacity-90 hover:opacity-100" 
              />
            </div>

            {/* Netflix SVG */}
            <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
              <svg 
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain fill-[#ACAAB4] hover:fill-[#E50914] transition-all hover:scale-105 cursor-pointer opacity-90 hover:opacity-100" 
                viewBox="0 0 161 41" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M151.512 19.5213L160.031 40.8142C157.52 40.4757 155.011 40.0516 152.456 39.6696L147.657 27.9045L142.726 38.6984C140.306 38.3164 137.929 38.1892 135.509 37.8925L144.161 19.2681L136.314 0.178955H143.577L147.97 10.8444L152.678 0.178955H160.029L151.512 19.5213ZM130.578 0.178955H123.987V37.0893C126.14 37.2167 128.38 37.3006 130.578 37.5539V0.178955ZM118.294 36.6654C112.287 36.2847 106.279 35.9475 100.137 35.8188V0.179119H106.861V29.8088C110.717 29.8928 114.572 30.1882 118.294 30.3574V36.6654ZM92.9625 14.6139V20.9625H83.7724V35.3961H77.1388V0.178955H95.968V6.52751H83.7738V14.6141H92.9639L92.9625 14.6139ZM65.8397 6.52751V35.7348C63.5974 35.7348 61.3122 35.7348 59.1143 35.8188V6.52751H52.1651V0.178955H72.8318V6.52751H65.8397ZM44.9031 21.2998C41.9448 21.2998 38.4472 21.2998 35.9366 21.4285V30.8666C39.8818 30.612 43.827 30.3167 47.8165 30.1895V36.2847L29.2126 37.6826V0.178955H47.8153V6.52751H35.9365V15.0785C38.5374 15.0785 42.5271 14.9513 44.9028 14.9513V21.3011L44.9031 21.2998ZM7.64595 17.7442V39.9242C5.22719 40.1789 3.07378 40.4755 0.788391 40.8142V0.178955H7.19978L15.9411 23.2491V0.178955H22.6665V38.1892C20.2907 38.5712 17.8692 38.6984 15.3141 39.0358L7.64595 17.7442Z" />
              </svg>
            </div>

            {/* Airbnb */}
            <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
              <img 
                src="/assets/airbnb-xj5n9VEq.svg" 
                alt="Airbnb" 
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain transition-all hover:scale-105 opacity-90 hover:opacity-100" 
              />
            </div>

            {/* Amazon */}
            <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
              <img 
                src="/assets/amazon-CaYRF8YW.svg" 
                alt="Amazon" 
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain transition-all hover:scale-105 opacity-90 hover:opacity-100" 
              />
            </div>

            {/* Facebook */}
            <div className="w-28 sm:w-32 h-8 flex items-center justify-center">
              <img 
                src="/assets/facebook-hlZ2xRpS.svg" 
                alt="Facebook" 
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain transition-all hover:scale-105 opacity-90 hover:opacity-100" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
