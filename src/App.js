//import logo from './logo.svg';
import './App.css';

import { Form, Formik } from 'formik';
//import * as Yup from "yup";
import './App.css';



function App() {

  let initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-12'>
          <Formik
            initialValues={initialValues}
            //validationSchema={signupSchema}
            onSubmit={(values) => {
              console.log("values:", values);
              alert("Voila...Form is submitted!")
            }}
          >
            {({ touched, errors }) => {
              return <div>
                <div className='row' mb-5>

                  <div className='col-lg-12 text-center'>
                    <h1 className='mb-5'>Sign up</h1>
                  </div>

                  <Form>

                    <div className='Form-group'>
                      <label htmlFor='firstName'>FirstName</label>
                      <field
                        name="firstName"
                        type="text"
                        placeholder="FirstName"
                        className={``}

                      />
                    </div>

                    <div className='Form-group'>
                      <label htmlFor='LastName'>LastName</label>
                      <field
                        name="lastName"
                        type="text"
                        placeholder="LastName"
                      />
                    </div>



                    <div className='Form-group'>
                      <label htmlFor='age'>Age</label>
                      <field
                        name="age"
                        type="integer"
                        placeholder="Age"
                      />
                    </div>



                    <div className='Form-group'>
                      <label htmlFor='gender'>Gender</label>
                      <field
                        name="gender"
                        type="text"
                        placeholder="Gender"
                      />
                    </div>



                    <div className='Form-group'>
                      <label htmlFor='email'>Email</label>
                      <field
                        name="email"
                        type="email"
                        placeholder="email"
                      />
                    </div>



                    <div className='Form-group'>
                      <label htmlFor='Password'>Password</label>
                      <field
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>


                    <div className='Form-group'>
                      <label htmlFor='Confirm Password'>Confirm Password</label>
                      <field
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </Form>

                </div>
              </div>
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
