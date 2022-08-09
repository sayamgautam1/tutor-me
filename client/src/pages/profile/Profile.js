import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ME } from "../../utils/queries";
import Header from "../../components/header/Header";
import Hamburger from "../../components/hamburger/Hamburger";
import {
  Wrapper,
  Card,
  Head,
  Avatar,
  Title,
  Name,
  Age,
  City,
  Stats,
  StatFigure,
  StatTitle,
  Left,
  Right,
  Layout,
} from "./style";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <>Loading...</>;
  }

  const profileData = data?.me || {};

  return (
    <>
      {/* <p>Profile Page</p>
      Id: {profileData._id}
      <br />
      Email: {profileData.email}
      <br />
      Username: {profileData.username} */}
      <Header />
      <Hamburger />
      <Layout>
        <Wrapper>
          <Left>
            <Card>
              <Head>
                {/* <Avatar src={ProfilePicture} alt="" /> */}

                <Title>
                  <Name>{profileData.username}</Name>
                  <Age>26</Age>
                </Title>

                <City>London</City>
              </Head>

              <section>
                <Stats>
                  <li>
                    <StatFigure>80K</StatFigure>
                    <StatTitle>Followers</StatTitle>
                  </li>
                  <li>
                    <StatFigure>803K</StatFigure>
                    <StatTitle>Likes</StatTitle>
                  </li>
                  <li>
                    <StatFigure>1.4K</StatFigure>
                    <StatTitle>Photos</StatTitle>
                  </li>
                </Stats>
              </section>
            </Card>
          </Left>
          <Right>{"something"}</Right>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Profile;
