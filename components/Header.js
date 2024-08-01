import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/online.js";

const Header = function () {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setIsOnline(onlineStatus);
  }, [onlineStatus]);

  return (
    <div className="flex text-[white] justify-between mx-2 my-0 pt-4">
      <h1
        className={[
          "text-4xl",
          "cursor-pointer mx-[1.2rem] my-0 px-[0.2rem] py-0",
          "mt-[0.1rem]",
          "border-[3px]",
          "border-solid",
          `${isOnline ? "border-[green]" : "border-[red]"}`,
        ].join(" ")}
        style={{
          fontFamily: "'Okra', Helvetica, sans-serif",
        }}
      >
        <Link to="/">Zomato</Link>
      </h1>
      <nav>
        <ul className="flex list-none justify-between">
          <li
            className="cursor-pointer mx-[1.2rem] my-0 px-[0.2rem] py-0"
            style={{
              fontFamily: "'Okra', Helvetica, sans-serif",
            }}
          >
            Investor Relations
          </li>
          <li
            className="cursor-pointer mx-[1.2rem] my-0 px-[0.2rem] py-0"
            style={{
              fontFamily: "'Okra', Helvetica, sans-serif",
            }}
          >
            <Link to="/add-restaurant">Add Restaurant</Link>
          </li>
          <li
            className="cursor-pointer mx-[1.2rem] my-0 px-[0.2rem] py-0"
            style={{
              fontFamily: "'Okra', Helvetica, sans-serif",
            }}
          >
            <Link to="/login">Login</Link>
          </li>
          <li
            className="cursor-pointer mx-[1.2rem] my-0 px-[0.2rem] py-0"
            style={{
              fontFamily: "'Okra', Helvetica, sans-serif",
            }}
          >
            Signup
          </li>
          <li
            className="cursor-pointer mx-[1.2rem] my-0 px-[0.2rem] py-0"
            style={{
              fontFamily: "'Okra', Helvetica, sans-serif",
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

module.exports = Header;
