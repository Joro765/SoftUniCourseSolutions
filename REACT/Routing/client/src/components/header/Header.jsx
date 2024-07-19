import { NavLink } from "react-router-dom";


export default function Header(props) {
    return (
        <div className="site-header">
            <header>
                <nav>
                    <ul>
                        <li><NavLink style={({ isActive }) => isActive ? { color: "white" } : {}} to="/">Home</NavLink></li>
                        <li><NavLink style={({ isActive }) => isActive ? { color: "white" } : {}} to="/about">About</NavLink></li>
                        <li><NavLink style={({ isActive }) => isActive ? { color: "white" } : {}} to="/developers">Developers</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}