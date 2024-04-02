import React from 'react';
import { Button } from "../components/ui/button"


// src={`${process.env.PUBLIC_URL}/assets/logos/vertical_gris.svg`}
const Main: React.FC = () => {
 return (
   <div className="w-full h-screen overflow-hidden">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative h-full">
           <div className="flex flex-col p-10 lg:pr-0">
               <img
               src={`${process.env.PUBLIC_URL}/assets/logos/vertical_gris.svg`}
               alt="Logo"
               className="my-0 xl:w-4/5"
               // style={{ height: '305px' }}
               />
               <div className="mt-8 lg:mt-16 text-left">
                   <h1 className="font-[MillerHeadline] font-semibold text-4xl leading-tight">
                       Estem d’obres.
                   </h1>
                   <p className="mt-1 roboto-condensed">
                       POTS TROBAR-NOS A:
                   </p>
                   <p className="mt-6 roboto-condensed">
                       CARRER GARROTXA NUM 4<br/>
                       CASSÀ DE LA SELVA<br/>
                       GIRONA
                   </p>
                   <h1 className="mt-4 font-[MillerHeadline] font-semibold text-4xl leading-tight">
                       Contacte
                   </h1>
                   <p className="mt-1 roboto-condensed">
                       info@marq-foix.com
                   </p>
               </div>
               <div className="mt-auto flex flex-row space-x-6 roboto-condensed">
                   {/* <Button variant="outline" className="">CONFECCIÓ</Button> */}
                   <Button variant="outline" className="">RENTAT</Button>
                   <Button variant="outline" className="">RENTING</Button>
                   <Button variant="outline" className="hidden lg:block">ESDEVENIMENTS</Button>
                   <Button variant="outline" className="">X</Button>
               </div>
           </div>
           <div className="hidden lg:flex lg:flex-col bg-cover bg-right bg-no-repeat relative"
               style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg.jpg)`}}>
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_estrella_blau.png`}
                   alt="Logo"
                   className="absolute top-16 left-24 w-28 rotate-12"
                   // style={{ height: '305px' }}
                   />
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_llamenos_blau.png`}
                   alt="Logo"
                   className="absolute bottom-40 -ml-20 w-56 rotate-25"
                   // style={{ height: '305px' }}
                   />
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_lienzo_blanc.png`}
                   alt="Logo"
                   className="absolute top-56 right-24 w-40 rotate-25"
                   // style={{ height: '305px' }}
                   />
                   <img
                   src={`${process.env.PUBLIC_URL}/assets/img/stickers/sticker_pastilla_blau.png`}
                   alt="Logo"
                   className="absolute bottom-28 right-16 w-48 rotate-25"
                   // style={{ height: '305px' }}
                   />
           </div>
       </div>
   </div>
);
};


export default Main;