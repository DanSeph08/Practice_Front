import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

export const FormYup = () => {
    const [form, formChange] = useState(false);
    
    const schema = Yup.object().shape({
			name: Yup.string()
				.required('Campo Necesario')
				.matches(/^[a-zA-ZÀ-ÿ\s]{1,40}$/, 'Invalid')
				.max(25, 'Maximo 25')
				.min(5, 'Min 5'),
			email: Yup.string()
				.required('Campo Necesario')
				.matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid')
				.email('Email Invalid')
				.max(255, 'Max 255 Characters'),
		});

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
                validationSchema={schema}
            >
                
				{({ errors }) => (
					<Form className='Form'>
						<div>
							<label htmlFor='name'>Name</label>
							<Field type='text' id='name' name='name' placeholder='Jhon Doe' />
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
		</>
	);
};