import StyledHeader from "./UserHeader-Style";
import image from "../../shared/images/image-victor.jpg";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-identicon-sprites";

const UserHeader = ({ data }) => {
  let svg = createAvatar(style);
  return (
    <>
      <StyledHeader type="user">
        <div className="header__inner">
          <img
            className="header__img"
            src={`https://avatars.dicebear.com/api/bottts/${data.username}.svg`}
            alt="Avatar"
          />
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
