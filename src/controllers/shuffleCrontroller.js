const shuffle = require('../utils/shuffle')
const Friend = require('../models/friends')
const transport = require('../services/nodemailer')

require('dotenv/config')

send_email = async (params = {}) => {
    return await transport.sendMail(params, (err, info)=>{
        if(err) {
            console.log(err);
            return err
        }
        console.log(info.response);
        return info.response;
    })
}

module.exports ={
    shake: async (req, res) =>{
        const guests = await Friend.find()
        const shuffled_list = await shuffle.set_friend(guests)
        const friend_lista_email = await send_email({
            from: process.env.EMAIL_USER, 
            to: req.email,
            subject: '🎁 Amigo Srcreto 🤐 - Lista completa',
            template: 'secret_friend_list',
            context:{shuffled_list}
        })
        res.json(shuffled_list);
    }
}
