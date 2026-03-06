function assarPizza(numero) {
    return new Promise((resolve, reject) => {
        console.log(`Assando a pizza ${numero}...`)

        const ok = true

        setTimeout(() => {
            if (ok) {
                console.log(`Pizza ${numero} assada!`)
                resolve(`dados da pizza ${numero}`)
            } else {
                reject(`Erro ao assar a pizza ${numero}`)
            }

        }, 1000)
    })
}

assarPizza(1)
    .then((resultado1) => {
        console.log(resultado1)
        return assarPizza(2) 
    })
    .then((resultado2) => {
        console.log(resultado2)
        return assarPizza(3) 
    })
    .then((resultado3) => {
        console.log(resultado3)
        console.log('Todas as pizzas assadas!')
    })
    .catch((erro) => {
        console.error(erro)
    })
    .finally(() => {
        console.log('Fim do processo de assar pizzas.')
    })
  