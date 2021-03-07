<template>
    
    <div class="jumbotron"> 
       
        <div class="d-flex">
            <sketchPad v-for="(item,index) in TracingNumbers" :key="index" 
            v-bind:canvasWidth="canvasWidth" v-bind:canvasHeight="160" 
            v-bind:traceText="item" v-bind:elementId="getElementId(index)" 
            v-bind:displayText=true class="m-auto p-1">
            
            </sketchPad>
        </div>      
            
    </div>
</template>

<script>


import sketchPad from '../TracingText'


export default {
  name: 'TraceNumber',
  props:{
        NumberOfTraces:Number,
        MaxNumber:Number
    },
    components:{
        sketchPad
    },
    data:function(){
        return{
            TracingNumbers:[]
        }
    },
    created:function(){
        this.TracingNumbers=[];
        for(var i=0;i<this.NumberOfTraces;i++){
            var num=Math.floor(Math.random()*this.MaxNumber+1);
            this.TracingNumbers.push(num.toString());
        }
        
        
    },
    mounted:function(){
        
    },
    computed:{
        canvasWidth:function(){
            var windowWidth= Math.floor(window.innerWidth *0.20);
            if(windowWidth<150)
                windowWidth=150;
            return windowWidth;            
        }
    },
    methods:{
        getElementId:function(index){
            return "sketchpad_" + index;
        },
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