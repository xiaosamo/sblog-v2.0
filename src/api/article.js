import axios from '@/libs/api.request'

export const getArticleList = (pageNum,pageSize) => {
  return axios.request({
    url: 'article/list',
    params:{
      'pageNum': pageNum,
      'pageSize':pageSize
    },
    method: 'get'
  })
}
export const getArticleById = (id) => {
  return axios.request({
    url: 'article/' + id,
    method: 'get'
  })
}
export const getTagArticle = (name,pageNum,pageSize) => {
  return axios.request({
    url: 'tags/' + name,
    params:{
      'pageNum': pageNum,
      'pageSize':pageSize
    },
    method: 'get'
  })
}
export const getHotArticle = () => {
  return axios.request({
    url: 'article/getHotArticle',
    method: 'get'
  })
}
export const searchArticle = (query,pageNum,pageSize) => {
  return axios.request({
    url: 'article/search',
    params:{
      'query':query,
      'pageNum': pageNum,
      'pageSize':pageSize
    },
    method: 'get'
  })
}
export const getCategoryArticle = (id,pageNum,pageSize) => {
  return axios.request({
    url: '/categories/' + id,
    params:{
      'pageNum': pageNum,
      'pageSize':pageSize
    },
    method: 'get'
  })
}
