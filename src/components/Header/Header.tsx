import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.scss"
const  Header : React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        Movie App
      </div>
      <div className="user-image">
        <img src="https://picsum.photos/200" alt='user'/>
      </div>
    </div>
  )
}

export default Header