<template>
<b-container>  
  <div id="app">     
    <div class=row>
        <div class="col-sm-12">
            <section v-if="ShowSection('View Topics')"> 
               <div class="d-flex justify-content-around flex-wrap">
                            <card v-for="topic in topics" :key="topic.id" v-bind:cardInfo="topic" v-on:click.native="NavigateToTopic(topic.target)" ></card>
                        </div>                 
                
            </section>
            <section v-if="ShowSection('Course Completed')">
                You did it. Back to menu...
            </section>
            <section v-if="ShowSection('Maths/OddEven')" v-bind="oddEvenQuestions">
                <div class="row">
                    <div class="col-sm-1">
                        <button type="button" class="btn btn-secondary btn-circle btn-sm" v-on:click="NavigateToTopic('View Topics')">
                            Home
                        </button>
                    </div>
                    <div class="col-sm-11 ml-auto">Number of question = {{oddEvenQuestions.numberOfQuestions}}</div>
                </div>
                
                <oddEvenCard v-bind:questionModel="oddEvenQuestions" 
                v-on:onComplete="oddEvenNext" v-on:speak="SpeakTheText"></oddEvenCard>

            </section>
            <section v-if="ShowSection('Maths/GreaterSmaller')" >
                <comparisonCard v-bind:questionModel="oddEvenQuestions">
                    <input type="button" class="btn btn-small btn-info" value="Back"/>
                </comparisonCard>

            </section>
        </div>        

    </div>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</b-container>  
</template>

<script>
import speaker from './assets/data/Speech'
import card from './components/CardComponent.vue'
import oddEvenCard from './components/MathTopics/OddEven.vue'
import comparisonCard from './components/MathTopics/GreaterSmaller.vue'
//View Model
import oddEvenView from './model/OddEvenViewModel'
//Data imports
import mathTopics from './assets/data/MathTopics'
import oddEvenQuestionData from './assets/data/OddEvenQuestion'


export default {
  name: 'MathApp',
  components: {    
    card,
    oddEvenCard,
    comparisonCard,
    
  },
  data:function(){
    return{
        currentView:String,
        topics:null,
        oddEvenQuestions:oddEvenView,
        
    }
  },
  created:function(){
      this.currentView="View Topics";
  },
  watch:{
      currentView:function(){
          switch(this.currentView)
          {
              case "View Topics":
                  this.topics = mathTopics.subjectTopics;
                  break;
              case "Maths/OddEven":
                  this.oddEvenQuestions=oddEvenView;
                  this.oddEvenQuestions.questions=oddEvenQuestionData.questions;
                  this.oddEvenQuestions.numberOfQuestions= oddEvenQuestionData.questions.length;
                  this.oddEvenQuestions.viewed=0;
                  this.oddEvenQuestions.currentQuestion=oddEvenQuestionData.questions[0];
                  this.oddEvenQuestions.currentQuestion.answered=false;
                  break;
                  case "Maths/GreaterSmaller":
                  this.oddEvenQuestions=oddEvenView;
                  this.oddEvenQuestions.questions=oddEvenQuestionData.questions;
                  this.oddEvenQuestions.numberOfQuestions= oddEvenQuestionData.questions.length;
                  this.oddEvenQuestions.viewed=0;
                  this.oddEvenQuestions.currentQuestion=oddEvenQuestionData.questions[0];
                  this.oddEvenQuestions.currentQuestion.answered=false;
                  
                  break;
          }
      }
  },  
  methods:{
      ShowSection:function(sectionName){
          console.log("Request to show: " +sectionName);
          return this.currentView===sectionName;
      },
      NavigateToTopic:function(topic){
          console.log("Clicked " + topic);
          this.currentView=topic;
      },
      SpeakTheText:function(text){
          speaker.textToSpeach.speak(text);
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
