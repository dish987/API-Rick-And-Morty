const buscarPersonagens = {
    nomeIPT: document.getElementById('nomePersonagens'),
    btnEnviar: document.getElementById('btnEnviar'),
    divAdd: document.querySelector('.container'),

    async funcaoBusca() {
        const nomeOriginal = this.nomeIPT.value;
        const nomeUsavel = nomeOriginal.toLowerCase().trim();
        
        if(nomeUsavel === ""){
            alert("Insirua um dado!");
            return;
        }

        this.divAdd.innerHTML = "Carregando...";
        
        try{
            const getAPI = await fetch(`https://rickandmortyapi.com/api/character/?name=${nomeUsavel}`);
            const dados = await getAPI.json();
            const peronagens = dados.results[0];

            this.divAdd.innerHTML = "";

            function checarStatus() {
                if(peronagens.status === "Alive"){
                    return `<p style='color: green;'>Status: ${peronagens.status}</p>`
                } else {
                    return `<p style='color: red;'>Status: ${peronagens.status}</p>`
                }
            }

            const card = document.createElement('div');
            card.className = "personagemDiv";
            card.innerHTML =
            `
            <h3>${peronagens.name}</h3>
            <img src="${peronagens.image}">
            ${checarStatus()}
            <p>Dimensão: ${peronagens.location.name}</p>
            <p>Genêro: ${peronagens.gender}</p>
            `

            this.divAdd.appendChild(card);
        } catch(erro){
            this.divAdd.innerHTML = "Personagem não encontrado"
        } finally {
            console.log("Execução finalizada.");
        }
    }
}

buscarPersonagens.btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    buscarPersonagens.funcaoBusca();
})

buscarPersonagens.nomeIPT.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        buscarPersonagens.funcaoBusca();
    }
})