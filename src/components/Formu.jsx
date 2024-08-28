import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Formu = () => {
    const [form, formChange] = useState(false);
    return (
		<>
			<Formik
					onSubmit={(value, { resetForm }) => {
						resetForm();
						console.log(value);
						formChange(true);
						setTimeout(() => formChange(false), 3000);
					}}
					initialValues={{
						name: '',
						email: '',
					}}
					validate={(values) => {
						let errors = {};

						if (!values.name) {
							errors.name = 'Ingresa name';
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
							errors.name = 'Name is invalid';
						}

						if (!values.email) {
							errors.email = 'Ingresa email';
						} else if (
							!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
								values.email,
							)
						) {
							errors.email = 'Email is invalid';
						}

						return errors;
					}}>
					{({ errors }) => (
						<Form className='Form'>
							<div>
								<label htmlFor='name'>Name</label>
								<Field
									type='text'
									id='name'
									name='name'
									placeholder='Jhon Doe'
								/>
								<ErrorMessage
									name='name'
									component={() => <div className='error'>{errors.name}</div>}
								/>
							</div>
							<div>
								<label htmlFor='email'>Correo</label>
								<Field
									type='email'
									id='email'
									name='email'
									placeholder='correo@correo.com'
								/>
								<ErrorMessage
									name='email'
									component={() => <div className='error'>{errors.email}</div>}
								/>
							</div>
							<div>
								<Field name='Country' as='select'>
									<option value='Col'>Col</option>
									<option value='Esp'>Esp</option>
									<option value='Can'>Can</option>
								</Field>
							</div>
							<div>
								<label>
									<Field type='radio' name='sexo' value='Man' /> Man
								</label>
								<label>
									<Field type='radio' name='sexo' value='Women' /> Women
								</label>
                        </div>
                        <div>
                            <Field name='Message' as='textarea' placeholder='Message' />
                        </div>

							<button type='submit'>Send</button>
							{form && <p className='check'>Form Send</p>}
						</Form>
					)}
			</Formik>
			
			{/* <Formik
					onSubmit={(value, {resetForm}) => {
                        resetForm();
                        console.log(value);
                        formChange(true);
                        setTimeout(() => formChange(false), 3000)
					}}
					initialValues={{
						name: '',
						email: '',
					}}
					validate={(values) => {
						let errors = {};

						if (!values.name) {
							errors.name = 'Ingresa name';
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
							errors.name = 'Name is invalid';
						}

						if (!values.email) {
							errors.email = 'Ingresa email';
						} else if (
							!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
								values.email,
							)
						) {
							errors.email = 'Email is invalid';
						}

						return errors;
                }}>
                
					{({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <form className='Form' onSubmit={handleSubmit}>
							<div>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Jhon Doe'
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.name && errors.name && <div className='error'>{errors.name}</div>}
							</div>
							<div>
								<label htmlFor='email'>Correo</label>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='correo@correo.com'
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{touched.email && errors.email && <div className='error'>{errors.email}</div>}
							</div>
                        <button type='submit'>Send</button>
                        {form && <p className="check">Form Send</p>}
						</form>
					)}
			</Formik> */}
		</>
	);
};