export const state = () => ({
  currentRoute: '',
  garellyTopCount: 0,
  webmotionsCount: 0,
  MajorMonoDisplayLoaded: false
})

export const mutations = {
  setCurrentRoute(state, route) {
    state.currentRoute = route
  },
  incrementTopPageCount(state, count) {
    state.garellyTopCount = count
  },
  incrementPageCount(state, count) {
    state.webmotionsCount = count
  },
  updateMajorMonoDisplayLoadedState(state, loaded) {
    state.MajorMonoDisplayLoaded = loaded
  }
}
