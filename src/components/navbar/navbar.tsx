import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["nav-items"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }): string =>
              isActive ? styles["navlink-active"] : styles["navlink"]
            }
          >
            To-do
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            className={({ isActive }): string =>
              isActive ? styles["navlink-active"] : styles["navlink"]
            }
          >
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all"
            className={({ isActive }): string =>
              isActive ? styles["navlink-active"] : styles["navlink"]
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-todo"
            className={({ isActive }): string =>
              isActive ? styles["navlink-active"] : styles["navlink"]
            }
          >
            New Todo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
