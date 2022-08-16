import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { StyledSection, SkillSection } from '../allSkills/AllSkills-Style'
import styled from 'styled-components'
import { QUERY_SKILLS } from '../../utils/queries'
import { Link } from 'react-router-dom'

const SearchBarStyle = styled.div`
  width: 100%;

  .heading {
    border-bottom: 1px solid white;
    color: #ff6464;
    font-family: sans-serif;
    font-size: 2em;
    font-weight: 600;
    line-height: 24px;
    padding: 30px;
    text-align: center;
  }
  .input {
    padding: 10px;
    width: 100%;
    background-color: rgb(237, 232, 226);
    border-radius: 10px;
    box-shadow: 0px 0px 35px -7px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    margin-bottom: 10px;
  }

  .skill-list {
    margin-top: 30px;
  }
  .skill {
    list-style: none;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid white;
    display: flex;
    justify-content: space-between;
  }
`

// const SKILLS = [
//   'How to disagree with someone',
//   'how-to video',
//   'How to make money on the App Store',
//   'Learn NextJS in five minutes (Not clickbate)',
//   'Moonwalk',
//   'Shuffle',
//   'Sharpen Knives',
//   'Chop Food Quickly',
//   'Whistle With Your Fingers',
//   'Twirl A Pen',
//   'Take Better Pictures',
// ]

const SearchBar = ({ SKILLS }) => {
  console.log(SKILLS)
  // the value of the search field
  const [name, setName] = useState('')

  // the search result
  const [foundSkills, setFoundSkills] = useState('')

  const filter = (e) => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = SKILLS.filter((skills) => {
        return skills.name.toLowerCase().startsWith(keyword.toLowerCase())
        // Use the toLowerCase() method to make it case-insensitive
      })
      setFoundSkills(results)
    } else {
      setFoundSkills('')
      // If the text field is empty, show all users
    }

    setName(keyword)
  }

  return (
    <SearchBarStyle>
      <h1 className="heading">Search Skill</h1>
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search our skills"
      />
      <StyledSection>
        <SkillSection>
          {foundSkills && foundSkills.length > 0
            ? foundSkills.map((skill) => (
                <li className="grid__item" key={skill._id}>
                  <div className="grid__item__inner">
                    <div className="grid__item__img">
                      <img
                        src={`https://avatars.dicebear.com/api/gridy/${skill.name}.svg`}
                        alt={skill.name}
                      />
                    </div>

                    <h3 className="grid__item__name overflow-ellipsis">
                      {skill.name}
                    </h3>

                    {console.log('searched skill', skill)}
                    <p className="grid__item__label">
                      {skill.teacher.username}
                    </p>
                    <Link
                      className=".section__see-all"
                      to={`/skills/${skill._id}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </li>
              ))
            : ''}
        </SkillSection>
      </StyledSection>
    </SearchBarStyle>
  )
}
export default SearchBar
