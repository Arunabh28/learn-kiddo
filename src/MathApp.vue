<template>
<b-container>  
  <div id="app" class="bkg-animated">     
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
                v-on:onComplete="NavigateToTopic('View Topics')" v-on:speak="SpeakTheText"></oddEvenCard>

            </section>
            <section v-if="ShowSection('Maths/GreaterSmaller')" >
                <div class="row">
                    <div class="col-sm-1">
                        <button type="button" class="btn btn-secondary btn-circle btn-sm" v-on:click="NavigateToTopic('View Topics')">
                            Home
                        </button>
                    </div>
                    
                </div>
                <comparisonCard v-bind:numberOfQuestions="5" v-bind:maxNumber="20"
                v-on:speak="SpeakTheText" v-on:onComplete="NavigateToTopic('View Topics')"
                >
                    
                </comparisonCard>

            </section>
            <section v-if="ShowSection('Maths/TraceNumber')" >
                <div class="row">
                    <div class="col-sm-1">
                        <button type="button" class="btn btn-secondary btn-circle btn-sm" v-on:click="NavigateToTopic('View Topics')">
                            Home
                        </button>
                    </div>
                    
                </div>
                <tracingCard v-bind:NumberOfTraces="3" v-bind:MaxNumber="20"></tracingCard>

            </section>
        </div>        

    </div>
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</b-container>  
</template>

<script>
import speaker from './data/Speech'
import card from './components/CardComponent.vue'
import oddEvenCard from './components/MathTopics/OddEven.vue'
import comparisonCard from './components/MathTopics/GreaterSmaller.vue'
import tracingCard from './components/MathTopics/TraceNumber.vue'
//View Model
import oddEvenView from './model/OddEvenViewModel'
//Data imports
import mathTopics from './data/MathTopics'
import oddEvenQuestionData from './data/OddEvenQuestion_L1'


export default {
  name: 'MathApp',
  components: {    
    card,
    oddEvenCard,
    comparisonCard,
    tracingCard
    
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
