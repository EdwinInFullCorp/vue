<template>
  <div class="wish">
    <h1>{{ title }}</h1>
    <input type="text" v-model="wishName" v-bind:placeholder="wishTip">
    <button type="button" v-on:click="addWish">{{ buttonLabel }}</button>
    <ol>
      <Wish 
      v-for="wish in wishContainer" 
      v-bind:wish="wish"
      v-bind:key="wish.id"
      v-on:removeWishFromWish="removeWish(wish)"
      />
    </ol>
  </div>
</template>
<script>
import Wish from "./Wish.vue";
export default {
  name: "WishList",
  components: {
    Wish
  },
  data() {
    return {
      title: "Wish",
      buttonLabel: "Make a wish.",
      wishTip: "What is your wish?",
      wishName: "",
      wishContainer: [
        { name: "fwejofiwe" },
        { name: "gaergaer" },
        { name: "aerhaer" }
      ]
    };
  },
  methods: {
    addWish() {
      if (this.wishName) {
        this.wishContainer.push({ name: this.wishName });
      }
      this.wishName = "";
    },
    removeWish(wish) {
      const tempWishContainer = this.wishContainer.filter(v => v !== wish);
      this.wishContainer = tempWishContainer;
    }
  }
};
</script>
<style scoped>
  .wish{
    padding: 8px;
    box-sizing: border-box;
    margin: auto;
  }
</style>
