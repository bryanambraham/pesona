import React from 'react'
import { styles } from '../styles'
import { gmail, ig, wa } from '../assets';

export default function Footer() {
  return (
    <section id='contact'>
      <div className='w-dvw fixed bottom-0 z-20 bg-primary' style={{ borderTop: "3px double #000000", paddingTop: "20px", marginTop: "20px" }}>

      <footer className={`${styles.paddingX} max-w-7xl flex-wrap mx-auto justify-between py-5`}> 
        <div className='flex flex-row gap-8'>

          <div className="left-0 text-lg font-medium w-1/2 mx-auto mb-4">
              <h6 className='text-center mb-5 italic'>Lokasi Kami</h6>
              <div className="flex justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.5905661383017!2d105.92114387569991!3d-6.0507706939350205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4185ad5a5f7631%3A0x8aae97a33ab4e92b!2sPesona%20Furniture!5e0!3m2!1sid!2sid!4v1730047571820!5m2!1sid!2sid"
                  width="65%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

          <div className="left-0 text-lg font-medium w-1/2 mx-auto mb-4">
              <h6 className='text-center mb-5 italic'>Layanan Kami</h6>
              <ul className={`${styles.blackText} text-base list-none text-center`}>
              <li>Konsultasi Desain Interior</li>
              <li>Pemilihan Material dan Furnitur</li>
              <li>Desain 3D dan Rancangan Virtual</li>
              <li>Konstruksi dan Renovasi</li>
              <li>Instalasi dan Pemasangan</li>
              </ul>
          </div>

          <div className="left-0 text-lg font-medium w-1/2 mx-auto">
              <h6 className='text-center mb-5 italic'>Kontak Kami</h6>
              <div className='flex flex-col gap-4 items-start ms-32'>
                <div className="relative flex items-center justify-center group">
                  <img className='grayscale w-[50px] h-[50px] hover:grayscale-0 transition-all duration-500 ease-in' src={gmail} alt="gmail" />
                    <span className="absolute left-16 opacity-0 transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-2 group-hover:opacity-100 text-base">
                      kitchetset_cilegon@gmail.com
                    </span>
                </div>

                <div className="relative flex items-center justify-center group">
                  <img className='grayscale w-[50px] h-[50px] hover:grayscale-0 transition-all duration-500 ease-in' src={ig} alt="instagram" />
                    <span className="absolute left-16 opacity-0 transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-2 group-hover:opacity-100 text-base">
                      kitchenset_cilegon
                    </span>
                </div>

                <div className="relative flex items-center justify-center group">
                  <img className='grayscale w-[50px] h-[50px] hover:grayscale-0 transition-all duration-500 ease-in' src={wa} alt="whatsapp" />
                    <span className="absolute left-16 opacity-0 transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-2 group-hover:opacity-100 text-base">
                      08111187792
                    </span>
                </div>
              </div>
          </div>

        </div>
      </footer>

      <div className='bg-tertiary text-center w-full flex py-2 mt-4'>
          <h6 className={`${styles.whiteText} mx-auto`}>© 2024, Hak cipta dilindungi oleh Kitchen Set Cilegon ​</h6>
      </div>

      </div>      
    </section>
    
  )
}
