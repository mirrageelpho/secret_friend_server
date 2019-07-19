const jwt = require('jsonwebtoken')
require('dotenv/config')

module.exports = (req, res, next) =>{
	const header = req.headers.authorization;

	if(!header)
		return res.status(401).json('Token_not_json')
	const parts = header.split(' ');

	if(!parts.lenght === 2)
		return res.status(401).json('Token_error');

	const [ scheme, token ] = parts;

	if(!/^Bearer$/i.test(scheme))
		return res.status(401).json('Incorrect_token');

	jwt.verify(token, process.env.KEY, (err, decoded)=>{
		if(err) return res.status(401).json('Invalid_token')
		req.name = decoded.name
		req.email = decoded.email
		return next();
	});

};