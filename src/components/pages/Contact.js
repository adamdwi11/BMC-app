import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='row'>
                <div className='card col-lg-8 col-12'>
                    <h4 className='mt-4'>Get In Touch</h4>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your name"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Subject</label>
                        <input type="subject" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary mb-4"> Send Message</button>
                </div>

                <div className='col-12 col-lg-4 text-center'>
                    <h4 className='mt-4'>Contact Us</h4>
                    <p>Address : Jl. A. Bora No.13 Tigaraksa, Tangerang</p>
                    <p>Email : bora@email.co.id</p>
                    <p>Phone : +62 123 123 123</p>

                </div>
            </div>
        </>
    )
}