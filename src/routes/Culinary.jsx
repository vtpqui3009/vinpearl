import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Container/Container";
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/outline";
import CULINARY_DATA from "../components/Culinary/CULINARY_DATA";
import Footer from "../components/Footer/Footer";
const Culinary = () => {
  const { cid } = useParams();
  const culinaryDetailData = CULINARY_DATA.filter((data) => data.slug === cid);

  return (
    <Fragment>
      <div>
        {culinaryDetailData.map((culinary) => (
          <div key={culinary.id}>
            <header className=" h-screen relative">
              <div className=" fixed top-[15%] z-50 left-0 h-20 text-sm text-white bg-[rgba(0,0,0,0.2)] w-full">
                <div className="flex items-center justify-center absolute top-5 left-[40%]">
                  <Link to={`/resort/${culinary.slug}`}>
                    <span className="mr-4 cursor-pointer px-6 py-2 rounded-lg bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white">
                      Nghỉ dưỡng
                    </span>
                  </Link>
                  <Link to={`/culinary/${culinary.slug}`}>
                    <span className=" cursor-pointer px-6 py-2 rounded-lg bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white">
                      Ẩm thực
                    </span>
                  </Link>
                </div>
              </div>
              <img
                src={culinary.bannerSrc}
                alt={`${culinary.title}`}
                className="w-full h-full object-cover relative"
              />
              <div className="absolute top-1/2  w-4/5 left-[10%] translate-x--1/2 translate-y--1/2 text-white text-center z-50">
                <p className="text-7xl mb-4 dancing-font">{culinary.title}</p>
                <p className="text-lg">{culinary.description}</p>
              </div>
              <div className="absolute inset-0  w-full h-full bg-[rgba(0,0,0,0.25)] z-10 rounded" />
            </header>
            <Container>
              <h1 className="font-semibold text-3xl my-6">
                {culinary.heading}
              </h1>
              <div className="grid grid-cols-4 gap-10">
                {culinary.items.map((item, index) => (
                  <div
                    key={index}
                    className="h-96 border border-gray-400 rounded flex flex-col"
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageSrc}
                      className="h-2/5"
                    />
                    <div className="h-3/5 text-sm p-4 leading-6">
                      <h2 className="font-semibold">{item.title}</h2>
                      <div className="flex mt-4">
                        <LocationMarkerIcon className="w-[10%] h-4 mr-2 text-red-500" />
                        <span className="w-[90%]">{item.location}</span>
                      </div>
                      <div className="flex mt-4">
                        <PhoneIcon className="w-[10%] h-4 mr-2 text-red-500" />
                        <span className="w-[90%]">{item.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};
export default Culinary;
