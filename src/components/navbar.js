import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component {
    render () {
        return (
            <div className="container-fluid bg-dark">
                <div className = "container">
                    <div className = "row py-2">
                        <div className="col">
                            <h2 className="text-white ml-5">Curriculum Vitae</h2>
                        </div>
                        <div className="col">
                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">ABOUT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar;