import StyledHeader from "./UserHeader-Style";
import image from "../../shared/images/image-victor.jpg";

const UserHeader = ({ data }) => {
  return (
    <>
      <StyledHeader type="user">
        <div className="header__inner">
          <img className="header__img" src={image} alt="Avatar" />
          <div>
            <div className="header__overline">{data.email}</div>
            <h1 className="header__name">name</h1>
            <p className="header__meta">
              <span>other details</span>
            </p>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default UserHeader;
