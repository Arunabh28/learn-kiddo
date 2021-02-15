<template>
    <div class="col-sm-12"> 
        <h3>{{question}}</h3>
        <div class="d-flex justify-content-center">
            <div v-for="index in objectNumber" :key="index">
                <img class="img-fluid" :alt="objectName" :src="objectImage" style="width:8rem;height:8rem;" />
            </div>
        </div>
        <div class="row m-3 p-3">
            <div class="col-sm-offset-3 col-sm-3">
                <input type="button" class="btn btn-lg btn-primary" 
                value="Odd" id="oddButton"/>
            </div>
            <div class="col-sm-offset-3 col-sm-3">
                <input type="button" class="btn btn-lg btn-warning" 
                value="Even" id="evenButton"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import appImages from '../../assets/data/AppImages.js';
import textToSpeach from '../../assets/data/Speech.js';
export default {
  name: 'OddEven',
  data:function(){
      return{
          question:String,
          objectName:String,
          objectImage:String,
          objectNumber:Number
      }
  },  
   
    created:function(){
      this.objectNumber=0;
      this.objectName = "";
      this.objectImage = "";
      
      
    },
    mounted:function(){
        this.objectNumber=Math.floor(Math.random() * (9) ) + 1;
        var images=appImages.appImages;
        var selectedImage = images[Math.floor(Math.random() * (images.length - 1) ) + 1];
        console.log(selectedImage);
        this.objectName = selectedImage.ImageName;
        this.objectImage = selectedImage.ImageUrl;
        this.question = "Count the number of "+this.objectName +". Tell if it is even or odd?";
        textToSpeach.textToSpeach.speak(this.question);
        if(this.objectNumber%2===0)
        {
            document.getElementById("oddButton").addEventListener("click",function(){
                textToSpeach.textToSpeach.speak("Odd is wrong..");
            });
            document.getElementById("evenButton").addEventListener("click",function(){
                textToSpeach.textToSpeach.speak("You did it!! Even is correct! Good job");
                setTimeout(() => {
                    location.reload();
                }, 3000);
            });
        }else{
                document.getElementById("oddButton").addEventListener("click",function(){
                    textToSpeach.textToSpeach.speak("You did it!! Odd is correct");
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                });
                document.getElementById("evenButton").addEventListener("click",function(){
                    textToSpeach.textToSpeach.speak("Even is wrong..");
                });
            }
        
        }
    }
  </script>