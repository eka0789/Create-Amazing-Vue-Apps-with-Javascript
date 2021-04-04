const app = Vue.createApp({
  data() {
    return {
      currentTab: "Homepage",
      tabs: ["Homepage", "Products", "Contact"]
    }
  },
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase()
    }
  }
})

app.component("tab-homepage", {
  template: `<div class="navigation">Homepage information</div>`
})

app.component("tab-products", {
  template: `<div class="navigation">Products information</div>`
})

app.component("tab-contact", {
  template: `<div class=navigation>Contact information</div>`
})

app.mount("#navigation-div")