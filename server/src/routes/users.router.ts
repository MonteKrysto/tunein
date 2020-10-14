import express, { Request, Response } from 'express';
import { SchemaValidation } from '../middleware/schemaValidation.middleware';
import { signup, signin } from '../validators/user.validator';
import { UserController } from '../controllers/user.controller';

/**
 * Router Definition
 */

const usersRouter = express.Router();
const validator = new SchemaValidation();
const userController = new UserController();

usersRouter.post('/signup',
  validator.validateBody(signup),
  userController.signup
);

usersRouter.post('/signin',
  validator.validateBody(signin),
  userController.signin
);

export { usersRouter };
