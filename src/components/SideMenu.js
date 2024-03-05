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
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            {menuOpen ? 
            <>
            
                <div id='side-menu-nav-buttons'>
                
                <NavLink to='/' className='side-menu-nav'>🏁 Start </NavLink>
                <NavLink to='/question' className='side-menu-nav'>❓ Questions </NavLink>
                <NavLink to='/addQuestion' className='side-menu-nav'>➕ Add Questions </NavLink>
                <NavLink to='/settings' className='side-menu-nav'>⚙️ Settings </NavLink>
                
                </div>

            
            </>

            : null}

  

        </div>

    )
}

export default SideMenu