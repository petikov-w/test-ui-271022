<template lang="pug">
//v-select(:options="listOptions" @select="optionSelect" :selected="selected" )
//h2 {{ selected }}

swiper(
  class="swiper"
  :modules="modules"
  :initial-slide="0"
  :slides-per-view="1"
  :space-between="50"
  :loop="true"
  :navigation="{ prevEl: prev, nextEl: next}"
  :pagination="false"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  //:autoplay="{delay: 3000, }"
  )
  .swiper-button-prev(ref="prev")
  .swiper-button-next(ref="next")

  swiper-slide( v-for="(option, index) in listDocuments" :key="option.index")
    img(:src="option")

</template>

<script>
import Header from "@/components/header";
import VSelect from "@/components/v-select";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import {useStore} from 'vuex';
import {ref,computed} from "vue";

export default {
  name: "App",
  components: { Header, VSelect, Swiper, SwiperSlide },
  setup() {
    const store = useStore();
    const listOptions = computed(() => store.getters.getListOptions);
    const listDocuments = computed(() => store.getters.getListDocuments);

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


    return { optionSelect, listOptions, listDocuments, selected, onSwiper,
      onSlideChange, prev, next,
      modules: [Autoplay, Pagination, Navigation],
      }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 400px;
  display: flex;
  justify-content: center;
}

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 24px;
  color: dimgrey;
  font-size: 16px;
  //margin-top: 60px;
}
</style>