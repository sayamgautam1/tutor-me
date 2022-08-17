import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { ADD_TEACH_SKILL } from '../../utils/mutations'
import Auth from '../../utils/auth'
import { QUERY_SKILLS } from '../../utils/queries'

const Styles = styled.div`
 
 padding: 15px;
 height: 50%
 margin-top: 50px;

 h1 {
   border-bottom: 1px solid white;
   color: #ff6464;
   font-family: sans-serif;
   font-size: 5em;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: #181818;;
   border: 1px solid black;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid black;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
   margin-bottom: 5px;
   height:50px;
 }
 .form-input{
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  height:50px;

 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }
 .heading{
    border-bottom: 1px solid white;
    color: #ff6464;
    font-family: sans-serif;
    font-size: 2em;
    font-weight: 600;
    line-height: 24px;
    padding: 30px;
    text-align: center;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
  background-color: #ff6362;
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 25px;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  line-height: 156.19%;
  margin-bottom: 5px;
`

const AddSkill = (props) => {
  const [formState, setFormState] = useState({
    teachSkill: '',
    classLength: '',
    description: '',
  })

  const [addTeachSkill, { error, data }] = useMutation(ADD_TEACH_SKILL)

  const { loading, data: skillData, refetch } = useQuery(QUERY_SKILLS)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log('newdata', formState)
    console.log(skillData)

    try {
      const { data } = await addTeachSkill({
        variables: { ...formState },
      })
      refetch()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Styles>
      <>
        <h1 className="heading">Add Skill</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Your new Skill"
            name="teachSkill"
            type="text"
            value={formState.teachSkill}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Class length"
            name="classLength"
            type="text"
            value={formState.classLength}
            onChange={handleChange}
          />
          <textarea
            className="form-input"
            placeholder="Description"
            name="description"
            type="text"
            rows="6"
            cols="50"
            value={formState.description}
            onChange={handleChange}
          />
          <button
            className="submitButton"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            ADD
          </button>
          {/* <button
              className="submitButton"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                props.stateChanger('')
              }}
              type="reset"
            >
              Cancel
            </button> */}
          {data && <div className="">Skill Added</div>}
        </form>
      </>

      {error && <div className="error">{error.message}</div>}
    </Styles>
  )
}

export default AddSkill
