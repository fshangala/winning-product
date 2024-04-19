document.addEventListener("alpine:init",function(){
  Alpine.store("user",()=>({
    supabaseUrl : 'http://copiwin.com:8000',
    supabaseKey : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzEzMzA0ODAwLAogICJleHAiOiAxODcxMDcxMjAwCn0.wzm6GJDkA5uIKsaUcZPHG2mm-lCDIHCaFX1GiWlXDtQ",
    supabase : createClient(this.supabaseUrl, this.supabaseKey),
  }));

  Alpine.data("facebookFilter",()=>({
    search:"",
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
    scaling:"no-downscaling",
    mediaType:"videos",
    pageType:"product-pages",
    niche: "beauty",
    adCreationDate:"",
    lastSeenDate:"",
    productCreationDate:"",
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