import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'

import Auth from '../utils/auth'

const Styles = styled.div`
 
 padding: 10px;
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
   background: white;
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
    padding: 10px;
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

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    age: '',
    location: '',
    password: '',
  })
  const [addUser, { error, data }] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)

    try {
      const { data } = await addUser({
        variables: { ...formState },
      })

      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Styles>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <>
          <h1 className="heading">Sign Up</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            {/* <input
              className="form-input"
              placeholder="Your age"
              name="age"
              type="text"
              value={formState.age}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your location"
              name="location"
              type="text"
              value={formState.location}
              onChange={handleChange}
            /> */}
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              className="submitButton"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
            <button
              className="submitButton"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                props.stateChanger('')
              }}
              type="reset"
            >
              Cancel
            </button>
          </form>
        </>
      )}

      {error && <div className="error">{error.message}</div>}
    </Styles>
  )
}

export default Signup
