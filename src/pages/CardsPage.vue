<template id="cards">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Navigator+Tabbar</div>
      <div class="right">
        <v-ons-toolbar-button @click="openMenu">
          <v-ons-icon icon="md-menu"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <h2>Cards</h2>
    <v-ons-list-title>Card List</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item @click="push">Card One</v-ons-list-item>
      <v-ons-list-item @click="push">Card Two</v-ons-list-item>
      <v-ons-list-item @click="push">Card Three</v-ons-list-item>
    </v-ons-list>
    <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
      Swipe left to open the menu!
    </p>
  </v-ons-page>
</template>

<script>
import pageNav2 from './pageNav2'

export default {
  name: 'cards',
  methods: {
    push($event) {
      const cardTitle = $event.target.textContent;
      const pageToPush = {
        extends: pageNav2,
        data() {
          return {
            cardTitle,
          }
        },
      };
      this.$emit('push', pageToPush);
    },
  },
  props: [ 'openMenu' ],
};
</script>
