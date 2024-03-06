import { NavLink } from 'react-router-dom'


function ErrorPage() {

    return (
        <div>
            <h1>OH NO.....Something went wrong! 😱</h1>
            <NavLink to='/'>Return Home</NavLink>

        </div>
    )
}

export default ErrorPage