import React , { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';



class Navigation extends Component {
    render() {
        const {user, logOutUser} = this.props;
        return(
                <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><FaUsers className="mr-1"/>Meeting Log</Link>
                        <div className="navbar-nav ml-aduto">
                            {user ? <Link to="/meetings" className="nav-item nav-link">meetings</Link> : null }
                            {!user ? <Link to="/login" className="nav-item nav-link">log in</Link> : null }
                            {!user ? <Link to="/register" className="nav-item nav-link">register</Link> : null }
                            {user ? <Link to="/login" className="nav-item nav-link" onClick={e => logOutUser(e)}>log out</Link> : null }
                        </div>
                    </div>
                </nav>
        );
    }
}

export default Navigation;