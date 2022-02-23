import axios from "axios";
const endpoint = 'http://localhost:8000'

export const getQuotes = async (number,token) => {
  var quotes = await axios({
    url: `${endpoint}/api/quotes/${number}`,
    method: 'GET',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,

    }
})
  return quotes.data
}
export const AuthLogin = async (data) => {
  var login = await axios.post(`${endpoint}/api/login`,data)
  return login.data
}

