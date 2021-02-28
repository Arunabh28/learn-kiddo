<template>
    
    <div class="jumbotron" v-bind="questionModel"> 
       
        <div class="row">
            <h3 class="m-auto">Hi!! Can you count {{question.number1Image}}? Is it even or odd?</h3>
        </div>
        <div class="row">
            
            <div class="d-flex justify-content">
                
                <div class="ml-auto" v-for="index in question.number1" :key="index">
                    <img class="img img-fluid" :alt="question.number1Image" :src="question.number1Url" style="width:8rem;height:8rem;" />
                </div>

            </div>
        </div>
        <div class="row .sketchPad">
            <sketchPad v-bind:canvasWidth="canvasWidth" v-bind:canvasHeight="100" v-bind:showNumber=true></sketchPad>
        </div>
            <div class="row mt-3">
                <div class="col-sm-12">
                <div class="d-flex justify-content">
                    <div class="ml-auto">
                        <input type="button" class="btn btn-lg btn-primary" 
                    value="Odd" id="oddButton" v-on:click="validateAnswer('Odd')"/>
                    </div>
                    <div class="ml-auto">
                    <input type="button" class="btn btn-lg btn-warning" 
                    value="Even" id="evenButton"  v-on:click="validateAnswer('Even')"/>
                    </div>
                    <div class="ml-auto">
                    <input type="button" class="btn btn-lg btn-info" 
                    value="Next" id="nextButton" v-on:click="onNext()"/>
                    </div>
                </div>
                </div>

                
                
               
            </div>
        
        
        
    </div>
</template>

<script>

import oddEvenView from '../../model/OddEvenViewModel'
import mathQuestion from '../../model/MathQuestionModel'
import sketchPad from '../DrawingBoard'


export default {
  name: 'OddEven',
  props:{
        questionModel:oddEvenView
    },
    components:{
        sketchPad
    },
    data:function(){
        return{
            oddEvenQuestions:oddEvenView,
            question:mathQuestion
        }
    },
    created:function(){
        
        this.oddEvenQuestions=this.questionModel;
        this.question=this.questionModel.currentQuestion;
        
        
    },
    mounted:function(){
        this.speak('Hi!! Can you count '+this.question.number1Image + '. Is it even or odd?');
    },
    computed:{
        canvasWidth:function(){
            var elem=document.getElementsByClassName("sketchPad")[0];
            return elem===undefined?(window.innerWidth *0.75) :(elem.clientWidth*0.8) + "px" ;
        }
    },
    methods:{
        onNext:function(){
            console.log("onNext clicked!!");
            let id=this.question.id;
            let nextQuestion = this.oddEvenQuestions.questions.filter(item=>{return item.id===id+1});
            if(nextQuestion.length===0)
            {
                this.$emit("onComplete");
            }
            this.question=nextQuestion[0];
            this.question.answered=false;
            this.question.isCorrect=false;
            this.speak('Can you now count number of '+ this.question.number1Image + '? Is it even or odd?');
        },
        validateAnswer:function(response){
            if(this.question===null)
            return;
            if(this.question.result===response)
            {
                this.speak("You got it!! It is " + response);
                this.question.isCorrect=true;
            }            
            else
            {
                this.speak("Oh no. You got it wrong!! It is " + this.question.result);
                this.question.isCorrect=false;
            }  
            
            this.oddEvenQuestions.currentQuestion.answered=true;
        },
        speak:function(text){
            this.$emit('speak',text);
        }
    }

}
</script>