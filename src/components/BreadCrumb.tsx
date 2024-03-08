import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {} from "react-router-dom";
import { Link } from "react-router-dom";
interface IPorps {
  pathVal: string;
}
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb({ pathVal }: IPorps) {
  // const handleNavigateHome = () => {
  //   nav("/");
  // };

  // const handleNavigateProjects = () => {
  //   nav("/projects");
  // };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ pl: 2, pt: 1, pb: 1 }}>
        <Link to="/">Home</Link>
        {pathVal === "Home/Projects" ? (
          <Link to="/projects">Projects</Link>
        ) : (
          <></>
        )}
      </Breadcrumbs>
    </div>
  );
}
