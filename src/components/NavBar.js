import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((eachLink)=>{
    const update="#"+`${eachLink}`
    return <a href={update} key={eachLink}>{eachLink}</a>
})}</nav>;
}

export default NavBar;
