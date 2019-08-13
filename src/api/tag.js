import axios from '@/libs/api.request'

export const getTags = () => {
  return axios.request({
    url: 'tags',
    method: 'get'
  })
}
