import Api from '@/services/Api'

export default {
  loadPastes () {
    return Api().get('/api/v1/pastes/')
  },
  loadPaste (id) {
    return Api().get('/api/v1/pastes/' + id)
  }
}
