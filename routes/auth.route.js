const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.post('/register', (req, res) => {
    try {
        const {email, password} = req.body

    } catch (e) {
        res.status(500).json({message: 'что то пошло не так, попробуйте снова'})
    }
})

module.exports = router
