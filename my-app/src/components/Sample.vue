<template>
  <div>
    <span>{{ name }}</span>
  </div>
</template>
<script>
export default {
  name:'Sample',
  props:{
    title:String,
    content:String,
    count:Number,
    data:Object
  },
  data(){
    /**
     * 用來綁定元件內部的資料站存區
     * props裡面已經有的不能再建立同個KEY的名稱
     * v-model 是用來綁定元件內部的KEY，使之能同步更新，雙向綁定
     *  */
    return {
      name:"",
    }
  },
  computed:{

  },
  methods:{
    function1(){},
    function2(){},
    function3(){},
    function4(){}
  }
}
</script>
<style scoped>

</style>