// app.js (or server.js)
require('module-alias/register'); // This will help in using the @ alias
require('dotenv').config({
    path: '.env'
});
const express = require('express');
const loginRoute = require('./src/routes/auth/login');
const signupRoute = require('./src/routes/auth/signup');
const recommenderRoute = require('./src/routes/ai/recommendCareer/recommend');
const questionRoute = require('./src/routes/ai/recommendCareer/question');
const qualityRoute = require('./src/routes/ai/recommendCareer/qualities');

const topicScorerScoreRoute = require('./src/routes/ai/topicScorer/score');
const topicScorerQuestionRoute = require('./src/routes/ai/topicScorer/question');
const topicExplainerQuestionRoute = require('./src/routes/ai/topicExplainer/question');
const roadmapperSubmodulesRoute = require('./src/routes/ai/roadmapper/submodules');
const roadmappertopicsRoute = require('./src/routes/ai/roadmapper/topics');

const completeTopicUpdateRoute = require('./src/routes/update/topic/complete')

const saveMessagesRoute = require('./src/routes/save/messages');
const saveScoreRoute = require('./src/routes/save/score');
const saveModuleRoute = require('./src/routes/save/module');
const saveSubmoduleRoute = require('./src/routes/save/submodule');
const saveTopicRoute = require('./src/routes/save/topic');

const getMessagesRoute = require('./src/routes/retrieve/messages');
const getModulesRoute = require('./src/routes/retrieve/module');
const getSubmodulesRoute = require('./src/routes/retrieve/submodule');
const getTopicsRoute = require('./src/routes/retrieve/topic');

const retrieveModulesRoute = require('./src/routes/retrieve/modules')

const logger = require('@/middlewares/utils/logger');

const dbConnect = require('./src/utils/dbConnect');

const app = express();

const cors = require('cors');

// var corsOptions = {
//     origin: 'https://barho-pakistan-frontend.vercel.app/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }


// app.use(cors(corsOptions)); // We can configure the other options later
app.use(cors())

app.use(express.json());

// Connect to mongodb
dbConnect();

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello Worlda')
  }) // Test route

// Use login routes
app.use('/api', loginRoute);

// Use signup routes
app.use('/api', signupRoute);

app.use('/api', recommenderRoute);
app.use('/api', questionRoute);
app.use('/api', qualityRoute);
app.use('/api', topicScorerScoreRoute);
app.use('/api', topicScorerQuestionRoute);
app.use('/api', topicExplainerQuestionRoute);
app.use('/api', roadmapperSubmodulesRoute);
app.use('/api', roadmappertopicsRoute);
app.use('/api', saveMessagesRoute);
app.use('/api', saveScoreRoute);
app.use('/api', saveModuleRoute);
app.use('/api', saveSubmoduleRoute);
app.use('/api', saveTopicRoute);

app.use('/api', getMessagesRoute);
app.use('/api', getModulesRoute);
app.use('/api', getSubmodulesRoute);
app.use('/api', getTopicsRoute);

app.use('/api',completeTopicUpdateRoute);

app.use('/api',retrieveModulesRoute)

// Error handler for the server
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
