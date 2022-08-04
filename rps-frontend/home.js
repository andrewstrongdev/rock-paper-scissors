// const { resolve } = require("path")

// const { default: axios } = require("axios")

const getHallButton = document.getElementById("getHallofFame")
const hallSection = document.getElementById("theHall")



const getHallOfFame = () => {

    console.log('hit the button')
    axios.get(`http://localhost:4004/api/hall`)
    .then(res => {
        console.log(res.data)
    //    const hallNames = res.data.map(el => {
    //         return [<h3>${el}</h3>]
    //     })
        // hallSection.append(hallNames)
        // document.getElementById("theHall").innerHTML = hallNames

        res.data.forEach(el => {
            let h3 = document.createElement("h3")
            h3.innerHTML = el
            hallSection.append(h3)
        })
    })

}

const postHall = (name) => {
    axios.post(`http://localhost:4004/api/hall`, {hallName: name})
    .then(res => {
        hallSection = ''
        res.data.forEach(el => {
            let h3 = document.createElement("h3")
            h3.innerHTML = el
            hallSection.append(h3)
        })
    })
}

getHallButton.addEventListener('click', getHallOfFame)
postNameButton.addEventListener('click', postHall())