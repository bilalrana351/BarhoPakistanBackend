const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (token === undefined) 
        return res.sendStatus(401); // If no token, return unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // If token is invalid, return forbidden

        // Extract the username from the decoded token
        const username = decoded.username; // Assuming the username is stored in the token under the 'username' field
        
        // Optionally, attach the username to the request object for further use
        req.username = username;
        next();
    });
};

module.exports = authenticateToken;