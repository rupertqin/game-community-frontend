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
import got from 'got'
export default {
  name: 'settings',
  // props: [ 'pageStack' ],
  data() {
    return {
      post: [{}],
      error: null,
    }
  },
  async beforeRouteEnter(to, from, next) {
    const result = await got.get('/api/v2/topics', { json: true })
    if (result.statusCode === 200 && result.body.length) {
      next(vm => vm.setData(null, result.body))
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