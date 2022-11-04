<template lang="pug">
//v-select(:options="listOptions" @select="optionSelect" :selected="selected" )
//h2 {{ selected }}

swiper(
  class="swiper"
  :modules="modules"
  :initial-slide="0"
  :slides-per-view="1"
  :space-between="50"
  :autoplay="{delay: 3000, }"
  :loop="true"
  :navigation="{ prevEl: prev, nextEl: next}"
  @swiper="onSwiper"
  @slideChange="onSlideChange")
  .swiper-button-prev(ref="prev")
  .swiper-button-next(ref="next")


  swiper-slide( v-for="option in listOptions" :key="option.value")
   h1(style="text-align:center") {{ option.name }}


</template>

<script>
import Header from "@/components/header";
import VSelect from "@/components/v-select";
import 'swiper/css';
import "swiper/css/navigation";
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Navigation } from "swiper";
import {ref,computed} from "vue";

export default {
  name: "App",
  components: { Header, VSelect, Swiper, SwiperSlide },
  setup() {
    const listOptions = [
      {name: 'Опция 1', value: 1},
      {name: 'Опция 2', value: 2},
      {name: 'Опция 3', value: 3},
      {name: 'Опция 4', value: 4},
      {name: 'Опция 5', value: 5},
      {name: 'Опция 6', value: 6},
    ];
    //console.log('==++2++==>>>>>>>> ', selected.value);
    const selected = ref("Выберите...");
    const optionSelect = (option) => {
          selected.value=option.name;
          console.log('==++++==>>>>>>>> ', selected.value);  };

    const prev = ref(null);
    const next = ref(null);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };


    return { optionSelect, listOptions, selected, onSwiper,
      onSlideChange, prev, next,
      modules: [Autoplay, Pagination, Navigation],
      }
  }
}
</script>

<style lang="scss" scoped>

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 24px;
  color: dimgrey;
  font-size: 16px;
}
</style>