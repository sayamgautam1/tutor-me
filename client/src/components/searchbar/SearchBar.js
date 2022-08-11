import React, { useState } from 'react'

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Find a Skill</span>
    </label>
    <input type="text" id="header-search" placeholder="..." name="s" />
    <button type="submit">Search</button>
  </form>
)

export default SearchBar
