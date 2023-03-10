import React from 'react'
import { Link } from 'react-router-dom'
import "../atoms/css/header.css"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#161042" }}>
            <div className="container-fluid">
            <img src="./bora-logo.png" alt="..." style={{ width: 50 }} />
                <Link className="navbar-brand text-white" to="/">Bora Motorcycle</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="./">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="./product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="./contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='./about-us'>About us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="./article">Article</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="./gallery">Gallery</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="./customer-relationship">Customer Relationship</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}