
const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5400' : 'https://learning-backend-server.herokuapp.com'

export const api = `${baseUrl}/api/`;
export const genratefileName = (filename) =>{
    return `${baseUrl}/public/${filename}`
}