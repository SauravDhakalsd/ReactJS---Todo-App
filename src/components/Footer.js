import React from 'react'

function Footer() {
    let footerStyle ={
        position: "relative",
        top: "100vh",
        width: "100%"

    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; todoapp.com
            </p>
        </footer>
    )
}

export default Footer
