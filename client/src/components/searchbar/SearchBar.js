import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

// import { QUERY_SKILLS } from '../../utils/queries'

const SearchBarStyle = styled.div`
  .container {
    padding-top: 30px;
    width: 300px;
    margin: auto;
  }

  .input {
    padding: 10px;
    width: 300px;
    background-color: rgb(237, 232, 226);
    border-radius: 10px;
    box-shadow: 0px 0px 35px -7px rgba(0, 0, 0, 0.1);
    cursor: pointer;
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

const SKILLS = [
  'How to disagree with someone',
  'how-to video',
  'How to make money on the App Store',
  'Learn NextJS in five minutes (Not clickbate)',
  'Moonwalk',
  'Shuffle',
  'Sharpen Knives',
  'Chop Food Quickly',
  'Whistle With Your Fingers',
  'Twirl A Pen',
  'Take Better Pictures',
  'Moonwalk1',
  'Moonwalk2',
]

const SearchBar = () => {
  // the value of the search field
  const [name, setName] = useState('')

  // the search result
  const [foundSkills, setFoundSkills] = useState('')

  const filter = (e) => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = SKILLS.filter((skills) => {
        return skills.toLowerCase().startsWith(keyword.toLowerCase())
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
      <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search our skills"
        />

        <div className="skill-list">
          {foundSkills && foundSkills.length > 0 ? (
            foundSkills.map((skill) => (
              <li key={skill} className="skill">
                <span className="skill-id">{skill}</span>
                {/* <span className="skill-id">{skill.name}</span> */}
              </li>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div>
      </div>
    </SearchBarStyle>
  )
}
export default SearchBar
