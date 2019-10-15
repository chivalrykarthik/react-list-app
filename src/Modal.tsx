import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Preserve from './Preserve';

interface PopupProps{
    isOpen:boolean,
    toggle:any,
    className:any,
    backdrop:boolean
}
const Popup = (props: PopupProps) => {
    return (
        <Modal contentClassName="my-modal" size = 'lg' isOpen={props.isOpen} toggle={props.toggle} className={props.className} backdrop={props.backdrop} >
            <ModalHeader toggle={props.toggle}>Column List</ModalHeader>
            <ModalBody>
                <Preserve />
            </ModalBody>
            <ModalFooter>
				<button className = 'btn btn-success float-right'>Save</button>
			</ModalFooter>
        </Modal>
    );
}
const ModalExample = (props: any) => {
    const {
        buttonLabel,
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <Button className="btn-danger float-right m-1" onClick={toggle}>Setting</Button>
            <Popup isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} />
        </>
    );
}

export default ModalExample;