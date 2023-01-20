import React from 'react'
import { DataCustomerRelationship } from '../../storage/CustomerRelationship';

export default function CustomerRelationship() {
  return (
    <>
      <h3 className='text-center'>Customer Relationship</h3>
      {
        DataCustomerRelationship.map((item) => (
          <div class="card mt-3" key={item.id}>
            <img src={item.images} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.info}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{item.phone}</li>
              <li class="list-group-item">{item.address}</li>
              <li class="list-group-item">{item.email}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Link website</a>
            </div>
          </div>
        ))
      }
    </>
  )
}