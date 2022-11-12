import {criarCard} from "./criar-card.js";
import {vagas} from './async.js'

export default function initFuncaoBusca() {
  const inputPosition = document.querySelector('[data-search-position]')
  const inputLevel = document.querySelector('[data-search-level]')

  const btnSearch = document.querySelector('[data-pesqisar]')
  btnSearch.addEventListener('click', function(){
    const secaoVagas = document.querySelector('.section-main')
    secaoVagas.innerHTML = ''

    vagas.forEach((item) =>{

      if(inputPosition.value == 'null' && inputLevel.value == 'null'){
        criarCard(item)
      } else {
        const itemPositionBol = item.position == inputPosition.value
        const itemLevelBol = item.level == inputLevel.value 
          if(itemPositionBol || itemLevelBol){
          criarCard(item)
        } 
      }
    })
  })
}