<template>
    
    <div class="jumbotron"> 
        <h3>Choose the smaller/grater number</h3>
        
        <div class="row" v-bind:class="borderClass">
            <div class="col-sm-4 col-md-4 display-2 m-auto bg-white">{{question.number1}}</div>
            <div class="col-sm-2 col-md-2">
                <div class="d-flex flex-column">
                   
                <input type="button" class="btn btn-small btn-primary m-auto" v-on:click="validateAnswer('Greater')" value=">"/>
                <br/>
                <input  type="button"  class="btn btn-small btn-secondary m-auto" v-on:click="validateAnswer('Equal')" value="="/>
                <br/>
                <input  type="button"  class="btn btn-small btn-warning m-auto" v-on:click="validateAnswer('Lesser')" value="<"/>
                </div>
            </div>
            <div class="col-sm-4 col-md-4 display-2 m-auto bg-white">{{question.number2}}
                
            </div>
            <div class="col-sm-2" v-show="question && question.answered">
                <span v-if="question.isCorrect" class="text-success"><sup>correct</sup></span>
                <span v-if="!question.isCorrect" class="text-danger"><sup>wrong</sup></span>
            </div>
        </div>
       
        <div class="row m-3 p-3">            
            <div class="ml-auto">
                <input type="button" class="btn btn-lg btn-info" 
                value="Next" id="nextButton" v-on:click="onNext()"/>
            </div>
        </div>
        
    </div>
</template>
<script>

import questionModel from '../../model/MathQuestionModel'
export default {
    name:"GreaterSmaller",
    props:{
        numberOfQuestions:Number,
        maxNumber:Number
    },
    data:function(){
        return{
           model:Array<questionModel>=[],
           question:questionModel
            
        }
    },
    created:function(){
        this.model=new Array(this.numberOfQuestions);
        this.buildModel();
        this.question=this.model[0];
        
    },
    computed:{
        borderClass:function(){
            if(this.question===undefined)
                return "";
             if(!this.question.answered)
                return "";
            if(this.question.isCorrect)
                return "border border-success";
            return "border border-danger";
        }
    },
    methods:{
        buildModel:function(){
            var arr=[];
            while (arr.length<this.numberOfQuestions) {
                var rnd = Math.floor(Math.random()*this.maxNumber+1);
                if(arr.indexOf(rnd)<0)
                {
                    arr.push(rnd);
                    
                    var i=arr.length-1;
                    
                    var rnd2 = Math.floor(Math.random()*this.maxNumber+1);
                    var qm=new Object();
                    
                    qm.id=arr.length;
                    qm.number1=rnd;
                    qm.number2=rnd2;
                    qm.answered=false;
                    qm.result= rnd===rnd2?"Equal":(rnd>rnd2?"Greater":"Lesser");
                    this.model[i]=qm;
                }
            }
            
        },
       
        onNext:function(){
            let id=this.question.id;
            let nextQuestion = this.model.filter(item=>{return item.id===id+1});
            console.log(nextQuestion.length);
            if(nextQuestion.length===0)
            {
                this.$emit("onComplete");
                return;
            }
            this.question=nextQuestion[0];
        },
        validateAnswer:function(response){
            
            this.question.answered=false;
            this.question.isCorrect=false;
            if(this.question.result===response)
                this.question.isCorrect=true;
            this.question.answered=true;
            return;
        }
    }

}
</script>