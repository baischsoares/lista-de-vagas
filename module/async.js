import {criarCard} from "./criar-card.js";
export const vagas = []
export async function iniciarAsync(){
  const dadosResponse = await fetch('./data.json');
  const dadosJSON = await dadosResponse.json();
  dadosJSON.forEach(vaga => {
    criarCard(vaga)
    vagas.push(vaga)
})
}
