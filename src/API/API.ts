import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': 'ebf536e3-3303-498b-b5bb-6080ca866d8c'
    }
})


export const contactAPI = {
    sendMessage(userId: number=19897, body: string){
        return instance.post(`dialogs/${userId}/messages`, { body })
    }
}

export const authAPI = {
    me(){
        return instance.get('/auth/me')
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string=null){
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
    }
}