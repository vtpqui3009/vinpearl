import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Container/Container";
import ProducCard from "../components/ProductForYou/ProductCard";
import VINPEARL_POPULATION_DATA from "../components/VinpearlPopulation/VINPEARL_POPULATION_DATA";
import Footer from "../components/Footer/Footer";
const VinpearlDetail = () => {
  const { vid } = useParams();
  const vinpearlDetailData = VINPEARL_POPULATION_DATA.filter(
    (data) => data.id === Number(vid)
  );

  return (
    <Fragment>
      <div>
        {vinpearlDetailData.map((vinpearl) => (
          <div key={vinpearl.id}>
            <header className=" h-screen relative">
              <div className=" fixed top-[15%] z-50 left-0 h-20 text-sm text-white bg-[rgba(0,0,0,0.2)] w-full">
                <div className="flex items-center justify-center absolute top-5 left-[40%]">
                  <Link to={`/resort/${vinpearl.slug}`}>
                    <span className="mr-4 cursor-pointer px-6 py-2 rounded-lg bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white">
                      Nghỉ dưỡng
                    </span>
                  </Link>
                  <Link to={`/culinary/${vinpearl.slug}`}>
                    <span className=" cursor-pointer px-6 py-2 rounded-lg bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white">
                      Ẩm thực
                    </span>
                  </Link>
                </div>
              </div>
              {/* </div> */}
              <img
                src={vinpearl.bannerUrl}
                alt={`${vinpearl.title}`}
                className="w-full h-full object-cover relative"
              />
              <div className="absolute top-1/2 left-1/4 translate-x--1/2 translate-y--1/2 text-white text-center z-50">
                <p className="text-7xl mb-4 dancing-font">{vinpearl.title}</p>
                <p className="text-lg">{vinpearl.description}</p>
              </div>
              <div className="absolute inset-0  w-full h-full bg-[rgba(0,0,0,0.25)] z-10 rounded" />
            </header>
            <Container>
              <div className="my-10">
                <div className="text-center my-4">
                  <p className="text-4xl font-semibold mb-4 dancing-font">
                    Khám phá những điều tuyệt vời nhất tại
                  </p>
                  <p className="text-2xl font-semibold uppercase">
                    {vinpearl.title}
                  </p>
                </div>
                <video
                  id="site-video"
                  poster="https://statics.vinpearl.com/Sky Wheel NT.jpg"
                  style={{ objectFit: "cover" }}
                  controls
                >
                  <source src={vinpearl.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="my-10">
                <div>
                  <h1 className="text-5xl font-semibold text-blue-600 my-4 text-center dancing-font">
                    Sản phẩm
                  </h1>
                  <h1 className="text-3xl font-semibold my-4 text-center">
                    Nổi bật
                  </h1>
                  <div className="flex items-center justify-center">
                    <span className="rounded-lg bg-blue-600 w-12 h-2"></span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-10">
                  {vinpearl.productData.map((data) => (
                    <ProducCard productData={data} key={data.id} />
                  ))}
                </div>
              </div>

              <div className="my-10">
                <div>
                  <h1 className="text-5xl font-semibold text-yellow-600 my-4 text-center dancing-font">
                    Ưu đãi
                  </h1>
                  <h1 className="text-3xl font-semibold my-4 text-center">
                    TRẢI NGHIỆM
                  </h1>
                  <div className="flex items-center justify-center">
                    <span className="rounded-lg bg-yellow-600 w-12 h-2"></span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 mt-10">
                  {vinpearl.imageGallery.slice(0, 4).map((image, index) => (
                    <div
                      className="h-[300px] rounded shadow-lg flex items-center flex-col gap-4"
                      key={`${index}${image}`}
                    >
                      <img
                        src={image}
                        alt={`${image}`}
                        className=" rounded h-[76%]"
                      />
                      <div className=" experience-desc h-[24%]  font-semibold mb-2 w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eos eaque unde minima sunt doloribus magni totam
                        consectetur facere? Facere voluptas assumenda fuga
                        ratione quod sint debitis ut ab temporibus dicta?
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div>
                  <h1 className="text-5xl font-semibold text-red-600 my-4 text-center dancing-font">
                    Gallery
                  </h1>
                  <h1 className="text-3xl font-semibold my-4 text-center">
                    THƯ VIỆN ẢNH
                  </h1>
                  <div className="flex items-center justify-center">
                    <span className="rounded-lg bg-red-600 w-12 h-2"></span>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-1 mt-10">
                  {vinpearl.imageGallery.map((image, index) => (
                    <img
                      src={image}
                      alt={`${image}`}
                      className="h-[226px] object-cover"
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};
export default VinpearlDetail;
