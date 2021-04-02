const Router = require('express-promise-router')
const asyncHandler = require('express-async-handler')
const { v4: uuidv4 } = require('uuid');
const db = require('../db');

const router = new Router()

// @route       GET api/v1/twoots
// @desc        Get Feed Twoots 
// @access      Public

router.get('/', asyncHandler ( async (req, res, next) => {

    const { rows }  = await db.query('SELECT users.id "userID", twoots.id "twootID", twoots.user_id "twootBY", handle, name, avator, is_verfied, twoots.twoot, twoots.date, twoots.image FROM users LEFT JOIN twoots on users.id = twoots.user_id;');

    res.status(200).json({
        success: true,
        rows
    });
}))

// @route       GET api/v1/twoot/:id
// @desc        Get User Twoots
// @access      Public

router.get('/:id', asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    const { rows } = await db.query('SELECT users.id "userID", twoots.id "twootID", handle, name, avator, is_verfied, twoots.twoot, twoots.date, twoots.image FROM users LEFT JOIN twoots on users.id = twoots.user_id where users.id = $1;', [id])
    res.status(200).json({
        success: true,
        data: rows
    });
}))

// @route       PUT api/v1/twoot/:id
// @desc        Update Twoot
// @access      Private

router.put('/:id', asyncHandler( async (req, res, next) => {
    const { twoot } = req.body;
    const { id } = req.params;
    const { rows } = await db.query('UPDATE twoot SET twoot = $1 where id = $2 returning *;', [twoot, id]);

    res.status(200).json({
        success: true,
        data: rows
    });
}))

// @route       DELETE api/v1/twoot/:id
// @desc        Delete Twoot
// @access      Private

router.delete('/:id', asyncHandler( async (req, res, next) => {

    const { id } = req.params;
    await db.query('DELETE FROM twoots where id = $1;', [id]);

    res.status(200).json({
        success: true,
        data: 'Twoot Deleted'
    });
}))

// @route       POST api/v1/twoots
// @desc        Create Twoot
// @access      Private

router.post('/', asyncHandler( async (req, res, next) => {

    const { user_id, twoot, image } = req.body;
    const id = uuidv4()

    const { rows } =  await db.query('INSERT INTO twoots (id, user_id, twoot, image) VALUES ($1, $2, $3, $4) returning *;', [id, user_id, twoot, image]);
    res.status(201).json({
        success: true,
        rows
    });
}))

module.exports = router