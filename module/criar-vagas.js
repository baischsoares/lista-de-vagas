import {iniciarAsync} from "./async.js";


export default function initCriarVagas() {
  const search = document.querySelector('#search')
  const jobsSection = document.getElementById('jobsArea')
  iniciarAsync()
}
