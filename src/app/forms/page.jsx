"use client";
import styles from "../page.module.css";
import { Container, Row, Col, FormGroup, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //Installer bootstrap for at denne virker

const Page = () => {
  return (
    <>
      <div id={styles.formContainer}>
        <h1>Validering</h1>
        {/* ---- FIRST NAME ---- */}
        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>FirstName</label>
            </Col>
            <Col>
              <input
                id="firstName"
                type="text"
                className="form-control"
                required
                maxLength={15}
                min={2}
                max={99}
              />
            </Col>
          </FormGroup>
        </Row>

        {/*---- AGE ----*/}
        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>Age</label>
            </Col>
            <Col>
              <input id="age" type="number" className="form-control" />
            </Col>
          </FormGroup>
        </Row>

        {/*---- EMAIL ----*/}
        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>Email</label>
            </Col>
            <Col>
              <input id="email" type="email" className="form-control" />
            </Col>
          </FormGroup>
        </Row>

        <Row className="mb-3">
          <FormGroup>
            <Col>
              <button className="float-end btn btn-secondary">Submit</button>
            </Col>
          </FormGroup>
        </Row>

        {/* ---- CHECK ---- */}
        <Row className="mb-3">
          <FormGroup>
            <input name="terms" type="checkbox" />
            <label>Accept Terms & Conditons</label>
          </FormGroup>
        </Row>
      </div>
    </>
  );
};
export default Page;
