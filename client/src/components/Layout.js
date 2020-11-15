import React from 'react'
import Nav from './Nav'

const Layout = ({ children }) => {
    return (
        <div className="App">
            <header>
                <Nav />
            </header>
            <section>
                {children}
            </section>
        </div>
    )
}



export default Layout