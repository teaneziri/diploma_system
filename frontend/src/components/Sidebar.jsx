import { NavLink } from "react-router-dom";
import LogoImg from "../assets/ubt-logo.png";

import { FaUser, FaBook, FaCheckCircle, FaFileAlt, FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[rgba(36,64,130,1)] text-white flex flex-col p-6">
      <div className="mb-10">
        <img src={LogoImg} alt="Logo" className="w-16 h-16 object-contain" />
      </div>

      <nav className="flex flex-col space-y-4">
        <div>
          <h3 className="uppercase text-blue-300 text-s font-semibold mb-2">
            Llogaria Ime
          </h3>
          <ul className="space-y-2 ml-2">
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold flex items-center space-x-2" : "text-blue-200 hover:text-white flex items-center space-x-2"
                }
              >
                <FaUser />
                <span>Profili Im</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/tema-e-paraqitur"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold flex items-center space-x-2" : "text-blue-200 hover:text-white flex items-center space-x-2"
                }
              >
                <FaBook />
                <span>Paraqitja e Temes</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/ckqyqu"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold flex items-center space-x-2" : "text-blue-200 hover:text-white flex items-center space-x-2"
                }
              >
                <FaCheckCircle />
                <span>Çkyqu</span>
              </NavLink>
            </li>
            <li>
              <div className="font-semibold text-blue-300 uppercase text-s mb-1 mt-4">
                Tema e Diplomës
              </div>
              <ul className="ml-4 space-y-1">
                <li>
                  <NavLink
                    to="/dashboard/tema-e-diplomes"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold flex items-center space-x-2" : "text-blue-200 hover:text-white flex items-center space-x-2"
                    }
                  >
                    <FaFileAlt />
                    <span>Tema e Diplomës</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/termini-im"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold flex items-center space-x-2" : "text-blue-200 hover:text-white flex items-center space-x-2"
                    }
                  >
                    <FaCalendarAlt />
                    <span>Termini Im</span>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
