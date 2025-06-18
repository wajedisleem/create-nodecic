import express from 'express';
import router from './routes.js';
import notFoundHandler from './handlers/notfound.handler.js';
import errorHandler from './handlers/error.handler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.use(router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port);
});
