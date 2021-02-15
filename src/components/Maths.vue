<template>
    <div class="col-sm-12"> 
      <div class="d-flex justify-content-around flex-wrap">
        <div class="card m-2" v-for="topic in topics" v-bind:key="topic.id" style="width:30rem;">
          <div class="card-header bg-info text-white">{{topic.title}}</div>
          <div class="card-body">{{topic.description}}</div>
          <router-link :to="{path:topic.target}">
          <div class="card-footer bg-success text-white">Let's Go!!</div>
          </router-link>
        </div>
        
      </div>
    </div>
</template>
<script>
import chapter from '../assets/data/MathTopics.json';
export default {
  name: 'Maths',
  data:function(){
    return{
      topics:null
    }   
    
  },
  created:function(){
    this.topics=chapter.subjectTopics;
  },
  method:{
    routeName:function(str){
      return str;
    }
  }
  }
  </script>