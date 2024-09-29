// app.js (or server.js)
require('dotenv').config({
    path: '.env'
});
const express = require('express');
const loginRoute = require('./routes/auth/login');
const signupRoute = require('./routes/auth/signup');
const recommenderRoute = require('./routes/ai/recommendCareer/recommend');
const questionRoute = require('./routes/ai/recommendCareer/question');
const qualityRoute = require('./routes/ai/recommendCareer/qualities');

const topicScorerScoreRoute = require('./routes/ai/topicScorer/score');
const topicScorerQuestionRoute = require('./routes/ai/topicScorer/question');
const topicExplainerQuestionRoute = require('./routes/ai/topicExplainer/question');
const roadmapperSubmodulesRoute = require('./routes/ai/roadmapper/submodules');
const roadmappertopicsRoute = require('./routes/ai/roadmapper/topics');

const completeTopicUpdateRoute = require('./routes/update/topic/complete')

const saveMessagesRoute = require('./routes/save/messages');
const saveScoreRoute = require('./routes/save/score');
const saveModuleRoute = require('./routes/save/module');
const saveSubmoduleRoute = require('./routes/save/submodule');
const saveTopicRoute = require('./routes/save/topic');

const getMessagesRoute = require('./routes/retrieve/messages');
const getModulesRoute = require('./routes/retrieve/module');
const getSubmodulesRoute = require('./routes/retrieve/submodule');
const getTopicsRoute = require('./routes/retrieve/topic');

const retrieveModulesRoute = require('./routes/retrieve/modules')

const logger = require('./middlewares/utils/logger');

const dbConnect = require('./utils/dbConnect');

const app = express();

const cors = require('cors');

// var corsOptions = {
//     origin: 'https://barho-pakistan-frontend.vercel.app/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }


// app.use(cors(corsOptions)); // We can configure the other options later

// Set up CORS to allow only requests from the specific origin

const allowedOrigin = "https://barho-pakistan-frontend.vercel.app"

app.use(cors({
    origin: function (origin, callback) {
      // If the request comes from the allowed origin, allow it
      if (origin === allowedOrigin) {
        callback(null, true);
      } else {
        // If the request comes from an unapproved origin, block it
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

// app.use(cors())

app.use(express.json());

// Connect to mongodb
dbConnect();

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World awesome')
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
    console.log(err.stack)
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
