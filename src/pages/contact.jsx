import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <div className="formContainer">
       <Form className="form">
        <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Control className="control" type="text" placeholder="First and last name" />
      </Form.Group>
      <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control className="control" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Commment here:</Form.Label>
        <Form.Control className="control commentControl" as="textarea" rows={20} placeholder="Add your comment here"/>
      </Form.Group>
      <div id="subButtonContainer">
       <input id="submitButton" type="submit" value="send" /> 
      </div>
    </Form> 
    </div>
    
  );
}

export default Contact;