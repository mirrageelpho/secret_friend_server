const User = require('../models/user')
const bcrypt = require('bcryptjs')
require('dotenv/config')
const jwt = require('jsonwebtoken')

generate_token = async (params = {}) => {
    return jwt.sign(params, process.env.KEY, {expiresIn: '2 days',})
}

module.exports = {

    authenticate: async (req, res) =>{
        const {password, email} = req.body
        const user = await User.findOne({email: email})

        if(!user)
            return res.status(401).json('Usuário não encontrado')
        
        const isValidPassrod = await bcrypt.compare(password, user.password)
        if(!isValidPassrod) 
            return res.status(401).json('Senha incorreta')
        
        const token = await generate_token({name: user.name, email: user.email})
        return res.json({token: token, name: user.name, email: user.email})
    },

    create: async (req, res) =>{
        let {password, ...data} = req.body
        password = await bcrypt.hash(password, 10)
        const user = await User.create({
            password: password,
            ...data
        })
        user.password = undefined;
        res.json({user})
    },
}