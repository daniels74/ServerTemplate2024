import express from 'express';
import morgan from 'morgan'; // A logger for every requests.
import helmet from 'helmet';
import healthcheck from './routes/healthcheck.js';
import NotFoundError from './errors/not-found-error.js';
import errorHandler from './middleware/error-handler.js';

// === Variables ===
const app = express();
const PORT = process.env.PORT || 4000;

// === Middleware ===
app.use(helmet());
app.use(express.static('public'));
app.use(morgan('dev')); 
app.use(express.json()); // send data in body
app.use(express.urlencoded({extended: true})); // send data through url

// === Routes ===
app.use(`/api/v1/health-check`, healthcheck);

app.get(`/docs`, (req, res) => {
    res.send(`docs...`)
});

// === Catch all incorrect routes ===
app.all(`*`, (req, res) => {
    // res.status(404).send(`<h1>Page not found</h1>`)
    throw new NotFoundError();
})

// === Errors Middleware ===
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});