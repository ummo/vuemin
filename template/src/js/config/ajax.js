import ajaxcode from './ajaxcode'

const ajax = {
  method: 'get',
  timeout: 0,
  responseType: 'json',
  beforeSuccess(res) {
    if (res.ret_code != ajaxcode.OK) {
      alert(res.ret_msg)
      return false
    }
    return true
  }
}

export default ajax