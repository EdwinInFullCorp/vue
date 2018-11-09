<template> 
  <li>
    {{wish.name}}
    <button type="button">V</button>
    <button type="button" v-on:click="remove">X</button>
  </li> 
</template>
<script>
export default {
  name: "Wish",
  props: {
    wish: Object
  },
  methods: {
    remove(){
      this.$emit('removeWishFromWish')
    }
  }
};
</script>
<style scoped>
</style>