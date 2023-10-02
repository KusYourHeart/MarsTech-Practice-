import Header from "./default_components/Header";
import Footer from "./default_components/Footer";
import React, { ReactNode } from 'react';

interface Layprop {
    children: ReactNode;
  }

const Layout = ({children} : Layprop) => (
    <>
        <Header />
            {children}
        <Footer />
    </>
);

export default Layout;