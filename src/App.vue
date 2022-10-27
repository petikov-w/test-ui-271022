<template lang="pug">
v-select(:options="listOptions" @select="optionSelect" :selected="selected" )
h2 {{ selectedOpt }}
</template>

<script>
import Header from "@/components/header";
import VSelect from "@/components/v-select";
import {ref,computed} from "vue";

export default {
  name: "App",
  components: { Header, VSelect },
  setup() {
    const listOptions = [
      {name: 'Опция 1', value: 1},
      {name: 'Опция 2', value: 2},
      {name: 'Опция 3', value: 3},
      {name: 'Опция 4', value: 4},
      {name: 'Опция 5', value: 5},
      {name: 'Опция 6', value: 6},
    ];
    const selectedOpt = ref(0);
    let selected = "Выберите опцию...";
    const optionSelect = (option) => {
          selected=option.name;
    };

    return { optionSelect, listOptions, selectedOpt, selected }
  }
}
</script>

<style lang="scss" scoped>

</style>