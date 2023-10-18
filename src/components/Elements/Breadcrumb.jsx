import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="container">
        <ul className="breadcrumb">
            <li>{location.pathname === "/" ? null : <Link to="/">Inicio</Link>}</li>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return (
                <li key={index}>
                    {last ? (
                    <span key={to} className="breadcrumb__link"> | {value}</span>
                    ) : (
                    <span key={to} className="breadcrumb__link"> | <Link to={to}>{value}</Link>
                    </span>
                    )}
                </li>
                );
            })}
        </ul>
    </div>
  );
};

export default Breadcrumb;