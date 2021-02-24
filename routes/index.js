var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

let landing = require('../controllers/landing.js')
let user = require('../controllers/user.js')
let question = require('../controllers/question.js')
let exam = require('../controllers/exam.js')

//isLoggenIn: any person
//hasAuth: any admin
let {isLoggedIn, hasAuth} = require('../middleware/hasAuth')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

/* GET home page. */
//TODO: edit landing page
router.get('/', landing.get_landing);

/* TO BE EDITED */
//TODO: Edit to accept exam code instead of email
router.post('/', landing.submit_email);

/* USER HANDLING */
router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
router.get('/logout', user.logout);

router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);

/* QUESTION HANDLING */
router.get('/show_questions', question.show_questions);
router.get('/question/:question_id', question.show_question);

router.get('/add_question', question.show_add_question);
//TODO: rework this in the way that is used for reloading the signup page
router.get('/add_question/num_wrong_answers/:numAns', question.num_wrong_answers, question.show_add_question);
router.post('/add_question', question.submit_question);

router.get('/question/:question_id/edit', question.show_edit_question);

router.post('/question/:question_id/delete-json', question.delete_question_json);

/* EXAM HANDLING */
router.get('/exam', exam.show_exam);

router.get('/create_exam', exam.show_create_exam);
router.post('/create_exam', exam.create_exam);


module.exports = router;

