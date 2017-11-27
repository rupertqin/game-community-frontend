<template id="home">
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
      <v-ons-col>资讯</v-ons-col>
      <v-ons-col>话题</v-ons-col>
      <v-ons-col>游戏圈</v-ons-col>
      <v-ons-col>话题</v-ons-col>
      <v-ons-col>游戏圈</v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
import pageNav1 from "./pageNav1"
export default {
  name: 'index',
  data() {
    return {
      msg: '王者荣耀',
      carouselIndex: 0,
      items: {
        BLUE: '#085078',
        DARK: '#373B44',
        ORANGE: '#D38312'
      },
      dots: {
        textAlign: 'center',
        fontSize: '30px',
        color: '#fff',
        bottom: '40px',
        left: 0,
        right: 0
      }
    }
  },
  methods: {
    push() {
      this.$emit('push', pageNav1);
    }
  },
  props: ['pageStack']
}
</script>
