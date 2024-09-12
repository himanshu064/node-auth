const { body, validationResult } = require('express-validator');

// Define validation rules as an array
const addTaskValidation = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage('Name cannot be empty and must be a string'),
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Description cannot be empty and must be a string')
];

// Middleware to handle validation results
const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { addTaskValidation, validateResult };
