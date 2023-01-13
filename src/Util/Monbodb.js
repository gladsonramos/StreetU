
import axios from "axios"

const link = 'http://192.168.2.11:3002'

class UsuarioService{   

    async cadastro (data){
        return axios({
            url: `${link}/CriarUsuario`,
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json',
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async Usuario (data, id){
        return axios({
            url: `${link}/Usuario/${id}`,
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json',
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    
    async Usuario (){
        return axios({
            url: `${link}/NovoUsuario`,
            method: "GET",
            timeout: 5000,
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService