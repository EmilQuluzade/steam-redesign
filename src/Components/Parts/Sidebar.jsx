import React from 'react'
import '../Style/App.css'
import SteamLogo from '../Images/steamlogo.png'
import Button from '../Buttons/Sidebarbuttons'

const Sidebar = () => {
  return (
    <div className="sidebar">
<img className='steamlogoimage' src={SteamLogo} alt="" />
<div className="sidebarmenu">
    <Button buttonName="STORE"/>
    <Button buttonName="LIBRARY"/>
    <Button buttonName="COMMUNITY"/>
    <Button buttonName="FRIENDS"/>
    <div className="settingsbtn">
    <Button buttonName="SETTINGS"/>
    </div>
</div>
    </div>
  )
}

export default Sidebar