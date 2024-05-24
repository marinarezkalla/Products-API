const {body} = require ('express-validator') 

const prodValidationSchema = ()=>{
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

  const cartValidationSchema = () =>{
    return [
      body('item')
      .notEmpty()
      .withMessage('Item is required'),
      body('quantity')
      .isInt({ gt: 0 })
      .withMessage('Quantity must be a positive integer'),
      body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be a positive number')
    ]

  }

  module.exports = {
    prodValidationSchema,
    cartValidationSchema
  }