export const state = () => ({
  currentRoute: '',
  garellyTopCount: 0,
  webmotionsCount: 0,
  MajorMonoDisplayLoaded: false,
  work01State: false,
  work02State: false,
  work03State: false,
  work04State: false,
  work05State: false,
  work06State: false,
  work07State: false,
  work08State: false,
  work09State: false,
  work10State: false,
  work11State: false,
  work12State: false,
  work13State: false
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
  },
  updateWork01State(state, flag) {
    state.work01State = flag
  },
  updateWork02State(state, flag) {
    state.work02State = flag
  },
  updateWork03State(state, flag) {
    state.work03State = flag
  },
  updateWork04State(state, flag) {
    state.work04State = flag
  },
  updateWork05State(state, flag) {
    state.work05State = flag
  },
  updateWork06State(state, flag) {
    state.work06State = flag
  },
  updateWork07State(state, flag) {
    state.work07State = flag
  },
  updateWork08State(state, flag) {
    state.work08State = flag
  },
  updateWork09State(state, flag) {
    state.work09State = flag
  },
  updateWork10State(state, flag) {
    state.work10State = flag
  },
  updateWork11State(state, flag) {
    state.work11State = flag
  },
  updateWork12State(state, flag) {
    state.work12State = flag
  },
  updateWork13State(state, flag) {
    state.work13State = flag
  }
}
