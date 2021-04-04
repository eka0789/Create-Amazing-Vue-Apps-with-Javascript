const tabs = [
  {
    name: "Homepage",
    component: {
      template: `<div class="navigation">Home information</div>`
    }
  },
  {
    name: "Products",
    component: {
      template: `<div class="navigation">Products information</div>`
    }
  },
  {
    name: "Contact",
    component: {
      template: `<div class="navigation">Contact information</div>`
    }
  }
]

const app = Vue.createApp({
  data() {
    return {
      tabs,
      currentTab: tabs[0]
    }
  },
  computed: {
    getCurrentTab() {
      return "tab-" + this.currentTab.toLowerCase()
    }
  }
})

app.component("tab-homepage", {
  template: `<div class="navigation">Home information></div>`
})

app.component("tab-products", {
  template: `<div class="navigation">Product information</div>`
})

app.component("tab-contact", {
  template: `<div class="navigation">Contact information</div>`
})

app.mount("#navigation-div")