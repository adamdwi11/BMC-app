import React from 'react'
import { DataEvent } from '../../storage/Event'

export default function Home() {
  return (
    <>
      <div>
      <img src='./asset/images/magazines-images-100-1.jpg' class="d-block w-100" alt="..." />
      </div>

      <div class="card m-5" style={{ backgroundColor: "aquamarine" }}>
        <div class="row g-0">
          <div class="card-body">
            <h4 class="card-title text-center">Profil singkat BMC</h4>
            <p class="card-text">
              <blockquote class="blockquote">
                &nbsp; BORA Motorcycle Club adalah sebuah club atau komunitas bagi para pecinta motor vespa matic.
                BORA Motorcycle Club juga menyediakan kebutuhan-kebutuhan berkendara pagi para pengendara vespa matic mulai dari helm,
                jaket hingga accessoris lainya. BORA Motorcycle Club didirikan pertama kali pada 12 September 2020 di Tangerang. 
                Peran organisasional BMC (BORA Motorcycle Club) adalah sebagai pelaksana koordinasi dari aktivitas dan pertukaran 
                informasi seluruh klub anggotanya dimana peran dasar dari BMC (BORA Motorcycle Club) adalah penguatan jaringan dan rasa persaudaraan,
                 terutama diantara klub anggota.
              </blockquote>
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        {
          DataEvent.map((item, idx) => (
            <div class="col-12 col-lg-4 mt-3" key={idx.id}>
              <div class="card border-success mb-3">
                <div class="card-header bg-transparent border-success">
                <img src={item.img} class="card-img-top" alt="..." />
                </div>
                <div class="card-body text-success">
                  <h4 class="card-title">{item.name}</h4>
                  <p className='card-text' dangerouslySetInnerHTML={{__html: item.detail}}></p>
                </div>
                <div class="card-footer bg-transparent border-success text-end">{item.date}</div>
              </div>
            </div>
          ))
        }
      </div>


    </>
  )
}