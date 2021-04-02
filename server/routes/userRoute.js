const Router = require('express-promise-router')
const asyncHandler = require('express-async-handler')
const { v4: uuidv4 } = require('uuid');
const db = require('../db');

const router = new Router()

// @route       GET api/v1/twoot/:id
// @desc        Get Twoot
// @access      Public

router.get('/:id', asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM twoot WHERE id = $1;', [id])
    res.status(200).json({
        success: true,
        data: rows
    });
}))


// @route       POST api/v1/twoots
// @desc        Create Twoot
// @access      Private

router.post('/', asyncHandler( async (req, res, next) => {

    const {name, email, day, month, year }

    const twoot = [uuidv4(), 'thiomark', 'Itumeleng', req.body.twoot, req.body.image, new Date().getTime()];
    const { rows } =  await db.query('INSERT INTO twoot (id, handle, name, twoot, image, date) VALUES ($1, $2, $3, $4, $5, $6) returning *;', twoot);
    res.status(201).json({
        success: true,
        rows
    });
}))

module.exports = router