import axios from '@/libs/api.request'

export const getCategories = () => {
  return axios.request({
    url: 'categories',
    method: 'get'
  })
}

export const getArticleByCategory = (categoryId) => {
  return axios.request({
    url: 'categories/' + categoryId,
    method: 'get'
  })
}
