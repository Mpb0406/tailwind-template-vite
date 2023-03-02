import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const themeColors = ['Primary', 'Secondary', 'Light', 'Dark', 'Mid', 'Success', 'Warning', 'Danger']

  return (
    <div className='flex gap-2'>
      {themeColors.map(color => (
        <button className='bg-danger'>{color}</button>
      ))}
    </div>
  )
}

export default App
