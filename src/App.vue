<template id="app">
  <v-ons-splitter>

    <v-ons-splitter-side swipeable width="220px" collapse
      animation="push"
      side="left" 
      :open.sync="menuIsOpen">
      <v-ons-page @init="init">
        <v-ons-list>
          <div class="list-item" v-for="menuPage in menuPages" :key="menuPage.label" >
            <router-link 
              class="list-item__center"
              :to="menuPage.label" >{{ menuPage.label }}</router-link>
          </div>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <v-ons-navigator 
        :page-stack="pageStack" 
        :options="options"
        :pop-page="goBack"
        @postpush="setOptions({})"
      > 
      </v-ons-navigator>
      <router-view></router-view>
    </v-ons-splitter-content>

  </v-ons-splitter>
</template>

<script>

import settings from './pages/SettingsPage'

export default {
  name: 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      }
    }
  },
  data () {
    return {
      openSide: false,
      menuPages: [
        { label: 'home'},
        { label: 'news'},
        { label: 'settings'}
      ],
      pageStack: [],
      options: {}
    }
  },
  components: {
  },
  methods: {
    setOptions(newOptions) {
      this.options = newOptions;
    },
    goBack() {
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    },
    init(event) {
    }
  },
  created () {
    // const mapRouteStack = route => this.pageStack = route.matched.map(m => m.components.default);
    // mapRouteStack(this.$route);
    // this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());
  }
}
</script>

<style>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
a {text-decoration: none;}
ons-splitter-side .page__background {background: #ddd;}
</style>
