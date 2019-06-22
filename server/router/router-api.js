express = require('express');
const pool = require('../modules/pool')
router = express.Router();
const bodyParser = require('body-parser');
express().use(bodyParser.json()); // needed for angular requests

router.get('/movies', (req, res) => {
    pool.query(`
    SELECT * FROM "movies";
    `).then(result => {
        // console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('error with api/movies get:', error);
        res.sendStatus(500);
    })
})

router.get('/movies_genres/:id', (req, res) => {
    console.log('req.params:',req.params.id)
    pool.query(`
    SELECT * FROM "movies"
    JOIN "movies_genres" ON "movies"."id"="movies_genres"."movies_id"
    JOIN "genres" on "genres"."id"="movies_genres"."genres_id"
    WHERE "movies"."id"=$1;`, [req.params.id]
    )
    .then(result => {
        console.log('result.rows:', result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log('error with api/movies get:', error);
        res.sendStatus(500);
    })
})

module.exports = router