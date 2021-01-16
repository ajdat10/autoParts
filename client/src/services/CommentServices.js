import ApiClient from './ApiClient'

export const __CreateComment = async (formData, userId, postId) => {
  try {
    const res = await ApiClient.post(`/comments/${postId}/user/${userId}`, formData)
    // console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateComment = async (formData, commentId) => {
  try {
    const res = await ApiClient.put(`/comments/${commentId}`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (postId, commentId) => {
  try {
    const res = await ApiClient
    .delete(`/comments/${postId}/delete/${commentId}`)
    return res
  } catch (error) {
    throw error
  }
}
