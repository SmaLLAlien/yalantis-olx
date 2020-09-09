import React from "react";
import {Formik, Form} from "formik";
import {useSelector} from "react-redux";
import {getOrigins} from "../../../store/selectors/selectors";
import FormikControl from "../FormikControl/FormikControl";
import classes from './ProductForm.module.scss';
import * as Yup from 'yup'
import {VALIDATION_MESSAGES} from "../../../../../global/constants";


const ProductForm = () => {
  const origins = useSelector(getOrigins);

  const initialValues = {
    name: '',
    origins: '',
    price: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, VALIDATION_MESSAGES.minLength)
      .max(20, VALIDATION_MESSAGES.maxLength)
      .required(VALIDATION_MESSAGES.nameRequired),
    price: Yup.number()
      .positive(VALIDATION_MESSAGES.positiveNumber)
      .required(VALIDATION_MESSAGES.priceRequired),
    origins: Yup.string()
      .required(VALIDATION_MESSAGES.originRequired),
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
              touched={formikProps.touched}
              errors={formikProps.errors}
              placeholder='Product name' />

              <FormikControl
                control='input'
                label='price'
                type='number'
                name='price'
                touched={formikProps.touched}
                errors={formikProps.errors}
                placeholder='Product price'/>

              <FormikControl
                control='select'
                label='origins'
                name='origins'
                options={origins}
                touched={formikProps.touched}
                errors={formikProps.errors}
                setFieldValue={formikProps.setFieldValue}
                placeholder='Product origin' />

              <button disabled={!(formikProps.isValid && formikProps.dirty)} className={classes.submit} type='submit'>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default ProductForm;
