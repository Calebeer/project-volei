import { NavLink } from "@remix-run/react";

<NavLink
  to="/inicio"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;

<NavLink
  to="/home"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  home
</NavLink>;