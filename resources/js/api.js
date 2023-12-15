import axios from 'axios'

const DB_HOST="162.55.131.89"
const DB_PORT="3306"
const DB_DATABASE="deviaxde_raimondi_db"
const DB_USERNAME="deviaxde_david2"
const DB_PASSWORD="A%B0rZ3S(~Gn"

const baseUrl = 'https://deviaxdey.com/public/api'


export async function getTeachers () {
  try {
    const response = await axios({
      url: baseUrl + '/docentes',
      method: 'GET'
    })
    
    return response.data
  } catch (error) {
    console.log(apiKey)
    console.log(error)
    return []
  }
}