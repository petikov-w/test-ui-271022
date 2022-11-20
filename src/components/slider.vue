<template lang="pug">
swiper(
  class="swiper"
  :modules="modules"
  :initial-slide="0"
  :slides-per-view="1"
  :navigation="{ prevEl: prev, nextEl: next}"
  :pagination="false"
  :loop="false"
  )
  .swiper-button-prev(ref="prev")
  .swiper-button-next(ref="next")

  swiper-slide(v-for="(item, index) in listItems" :key="item.index")
   section-main(style="display:flex; flex-direction:column;")
    section-top(style="display:flex; align-items:center;")
      img(:src="item.image_a" width="40" height="40" )
      p(v-html="item.text_tab" style="margin-left:20px;")
    img(:src="item.image_main" width="310")


</template>

<script>
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref} from "vue";

export default {
  name: "slider",
  components: {Swiper, SwiperSlide},
  props: {
    listItems: {
      type: Array,
      default: []
    }
  },
  setup(props) {
    const prev = ref(null);
    const next = ref(null);
    const listItems = props.listItems;
    console.log('=======>>>>>>> ',listItems)
    return {prev,
            next,
            listItems,
            modules: [Autoplay,
                      Pagination,
                      Navigation]}
  }

}
</script>

<style lang="scss" scoped>

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 24px;
  color: dimgrey;
  font-size: 16px;
}
</style>