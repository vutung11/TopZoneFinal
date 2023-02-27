import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        validateYupSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Min5')
                .max(10, 'Max 10')
                .required('Please fill'),
            email: Yup.string()
                .min(6, 'Min 6')
                .max(20, 'Max 20')
                .required('Please 20')
        }),
        onSubmit: (values) => {
        }
    })
    return (
        <div>
            <h2>Hello First Code</h2>
            <form onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name && formik.touched.name && <p>{formik.errors.name}</p>}
                <label>Email</label>
                <input type='email' name='email' value={formik.values.email} onChange={formik.handleChange} />

                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}
export default Register;