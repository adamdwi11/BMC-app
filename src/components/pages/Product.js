import React from 'react'
import { DataProduct } from '../../storage/Product';

export default function Product() {

    return (
        <>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    DataProduct.map((item, idx) => (
                        <div class="col" key={idx.id}>
                            <div class="card h-100">
                                <img src={item.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p dangerouslySetInnerHTML={{__html: item.specs}}></p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}