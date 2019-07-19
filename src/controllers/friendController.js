const Friend = require('../models/friends')

module.exports = {
   
    create: async (req, res) =>{
        let { ...data } = req.body
        let friend = await Friend.create(data)
        res.json(friend)
    },

    update: async (req, res) =>{
        let { ...data} = req.body
        let friend = await Friend.updateOne({_id: req.params.id},data)
        res.json(friend)
    },

    findAll: async (req, res) => {
        let friends = await Friend.find().sort({ _id: -1 });
        res.json(friends)
    },
    
    delete: async (req, res) => {
            const friend = await Friend.deleteOne({ _id: req.params.id })
            return res.json(friend)       
    },
}