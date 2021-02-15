<template>
<b-container>  
  <div id="app">
    <subject/>
     <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <div class=row>
    <router-view></router-view>
  </div>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</b-container>  
</template>

<script>

import Subject from './components/Subject.vue'


export default {
  name: 'App',
  components: {    
    Subject
  },
  data:function(){
    return{
      topics:[]
    }
  }
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
