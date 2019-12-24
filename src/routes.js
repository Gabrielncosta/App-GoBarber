import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();


routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
/* routes.get('/', async (req, res) => {
  const user = await User.create({
    name:  'Diego Fernandes',
    emaiL: 'diego@rocketseat.com.br',
    password_hash: '1231236',
  })

  return res.json(user);
}); */

export default routes;