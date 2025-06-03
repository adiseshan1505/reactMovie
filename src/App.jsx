import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Class componenets

const Card=({title})=>{
  return(
    <h2>{title}</h2>
  );
}


const App=()=>{
  return(
    <>
    <h2>Funcitonal components</h2>
    <Card title="Endgame"/>
    <Card title="Doomsday"/>
    <Card title="Secret-Wars"/>
    </>
  )
}

export default App
