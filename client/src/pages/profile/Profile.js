import { useQuery } from '@apollo/client'
import React from 'react'
import { QUERY_ME } from '../../utils/queries'
import Header from '../../components/header/Header'
import Hamburger from '../../components/hamburger/Hamburger'
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
} from './style'

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME)

  if (loading) {
    return <>Loading...</>
  }

  const profileData = data?.me || {}

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
                  <Name>Welcome, {profileData.username} !</Name>
                  <br></br>
                  <Age>Age: {profileData.age}</Age>
                  <br></br>
                  <Name>{profileData.email}</Name>
                </Title>

                <City>City: London</City>
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
          <Right>
            <Card>
              <Name>{'Currently Learning'}</Name>
              {/* {const myList = myArray.map((item)=> <Age>{item}</Age>)} */}
            </Card>
            <br></br>
            <Card>
              <Name>{'Currently Teaching'}</Name>
              {/* {const myList = myArray.map((item)=> <Age>{item}</Age>)} */}
            </Card>
            {/* {profileData.learning}
            {profileData.teaching} */}
          </Right>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Profile
