import { Fragment, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/outline";
const Navigation = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleNavigationScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 68) {
        setVisible(true);
      } else if (scrolled <= 68) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleNavigationScroll);
    return () => {
      window.removeEventListener("scroll", handleNavigationScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Fragment>
      <div className="navigation">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              src="https://vinpearl.com/themes/porto/img/vinpearl/vp.svg"
              alt="logo"
            />
          </Link>
          <ul className="flex items-center">
            <li className="nav-item">Đặt dịch vụ</li>
            <li className="nav-item">TRẢI NGHIỆM VINPEARL</li>
            <li className="nav-item">ƯU ĐÃI KHUYẾN MÃI</li>
            <li className="nav-item">PEARL CLUB</li>
          </ul>
        </div>
      </div>
      <button
        className="fixed bottom-10 right-4 bg-yellow-600 text-white p-4 rounded-full "
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
