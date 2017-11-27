<template id="index.html">
  <v-ons-page 
    :init="init">
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
        <v-ons-toolbar-button @click="$store.commit('splitter/toggle')">
          <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ title }} 北艾游戏</div>
    </v-ons-toolbar>

    <v-ons-tabbar>
      <router-view slot="pages"></router-view>
      <v-ons-tab v-for="(tab, i) in tabs" 
        :key="tab.key"
        :label="tab.label"
        :active="activeIndex === i"
        :route-name="$route.name"
        @click.prevent="$router.push({name: tab.label})"
      ></v-ons-tab>
    </v-ons-tabbar>

  </v-ons-page>
</template>


<script>
export default {
  name: 'index',
  data() {
    return {
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          props: {
            myProp: 'This is a page prop!',
          },
          key: 'HomePage',
        },
        {
          icon: this.md() ? null : 'ion-ios-bell',
          label: 'News',
          badge: 7,
          key: 'NewsPage',
        },
        {
          icon: this.md() ? null : 'ion-ios-settings',
          label: 'Settings',
          key: 'SettingsPage',
        },
      ],
    }
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid()
    },
    init() {
    },
  },
  computed: {
    title() {
      const index = this.tabs.findIndex(tab => tab.label === this.$route.name)
      this.activeIndex = index
      return this.tabs[index].label
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title {
  text-transform: none;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item, ons-card {
  cursor: pointer;
}
</style>
