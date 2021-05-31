

const path = require ('path');
const RouteHandler = require ('express').Router ();
const { home } = require (path.resolve (__dirname, '..', 'controllers', 'home'));
const { order } = require (path.resolve (__dirname, '..', 'controllers', 'order'));
const { success } = require (path.resolve (__dirname, '..', 'controllers', 'success'));

RouteHandler.get ('/', home);
RouteHandler.post ('/order', order);
RouteHandler.get ('/success', success);

module.exports = {
    RouteHandler
}