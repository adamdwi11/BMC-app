import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

export default function Main () {
    return (
        <div style={{backgroundColor: "#8080"}}>
            <Header />
            <div className="container mt-3"><Outlet /></div>
            <Footer />
        </div>
    )
}