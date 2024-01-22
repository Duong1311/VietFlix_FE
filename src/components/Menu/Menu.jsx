import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Menu = ({ status, login }) => {
  if (!status) return null;
  return (
    <div className="text-black flex flex-col justify-center items-center  w-[8rem] h-[7rem] bg-white underline">
      <div>
        <Link to="/profile">
          <div>Hồ sơ</div>
        </Link>
        <Link to="/favorite">
          <div>Phim yêu thích</div>
        </Link>
        <Link to="/history">
          <div>Lịch sử</div>
        </Link>
        <Link to="/">
          <div
            onClick={() => {
              localStorage.clear();
              login();
            }}
          >
            Đăng xuất
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
