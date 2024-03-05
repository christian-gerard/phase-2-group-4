import App from './components/App'
import Start from './components/Start'
import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
import QuestionPreview from './components/QuestionPreview'
import QuestionDetails from './components/QuestionDetails'
import Settings from './components/Settings'
import ErrorPage from './components/ErrorPage'

const routes = [
     {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            path:'/',
            element: <Start />
          },
          {
            path:'/settings',
            element: <Settings />
          },
          {
            path:'/questions',
            element: <Question />
      
          },

          {
                
            path:'/questions/:id',
            element: <QuestionDetails />

          },
         
          {
            path:'/addQuestion',
            element: <AddQuestion />
          }
        ]
    
    }

]

export default routes