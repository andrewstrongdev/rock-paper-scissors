const hallOfFame = ['john', 'jacob', 'Mckay', 'andrew', 'kyle']


module.exports = {
    getHall: (req, res) => {
        console.log('hit server')
        res.status(200).send(hallOfFame)
    },
    postHall: (req, res) => {
        console.log(req.body)
        
    }
}