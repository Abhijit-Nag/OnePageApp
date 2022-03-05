import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


export default function Footerandmodal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='inputbox'>
                <ol>Email Id</ol>
                <input type="text" placeholder="Your Email Id..." />
                <ol>Password</ol>
                <input type="password" placeholder="Your Password..." />

            </div>














            <Button variant="primary" onClick={handleShow} className="submit">
                Submit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>WDCT ,CCA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for your submission ! will reach out soon!

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>





        </>
    )
}
