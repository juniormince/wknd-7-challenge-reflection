const router = require('express').Router();

const pool = require('../modules/pool');


// GET feedback
router.get('/', (req, res) => {
    console.log('GET /api/feedback', req.body);
    pool.query(`SELECT * FROM "feedback"`)
    .then(result => {
        console.log(result.rows);
        res.send(result.rows);
    })
    .catch(error => {
        console.log('ROUTER ERROR GET /FEEDBACK', error);
        res.sendStatus(500);
    });
});


module.exports = router;