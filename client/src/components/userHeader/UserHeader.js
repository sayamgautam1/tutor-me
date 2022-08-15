import StyledHeader from "./UserHeader-Style";
import image from "../../shared/images/image-victor.jpg";

const UserHeader = ({ data }) => {
  return (
    <>
      {console.log(data)}
      <StyledHeader type="user">
        <div className="header__inner">
          <img className="header__img" src={image} alt="Avatar" />
          <div>
            <div className="header__overline">{"Welcome"}</div>
            <h1 className="header__name">{data.username.toUpperCase()}</h1>
            <p className="header__meta">
              <span>{data.email}</span>
            </p>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default UserHeader;
