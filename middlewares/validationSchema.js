const {body} = require ('express-validator') 

const validationSchema = ()=>{
   return [
    body('Name')
     .notEmpty()
     .withMessage("Name is required"),
    body("Category")
     .notEmpty()
     .withMessage("Category is required"),
    body("Price")
     .notEmpty()
     .withMessage("Price is required"),
    body("imageUrl")
     .notEmpty()
     .withMessage("imageUrl is required")

  ]}

  module.exports = {
    validationSchema
  }