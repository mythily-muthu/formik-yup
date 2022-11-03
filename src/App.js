
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import './App.css';



function App() {

  let initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  let signupSchema = Yup.object().shape({

    firstName:
      Yup.string()
        .min(3, "*Please enter valid first name!")
        .required("*Please enter first name!"),

    lastName:
      Yup.string()
        .min(3, "*Please enter valid last name!")
        .required("*lease enter last name!"),

    age:
      Yup.number()
        .required("*Age cannot be empty!"),

    email:
      Yup.string()
        .email("*should be valid email")
        .required("*Please enter email!"),

    password:
      Yup.string()
        .min(4, "*Password should contain more than 3 characters.")
        .max(9, "*Password shouldn't exceed 9 characters.")
        .required("*Please enter Password!"),

    confirmPassword:
      Yup.string()
        .required("*Please confirm your Password!"),

  })



  return (
    <div className="container  sign_up_form_container" >
      <div className='row'>
        <div className='col-lg-12'>

          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={(values) => {
              console.log("Submitted values:", values);
              alert("Voila...Form is submitted!")
            }}
          >
            {({ touched, errors, values }) => {
              return <div>
                <div className='row' mb-5>

                  <div className='col-lg-12 text-center'>
                    <h1 className='m-5'>Sign up</h1>
                  </div>

                  <Form>

                    <div className='Form-group'>
                      <label htmlFor='firstName'>FirstName</label>
                      <Field
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        placeholder="FirstName"
                        className={`mb-3 mt-2 form-control w-75 ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}

                      />
                      <ErrorMessage name='firstName' />
                    </div>


                    <div className='Form-group'>
                      <label htmlFor='LastName'>LastName</label>
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="LastName"
                        value={values.lastName}
                        className={`mb-3 mt-2 form-control ${touched.lastName && errors.lastName ? " is-invalid" : ""}`}
                      />
                      <ErrorMessage name='lastName' />
                    </div>


                    <div className='Form-group'>
                      <label htmlFor='age'>Age</label>
                      <Field
                        name="age"
                        type="integer"
                        placeholder="Age"
                        value={values.age}
                        className={`mb-3 mt-2 form-control ${touched.age && errors.age ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage name='age' />
                    </div>


                    <div className='Form-group'>
                      <label htmlFor='email'>Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="email"
                        value={values.email}
                        className={`mb-3 mt-2 form-control
                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage name='email'

                      />
                    </div>


                    <div className='Form-group'>
                      <label htmlFor='Password' >Password</label>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        className={`mb-3 mt-2 form-control
                        ${touched.password && errors.password && "is-invalid"}`}
                      />
                      <span className='text-danger'>
                        <ErrorMessage name='password' />
                      </span>
                    </div>


                    <div className='Form-group'>
                      <label htmlFor='Confirm Password'>Confirm Password</label>
                      <Field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        className={`mt-2 form-control ${touched.confirmPassword && errors.confirmPassword ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage name='confirmPassword' />
                    </div>

                    <div className='mt-4 d-flex justify-content-center' >
                      <button
                        type='submit'
                        className='btn btn-info'>Sign Up</button>
                    </div>



                  </Form>

                </div>
              </div>
            }}
          </Formik>
        </div >
      </div >
    </div >
  );
}

export default App

