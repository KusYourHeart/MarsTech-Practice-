import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from '@/styles/email.module.scss';
import transporter from './Mailer'; // Импортируйте transporter из mailer.js

function Email() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mailOptions = {
      from: email,
      to: 'vincent.freeman@list.ru', // Замените на адрес получателя
      subject: 'Сообщение с вашего сайта',
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions); // Отправляем сообщение с использованием Nodemailer
      alert('Сообщение успешно отправлено');
      handleClose();
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
      alert('Произошла ошибка при отправке сообщения');
    }
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
              />
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
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={styles.card_color}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Email;