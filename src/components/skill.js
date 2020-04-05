import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Photo from './img/static.png'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Skill extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row pb-5">
                    <div className="col col-6 mt-5">
                        <h4 className="text-secondary text-center">MY SKILLS</h4>
                        <h6 className="text-secondary mt-2">HTML</h6>
                        <ProgressBar variant="danger" now={90}></ProgressBar>
                        <h6 className="text-secondary mt-2">CSS</h6>
                        <ProgressBar variant="danger" now={85}></ProgressBar>
                        <h6 className="text-secondary mt-2">Javascript</h6>
                        <ProgressBar variant="danger" now={60}></ProgressBar>
                    </div>
                    <div className="col col-6">
                        <img src = {Photo} height={300} width={550}/>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}
export default Skill;
