//Import Express framework to create the HTTP server
import express from 'express';

//Import route handlers for login and bid features
import loginRoutes from './routes/loginRoutes';
import bidRoutes from './routes/bidRoutes';

//Create an Express application instance
const app = express();

//Port on which the server will listen
const PORT = 4336;

//Parse the raw request body as plain text
app.use(express.text());

//Register login routes and bid routes under the root path
app.use('/', loginRoutes);
app.use('/', bidRoutes);

//Start the server and display the URL once it is running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

