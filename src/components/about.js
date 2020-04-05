import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Photo from './img/about.png'

class About extends React.Component {
    render(){
        return (
            <div className="container pb-5">
                <div className="row">
                    <div className="col">
                        <img src={Photo} height={400} width={550}/>
                    </div>
                    <div className="col mt-5 pt-5">
                        <h4 className="text-secondary">ABOUT ME</h4>
                        <p className="text-secondary">Extremely motivated to constantly 
                        develop my skills and grow professionally.
                         I am confident in my technical skills as
                         well as excellent interpersonal skills, 
                         enabling me to interect with a wide range of cilents.
                         My greatest passion is in my life is using my technical.
                         know-how to benefit other people and organisations.</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}
export default About;