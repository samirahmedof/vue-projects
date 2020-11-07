export default {
  transition (to, from) {
    if (from) {
      let routerMap = ['index', 'about-us', 'portfolio', 'services', 'partners', 'contacts']
      let fromIndex = routerMap.findIndex(route => route === from.name) + 1
      let toIndex = routerMap.findIndex(route => route === to.name) + 1
      if (fromIndex < toIndex) {
        return 'slide-left'
      } else {
        return 'slide-right'
      }
    }
  }
}
