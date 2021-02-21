<template>
    
    <div class="jumbotron" v-bind="question" :key="question.id"> 
        <h3>Choose the smaller/grater number</h3>
        <h3>Hi!! Can you count {{question.number1Image}}? Is it even or odd?</h3>
        <div class="d-flex justify-content-center">
            <div v-for="index in question.number1" :key="index">
                <img class="img-fluid" :alt="question.number1Image" :src="question.number1Url" style="width:8rem;height:8rem;" />
            </div>
        </div>
        <div class="row m-3 p-3">
            <div class="col-sm-offset-3 col-sm-3">
                <input type="button" class="btn btn-lg btn-primary" 
                value="Odd" id="oddButton" v-on:click="validateAnswer('Odd')"/>
            </div>
            <div class="col-sm-offset-3 col-sm-3">
                <input type="button" class="btn btn-lg btn-warning" 
                value="Even" id="evenButton"  v-on:click="validateAnswer('Even')"/>
            </div>
            <div class="col-sm-offset-3 col-sm-3">
                <input type="button" class="btn btn-lg btn-info" 
                value="Next" id="nextButton" v-on:click="onNext()"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import oddEvenView from '../../model/OddEvenViewModel'
import mathQuestion from '../../model/MathQuestionModel'
export default {
    name:"GreaterSmaller",
    props:{
        questionModel:oddEvenView
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
    methods:{
        onNext:function(){
            console.log("onNext clicked!!");
            var id=this.question.id;
            var nextQuestion = this.oddEvenQuestions.questions.filter(item=>{return item.id===id+1});
            if(nextQuestion.length===0)
            {
                this.$emit("onComplete");
            }
            this.question=nextQuestion[0];
            this.question.answered=false;
            this.question.isCorrect=false;
        },
        validateAnswer:function(response){
            if(this.question===null)
            return;
            var speakOut="";
            if(this.question.result===response)
            {
                speakOut="You got it!! It is " + response;
                this.question.isCorrect=true;
            }            
            else
            {
                speakOut="Oh no. You got it wrong!! It is " + this.question.result;
                this.question.isCorrect=false;
            }  
            console.log(speakOut);
            this.oddEvenQuestions.currentQuestion.answered=true;
        }
    }

}
</script>