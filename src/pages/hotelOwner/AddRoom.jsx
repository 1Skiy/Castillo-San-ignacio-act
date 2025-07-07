import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })
    const [inputs, setInputs] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities: {
            'Free WiFi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false
        }
    })


  return (
    <form>
      <Title align='left' font='outfit' title='Añadir cuarto' subTitle='Completa los detalles cuidadosamente, incluyendo información precisa sobre las habitaciones, precios y comodidades, para mejorar la experiencia de reserva del usuario.' />
      <p className='text-gray-800 mt-10'>Imagen</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key)=>(
            <label htmlFor={`roomImage${key}`} key={key}>
                <img className='max-h-13 cursor-pointer opacity-80'
                 src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
                 <input type="file" accept='image/*' id={`roomImage${key}`} hidden
                 onChange={e=> setImages({...images, [key]: e.target.files[0]})}/>
            </label>
        ))}
      </div>

      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
            <p className='text-gray-800 mt-4'>Tipo de cuarto</p>
            <select value={inputs.roomType} onChange={e=> setInputs({...inputs, roomType: e.target.value})}
             className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                <option value="">Selecciona el tipo de cuarto</option>
                <option value="Single Bed">Cama individual</option>
                <option value="Double Bed">Cama doble</option>
                <option value="Luxury Room">Cuarto de lujo</option>
                <option value="Family Suite">Suite familiar</option>
            </select>
        </div>
        <div>
            <p className='mt-4 text-gray-800'>
                Precio <span  className='text-xs'>/Noche</span>
            </p>
            <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.pricePerNight} onChange={e=> setInputs({...inputs, pricePerNight: e.target.value})}/>
        </div>
      </div>

        <p className='text-gray-800 mt-4'>Servicios</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(inputs.amenities).map((amenity, index)=>(
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({...inputs, amenities: {...inputs.amenities, [amenity]: !inputs.amenities[amenity]}})}/>
                    <label htmlFor={`amenities${index+1}`}> {amenity}</label>
                </div>
            ))}
        </div>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded mt-8 cursor-pointer'>
  Añadir cuarto
</button>

    </form>
  )
}

export default AddRoom
