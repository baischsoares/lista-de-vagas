
export default function initCriarVagas() {
  const search = document.querySelector('#search')
  const jobsSection = document.getElementById('jobsArea')
  
  async function iniciarAsync(){
    const dadosResponse = await fetch('./data.json');
    const dadosJSON = await dadosResponse.json();
    dadosJSON.forEach(vaga => {
      criarCard(vaga)
  })
  }

  function criarCard(vaga){
    const cardJob = document.querySelector('.cardJob-model').cloneNode(true)
    cardJob.querySelector('[data-logo]').src = vaga.logo
    cardJob.querySelector('[data-company]').innerHTML = vaga.company
    cardJob.querySelector('[data-position]').innerHTML = vaga.position
    cardJob.querySelector('[data-postedAt]').innerHTML = vaga.postedAt
    cardJob.querySelector('[data-contract]').innerHTML = vaga.contract
    cardJob.querySelector('[data-location]').innerHTML = vaga.location

    if(vaga.new){
     const newText = document.createElement('span')
     newText.classList.add('new')
     newText.innerHTML = 'new!'
     cardJob.querySelector('.tags').appendChild(newText)
    }
    if(vaga.featured){
      const featured = document.createElement('span')
      featured.classList.add('featured')
      featured.innerHTML = 'featured!'
      cardJob.querySelector('.tags').appendChild(featured)
     }


     document.querySelector('.section-main').appendChild(cardJob)


  }

  iniciarAsync()
}