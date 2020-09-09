import React from "react";
import Input from "../Input/Input";
import SelectOrigin from "../SelectOrigin/SelectOrigin";

const FormikControl = props => {
  const {control, ...rest} = props

  switch (control) {
    case 'input': return <Input {...rest} />
    case 'select': return <SelectOrigin {...rest} />

    default: return null;
  }
}

export default FormikControl;
