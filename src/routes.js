import App from './components/App'
import Welcome from './components/Welcome'
import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
import ErrorPage from './components/ErrorPage'

const routes = [
     {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            path:'/welcome',
            element: <Welcome />
          },
          {
            path:'/question',
            element: <Question />
          },
          {
            path:'/addQuestion',
            element: <AddQuestion />
          }
        ]
    
    }

]

export default routes