<template id="settings">
  <v-ons-page>
    <div class="const">
      <h2>Settings</h2>
      <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
        Swipe  {{  post && post.length ? post[0].title : ''  }}
      </p>


      <p style="text-align: center; opacity: 0.6; padding-top: 20px;" v-for="(p, i) in post">
        {{ i }}Swipe {{ p.title }}
      </p>
      <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
        Swipe 
      </p>
    </div>
  </v-ons-page>
</template>

<script>
import axios from 'axios'
export default {
  name: 'settings',
  // props: ['openMenu'],
  data() {
    return {
      post: [{}],
      error: null,
    }
  },
  async beforeRouteEnter(to, from, next) {
    const result = await axios.get('/api/v2/topics', { responseType: 'json' })
    if (result.status === 200 && result.data.length) {
      next(vm => vm.setData(null, result.data))
    }

  },
  methods: {
    setData(err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    },
  },
};
</script>