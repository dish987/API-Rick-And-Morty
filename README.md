# 🧪 Rick and Morty - Character Finder

Um buscador de personagens da série **Rick and Morty**, desenvolvido para colocar em prática conceitos de consumo de APIs, manipulação de DOM e organização de código com objetos em JavaScript(POO).

## 🚀 Funcionalidades

- **Busca em Tempo Real:** Pesquisa de personagens pelo nome através da integração com a [The Rick and Morty API](https://rickandmortyapi.com/).
- **Interface Inteligente:** Cards que mudam a cor do status (`Alive` ou `Dead`) dinamicamente.
- **Experiência de Usuário (UX):** Suporte para busca via clique no botão ou tecla `Enter`.
- **Feedback Visual:** Mensagens de "Carregando" e tratamento para personagens não encontrados.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização moderna com Grid Layout e Dark Mode.
* **JavaScript (ES6+):**
    * `Async/Await` para requisições assíncronas.
    * `Fetch API` para consumo de dados.
    * `Encapsulamento` através de objetos literais.
    * `Manipulação de DOM` para criação dinâmica de elementos.

## 📖 Como funciona o código?

O projeto foi estruturado utilizando um objeto principal chamado `buscarPersonagens`, que encapsula toda a lógica da aplicação:

1.  **Captura:** O método `funcaoBusca` limpa e valida a entrada do usuário.
2.  **Requisição:** Utilizamos o `fetch` para buscar os dados no servidor da API.
3.  **Processamento:** O JSON de resposta é processado para extrair informações como nome, imagem, espécie e status.
4.  **Renderização:** O código cria elementos HTML "on-the-fly" e injeta no container principal com estilos condicionais.

## 📌 Próximos Passos

- [ ] Implementar paginação para mostrar mais de um resultado.
- [ ] Adicionar filtro por espécie (Humano, Alien, etc).
- [ ] Criar um botão de "Personagem Aleatório".

---
Desenvolvido com 🧠 e muito café por **João Dorini**.
