import{
  getAddress
} from '../api'

import {
  SAVE_ADDRESS
} from './mutation.type'

export default {
  async getAddressAction({commit}){
    let result = await getAddress()
    // if (result.code === 0) {
    //   commit(SAVE_ADDRESS, result.data)
    // }
    !!(result.code === 0) && commit(SAVE_ADDRESS, result.data)
  }
}