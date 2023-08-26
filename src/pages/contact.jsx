import Form from "react-bootstrap/Form";
function Contact() {
  return (
    <div className="mx-auto d-flex flex-column justify-content-start align-items-center h-100 formContainer">
      <Form className="card m-5 col-lg-5 form">
        <h1 className="Title">Contact Me!</h1>
        <div>
          <Form.Group
            className="mb-3 formGroup"
            controlId="exampleForm.ControlInput1"
          >
            {/* <Form.Label>Name:</Form.Label> */}
            <Form.Control
              className="control"
              type="text"
              placeholder="First and last name"
            />
          </Form.Group>
        </div>

        <div>
          <Form.Group
            className="mb-3 formGroup"
            controlId="exampleForm.ControlInput1"
          >
            {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control
              className="control"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group
            className="mb-3 formGroup"
            controlId="exampleForm.ControlTextarea1"
          >
            {/* <Form.Label>Commment here:</Form.Label> */}
            <Form.Control
              className="control commentControl"
              as="textarea"
              rows={20}
              placeholder="Add your comment here"
            />
          </Form.Group>
        </div>
        <div className="container">
          <div id="subButtonContainer">
            <input id="submitButton" type="submit" value="send" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Contact;
