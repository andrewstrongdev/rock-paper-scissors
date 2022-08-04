const hallOfFame = ['Jebby', 'Jacob', 'Mckay', 'Shrek', 'Kyle', 'Jimmy Neutron', 'Kiyaaaul']


module.exports = {
    getHall: (req, res) => {
        console.log('hit server')
        res.status(200).send(hallOfFame)
    },
    postHall: (req, res) => {
        console.log(req.body)
        hallOfFame.push(req.body.name)
        res.status(200).send(hallOfFame)
        
    }
}