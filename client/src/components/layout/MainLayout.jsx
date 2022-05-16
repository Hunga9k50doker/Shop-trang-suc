import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";

export default function MainLayout({ size, sizeFavorite }) {
  return (
    <>
      <Header />
      <Navigation sizeFavorite={sizeFavorite} size={size} />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
