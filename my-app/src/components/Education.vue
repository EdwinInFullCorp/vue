<template>
  <div class="health__education">
  <h1>{{title}}</h1>
    <select>
      <option value=""></option>
    </select>
    <button type="button">Edit</button>
    <div>
      <ol>
        <li 
          v-for="message in messageType" 
          v-bind:wish="message"
          v-bind:key="message.id"          
          >
          <span>{{ message.name }}</span>
          <button type="button" v-on:removeMessageType="removeWish(message)">Delete</button>
        </li>
        <li>
          <input type="text" v-model="messageTypeName" v-bind:placeholder="messageTypeTip">
          <button type="button" v-on:click="addMessageType">Create</button>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Health Education Type",
      messageTypeTip: "",
      messageTypeName: "",
      messageType: [
        { name: "fwejofiwe" },
        { name: "gaergaer" },
        { name: "aerhaer" }
      ]
    };
  },
  methods: {
    addMessageType() {
      if (this.messageTypeName) {
        this.messageType.push({ name: this.messageTypeName });
      }
      this.messageTypeName = "";
    },
    removeMessageType(message) {
      const messageType = this.messageType.filter(v => v !== message);
      this.messageType = messageType;
    }
  }
};
</script>
<style scoped>
</style>
