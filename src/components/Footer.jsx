import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[#F6F9FC] text-gray-600 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>

        <div className='max-w-80'>
          <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80' />
          <p className='text-sm'>
            Descubre los lugares más extraordinarios para alojarte, desde castillos históricos hasta villas de lujo en paisajes encantados.
          </p>
          <div className='flex items-center gap-3 mt-4'>
            <img src={assets.instagramIcon} alt="instagram-icon" className='w-6'/>
            <img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/>
            <img src={assets.twitterIcon} alt="twitter-icon" className='w-6'/>
            <img src={assets.linkendinIcon} alt="linkedin-icon" className='w-6'/>
          </div>
        </div>

        <div>
          <p className='font-playfair text-lg text-gray-800'>EMPRESA</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Prensa</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Socios</a></li>
          </ul>
        </div>

        <div>
          <p className='font-playfair text-lg text-gray-800'>SOPORTE</p>
          <ul className='mt-3 flex flex-col gap-2 text-sm'>
            <li><a href="#">Centro de ayuda</a></li>
            <li><a href="#">Información de seguridad</a></li>
            <li><a href="#">Opciones de cancelación</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Accesibilidad</a></li>
          </ul>
        </div>

        <div className='max-w-80'>
          <p className='font-playfair text-lg text-gray-800'>DIRECCIÓN</p>
          <p className='mt-3 text-sm'>
            Av. Carabobo. Entrando a Mucuchíes.<br />
            Mucuchíes. Mérida, Mérida, Venezuela 5130
          </p>
        </div>
      </div>

      <hr className='border-gray-300 mt-8' />

      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Castillo Real. Todos los derechos reservados.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Mapa del sitio</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
