import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// returns the store object for the Playground app (includes client and server side store objects)
export default new Vuex.Store({
  state: {
    client: {
      // the connectivity client (jQuery)
      clientSideESClient: null
    },
    server: {}
  },
  mutations: {
    setClientSideESClient (state, args) {
      state.client.clientSideESClient = args['clientSideESClient']
      console.log(state.client.clientSideESClient)
    }
  }
})
