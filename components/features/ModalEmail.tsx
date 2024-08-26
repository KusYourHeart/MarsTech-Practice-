import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from '@/styles/email.module.scss';

function Email() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Введите корректный адрес электронной почты.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!message || message.length < 10) {
      setMessageError('Сообщение должно содержать не менее 10 символов.');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    const result = await response.json();
    if (result.status === 'Success') {
      alert('Сообщение отправлено успешно');
    } else {
      alert('Ошибка при отправке сообщения');
    }

    handleClose();
  };

  return (
    <>
      <Button variant="" onClick={handleShow} className="btn btn-outline-dark">
        Contact us
      </Button>

      <Modal show={show} onHide={handleClose} className={`${styles.card} contained-modal-title-vcenter`} centered >
        <Modal.Header closeButton className={styles.card_color}>
          <Modal.Title>Contact us</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.card_color}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message:</Form.Label>
              <Form.Control 
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              isInvalid={!!messageError}
              />
              <Form.Control.Feedback type="invalid">{messageError}</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Send
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.card_color}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Email;