<template>
    <div>
      
      <canvas id="canvas" v-on:mousedown="handleMouseDown" 
      v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" 
      v-bind:width="canvasWidth" v-bind:height="canvasHeight">        
      </canvas>
      <div class="d-flex">
        <button class="btn btn-sm mr-1" style="background-color:#F63E02;color:white;" @click="UpdatePenColor('#F63E02')"></button>
        <button class="btn btn-sm mr-1" style="background-color:#0356fc;color:white;" @click="UpdatePenColor('#0356fc')"></button>
        <button class="btn btn-sm mr-1" style="background-color:#28fc03;color:white;" @click="UpdatePenColor('#28fc03')"></button>
        <button class="btn btn-sm mr-1" style="background-color:#fce703;color:white;" @click="UpdatePenColor('#fce703')"></button>        
        <button class="btn btn-sm mr-1" style="background-color:#000000;color:white;" @click="UpdatePenColor('#000000')"></button>        
        <button class="btn btn-sm pull-right text-danger" @click="ResetCanvas()">X</button>
      </div>
    </div>
        
</template>
<script>
    export default{
        name:"drawing-board",
        props:{
            canvasWidth:Number,
            canvasHeight:Number,
            showNumber:Boolean
            
        },
        data:function(){
            return{
              penColor:String,
                mouse:{
                    current: {
                    x: 0,
                    y: 0
                    },
                previous: {
                    x: 0,
                    y: 0
                },
                down: false
                }
            }
        },
        mounted:function(){
           this.ResetCanvas();
            this.penColor="#F63E02";
        },
        computed:{
            currentMouse: function () {
            var c = document.getElementById("canvas");
            var rect = c.getBoundingClientRect();            
            return {
                x: this.mouse.current.x - rect.left,
                y: this.mouse.current.y - rect.top
                }
            }
        },
        methods:{
          drawNumberLine:function(ctx){
              ctx.font = '12px serif'
              var width=this.canvasWidth/2;
              var spacing = width/11;
              for(var i=0;i<=10;i++){
                var x=i*spacing + 15
                ctx.beginPath();	
                  ctx.arc(x, 50, 4, 0, 2 * Math.PI);
                  ctx.stroke();
                  
                  ctx.fillText(i, x-5, 75);
                  
              }
             

              
          },
          UpdatePenColor:function(pen,event){
              this.penColor=pen;
              if (event) {
                event.preventDefault()
              }
          },
          ResetCanvas:function(){
            var c = document.getElementById("canvas");
           var ctx = c.getContext("2d");
           ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);
            if(this.showNumber)
            {
              this.drawNumberLine(ctx);
              
            }
          },
            draw: function () {
      
      
      // requestAnimationFrame(this.draw);
     if (this.mouse.down ) {
       var c = document.getElementById("canvas");

    var ctx = c.getContext("2d");
       
       //ctx.clearRect(0,0,800,800);
       
       
       
  
    ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
       ctx.strokeStyle =this.penColor;
       ctx.lineWidth = 2;
    ctx.stroke();
    
     }
     
    },
    handleMouseDown: function (event) {
      this.mouse.down = true;
      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }

            var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");

      ctx.moveTo(this.currentMouse.x, this.currentMouse.y)
      

    },
        handleMouseUp: function () {
      this.mouse.down = false;
    },
    handleMouseMove: function (event) {

      this.mouse.current = {
        x: event.pageX,
        y: event.pageY
      }
      
      this.draw(event)
      
    }
  },
                  ready: function () {
                    
                    var c = document.getElementById("canvas");
                    c.clientWidth=this.canvasWidth;
    var ctx = c.getContext("2d");
                    ctx.translate(0.5, 0.5);
                    ctx.imageSmoothingEnabled= false;
                    
                      
  // this.draw();

        }
    }
</script>