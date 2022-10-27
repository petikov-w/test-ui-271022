<template lang="pug">
.wrapper
  .options
    p.title(@click="handleListOptionsVisible") {{ selected }}
    p.list(v-if="listVisible" )
      p(v-for="option in options" :key="option.value" @click="handleSelectOptions(option)") {{ option.name }}
  h2 {{ selected }}
</template>

<script>
import {ref} from "vue";

export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() { return [] }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  setup(props, {emit}) {
      const listVisible=ref(false);
      const options = props.options;
      const selected = props.selected;
      const handleListOptionsVisible= () => { listVisible.value ? listVisible.value=false : listVisible.value=true }
      const handleSelectOptions = (option) => {emit('select',option), listVisible.value=false};
      return { options, selected, listVisible, handleListOptionsVisible, handleSelectOptions}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: sans-serif;
  width: 200px;
  margin: 0 auto;
  padding-top: 50px;
  .options {

    .title {
      border: 1px solid #504e4e;
      margin-bottom: 3px;
    }
    .list {
      border: 1px solid #504e4e;
      p {
        //margin: 0;
        margin: 2px 0;
        &:hover {
          background-color: aqua;
        }
      }
    }

  }

}
</style>