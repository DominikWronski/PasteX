import Api from '@/services/Api'

export default {
  register (data) {
    return Api().post('/api/v1/users/register', data)
  },
  login (data) {
    return Api().post('/api/v1/users/login', data)
  }
}
