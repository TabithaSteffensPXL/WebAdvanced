<script>
export default {
  name: "MyComponent",
  props:{
    name:String,
    surname: String
  },
  data(){
    return{
      message: ''
      /*error: true,
      bgColor: "#c9d3bf",*/
    }
  },
  computed:{
    fullName(){
      return `${this.name} ${this.surname}`;
    }
  },
  methods:{

  }
}
</script>

<template>
  <div>
    <input type="text" v-model="message">
    <p>The value of the message is {{message}}</p>
<!--    <p :class="{red:error}" :style="{backGroundColor: bgColor}">{{ fullName }}</p>-->
  </div>
</template>

<style scoped>
/*.red{
  background-color: red;
}*/
</style>