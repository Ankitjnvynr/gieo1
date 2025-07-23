'use client'

import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from './header/Header3';
import Header4 from './header/Header4';
import Header5 from './header/Header5';
import Header6 from './header/Header6';
import Header7 from './header/Header7';
import Header8 from "./header/Header8";


export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  wrapperCls
}) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setPopup] = useState(false);
  const [isSidebar, setSidebar] = useState(false);

  // Toggle mobile menu
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
  };

  const handlePopup = () => setPopup(!isPopup);
  const handleSidebar = () => setSidebar(!isSidebar);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // WOW.js initialization (Client-side only)
useEffect(() => {
  if (typeof window !== "undefined") {
    import('wowjs').then((WOW) => {
        const newLocal = new WOW.WOW({ live: false });
      const wowInstance = newLocal;
      wowInstance.init();
    });
  }
}, []);
 // Header selection
  const renderHeader = () => {
    const headerProps = {
      scroll,
      isMobileMenu,
      handleMobileMenu,
      handlePopup,
      isSidebar,
      handleSidebar
    };

    switch (headerStyle) {
      case 1: return <Header1 {...headerProps} />;
      case 2: return <Header2 {...headerProps} />;
      case 3: return <Header3 {...headerProps} />;
      case 4: return <Header4 {...headerProps} />;
      case 5: return <Header5 {...headerProps} />;
      case 6: return <Header6 {...headerProps} />;
      case 7: return <Header7 {...headerProps} />;
      case 8: return <Header8 {...headerProps} />;
      
      default: return <Header1 {...headerProps} />;
    }
  };

  // Footer selection
  const renderFooter = () => {
    switch (footerStyle) {
      case 1: return <Footer1 />;
      case 2: return <Footer2 />;
      case 3: return <Footer3 />;
      case 4: return <Footer4 />;
      default: return <Footer1 />;
    }
  };

  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls || ""}`} id="#top">
        {renderHeader()}
        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
        {renderFooter()}
      </div>
      <BackToTop scroll={scroll} />
    </>
  );
}
