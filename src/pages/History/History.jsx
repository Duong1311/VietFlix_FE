import { FaStar } from "react-icons/fa";

const History = () => {
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
      <div className="w-5/6">
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
            <div className="font-semibold text-xl">Lịch sử xem phim</div>
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

export default History;
