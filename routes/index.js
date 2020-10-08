var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing.js')

/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit_adress);
router.get('/emails', landing.show_emails)
router.get('/email/:email_id', landing.show_email)

module.exports = router;
