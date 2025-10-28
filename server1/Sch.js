// import yup from 'yup'
// export const schema = yup,object({
// name: yup.string().required(),
// email: yup.string().email().required(),
// age: yup.number().required(),
// pass: yup.string().min(2).max(4).required()
//  })
// // default export schema;efefef

import * as yup from 'yup'

 const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  pass: yup.string().min(2).max(4).required(),
  age: yup.number().required()
})

export default schema;
//   // (optional, if you want a default export)
