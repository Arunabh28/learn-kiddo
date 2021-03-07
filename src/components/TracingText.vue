<template>
    <div>      
        <div v-show="displayText" class=".h3 text-primary">{{traceText}}</div>
      <canvas v-bind:id="elementId" v-on:mousedown="handleMouseDown" 
      v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" 
      v-bind:width="canvasWidth" v-bind:height="canvasHeight">        
      </canvas>
      <div class="d-flex">
        <button class="btn btn-sm mr-1" style="background-color:#F63E02;color:white;" @click="UpdatePenColor('#F63E02')"></button>
        <button class="btn btn-sm mr-1" style="background-color:#0356fc;color:white;" @click="UpdatePenColor('#0356fc')"></button>
        <button class="btn btn-sm mr-1" style="background-color:#28fc03;color:white;" @click="UpdatePenColor('#28fc03')"></button>
        <button class="btn btn-sm mr-1" style="background-color:#fce703;color:white;" @click="UpdatePenColor('#fce703')"></button>        
        <button class="btn btn-sm mr-1" style="background-color:#000000;color:white;" @click="UpdatePenColor('#000000')"></button>        
        <button class="btn btn-sm  btn-secondary  mr-1"  @click="UpdatePenSize('+')">+</button>
        <button class="btn btn-sm btn-secondary mr-1"  @click="UpdatePenSize('-')">-</button>
        <button class="btn btn-sm pull-right text-danger" @click="ResetCanvas()">X</button>
      </div>      
    </div>        
</template>

<script>
    export default{
        name:"tracing-text",
        props:{
            canvasWidth:Number,
            canvasHeight:Number,
            elementId:String,
            traceText:String,
            displayText:Boolean           
        },
        data:function(){
            return{
              penColor:String,
              penSize:Number,
              canvasElement:HTMLCanvasElement,
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
                },
                touch:{
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
        created:function(){
            if(this.elementId===undefined|| this.elementId===null||this.elementId.length<=0)
                this.elementId="canvas_" + Math.floor(Math.random()*20);
          this.canvasElement= document.getElementById(this.elementId);
          this.penSize=2;
        },
        mounted:function(){
          this.canvasElement= document.getElementById(this.elementId);
           this.ResetCanvas();
            this.penColor="#F63E02"; 
            var self=this;           
            this.canvasElement.ontouchstart=function(event){
              self.touchstarted(event);
             event.stopPropagation();
            };
            this.canvasElement.ontouchmove=function(event){
              self.ontouchmove(event);
              event.stopPropagation();
            },
            this.canvasElement.ontouchend=function(event){
              event.stopPropagation();
              self.ontouchend(event);
            }
        },
        computed:{
            currentMouse: function () {
            var c = this.canvasElement;
            var rect = c.getBoundingClientRect();            
            return {
                x: this.mouse.current.x - rect.left,
                y: this.mouse.current.y - rect.top
                }
            },
            currentTouch: function () {
            var c = this.canvasElement;
            var rect = c.getBoundingClientRect();            
            return {
                x: this.touch.current.x - rect.left,
                y: this.touch.current.y - rect.top
                }
            }
        },
        methods:{
          drawTextForTrace:function(ctx){
              ctx.beginPath();
              ctx.font = "150px Arial";
              ctx.lineWidth = this.penSize;
              ctx.setLineDash([1,1]);
              ctx.strokeText(this.traceText,10,120);

              ctx.beginPath();
              ctx.setLineDash([]);

             
          },
          UpdatePenColor:function(pen,event){
              this.penColor=pen;
              if (event) {
                event.preventDefault()
              }
          },
          UpdatePenSize:function(size,event){
              if(size==='+'){
                  this.penSize = this.penSize + 1;

              }else{
                  if(this.penSize>1)
                    this.penSize = this.penSize - 1;
              }
              if (event) {
                event.preventDefault()
              }
                
          },
          ResetCanvas:function(){
            var c = this.canvasElement;
           var ctx = c.getContext("2d");
           ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);
           this.penSize=2;
            this.drawTextForTrace(ctx);
          },
            draw: function () {
              // requestAnimationFrame(this.draw); 
              var x;
              var y;
              var c = this.canvasElement;
              var ctx = c.getContext("2d");
              if (this.mouse.down ) {
                //ctx.clearRect(0,0,800,800);
                x=this.currentMouse.x;
                y=this.currentMouse.y;       
              }
              if (this.touch.down ) {
                //ctx.clearRect(0,0,800,800);
                x=this.currentTouch.x;
                y=this.currentTouch.y;       
              }
              if(this.touch)
              ctx.lineTo(x, y);
              ctx.strokeStyle =this.penColor;
              ctx.lineWidth = this.penSize;
              ctx.stroke();      
            },
            handleMouseDown: function (event) {
              this.mouse.down = true;
              this.mouse.current = {
                x: event.pageX,
                y: event.pageY
              }
              var c = this.canvasElement;
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
      
    },
    touchstarted:function(event){
      //
      this.touch.down=true;
      //console.log(event);
      this.touch.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
      var c = this.canvasElement;
      var ctx = c.getContext("2d");
      ctx.moveTo(this.currentTouch.x, this.currentTouch.y)
      this.draw(event);
      event.preventDefault();
    },
    ontouchmove:function(event){
      
      this.touch.current = {
         x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
      
      this.draw(event)
      event.preventDefault();
    },
    ontouchend:function(event){
      this.touch.down=false;
      event.preventDefault();
    }
  },
                  ready: function () {
                    
                    var c = document.getElementById(this.elementId);
                    c.clientWidth=this.canvasWidth;
    var ctx = c.getContext("2d");
                    ctx.translate(0.5, 0.5);
                    ctx.imageSmoothingEnabled= false;
                    
                      
  // this.draw();

        }
    }
</script>