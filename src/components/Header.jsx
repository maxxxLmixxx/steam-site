import React from 'react'

const EditButton = () => <button className="edit-button">Edit</button>

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-left"></div>
      <div className="header-center"></div>
      <div className="header-right">
        <EditButton />
      </div>
    </div>
  )
}
