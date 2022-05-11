import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaPen } from "react-icons/fa";
import { searchUser } from "../api"

class ModalUser extends React.Component {
  state = {
    abierto: false,
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });

  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
    return (
      <>
        <div className="principal">
          <div className="secundario">
            <Button color="primary" onClick={this.abrirModal}>
              <FaPen />
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>Data User</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="email">Email: name.test@metamap.com</Label>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.abrirModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ModalUser;
