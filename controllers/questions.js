const axios = require('axios');
const Question = require('../models/question');

module.exports = {
    index,
    create,
}

// grab all of the questions and answers
async function index(req, res) {
    let questions = await Question.find({});
    res.json(questions);
}

// contact the Wolfram alpha API using the question that got passed in via req.body
// if the answer from Wolfram is a valid answer, save the answer to the database and return the new document
// otherwise, return an error of some kind to be handled on the front-end
function create(req, res) {
    console.log('HELLO WORLD', req.body);
    axios.get(`http://api.wolframalpha.com/v1/result?appid=${process.env.WOLFRAM_KEY}&i=${req.body.question}`)
    .then(function (response) {
        // handle success
        // add the answer property to req.body
        req.body.answer = response.data;
        Question.create(req.body).then(question => res.json(question));
    })
    .catch(function (error) {
        // handle error
        res.json({error: 'not a valid question'});
    });
}