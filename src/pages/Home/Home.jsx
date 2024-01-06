import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaStar } from "react-icons/fa";
const Home = () => {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const scrollAmount = 100;
  const images = [
    {
      id: 1,
      url: "Mot",
    },
    {
      id: 2,
      url: "Hai",
    },
    {
      id: 3,
      url: "Ba",
    },
    {
      id: 4,
      url: "bon",
    },
    {
      id: 5,
      url: "năm",
    },
    {
      id: 6,
      url: "sau",
    },
  ];
  const images2 = [
    {
      id: 1,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    },
    {
      id: 2,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    },
    {
      id: 3,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    },
    {
      id: 4,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    },
    {
      id: 5,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    },
    {
      id: 6,
      url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    },
  ];
  return (
    <div className="w-full bg-black flex flex-col justify-center items-center text-white">
      <div className="w-5/6 ">
        {" "}
        <div className="">
          {" "}
          <div className="">
            <div className="flex">
              <div className="self-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(-90 12 12)">
                    <path fill="red" d="M1 3h22L12 22" />
                  </g>
                </svg>
              </div>
              <div className="font-semibold text-xl">Filter</div>
            </div>
            <div className="items-center flex mt-3">
              <button
                className="nav-btn"
                onClick={() => {
                  const container = sliderRef1.current;
                  container.scrollLeft -= scrollAmount;
                }}
              >
                <FaChevronLeft />
              </button>
              <div className="flex overflow-x-hidden" ref={sliderRef1}>
                {images.map((image) => {
                  return (
                    // <img
                    //   className="image"
                    //   alt="sliderImage"
                    //   key={image?.id}
                    //   src={image?.url}
                    // />
                    <div
                      className="bg-[#17161B] min-w-[4rem] rounded-3xl flex justify-center items-center mr-2 px-4 py-1"
                      key={image?.id}
                    >
                      <div className="text-white text-center">{image?.url}</div>
                    </div>
                  );
                })}
              </div>
              <button
                className=""
                onClick={() => {
                  const container = sliderRef1.current;
                  container.scrollLeft += scrollAmount;
                }}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="items-center flex mt-3">
              <button
                className="nav-btn"
                onClick={() => {
                  const container = sliderRef2.current;
                  container.scrollLeft -= scrollAmount;
                }}
              >
                <FaChevronLeft className="" />
              </button>
              <div className="flex overflow-x-hidden" ref={sliderRef2}>
                {images.map((image) => {
                  return (
                    // <img
                    //   className="image"
                    //   alt="sliderImage"
                    //   key={image?.id}
                    //   src={image?.url}
                    // />
                    <div
                      className="bg-[#17161B] min-w-[4rem] rounded-2xl flex mr-2 cursor-pointer active:bg-red-600"
                      key={image?.id}
                    >
                      <div className="text-white m-auto">{image?.url}</div>
                    </div>
                  );
                })}
              </div>
              <button
                className=""
                onClick={() => {
                  const container = sliderRef2.current;
                  container.scrollLeft += scrollAmount;
                }}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="ml-5 w-[200px] mt-3">
              <div>Năm :</div>{" "}
              <Slider
                // disabled={!enablePrice}
                range
                allowCross={false}
                className={`mt-[1rem] mb-[1.5rem]`}
                // value={[sliderPriceLeft, sliderPriceRight]}
                // step={stepPrice}
                // min={minPrice}
                // max={maxPrice}
                // defaultValue={[minPrice, defaultPriceRight]}
                // onChange={([value1, value2]) => {
                //   setSliderPriceLeft(value1);
                //   setSliderPriceRight(value2);
                //   setValueQuery((prev) => ({
                //     ...prev,
                //     price_min: value1,
                //     price_max: value2,
                //   }));
                // }}
                styles={{
                  track: {
                    backgroundColor: "red",
                    height: "0.7rem",
                    // opacity: enablePrice ? "100%" : "30%",
                  },
                  handle: {
                    backgroundColor: "red",
                    height: "1.25rem",
                    width: "1.25rem",
                    // opacity: enablePrice ? "100%" : "30%",
                    active: {
                      outline: "none",
                    },
                  },
                  rail: {
                    backgroundColor: "white",
                    height: "0.5rem",
                    // opacity: enablePrice ? "30%" : "20%",
                    // borderWidth: "0",
                  },
                }}
              ></Slider>
            </div>
            <div className="flex items-center bg-red-600 w-[4rem]   text-white cursor-pointer hover:bg-red-700 font-semibold rounded-sm px-4 py-1">
              <div className="flex text-lg justify-center items-center w-full">
                Lọc
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="self-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
              >
                <g transform="rotate(-90 12 12)">
                  <path fill="red" d="M1 3h22L12 22" />
                </g>
              </svg>
            </div>
            <div className="font-semibold text-xl">Recommended</div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-5 mt-7">
          {images2.map((images) => {
            return (
              <div key={images?.id}>
                <div className="relative">
                  <img className="" src={images?.url} alt="" />
                  <div className="absolute bottom-3 left-3 flex flex-col">
                    <div className="bg-[#E50914] px-2 rounded flex justify-center items-center max-w-[4rem]">
                      <div className="text-sm">Fantasy</div>
                    </div>
                    <div className="flex flex-row ">
                      <div className="text-yellow-400">9.9</div>
                      <div className="self-center ml-1">
                        <FaStar className="" />
                      </div>
                    </div>
                    <div className="font-semibold text-xl text-ellipsis overflow-hidden line-clamp-2">
                      Tên phim
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
