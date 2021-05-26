

const path = require ('path');
const RouteHandler = require ('express').Router ();
const { home } = require (path.resolve (__dirname, '..', 'controllers', 'home'));
const { order } = require (path.resolve (__dirname, '..', 'controllers', 'order'));

RouteHandler.get ('/', home);
RouteHandler.post ('/order', order);

module.exports = {
    RouteHandler
}