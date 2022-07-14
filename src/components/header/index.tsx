import React from "react";

import Heading from "../heading";

import "./styles.scss";

const rootClassName = "rick-morty-header";

const Header: React.FC = () => {
  return (
    <>
      <header className={rootClassName}>
        <a href="/">
          <img src={require("../../icons/logo.png")} alt="Rick and Morty" />
        </a>
      </header>
      <Heading primary="Rick and Morty" secondary="characters" />
    </>
  );
};

export default Header;
