import App from './components/App'
import Start from './components/Start'
import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
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