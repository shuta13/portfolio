export const state = () => ({
  currentRoute: '',
  webmotionsCount: 0
})

export const mutations = {
  setCurrentRoute(state, route) {
    state.currentRoute = route
  },
  incrementPageCount(state, count) {
    state.webmotionsCount = count
  }
}

// export const actions = {
//   updateRoute(context, route) {
//     context.commit('setCurrentRoute', route)
//   }
// }
