import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function SideMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)

    }


    return (

        <div id='side-menu' className={menuOpen ? 'opened' : 'collapsed'} >
            <div id='side-menu-button' className={menuOpen ? 'change' : ''} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

            {menuOpen ? 
            <>
            
                <div id='side-menu-nav-buttons'>
                
                <NavLink to='/' className='side-menu-nav'> 🏁 <span> Start</span>  </NavLink>
                <NavLink to='/questions' className='side-menu-nav'>❓ <span>Questions</span> </NavLink>
                <NavLink to='/addQuestion' className='side-menu-nav'>➕ <span>Add Questions</span> </NavLink>
                <NavLink to='/settings' className='side-menu-nav'>⚙️ <span>Settings</span> </NavLink>
                
                </div>

            
            </>

            : null}

  

        </div>

    )
}

export default SideMenu