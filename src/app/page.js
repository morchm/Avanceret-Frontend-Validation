"use client";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import { Container, Row, Col, FormGroup, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //Installer bootstrap for at denne virker
import { yupResolver } from "@hookform/resolvers/yup"; //Valider data via skema
import * as yup from "yup";

export default function Home() {

  const schema = yup.object().shape({
    firstName: yup
    .string()
    .required('Your name is required'),

    age: yup
    .number()
    .typeError('Your age is required')
    .required('Has to be filled')
    .min(18, 'You have to be over the age of 18')
    .max(99, 'You have to be under the age of 99'),

    email: yup
    .string()
    .email('Invalid email format')
    .required('Your email is required'),


    terms: yup
    .bool()
    .oneOf([true], 'Agree on terms and conditions')

  });

  const { register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <></>
    // <div id={styles.formContainer}>
    //   <h1>Validering</h1>
    //   <form onSubmit={handleSubmit(onSubmit)}>

    //     {/* ---- FIRST NAME ---- */}
    //     <Row className="mb-3">
    //       <FormGroup>
    //         <Col>
    //           <label>FirstName</label>
    //         </Col>
    //         <Col>
    //           <input
    //             id="firstName"
    //             type="text"
    //             className="form-control"
    //             {...register("firstName", { required: true, maxLength: 10 })}
    //           />
    //           <FormText color="muted">
    //             {errors.firstName?.message}
    //           </FormText>
    //         </Col>
    //       </FormGroup>
    //     </Row>


    //     {/*---- AGE ----*/}
    //     <Row className="mb-3">
    //       <FormGroup>
    //         <Col>
    //           <label>Age</label>
    //         </Col>
    //         <Col>
    //           <input id="age" type="number" className="form-control" 
    //           {...register("age", {required: true, min: 18, max: 99})}/>
    //           <FormText color="muted">
    //             {errors.age?.message}
    //           </FormText>
    //         </Col>
    //       </FormGroup>
    //     </Row>

    //     {/*---- EMAIL ----*/}
    //     <Row className="mb-3">
    //       <FormGroup>
    //         <Col>
    //         <label>Email</label>
    //         </Col>
    //         <Col>
    //         <input id="email" type="email" className="form-control"
    //         {...register("email", {required:true})}/>
    //         <FormText>{errors.email?.message}</FormText>
    //         </Col>
    //       </FormGroup>
    //     </Row>

    //     <Row className="mb-3">
    //       <FormGroup>
    //         <Col>
    //           <button className="float-end btn btn-secondary">Submit</button>
    //         </Col>
    //       </FormGroup>
    //     </Row>

    //     {/* ---- CHECK ---- */}
    //     <Row className="mb-3">
    //       <FormGroup>
    //       <input
    //       name="terms"
    //       type="checkbox"
    //       {...register('terms')}
    //       id="terms"
    //       className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}/>

    //       <label>Accept Terms & Conditons</label>
    //       <div className="invalid-feedback">{errors.terms?.message}</div>
    //       </FormGroup>
    //     </Row>


    //   </form>
    // </div>
  );
}
