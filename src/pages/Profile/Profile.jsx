import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getUserInfo } from "../../services/User";

const Profile = () => {
  const userID = 2;
  const [user, setUser] = useState("");
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const getInfo = async (userID) => {
    try {
      const res = await getUserInfo(userID);
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getInfo(userID);
  }, []);

  return (
    <div className="w-full bg-black flex flex-col items-center text-white min-h-[100vh]">
      <div className="w-5/6">
        <div className="flex mt-4">
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
          <div className="font-semibold text-xl">Thông tin cá nhân</div>
        </div>
        <div className="flex flex-row my-8 ">
          <div className="self-center">
            <FaUserCircle className="w-24 h-24" />
          </div>
          <div className="ml-10">
            <div className="text-2xl">{user.name}</div>
            <div className="flex flex-row">
              <div>Mail:</div>
              <div className="text-red-600 ml-3"> {user.mail} </div>
            </div>
            <div className="flex flex-row">
              <div>Time:</div>
              <div className="text-red-600 ml-3"> {user.expPackage} </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="rounded-3xl bg-[#17161B] py-2 px-6 flex justify-center items-center">
            <div>Mua gói xem phim</div>
          </button>

          <button
            onClick={handleClick}
            style={{ backgroundColor: active ? "#5B5B5B" : "#17161B" }}
            className="rounded-3xl bg-[#17161B] py-2 px-6 flex justify-center items-center ml-6"
          >
            <div>Chỉnh sửa thông tin cá nhân</div>
          </button>
        </div>
        {/* form */}
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
