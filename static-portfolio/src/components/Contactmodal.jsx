import React, { useState } from 'react'
import { Modal, Button, ModalBody } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import{faXTwitter}from '@fortawesome/free-brands-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';



function Contactmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='contact-section'>
            <button className='contactbtn fw-bold' onClick={handleShow}>
                Make an enquiry
            </button>

            <Modal
                show={show}
                dialogClassName="my-modal"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            >
                <Modal.Header closeButton style={{ borderBottomStyle: "none" }}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 className='mx-5 fw-bold mt-4'>Get in Touch</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mx-md-5 pt-3" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', gap: "6" }} >

                        <div className='d-flex flex-wrap '>
                            <Form>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                                    
                                    <Form.Control type="email" placeholder="name"  className='formControl' />
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                                
                                    <Form.Control type="email" placeholder="Email"    className='formControl'/>
                                </Form.Group>
                                <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control as="textarea" placeholder="Message" rows={3}  className='formControl' />
                                </Form.Group>
                                <button className='contactbtn mt-2'>Send message</button>
                            </Form>
                            <div className='map'>
                                <iframe width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>

                        <div className='d-md-flex flex-wrap'>  
                            <div className='contactdetails'>
                                <h3  className='mb-4'> <FontAwesomeIcon icon={faLocationDot} /></h3>
                                <h6 >Nigeria, Edo state Benin city.</h6>
                            </div>
                            <div className='contactdetails'>
                                <h3  className='mb-4'> <FontAwesomeIcon icon={faPhoneVolume} /></h3>
                                <h6 > +234 5721 3323</h6>
                            </div>
                            <div className='contactdetails'>
                                <h2 className='mb-4'><FontAwesomeIcon icon={faShareNodes} /></h2>
                                <h5>
                                    <a href="https://www.linkedin.com/in/miracle-osaro-272a90321"><FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "10px" }} /></a>
                                    <a href="https://www.facebook.com/profile.php?id=61560496726757&mibextid=ZbWKwL"> <FontAwesomeIcon icon={faFacebook} style={{ marginRight: "10px" }} /></a>
                                    <a href="https://x.com/Morningsta27984"> <FontAwesomeIcon icon={faXTwitter} /></a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default Contactmodal;
