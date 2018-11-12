<template>
  <div>
    <p>歡迎 {{ $route.params.id }} 的使用</p>
    <p>{{ userMessage }}</p>    
    </div>
</template>

<script>
export default {
  name: "User",
  props: {
    userMessage: String
  }
};
</script>

