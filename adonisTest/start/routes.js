'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Route.get('/users', () => {
//   return { greeting: 'Hello world usuarios' }
// })


Route.post('users/registr', 'UserController.store');
Route.post('users/login', 'UserController.login');
Route.get('projects', 'ProyectController.index');
Route.post('projects', 'ProyectController.create');
Route.delete('projects/:id','ProyectController.destroy');
Route.patch('projects/:id','ProyectController.update');


Route.group(() => {
    //Route.post('users/login', 'UserController.login');
}).prefix('/api/v1/').middleware('auth');

//EL .middleware('auth') se puede agregar individual pero es más seguro en grupo

