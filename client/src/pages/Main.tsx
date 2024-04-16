import React from 'react';
import { Button } from "../components/ui/button"


// src={`${process.env.PUBLIC_URL}/assets/logos/vertical_gris.svg`}
const Main: React.FC = () => {
 return (
   <div className="w-full min-h-screen overflow-hidden">
       <div className="grid grid-cols-1 md:grid-cols-2 relative h-screen">
           <div className="flex flex-col px-3 py-8 md:p-10 lg:mr-16">
               <img
               src={`${process.env.PUBLIC_URL}/assets/logos/vertical_gris.svg`}
               alt="Logo"
               className="my-0"
               // style={{ height: '305px' }}
               />
               <div className="mt-8 text-left">
                   <h1 className="font-semibold text-3xl leading-tight">
                       Estem d’obres.
                   </h1>
                   <p className="mt-1 text-sm roboto-condensed">
                       POTS TROBAR-NOS A:
                   </p>
                   <p className="mt-4 text-sm roboto-condensed">
                       CARRER GARROTXA NUM 4<br/>
                       CASSÀ DE LA SELVA<br/>
                       GIRONA
                   </p>
                   <h1 className="mt-4 font-[MillerHeadline] font-semibold text-3xl leading-tight">
                       Contacte
                   </h1>
                   <p className="mt-1 text-sm roboto-condensed no-underline hover:underline">
                    <a href="mailto:info@marq-foix.com" target="_blank" rel="noopener noreferrer">info@marq-foix.com</a>
                   </p>
               </div>
               <div className="mt-auto flex flex-row space-x-1 md:space-x-4 roboto-condensed">
                   {/* <Button variant="outline" className="">CONFECCIÓ</Button> */}
                   <Button variant="outline" className="">RENTAT</Button>
                   <Button variant="outline" className="">RENTING</Button>
                   <Button variant="outline" className="hidden lg:flex">ESDEVENIMENTS</Button>
                   <Button variant="outline" className="sm:flex md:hidden">
                    <a href="tel:+34972798958" className="phone-link">+34 972 798 958</a>
                   </Button>
                   <img
                    src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_estrella_gris.png`}
                    alt="Logo"
                    className="h-9"
                   />
               </div>
           </div>
           <div className="hidden md:flex md:flex-col bg-cover bg-right bg-no-repeat relative"
               style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg.jpg)`}}>
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_estrella_blau.png`}
                   alt="Logo"
                   className="absolute top-16 left-24 md:w-16 lg:w-20 rotate-12"
                   // style={{ height: '305px' }}
                   />
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_llamenos_blau.png`}
                   alt="Logo"
                   className="absolute bottom-40 -ml-20 md:w-44 lg:w-48 rotate-25"
                   // style={{ height: '305px' }}
                   />
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_lienzo_blanc.png`}
                   alt="Logo"
                   className="absolute top-56 right-24 md:w-28 lg:w-32 rotate-385"
                   // style={{ height: '305px' }}
                   />
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_pastilla_blau.png`}
                   alt="Logo"
                   className="absolute bottom-28 right-16 md:w-36 lg:w-40 rotate-385"
                   // style={{ height: '305px' }}
                   />
           </div>
       </div>
   </div>
);
};


export default Main;