import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LocatedInUS = ({ setLocatedInUS, setLargeCorporation }) => {
    const [show, setShow] = useState(false);
    // const history = useHistory()
    const handleLocatedUSYes = () => {
        setLocatedInUS(false);
        setLargeCorporation(true);
    }



    const handleLocatedUSNo = () => {
        // setLocatedInUS(false);
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
        window.location.reload();
    }

    return (
        <div className='card'>
            <h1>Located In US?</h1>
            <div className="btnContainer">
                <button className='gradient-button' onClick={handleLocatedUSYes}>Yes</button>
                <button className='gradient-button ' onClick={handleLocatedUSNo}>No</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Extremely Sorry!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    There is no permission for those who is outside in US !
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Understand
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LocatedInUS;