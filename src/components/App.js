import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'
import '../App.css';

function App() {
  return (
    <div id="App">
      <SideMenu />
      <div id='main-container'>

      <span id='app-title'>TRIVIAL</span>
      <Outlet />

      </div>
    </div>
  );
}

export default App;
