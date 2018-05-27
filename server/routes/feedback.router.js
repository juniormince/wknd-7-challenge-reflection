const router = require('express').Router();

const pool = require('../modules/pool');


// GET feedback
router.get('/', (req, res) => {
    console.log('GET /api/feedback');
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

router.post('/', (req, res) => {
    console.log('POST /api/feedback', req.body);
    const feedback = req.body;
    const queryText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('ROUTER ERROR POST /FEEDBACK', error);
            res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    console.log('DELETE /api/feedback', req.params);
    const feedbackId = req.params.id;
    pool.query('DELETE FROM "feedback" WHERE "id" = $1;', [feedbackId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('ROUTER ERROR DELETE GENRE', error);
            res.sendStatus(500);
        });
});





module.exports = router;