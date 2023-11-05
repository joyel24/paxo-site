/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import User, { UserType } from 'App/Models/User'
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


// ----------------------------------------------
// Main routes
// ----------------------------------------------
Route.group(() => {
  Route.get('/', 'CoreController.index')
  Route.get('contact', 'CoreController.contact')
  Route.get('contribute', 'CoreController.contribute')
  Route.get('projects', 'CoreController.projects')
  Route.get('press', 'PressController.index')
})

// ----------------------------------------------
// Tutorials
// ----------------------------------------------
Route.group(() => {
  Route.get('/', 'TutorialsController.index').as('tutorials.index')
  Route.get('/t/:id', 'TutorialsController.viewTutorial').as('tutorials.viewTutorial')
  Route.get('/t/:id/view', 'TutorialsController.viewStep').as('tutorials.viewStep')
  Route.get('/t/:id/end', 'TutorialsController.stepEnd').as('tutorials.stepEnd')
})
  .prefix('/tutorials')

// // ----------------------------------------------
// // Auth
// // ----------------------------------------------
// Route.group(() => {
//   Route.group(() => {
//     Route.get('/', 'UsersController.index')
//       .as('auth')
//     Route.post('/', 'UsersController.check')
//       .as('auth.post')

//     Route.get('/register', 'UsersController.register')
//       .as('auth.register')
//     Route.post('/register', 'UsersController.store')
//       .as('auth.register.post')

//     Route.get('/login', 'UsersController.login')
//       .as('auth.login')
//     Route.post('/login', 'UsersController.loginProcess')
//       .as('auth.login.post')

//     Route.get('/complete', 'UsersController.complete')
//       .as('auth.complete')
//   }).middleware('authFlow')

//   Route.post('/logout', 'UsersController.logoutProcess')
//     .as('auth.logoutProcess')
// }).prefix('/auth')

// // ----------------------------------------------
// // Dashboard
// // ----------------------------------------------
// Route.get('/dashboard', 'DashboardController.index')
//   .middleware('auth')
//   .as('dashboard')

// // ----------------------------------------------
// // Admin panel
// // ----------------------------------------------
// Route.group(() => {
//   Route.get('/', 'AdminController.index')
//     .as('adminPanel.index')

//   Route.get('/:model', 'AdminModelController.index')
//     .as('adminPanel.model.index')

//   Route.get('/:model/i/:id', 'AdminModelController.view')
//     .as('adminPanel.model.view')

//   Route.get('/:model/create', 'AdminModelController.create')
//     .as('adminPanel.model.create')
//   Route.post('/:model/create', 'AdminModelController.createProcess')

//   Route.get('/:model/i/:id/update', 'AdminModelController.update')
//     .as('adminPanel.model.update')
//   Route.post('/:model/i/:id/update', 'AdminModelController.updateProcess')

//   Route.get('/:model/i/:id/delete', 'AdminModelController.delete')
//     .as('adminPanel.model.delete')
//   Route.post('/:model/i/:id/delete', 'AdminModelController.deleteProcess')
// })
//   .middleware('auth')
//   .prefix('/admin-panel')

// if (process.env.NODE_ENV == "development") {
//   Route.get('/loginAsUid/:uid', async ({ params, auth, response, session }: HttpContextContract) => {
//     await auth.loginViaId(params.uid)
//     session.flash({ success: "Logged in as " + auth.user?.username })
//     return response.redirect().back()
//   })
//   Route.get('/setAsAdmin/:uid', async ({ params, response, session }: HttpContextContract) => {
//     const user = await User
//       .query()
//       .where('id', params.uid)
//       .firstOrFail()
//     user.type = UserType.ADMIN
//     user.save()

//     session.flash({ success: "Made " + user?.username + " an admin." })

//     return response.redirect().back()
//   })

//   console.warn("Loaded dev routes. This message should not appear in production !")
// }
