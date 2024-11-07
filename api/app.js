import express from 'express';

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send({ message: "Hello from the Express server!" });
});

app.listen(8800, () => {
    console.log('server is running')
})