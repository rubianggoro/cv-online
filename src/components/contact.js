import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mt-5 mb-5">
                    <h3 className="mb-4 text-secondary text-center">CONTACT US</h3>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Your E-mail</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Number</Form.Label>
                            <Form.Control type="text" placeholder="0838*****" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-danger">Submit</Button>{' '}
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;


