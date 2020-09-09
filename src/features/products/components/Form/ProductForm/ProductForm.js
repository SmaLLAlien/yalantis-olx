import React from "react";
import {Formik, Form} from "formik";
import {useSelector} from "react-redux";
import {getOrigins} from "../../../store/selectors/selectors";
import FormikControl from "../FormikControl/FormikControl";
import classes from './ProductForm.module.scss';
import * as Yup from 'yup'


const ProductForm = () => {
  const origins = useSelector(getOrigins);

  const initialValues = {
    name: '',
    origins: '',
    price: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    origins: Yup.string().required('Required'),
  })

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
      {
        (formikProps) => {
          return (
            <Form className={classes.form}>
              <FormikControl
              control='input'
              label='name'
              type='text'
              name='name'
              placeholder='Product name' />

              <FormikControl
                control='input'
                label='price'
                type='number'
                name='price'
                placeholder='Product price'/>

              <FormikControl
                control='select'
                label='origins'
                name='origins'
                options={origins}
                setFieldValue={formikProps.setFieldValue}
                placeholder='Product origin' />

              <button disabled={!formikProps.isValid} className={classes.submit} type='submit'>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default ProductForm;
