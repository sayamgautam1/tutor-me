import React, { Component } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    background-color: #ff6464;
    padding: 5px;
    font-weight: 600;
  }
`
const RemoveTeacher = () => {
  {
    return (
      <Styles>
        <div>
          <button onClick={() => this.props.delete(this.props.id)}>
            Remove Skill
          </button>
        </div>
      </Styles>
    )
  }
}

export default RemoveTeacher
