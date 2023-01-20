import React from 'react'
import { DataGallery } from '../../storage/Gallery'

export default function Gallery() {
    return (
        <div className='row'>
            <h3 className=' text-center'>Gallery Bora Motorcycle</h3> 
        <div className='col-12 col-lg-2'>

        </div>
            <div className='col-12 col-lg-8 content-justify-center'>
                <div class="list-group">
                    {
                        DataGallery.map((item, idx) => (
                            <a href="#" class="list-group-item list-group-item-action" aria-current="true" key={idx.id}>
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Photo {item.id}</h5>
                                    <img src={item.img} alt="..." style={{ width: 300 }} />
                                    <small>3 days ago</small>
                                </div>
                            </a>
                        ))}
                </div>
            </div>
        </div>
    )
}