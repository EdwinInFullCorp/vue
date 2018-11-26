<template>
  <div class="error-container">
    <img class="error-image" src="../assets/error.svg" alt="">
    <h1 class="error-code">404</h1>
    <h2 class="error-title">此頁面不存在</h2>      
    <p class="error-message">這資料似乎比我們想像的更難找。</p>
  </div>
</template>
<script>
</script>
<style scoped>
.error-container {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  display: grid;
  grid-template-columns: auto 400px 400px auto;
  grid-template-rows: 25% 25% 25% 25%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  color: #ff6060ff;
}
.error-image {
  grid-row: 2/4;
  grid-column: 2/3;
  width: 80%;
  align-self: stretch;
  justify-self: center;
}
.error-code {
  font-size: 200px;
  margin: 0;
  padding: 0;
  grid-row: 2/3;
  grid-column: 3/4;
  text-align: center;
}
.error-title {
  margin: 0;
  padding: 0;
  grid-row: 3/4;
  grid-column: 3/4;
  font-size: 40px;
  text-align: center;
}
.error-message {
  margin: 0;
  padding: 0;
  grid-row: 3/4;
  grid-column: 3/4;
  align-self: center;
  text-align: center;
  font-size: 20px;
}
</style>
