import React from 'react'

function header(props) {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{props.BrandName}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Me</a>
                </li>
            </ul>
        </div >
    )
}

export default header
