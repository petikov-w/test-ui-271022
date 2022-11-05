<template lang="pug">
Slider(:list-items='listDocuments')
</template>

<script>
import Slider from "@/components/slider";
import {useStore} from 'vuex';
import {ref,computed} from "vue";

export default {
  name: "App",
  components: { Slider },
  setup() {
    const store = useStore();
    const listOptions = computed(() => store.getters.getListOptions);
    const listDocuments = computed(() => store.getters.getListDocuments)

    return {listOptions, listDocuments}

  }
}
</script>

<style lang="scss" scoped>

</style>