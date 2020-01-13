import axios from 'axios'

/**
 * @function API
 * @description A função ´API´ cria uma instância do Axios para facilitar requisições HTTP
 * @example API.post('/endpoint').then(item => console.log(`O retorno é ${item}))
 * @example const summary = await API.post('/endpoint')
 */

const API = axios.create({
  baseURL: ''
})

export default API