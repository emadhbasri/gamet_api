// const swaggerJsdoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')
//
// const options = {
//     swaggerDefinition: {
//         restapi: '3.0.0',
//         info: {
//             title: 'My API',
//             version: '1.0.0',
//             description: 'My REST API',
//         },
//         servers: [
//             {
//                 url: 'http://localhost:1213',
//             },
//         ],
//     },
//     apis: ['./*/rout_*.js'],
// }
//
// const specs = swaggerJsdoc(options)
//
// module.exports = (app) => {
//     app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
// }