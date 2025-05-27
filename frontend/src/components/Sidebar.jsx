import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-800 text-white flex flex-col p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-2">Student Dashboard</h1>
        <p className="text-blue-300 text-sm">Arber Berisha</p>
      </div>

      <nav className="flex flex-col space-y-4">
        <div>
          <h3 className="uppercase text-blue-300 text-xs font-semibold mb-2">
            Llogaria Ime
          </h3>
          <ul className="space-y-2 ml-2">
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "text-blue-200 hover:text-white"
                }
              >
                Profili Im
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/tema-e-paraqitur"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : " hover:text-white"
                }
              >
                Tema e Paraqitur
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/ckqyqu"
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "text-blue-200 hover:text-white"
                }
              >
                Çkqyqu
              </NavLink>
            </li>
            <li>
              <div className="font-semibold text-blue-300 uppercase text-xs mb-1 mt-4">
                Tema e Diplomës
              </div>
              <ul className="ml-4 space-y-1">
                <li>
                  <NavLink
                    to="/dashboard/tema-e-diplomes"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-blue-200 hover:text-white"
                    }
                  >
                    Tema e Diplomës
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/termini-im"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-blue-200 hover:text-white"
                    }
                  >
                    Termini Im
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
