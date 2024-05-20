class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereco do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for(let i = 0; i < hoteis.length; i++) {
            if(idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if( i == hoteis.length - 1) {
                console.log("ID de hotel nao cadastrado")
            }
        }
    } while (!existe)

    let nome = prompt("Digite o nome do responsavel")
    let diaEntrada = parseInt(prompt("digite o dia de entrada"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Digite o dia de saida"))
        if (diaSaida < diaEntrada) {
            console.log("O dia de saida deve ser maior que o dia de entrada")
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function ProcurarReservaPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel - 1
            console.log("Hotel:", hoteis[i].Nome)
            console.log("Responsavel:", reserva.Responsavel)
            console.log("Dia de entrada:", reserva.DiaEntrada)
            console.log("Dia de saida:", reserva.DiaSaida)
        }
    })
}

function ProcurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].IdHotel
    console.log("Hotel:", hoteis[idHotel - 1].Nome)
    console.log("Endereco:", hoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada:", reservas[idReserva - 1].DiaEntrada)
    console.log("Dia de saida", reservas[idReserva - 1].DiaSaida)
}

function ProcurarReservaPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++){
        if (nome == reservas[i].Responsavel) {
            console.log("Id da Reserva: " + reservas[i].Id)
            console.log("Hotel: " + hoteis[(reservas[i].IdHotel) -1].Nome)
        }
    }
}

function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Numero de telefone atualizado!")
}

let continuar = true
do {
    let opcao = prompt("Escolha uma opcao: \n1 - Cadastrar Hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" +
        "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsavel \n6 Procurar hoteis por categoria" +
        "\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa")

    switch (opcao) {
        case '1':
            CadastrarHotel()
            break
        case '2':
            CadastrarReserva()
            break
        case '3':
            ProcurarReservaPeloHotel(prompt("Digite o Id do hotel"))
            break
        case '4':
            ProcurarHotelPelaReserva(prompt("Digite o Id da reserva"))
            break
        case '5':
            ProcurarReservaPeloNome(prompt("Digite o nome do responsavel pela reserva"))
            break
        case '6':
            let hoteisProcurado = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
            console.log("hoteisProcurados")
            break
        case '7':
            let idHotel = parseInt(prompt("Digite o Id do hotel que deseja atualizar"))
            let telefone = prompt("Digite o novo telefone")
            AtualizarTelefone(idHotel, telefone)
            break
        case '8':
            console.log("Programa encerrado")
            continuar = false
            break
        default:
            console.log("Opcao invalida")
            break
    }
} while (continuar)