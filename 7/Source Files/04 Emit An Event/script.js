const app = Vue.createApp({
  data() {
    return {
      headers: [
        { id: 1, title: "My First Header"},
        { id: 2, title: "My Second Header"},
        { id: 3, title: "My Third Header"}
      ],
      headerFontSize: 1
    }
  }
})

app.component("header-component", {
  props: ["title"],
  template: `
  <div class="header-component">

    <h2>{{ title }}</h2>

    <button @click="$emit('increase-text-size')">
      Increase Text Size
    </button>

  </div>
  `
})

app.mount("#emit-events-div")