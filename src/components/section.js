import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Photo from './img/rubi.png'

class Section extends React.Component {
    render(){
        return (
        <div className= "container bg-light">
            <div className="row">
                <div className="col-7 mt-5 pt-5">
                    <h3 className="mt-5 pt-5 text-secondary ml-5">Hi! My Name is Rubi Anggoro</h3>
                    <h5 className="text-secondary ml-5">I'm Web Developer</h5>
                </div>
                <div className="col my-5">
                    <img src ={Photo} height={360} width={360}/>
                </div>
            </div>
            <hr></hr>
        </div>
        )
    }
}
export default Section;
