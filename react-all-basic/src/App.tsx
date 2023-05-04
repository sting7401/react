import { useState } from 'react'
import './App.css'
import Composition from './components/basic/2-4-Props/Composition';
import ClassComponents from './components/basic/2-5-State/ClassComponents';
import ClassComponents2 from './components/basic/2-6-lifecycle/ClassComponents';


function App() {

  return (
    <div className="App">
      <Composition name="jim"/>
      <ClassComponents />

      <ClassComponents2 />
    </div>
  )
}

export default App
