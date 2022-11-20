<template lang="pug">
Slider(:list-items='listGefest')
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
    const listGefest = computed(() => store.getters.getListGefest)

    return {listOptions, listDocuments, listGefest}

  }
}
</script>

<style lang="scss" scoped>

</style>