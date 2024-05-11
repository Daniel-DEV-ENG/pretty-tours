
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function NavigateToLogin  ({open,setModalIsOpen}){
console.log("🚀 ~ NavigateToLogin ~ open:", open)
const router = useRouter();
const navigateToLogin=()=>{
    console.log('it workec done ......')
    router.push('/auth/login');
}


    return(

        <>
   <Modal show={open} onHide={() => setModalIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>you dont have access </Modal.Title>
        </Modal.Header>
        <Modal.Body>would you like to login </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalIsOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={navigateToLogin}>
            login
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    )

}