import Fastify from "fastify";

const app = Fastify({
    logger: true,
})

interface Body {
    numero: number
}

const lista = ["um", "dois", "tres"]

app.get("/", (req, res) => {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
    console.log("Acessou rota get com sucesso yeah")
})

app.post<{Body: Body}>("/inserir-numero", (req, res) => {

    let numero = (req.body.numero).toString()
    lista.push(numero)
    res.send("Numero inserido com sucesso")
})

const start = async () => {
    try {
        await app.listen({
            port: 3000,
        })
    } catch (erro) {
        console.log(erro);
        process.exit(1)
    }
    
}

start()