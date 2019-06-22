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
