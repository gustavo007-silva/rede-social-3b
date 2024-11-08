const(ulr)=https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json

async function vizualizarinformacoesglobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML ='você sabia que o mundo tem ${dados.'
    total_pessoas_mundo} de pessoas e que aproximadamente ${dados.
    total_pessoas_conectadas} estao conectados em alguma rede social e passam em
    média ${dado.tempo_medio}horas conectadas.


    vizualizarinformacoesglobais()