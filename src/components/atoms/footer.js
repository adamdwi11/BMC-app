import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <div className="container mt-5 text-white" style={{backgroundColor: "#161042"}}>
            <footer>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <h2>Bora Motorcycle Club</h2>
                    </div>
                    <div className="col-md-5 offset-md-1 my-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Alamat Email</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 my-3 border-top text-white">
                    <p>Special thanks to Bora Motorcycle and Team <i className="bi bi-heart-fill"></i></p>
                    <ul className="d-flex list-transparant justify-content-between">
                        <li className='ms-3'><Link className="link-dark" href="./blank"><i className="bi bi-youtube"></i></Link></li>
                        <li className='ms-3'><Link className="link-dark" href="./blank"><i className="bi bi-instagram"></i></Link></li>
                        <li className='ms-3'><Link className="link-dark" href="./blank"><i className="bi bi-twitter"></i></Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}