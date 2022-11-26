import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <div className="container">
            <Header />
            <div className="mainContent">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default MainLayout;