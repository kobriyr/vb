'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route');

Route.group(() => {
    Route.post('/login', 'AuthController.login')
})
.prefix('api');

Route.group(() => {
    Route.get('/', 'TomController.index')
    Route.get('/all', 'TomController.indexWithArticles')
    Route.get('/:id', 'TomController.show')
    Route.put('/:id', 'TomController.update')
    Route.delete('/:id', 'TomController.delete')
    Route.post('/', 'TomController.store')
}).prefix('api/toms');

Route.group(() => {
  Route.get('/', 'ArticleController.index')
  Route.get('/:id', 'ArticleController.show')
  Route.put('/:id', 'ArticleController.update')
  Route.delete('/:id', 'ArticleController.delete')
  Route.post('/', 'ArticleController.store')
}).prefix('api/articles');

Route.get('public/pdf/:name', ( { request, response } ) => {
  response.download(`public/pdf/${request.params.name}`);
});

Route.any('*', ({ response }) => {
  return response.download('blagovisnik/dist/blagovisnik/index.html')
});
