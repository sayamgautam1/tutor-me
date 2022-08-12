import React from "react";
import Hamburger from "../../components/hamburger/Hamburger";
import Header from "../../components/header/Header";
import { Layout, StyledHeader } from "./SingleSkill-style";

const SingleSkill = () => {
  return (
    <>
      <Header />
      <Hamburger />
      <Layout>
        <StyledHeader type="skill">
          <div className="header__inner">
            {/* <img className="header__img" src={image} alt="Avatar" /> */}
            <div>
              <div className="header__overline">Title</div>
              <h1 className="header__name">name</h1>
              <p className="header__meta">
                <span>other details</span>
              </p>
            </div>
          </div>
        </StyledHeader>
      </Layout>
    </>
  );
};

export default SingleSkill;
