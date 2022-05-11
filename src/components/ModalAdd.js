import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { addUser } from '../api';

class ModalAdd extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){
    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      width: '100%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={this.abrirModal}> <FaPlus/> Add User</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Add New User
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" id="name"/> 
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email"/> 
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password"/> 
          </FormGroup>
          <FormGroup>
            <Label for="role">Role</Label>
            <Input type="text" id="role"/> 
          </FormGroup>
          <FormGroup>
            <Label for="hub">Hub</Label>
            <Input type="text" id="hub"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary">Guardar</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default ModalAdd;