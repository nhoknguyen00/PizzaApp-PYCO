import Joi from '@hapi/joi'

export const productSchema = Joi.object({
  _id: Joi
    .string()
    .trim()
    .required()
    .example('5e9e969745787b2cc452754f'),
  title: Joi
    .string()
    .trim()
    .required()
    .example('Marinara Seafood Spaghetti'),
  description: Joi
    .string()
    .trim()
    .required()
    .example('Shrimps, squid rings, capsicum, onions in Bolognese sauce'),
  price: Joi
    .number()
    .required()
    .min(0)
    .example('11'),
  rate: Joi
    .number()
    .min(0)
    .required()
    .example('4.5'),
  imageUrl: Joi
    .string()
    .trim()
    .required()
    .example('https://order.pizzahut.vn/menu/v000001/hk/en/images/FA18.png'),
  category: Joi
    .string()
    .trim()
    .required()
    .example('5e9e969745787b2cc452752f')
}).label('Product')

export const productArraySchema = Joi.array().items(productSchema).label('Product Array')
