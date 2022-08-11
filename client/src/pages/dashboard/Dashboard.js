import { useQuery } from '@apollo/client'
import { Layout, Content, BoxContainer, BoxText, BoxTitle } from './style'
import Header from '../../components/header/Header'
import Hamburger from '../../components/hamburger/Hamburger'
import SearchBar from '../../components/searchbar/SearchBar'
import { QUERY_SKILLS } from '../../utils/queries'

const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <Hamburger />

      <Content>
        <BoxContainer>
          <BoxTitle>Hello</BoxTitle>
          <BoxText>
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic. Almost every piece
            of writing you do that is longer than a few sentences should be
            organized into paragraph
          </BoxText>
        </BoxContainer>
        <BoxContainer>
          <BoxTitle>Hello</BoxTitle>
          <SearchBar />
          <BoxText>Hello text</BoxText>
        </BoxContainer>
      </Content>
    </Layout>
  )
}

export default Dashboard
