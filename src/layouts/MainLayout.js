import React from "react";
import { Outlet } from "react-router-dom";
import Header from '../pages/Header';
import Footer from '../components/Footer';

function MainLayout() {
    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}
export default MainLayout;