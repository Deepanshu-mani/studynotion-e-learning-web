import { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if(!user) return null

  // Toggle dropdown open/close
  const handleToggle = () => setOpen((prev) => !prev);

  // Handle hover effect (show menu on hover)
  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Button */}
      <button
        className="flex items-center gap-x-3 group transition-transform duration-200 ease-in-out"
        onClick={handleToggle}
      >
        {/* User Image with Fallback */}
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[35px] h-[35px] rounded-full object-cover border-2 border-gray-700 transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Dropdown Icon Animation */}
        <BsChevronDown
          className={`text-white transition-transform duration-300 text-lg ${
            open ? "rotate-180" : "rotate-0"
          } group-hover:rotate-180`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        ref={ref}
        className={`absolute top-[100%] -right-[50px] z-[1000] bg-richblack-800 border border-gray-600 shadow-lg rounded-md divide-y divide-gray-700 transition-all duration-300 ease-in-out transform ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transformOrigin: "top right", pointerEvents: open ? "auto" : "none" }}
      >
        {/* Dashboard Link */}
        <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-x-2 py-[12px] px-[15px] text-sm text-white hover:text-yellow-25 hover:bg-gray-700 transition-colors duration-200">
            <VscDashboard className="text-xl" />
            Dashboard
          </div>
        </Link>

        {/* Logout Button */}
        <div
          onClick={() => {
            console.log("Logging Out....");
            dispatch(logout(navigate));
            setOpen(false);
          }}
          className="flex items-center gap-x-2 py-[12px] px-[15px] text-sm text-white hover:text-yellow-25 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
        >
          <VscSignOut className="text-xl" />
          Logout
        </div>
      </div>
    </div>
  );
}