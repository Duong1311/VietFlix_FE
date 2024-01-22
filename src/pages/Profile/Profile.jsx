import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getUserInfo, getUserPass, setUserInfo } from "../../services/User";
import { getListPackage } from "../../services/User";

const Profile = () => {
  const userID = localStorage.getItem("member_id");
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [userNewPass, setNewPass] = useState("");
  const [userOldPass, setOldPass] = useState("");
  const [userConfPass, setConfPass] = useState("");

  const [active, setActive] = useState(false);
  const [inputOld, setInputOld] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [info, setInfo] = useState({});
  const [moviePackages, setMoviePackages] = useState([]);
  const [showPackages, setShowPackages] = useState(false);

  const fetchPackages = async () => {
    try {
      const response = await getListPackage();
      setMoviePackages(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getInfo(userID);
    fetchPackages();
  }, [userID]);

  const handleBuyClick = () => {
    setShowPackages(!showPackages);
    setActive(false);
    setInputOld(false);
  };

  const handleClick = () => {
    setActive(!active);
    setInputOld(!inputOld);
    setShowPackages(false);
  };

  const handleSubmit = async () => {
    try {
      console.log(userOldPass);

      const res = await getUserPass(userID);
      console.log(res.data);
      if (userOldPass == res.data) {
        setIsEdit(true);
        setInputOld(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handEdit = async () => {
    try {
      setInfo({
        member_id: userID,
        mail: user.mail,
        pass: userNewPass,
        member_name: userName,
        package_id: user.package_id,
        exp_package: user.exp_package,
      });
      const res = await setUserInfo(info);
      console.log(res.data);
      alert(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getInfo = async (userID) => {
    try {
      const res = await getUserInfo(userID);
      // console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getInfo(userID);
  }, [userID]);

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
            <div className="text-2xl">{user.member_name}</div>
            <div className="flex flex-row">
              <div>Mail:</div>
              <div className="text-red-600 ml-3"> {user.mail} </div>
            </div>
            <div className="flex flex-row">
              <div>Time:</div>
              <div className="text-red-600 ml-3"> {user.exp_package} </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            onClick={handleBuyClick}
            style={{ backgroundColor: showPackages ? "#5B5B5B" : "#17161B" }}
            className="rounded-3xl bg-[#17161B] py-2 px-6 flex justify-center items-center ml-6"
          >
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
        {showPackages && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2">
              Danh sách gói xem phim
            </h2>
            <ul>
              {moviePackages.map((moviePackage) => (
                <li key={moviePackage.pack_id}>
                  {moviePackage.pack_name} - {moviePackage.price} VND -{" "}
                  {moviePackage.pack_time} tháng
                </li>
              ))}
            </ul>
          </div>
        )}
        {inputOld && (
          <div className="flex flex-col w-[19em] mt-8">
            <div>Insert password to continue</div>
            <input
              type="text"
              className="w-full mt-3 rounded-md px-3 py-2 text-black"
              onChange={(event) => setOldPass(event.target.value)}
              value={userOldPass}
            />
            <div className="flex justify-center items-center mt-8">
              <button
                className="bg-[#E50914] rounded-3xl py-2 px-6"
                onClick={handleSubmit}
              >
                <div>Continue</div>
              </button>
            </div>
          </div>
        )}

        {isEdit && (
          <div className="flex flex-col w-[19em] mt-5">
            <div className="mt-3">UserName</div>
            <input
              type="text"
              className="w-full mt-3 rounded-md px-3 py-2 text-black"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <div className="mt-3">New Password</div>
            <input
              type="text"
              className="w-full mt-3 rounded-md px-3 py-2 text-black"
              value={userNewPass}
              onChange={(event) => setNewPass(event.target.value)}
            />
            <div className="mt-3">Confirm Password</div>
            <input
              type="text"
              className="w-full mt-3 rounded-md px-3 py-2 text-black"
              value={userConfPass}
              onChange={(event) => setConfPass(event.target.value)}
            />
            <div className="flex justify-center items-center mt-8">
              <button
                onClick={handEdit}
                className="bg-[#E50914] rounded-3xl py-2 px-6"
              >
                <div>Continue</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
