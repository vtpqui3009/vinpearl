import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <footer className="h-max bg-[#141a3c] mt-10 p-12 text-white">
      <div className="flex items-center">
        <h1 className="text-2xl text-yellow-500 mr-[10%] w-1/3">
          ĐĂNG KÝ NHẬN THÔNG TIN
        </h1>
        <div className="relative w-1/4">
          <input
            placeholder="Nhập email của quý khách"
            className="px-4 w-full py-3 outline-none focus:outline-none text-sm"
          />
          <button className="absolute right-0 px-4 py-3 text-sm bg-yellow-500 text-white">
            Gửi
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        <ul className="text-sm">
          <li className="flex items-center justify-center leading-8">
            <img
              src="https://vinpearl.com/themes/porto/img/vinpearl/vp.svg"
              alt=""
              //   className="bg-white"
            />
          </li>
          <li className="flex mb-2 leading-8">
            <LocationMarkerIcon className=" h-4 text-yellow-500 mr-2 w-1/5 mt-3" />
            <span className="w-4/5">
              Đảo Hòn Tre, Phường Vĩnh Nguyên, Thành phố Nha Trang, Tỉnh Khánh
              Hòa, Việt Nam
            </span>
          </li>
          <li className="flex mb-2 leading-8">
            <MailIcon className=" h-4 text-yellow-500 mr-2 w-1/5 mt-3" />
            <span className="w-4/5 text-yellow-500">
              callcenter@vinpearl.com
            </span>
          </li>
          <li className="flex mb-2 leading-8">
            <PhoneIcon className=" h-4 text-yellow-500 mr-2 w-1/5 mt-3" />
            <span className="w-4/5 text-yellow-500">
              1900 23 23 89 (Nhánh số 3)
            </span>
          </li>
        </ul>
        <ul className="text-sm">
          <h1 className="text-base mb-2">GIỚI THIỆU</h1>
          <li className=" leading-8">Về chúng tôi</li>
          <li className=" leading-8">Thành tựu</li>
          <li className=" leading-8">Liên hệ</li>
          <li className=" leading-8">Tuyển dụng</li>
        </ul>
        <ul className="text-sm">
          <h1 className="text-base mb-2">TIN TỨC & SỰ KIỆN</h1>
          <li className=" leading-8">Về chúng tôi</li>
          <li className=" leading-8">Thành tựu</li>
          <li className=" leading-8">Liên hệ</li>
          <li className=" leading-8">Tuyển dụng</li>
        </ul>
        <ul className="text-sm">
          <h1 className="text-base mb-2">ĐIỀU KHOẢN & QUY ĐỊNH</h1>
          <li className=" leading-8">Về chúng tôi</li>
          <li className=" leading-8">Thành tựu</li>
          <li className=" leading-8">Liên hệ</li>
          <li className=" leading-8">Tuyển dụng</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
