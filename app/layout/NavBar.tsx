import { useState, useEffect } from "react";
import { Link, NavLink } from "@remix-run/react";

export default function Index() {
  const [navbar, setNavbar] = useState(false);

  // Verificar se estamos no navegador antes de usar o objeto window
  const isBrowser = typeof window !== "undefined";

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/home">
              <h2 className="text-2xl font-bold">Remix</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {/* {navbar ? (
                  // ...código do botão do menu mobile...
                ) : (
                  // ...código do botão do menu mobile...
                )} */}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="font-semibold text-gray-600 hover:text-blue-600">
                    <NavLink to="/create_scheduling">
                        <span style={{ color: isBrowser && window.location.pathname === '/create_scheduling' ? '#314bce' : '' }}>Criar agendamento</span>
                    </NavLink>
              </li>
              <li className="font-semibold text-gray-600 hover:text-blue-600">
                    <NavLink to="/my_scheduling">
                        <span style={{ color: isBrowser && window.location.pathname === '/my_scheduling' ? '#314bce' : '' }}>Meus agendamento</span>
                    </NavLink>
              </li>
              <li className="font-semibold text-gray-600 hover:text-blue-600">
                    <NavLink to="/">
                        <span style={{ color: isBrowser && window.location.pathname === '/login' ? '#314bce' : '' }}>Meus agendamento</span>
                    </NavLink>
              </li>
              <li className="font-semibold text-gray-600 hover:text-blue-600">
                    <NavLink to="/my_scheduling">
                        <span style={{ color: isBrowser && window.location.pathname === '/' ? '#314bce' : '' }}>Meus agendamento</span>
                    </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
