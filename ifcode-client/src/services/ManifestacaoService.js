import httpService from './HttpService'

class ManifestacaoService {
    listar() {
        return httpService.get('manifestation')
    }

    criar(manifestation) {
        return httpService.post('manifestation', manifestation)
    }

    carregar(id) {
        return httpService.get(`manifestation/${id}`)
    }
}

export default new ManifestacaoService()