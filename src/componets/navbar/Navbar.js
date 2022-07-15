import { NavLink } from "react-router-dom";
import './Navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Navbar() {
    return (
        <nav className='Sidebar'>
            <ul className="SidebarList">

                <NavLink exact to="/" activeClassName="active">
                    <li className='row'>
                        <div id='icon'><HomeIcon /></div>
                        <div id='title'>Home</div>
                    </li>
                </NavLink>


                <NavLink exact to="/proyects" activeClassName="active" >
                    <li className='row'>
                        <div id='icon'><GitHubIcon /></div>
                        <div id='title'>Projects</div>
                    </li>
                </NavLink>

            </ul>
        </nav>
    )
}
