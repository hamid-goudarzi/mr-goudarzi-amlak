const Joi = require("joi");

const userValidateSchema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.empty': 'نام را وارد کنید',
        'any.required': 'نام الزامی است'
      }),
    lastName: Joi.string().required().messages({
        'string.empty': 'نام خانوادگی را وارد کنید',
        'any.required': 'نام  خانوادگی الزامی است'
      }),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
});

const orderValidateSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required()
});


module.exports = {
    userValidateSchema,
    orderValidateSchema
}