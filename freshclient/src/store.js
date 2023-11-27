import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comments: []
  },

  getters: {
    comments (state) {
      return state.comments.filter((c) => {
        return c.parent_id === null
      })
    },

    children (state) {
      return parentId => state.comments.filter((c) => {
        return c.parent_id === parentId
      })
    }
  },

  mutations: {
    SET_COMMENTS (state, comments) {
        state.comments = comments
    },

    DELETE_COMMENT (state, comment) {
        state.comments = state.comments.filter((c) => {
          return c.id !== comment.id
        })
    }
  },
  
  actions: {
    async getComments ({ commit }) {
        let response = await axios.get('http://fresh.local:8000/api/comments')

        commit('SET_COMMENTS', response.data.data)
    },

    async deleteComment ({ commit }, comment) {
        await axios.delete(`http://fresh.local:8000/api/comments/${comment.id}`)

        commit('DELETE_COMMENT', comment)
    }
  }
})
