const express = require('express')
const router = express.Router()

class Panier {
    constructor() {
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.items = []
    }
}

router.use((req, res, next) => {
    if (typeof req.session.panier === 'undefined') {
        req.session.panier = new Panier()
    }
    next()
})

router.route('/panier')

    .get((req, res) => {
        res.json(req.session.panier)
    })

    .post(async (req, res) =>{
        const product = req.body.product
        const quantity = parseInt(req.body.quantity)

        const newProduct = {
            product,
            quantity,
        }

        req.session.panier.panier.push(newProduct)
        req.session.panier.updatedAt = new Date()

        res.send()
    })

module.exports = router
