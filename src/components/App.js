import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideMenu from './SideMenu'
import '../App.css';

function App() {

  const nav = useNavigate()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/questions')
    .then(resp => resp.json())
    .then(data => setQuestions(data))
    .catch(err => console.log(err))

  },[])

  const handleFormSubmit = (e,formData) => {
		e.preventDefault();


    if(Object.values(formData).includes('')) {
      alert('Fill out all fields')
    } else {

      fetch('http://localhost:8000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
  
      })
      .then(resp => resp.json())
      .then(data => {

          setQuestions([...questions, data])

        
      })
      .catch(err => console.log(err))

    }
  };

  const handleQuestionPatch = (e,newQuestion,handleEditMode) => {
    e.preventDefault();


    if(Object.values(newQuestion).includes('')) {
      alert('Fill out all fields')
    } else {

      fetch(`http://localhost:8000/questions/${newQuestion.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQuestion)
  
      })
      .then(resp => resp.json())
      .then(data => {

        const newQ = questions.map((q) => {

          if(q.id === newQuestion.id) {
            return data
          } else {
            return q
          }
          
        })

        setQuestions(newQ)

        handleEditMode()

      })
      .catch(err => console.log(err))

    }
  }

  const handleDelete = (id) => {
    console.log(questions)
    fetch(`http://localhost:8000/questions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {

      const deletedQ = questions.filter((q) => q.id !== id)

      setQuestions(deletedQ)

      
    })

    
}

  return (
    <div id="App">
      <SideMenu />
      <div id='main-container'>

      <span id='app-title'>TRIVIAL</span>
      
      <Outlet context={{questions, handleFormSubmit, handleQuestionPatch, handleDelete}}/>

      </div>
    </div>
  );
}

export default App;
