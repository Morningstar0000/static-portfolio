import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ModalBody } from "react-bootstrap";
import { useState } from "react";
import { Link } from "@radix-ui/themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import{faInstagram}from '@fortawesome/free-brands-svg-icons';
import{faXTwitter}from '@fortawesome/free-brands-svg-icons';


const Newsdetails = ({ news }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Link size="5" weight="bold"  onClick={handleShow}>
                {news.title}
            </Link>

            <Modal
                show={show}
                size="xl"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        News Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mx-5" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', gap: "6" }} >
                        <img src={news.urlToImage} alt="" style={{ objectFit: 'cover', width: '100%' }} />
                        <h3 className="pt-5">{news.title}</h3>
                        <p className="pt-4">{news.description}</p>
                        <div className="share-icons"> 
                            <h5>share: </h5>
                            <div style={{paddingLeft:"10px"}}>
                            <h5>
                            <FontAwesomeIcon icon={faGithub} style={{marginRight:"10px"}} />
                            <FontAwesomeIcon icon={faFacebook} style={{marginRight:"10px"}} />
                            <FontAwesomeIcon icon={faInstagram} style={{marginRight:"10px"}}  />
                            <FontAwesomeIcon icon={faXTwitter} />
                            </h5>
                            </div>
                       
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Newsdetails;