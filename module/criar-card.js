export function criarCard(vaga){

  const cardJob = document.querySelector('.cardJob-model').cloneNode(true)
  cardJob.setAttribute('data-card', '')
  cardJob.querySelector('[data-logo]').src = vaga.logo
  cardJob.querySelector('[data-company]').innerHTML = vaga.company
  cardJob.querySelector('[data-position]').innerHTML = vaga.position
  cardJob.querySelector('[data-postedAt]').innerHTML = vaga.postedAt
  cardJob.querySelector('[data-contract]').innerHTML = vaga.contract
  cardJob.querySelector('[data-location]').innerHTML = vaga.location

  const listaTeconologia = cardJob.querySelector('[data-tecnologias]')

  const btnRole = document.createElement('button')
  btnRole.setAttribute('data-role', '')
  btnRole.innerHTML = vaga.role

  const btnLevel = document.createElement('button')
  btnRole.setAttribute('data-level', '')
  btnRole.innerHTML = vaga.level

  listaTeconologia.append(btnRole)

  vaga.languages.forEach((language) => {
    const listaTeconologiaCard = cardJob.querySelector('[data-tecnologias]')
    const item = document.createElement('li')
    const button = document.createElement('button')
    button.setAttribute('data-language', '')
    button.innerHTML = language
    item.appendChild(button)
    listaTeconologiaCard.append(item)
  })

  vaga.tools.forEach((tool) => {
    const listaTeconologiaCard = cardJob.querySelector('[data-tecnologias]')
    const item = document.createElement('li')
    const button = document.createElement('button')
    button.setAttribute('data-language', '')
    button.innerHTML = tool
    item.appendChild(button)
    listaTeconologiaCard.append(item)
  })

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