import axios from '@/libs/api.request'

export const addComment = (comment) => {

  return axios.request({
    url: 'comment/add',
    data: {
    	name: comment.name,
    	email: comment.email,
    	content: comment.content,
    	articleId: comment.articleId
    },
    method: 'post'
  })
}
export const getArticleComment = (articleId) => {
  return axios.request({
    url: 'comment/' + articleId,
    method: 'get'
  })
}
