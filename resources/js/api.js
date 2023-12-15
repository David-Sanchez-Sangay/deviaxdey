import axios from 'axios'

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