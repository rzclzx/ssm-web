import AxiosInit from './config'
import ConfigInit from './api'

const api = ConfigInit()

let axios = AxiosInit({
  url: api.baseUrl
})

let ShopApi = {
    registerShop (shop) {
        return axios.post('ssm/shopadmin/registershop', shop)
    }
}

export default ShopApi