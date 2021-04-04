const app = Vue.createApp({
  el: "#database-website",
  data() {
    return {
      searchInput: "",
      dataColumns: ["title", "topic", "views"],
      dataset:  [
       { title: 'Unity vs Construct 3 | What Is The Best Game Engine?', topic: "Game Development", views: 1 },
       { title: 'Unity vs Unreal Engine 4 | What Is The Ultimate Game Engine?', topic: "Game Development", views: 1 },
       { title: 'Android Studio vs Xcode vs Google Flutter | DEBATE', topic: "App Development", views: 2 },
       { title: 'How to Make Passive Income as a Programmer 🤑', topic: "General Programming", views: 1 },
       { title: 'Is watching videos at 2x speed better for you?', topic: "General Programming", views: 1 },
       { title: 'Unity Asset Store vs Unreal Marketplace | Which Is Better?', topic: "Game Development", views: 1 },
       { title: 'Unity vs Unreal: Which Engine Makes You More Money', topic: "Game Development", views: 2 },
       { title: 'Unity Bought Bolt | Visual Scripting for Game Developers', topic: "Game Development", views: 1 }
     ]
    }
  }

}) 
 
