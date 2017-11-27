<template id="news">
  <v-ons-page>
    <v-ons-carousel swipeable auto-scroll overscrollable
      :index.sync="carouselIndex"
      direction="horizontal"
    >
      <v-ons-carousel-item v-for="(value, key) in items" :style="{backgroundColor: value}" :key="key">
        <div style="text-align: center; height: 100px; font-size: 30px; margin-top: 20px; color: #fff;">{{key}}</div>
      </v-ons-carousel-item>
    </v-ons-carousel>
    <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in Object.keys(items).length" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div>

    <v-ons-row>
      <v-ons-col width="50px"><v-ons-icon icon="fa-twitter"></v-ons-icon>首页</v-ons-col>
      <v-ons-col>资讯林</v-ons-col>
      <v-ons-col>话题</v-ons-col>
      <v-ons-col>游戏圈</v-ons-col>
      <v-ons-col>话题</v-ons-col>
      <v-ons-col>游戏圈</v-ons-col>
    </v-ons-row>

    <v-ons-row>
      <v-ons-col style="text-align:right;">新闻</v-ons-col>
      <v-ons-col>公告</v-ons-col>
    </v-ons-row>
    <v-ons-list>
      <v-ons-list-item v-for="(p, i) in post" :key="i">
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">{{ p.title }}</span><span class="list-item__subtitle">On the Internet</span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
  
</template>

<script>
import axios from 'axios'

export default {
  name: 'news',
  data() {
    return {
      post: [],
      error: null,
      msg: '新闻资讯',
      carouselIndex: 0,
      items: {
        BLUE: '#085078',
        DARK: '#373B44',
        ORANGE: '#D38312',
      },
      dots: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#fff',
        bottom: '40px',
        left: 0,
        right: 0,
      },
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
  props: [ 'pageStack' ],
}
</script>