var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing.js')

/* GET home page. */
router.get('/', landing.get_landing);

/* Submit an email */
router.post('/', landing.submit_email);

/* GET all emails */
router.get('/emails', landing.show_emails)

/* GET individual email */
router.get('/email/:email_id', landing.show_email)

/* GET edit and post an email */
router.get('/email/:email_id/edit', landing.show_edit_email)
router.post('/email/:email_id/edit', landing.edit_email)


module.exports = router;
