import express from 'express';

//Import the login controller function
import {login} from '../controllers/loginController';

//Create a new router instance
const router = express.Router();

//Route to handle user login and return a session key
router.get('/:userID/login', login);

//Export the router to be used in the main app
export default router;