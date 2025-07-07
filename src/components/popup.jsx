import { useEffect, useState } from "react";
import offerImage from "../assets/exclusiveOfferCardImg1.png"; // Asegúrate que esta ruta sea correcta

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Mostrar al cargar
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-[90%] relative border border-gray-300 flex flex-col md:flex-row">
        
        {/* Botón cerrar */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl font-bold z-10"
        >
          ✖
        </button>

        {/* Imagen de habitación */}
        <div className="md:w-1/2 w-full h-60 md:h-auto">
          <img
            src={offerImage}
            alt="Habitación del hotel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido de la oferta */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center gap-3">
          <h2 className="text-2xl font-bold text-gray-800">🎉 Oferta Especial</h2>
          <p className="text-gray-700">
            Reserva una habitación hoy y obtén un <span className="text-red-500 font-semibold">20% de descuento</span> en estadías premium.
          </p>
          <a
            href="http://localhost:5173/rooms"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-200 text-center"
          >
            Ver habitaciones
          </a>
        </div>
      </div>
    </div>
  );
}
