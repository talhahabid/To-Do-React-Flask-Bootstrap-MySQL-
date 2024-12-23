import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <Link to='/' className='navbar-brand'>Task Manager</Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <li className="nav-item ">
                       <Link to="/" className='nav-link'>To Do</Link>
                    </li>
                    <li className="nav-item ">
                       <Link to="/recently-completed" className='nav-link'>Recently Completed</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/recently-deleted" className='nav-link'>Recently Deleted</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
