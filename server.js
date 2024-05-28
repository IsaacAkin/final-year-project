import express from 'express';

const app = express();
app.use(express.static('client'));

// Define a route for getting comics. Currently just an array
const comics = [
    "comic 1",
    "comic 2",
    "comic 3",
];

function getComics(req, res) {
    res.json(comics);
}

app.get('/comics', getComics);

app.listen(8080, () => {
    console.log(`Listening on port ${8080}`)
});