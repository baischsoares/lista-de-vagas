export default function initCriarBuscas() {
  const searchPosition = document.querySelector('[data-search-position]');
  const searchLevel = document.querySelector('[data-search-level]');

  async function iniciarAsync(){
    const dadosResponse = await fetch('./data.json');
    const dadosJSON = await dadosResponse.json();
    dadosJSON.forEach(vaga => {

      if(!searchPosition.innerHTML.includes(vaga.position)){
        buscaPosition(vaga)
      }
      if(!searchLevel.innerHTML.includes(vaga.level)){
        buscaLevel(vaga)
      }
  })
  }

  function buscaPosition(vaga){
    const opcao = document.createElement('option');
    opcao.setAttribute('name', vaga.position)
    opcao.innerText = vaga.position
    searchPosition.append(opcao)
    
  }

  function buscaLevel(vaga){
    const opcao = document.createElement('option');
    opcao.setAttribute('name', vaga.level)
    opcao.innerText = vaga.level
    searchLevel.append(opcao)
  }
  iniciarAsync()
}