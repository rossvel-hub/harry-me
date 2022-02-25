import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody, FormGroup, Input, Label, Button } from 'reactstrap';

export default function ModalAgregar() {
  const [modal, setModal] = useState(false);

  const abrirCerarModal = () => {
    setModal(!modal);
  }

  const modalStyles = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  const modalBodyStyles = {
    display: 'flex',
    position: 'relative',
    flex: '1 1 auto',
    padding: '1rem',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '4px 2px',
    padding: '16px 24px',
    height: '60vh'
  }

  return (
    <>
      <div className="princial">
        <div className="secundario">
          <button className="agregar-modal" onClick={() => { abrirCerarModal() }} >AGREGAR</button>
        </div>
      </div>

      <Modal className="modal-content" isOpen={modal} style={modalStyles}>
        <ModalHeader>
          <Button className="btn-cerrar-modal" onClick={() => abrirCerarModal()}>X</Button>
          AGREGAR UN PERSONAJE
        </ModalHeader>

        <ModalBody style={modalBodyStyles}>
          <FormGroup>
            <Label>NOMBRE</Label>
            <Input className="input-focus" type="text" id="personaje"></Input>
          </FormGroup>
          <FormGroup>
            <Label>CUMPLEAÑOS</Label>
            <Input className="input-focus" type="text" id="personaje"></Input>
          </FormGroup>
          <FormGroup>
            <Label>COLOR DE OJOS</Label>
            <Input className="input-focus" type="text" id="personaje"></Input>
          </FormGroup>
          <FormGroup>
            <Label>COLOR DE PELO</Label>
            <Input className="input-focus" type="text" id="personaje"></Input>
          </FormGroup>
          <FormGroup>
            <Label>CASA</Label>
            <Input className="input-focus" type="text" id="personaje"></Input>
          </FormGroup>
          <div className="bloque-options">  
            <FormGroup divider>
              <div>
                <Label>GENERO</Label>
                <Input type="radio" value="Male" name="gender" /> Male
                <Input type="radio" value="Male" name="gender" /> Female
              </div>
            </FormGroup>
            <FormGroup divider>
              <div>
                <Label>POSICION</Label>
                <Input type="radio" value="Student" name="gender" /> Estudiate
                <Input type="radio" value="Staff" name="gender" /> Staff
              </div>
            </FormGroup>
            <FormGroup>
              <Label>STATUS</Label>
              <div>
                <Input type="radio" value="Other" name="gender" /> Vivo
                <Input type="radio" value="Other" name="gender" /> Muerto
              </div>
            </FormGroup>
          </div>
          <div className="btn-center">
          <Button className="btn-guardar-modal">GUARDAR</Button>
          </div>

        </ModalBody>

        {/* <ModalFooter>
          <div className="btn-center">
          <Button className="btn-guardar-modal">GUARDAR</Button>
          </div>
        </ModalFooter> */}

      </Modal>
    </>
  );
};