import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from './SideMenu'
import '../App.css';

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(resp => resp.json())
    .then(data => setQuestions(data))
    .catch(err => console.log(err))

  },[])

  return (
    <div id="App">
      <SideMenu />
      <div id='main-container'>

      <span id='app-title'>TRIVIAL</span>
      <Outlet context={questions}/>

      </div>
    </div>
  );
}

export default App;
