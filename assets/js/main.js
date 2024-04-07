document.addEventListener("alpine:init",function(){
  Alpine.data("facebookFilter",()=>({
    keywordIn:"ad-text",
    country:["usa","united-kingdom"],
    website:"shopify",
    language:"english",
    activeAdSetsMin: 0,
    activeAdSetsMax:9999,
    activeAdSets() {
      return this.activeAdSetsMin.toString() + " - " + this.activeAdSetsMax.toString()
    },
    adspendMin: 0,
    adspendMax: 999999,
    adspend() {
      return this.adspendMin.toString()+"$ - "+this.adspendMax.toString()+"$"
    },
    sortBy:"consistency",
    sortDirection:"ascending",
  }))

  Alpine.data("navigationBar",()=>({
    navOpen: false,
    showNav() {
      if (window.screen.width < 990) {
        return this.navOpen
      } else {
        return true
      }
    }
  }))
})