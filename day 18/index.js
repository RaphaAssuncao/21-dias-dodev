class Livro {
    Titulo
    Autor
    Editora 
    AnoDePublicacao 
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
    }
}

let livros = []
livros.push(new Livro("Livro1", "Marcos", "Editora A", 2003))
livros.push(new Livro("Livro2", "Augusto", "Editora B", 1994))
livros.push(new Livro("Livro3", "Felix", "Editora C", 1987))
livros.push(new Livro("Livro4", "Tom", "Editora D", 2013))
livros.push(new Livro("Livro5", "Paula", "Editora E", 2023))

class Biblioteca {
    Nome 
    Endereco 
    Telefone 
    AcervoLivros = []
    constructor(nome, endereco, telefone, acervo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivro(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo === titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false 
        this.AcervoLivros.forEach(livro => {
            if(livro.Titulo === titulo) {
                if(livro.Disponibilidade) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        return emprestado
    }
    DevolverLivro(titulo) {
        livros.forEach(livro =>{
            if (livro.Titulo === titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }

}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2", livros)

biblioteca.BuscarLivro("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")