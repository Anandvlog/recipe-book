import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../../Data/data';
import Form from 'react-bootstrap/Form';

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [data, setData] = useState([]);
    const handleSubmit =(e) =>{
        e.preventdefault();
    }
    const handlerAdd = () =>{
        console.log("sdcbdjdb");
    }
  
  return (
    <>
    <Container>
       <Row>
          {data.recipes.map((items,index)=>{
              return(
                <>
                <div className='col-lg-6' key={index.id}>
                <div className="card mb-4">
                    <div className="row g-4">
                        <div className="col-md-5">
                        <img src={items.img} className="img-fluid rounded-start recipe-img" alt="recipe-img" />
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title recipe-heading">{items.name}</h5>
                            <p className='recipe-title'>Ingredients</p>
                            <ul className='ingredients-list'>
                            {items.ingredients.map((list) =>{
                                return <li>{list}</li>                                 
                            })}
                            </ul>
                            <p className='recipe-title'>Instructions</p>
                            <p className="card-text">{items.instructions.join(  )}</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </>
              )
          })}
          <div className='col-12'>
          <button className='btn btn-md btn-primary me-auto mb-4 text-cap' onClick={handleShow}>Add recipe</button>         
          </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="ingredients">
        <Form.Label>Add Ingredients</Form.Label>
        <Form.Control type="text" placeholder="Enter ingredients" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="instruction">
        <Form.Label>Add Instructions</Form.Label>
        <Form.Control type="text" placeholder="Enter instruction" />
      </Form.Group>
      <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
      <Button variant="primary" onClick={handlerAdd}>
            Add
          </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
         
          
        </Modal.Footer>
      </Modal>
       </Row>
    </Container>
    </>
  )
}

export default Home