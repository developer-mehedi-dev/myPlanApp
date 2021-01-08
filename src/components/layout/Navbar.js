import React from 'react';
import { Link } from 'react-router-dom';
import SignnedInLinks from './SignnedInLinks';
import SignnedOutLinks from './SignnedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props
    // console.log(auth)
    const links = auth.uid ? <SignnedInLinks profile={profile} /> : <SignnedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);