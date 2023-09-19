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
                <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7">
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
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
