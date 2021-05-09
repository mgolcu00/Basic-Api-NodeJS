const Joi = require('joi') // for validation

const registerValidation = (data) => {
    const scheme = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).required()
    });
    return scheme.validate(data);
}

const loginValidation = (data) => {
    const scheme = Joi.object({
        email: Joi.string().min(3).required().email(),
        password: Joi.string().min(6).required()
    });
    return scheme.validate(data);
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation