import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {

    const logout = () => {
        localStorage.clear()
        props.setUser({})
    }
    return (
        <header>
        <div className="navigation">
            <nav>
                {props.user.id ?
                <>
                <Link to="/Prompts">Prompts</Link>
                <Link to="/CreatePrompts">Create Prompts</Link>
                { '-'  }
                <span onClick={() => logout()}>
                    <Link to="/">Logout</Link>
                </span>
                </>
                :
                <>
                <Link to="/">Home</Link>
                { '-'  }
                <Link to="/Login">Login & Signup</Link>
                </>
                }
            </nav>
            {/* <Link to="/">Home</Link>
            <Link to="/Login">Login & Signup</Link>
            <Link to="/Prompts">Prompts</Link>
            <Link to="/CreatePrompts">Create Prompts</Link> */}
        </div>
        </header>
    )
}

export default Navbar
