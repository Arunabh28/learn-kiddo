(function(t){function e(e){for(var s,r,a=e[0],u=e[1],c=e[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/learn-kiddo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1b67":function(t,e,n){"use strict";n("b15a")},"1f53":function(t,e,n){t.exports=n.p+"img/cat.3125d5e8.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("div",{staticClass:"bkg-animated",attrs:{id:"app"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[t.ShowSection("View Topics")?n("section",[n("div",{staticClass:"d-flex justify-content-around flex-wrap"},t._l(t.topics,(function(e){return n("card",{key:e.id,attrs:{cardInfo:e},nativeOn:{click:function(n){return t.NavigateToTopic(e.target)}}})})),1)]):t._e(),t.ShowSection("Course Completed")?n("section",[t._v(" You did it. Back to menu... ")]):t._e(),t.ShowSection("Maths/OddEven")?n("section",t._b({},"section",t.oddEvenQuestions,!1),[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-1"},[n("button",{staticClass:"btn btn-secondary btn-circle btn-sm",attrs:{type:"button"},on:{click:function(e){return t.NavigateToTopic("View Topics")}}},[t._v(" Home ")])]),n("div",{staticClass:"col-sm-11 ml-auto"},[t._v("Number of question = "+t._s(t.oddEvenQuestions.numberOfQuestions))])]),n("oddEvenCard",{attrs:{questionModel:t.oddEvenQuestions},on:{onComplete:function(e){return t.NavigateToTopic("View Topics")},speak:t.SpeakTheText}})],1):t._e(),t.ShowSection("Maths/GreaterSmaller")?n("section",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-1"},[n("button",{staticClass:"btn btn-secondary btn-circle btn-sm",attrs:{type:"button"},on:{click:function(e){return t.NavigateToTopic("View Topics")}}},[t._v(" Home ")])])]),n("comparisonCard",{attrs:{numberOfQuestions:5,maxNumber:20},on:{speak:t.SpeakTheText,onComplete:function(e){return t.NavigateToTopic("View Topics")}}})],1):t._e()])])])])},i=[],r={textToSpeach:{speak:function(t){if("speechSynthesis"in window)try{var e=new SpeechSynthesisUtterance;e.text=t,e.pitch=.7,window.speechSynthesis.speak(e)}catch(n){console.log(n)}else alert("Sorry, your browser doesn't support text to speech!")}}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card m-2",staticStyle:{"min-width":"20rem","max-width":"20rem"}},[n("div",{staticClass:"card-header bg-info text-white"},[t._v(t._s(t.cardInfo.title))]),n("div",{staticClass:"card-body"},[t._v(t._s(t.cardInfo.description))])])},u=[],c=(n("a9e3"),{id:Number,title:String,description:String,target:String}),l={name:"cardComponent",props:{cardInfo:c}},d=l,h=n("2877"),m=Object(h["a"])(d,a,u,!1,null,null,null),p=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({staticClass:"jumbotron"},"div",t.questionModel,!1),[n("div",{staticClass:"row"},[n("h3",{staticClass:"m-auto"},[t._v("Hi!! Can you count "+t._s(t.question.number1Image)+"? Is it even or odd?")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"d-flex justify-content"},t._l(t.question.number1,(function(e){return n("div",{key:e,staticClass:"ml-auto"},[n("img",{staticClass:"img img-fluid",staticStyle:{width:"8rem",height:"8rem"},attrs:{alt:t.question.number1Image,src:t.question.number1Url}})])})),0)]),n("div",{staticClass:"row .sketchPad"},[n("sketchPad",{attrs:{canvasWidth:t.canvasWidth,canvasHeight:100,showNumber:!0}})],1),n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"d-flex justify-content"},[n("div",{staticClass:"ml-auto"},[n("input",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",value:"Odd",id:"oddButton"},on:{click:function(e){return t.validateAnswer("Odd")}}})]),n("div",{staticClass:"ml-auto"},[n("input",{staticClass:"btn btn-lg btn-warning",attrs:{type:"button",value:"Even",id:"evenButton"},on:{click:function(e){return t.validateAnswer("Even")}}})]),n("div",{staticClass:"ml-auto"},[n("input",{staticClass:"btn btn-lg btn-info",attrs:{type:"button",value:"Next",id:"nextButton"},on:{click:function(e){return t.onNext()}}})])])])])])},v=[],f=(n("4de4"),{id:Number,number1Image:String,number1Url:String,number2Image:String,number2Url:String,number1:Number,number2:Number,result:Object,answered:Boolean,isCorrect:Boolean}),g={numberOfQuestions:Number,questions:Array<f>=[],viewed:Number,currentQuestion:f},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas",{attrs:{id:"canvas",width:t.canvasWidth,height:t.canvasHeight},on:{mousedown:t.handleMouseDown,mouseup:t.handleMouseUp,mousemove:t.handleMouseMove}}),n("div",{staticClass:"d-flex"},[n("button",{staticClass:"btn btn-sm mr-1",staticStyle:{"background-color":"#F63E02",color:"white"},on:{click:function(e){return t.UpdatePenColor("#F63E02")}}}),n("button",{staticClass:"btn btn-sm mr-1",staticStyle:{"background-color":"#0356fc",color:"white"},on:{click:function(e){return t.UpdatePenColor("#0356fc")}}}),n("button",{staticClass:"btn btn-sm mr-1",staticStyle:{"background-color":"#28fc03",color:"white"},on:{click:function(e){return t.UpdatePenColor("#28fc03")}}}),n("button",{staticClass:"btn btn-sm mr-1",staticStyle:{"background-color":"#fce703",color:"white"},on:{click:function(e){return t.UpdatePenColor("#fce703")}}}),n("button",{staticClass:"btn btn-sm mr-1",staticStyle:{"background-color":"#000000",color:"white"},on:{click:function(e){return t.UpdatePenColor("#000000")}}}),n("button",{staticClass:"btn btn-sm pull-right text-danger",on:{click:function(e){return t.ResetCanvas()}}},[t._v("X")])])])},C=[],y={name:"drawing-board",props:{canvasWidth:Number,canvasHeight:Number,showNumber:Boolean},data:function(){return{penColor:String,canvasElement:HTMLCanvasElement,mouse:{current:{x:0,y:0},previous:{x:0,y:0},down:!1},touch:{current:{x:0,y:0},previous:{x:0,y:0},down:!1}}},created:function(){this.canvasElement=document.getElementById("canvas")},mounted:function(){this.canvasElement=document.getElementById("canvas"),this.ResetCanvas(),this.penColor="#F63E02";var t=this;this.canvasElement.ontouchstart=function(e){t.touchstarted(e),e.stopPropagation()},this.canvasElement.ontouchmove=function(e){t.ontouchmove(e),e.stopPropagation()},this.canvasElement.ontouchend=function(e){e.stopPropagation(),t.ontouchend(e)}},computed:{currentMouse:function(){var t=this.canvasElement,e=t.getBoundingClientRect();return{x:this.mouse.current.x-e.left,y:this.mouse.current.y-e.top}},currentTouch:function(){var t=this.canvasElement,e=t.getBoundingClientRect();return{x:this.touch.current.x-e.left,y:this.touch.current.y-e.top}}},methods:{drawNumberLine:function(t){t.font="12px serif";for(var e=this.canvasWidth/2,n=e/11,s=0;s<=10;s++){var o=s*n+15;t.beginPath(),t.arc(o,50,4,0,2*Math.PI),t.stroke(),t.fillText(s,o-5,75)}},UpdatePenColor:function(t,e){this.penColor=t,e&&e.preventDefault()},ResetCanvas:function(){var t=this.canvasElement,e=t.getContext("2d");e.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.showNumber&&this.drawNumberLine(e)},draw:function(){var t,e,n=this.canvasElement,s=n.getContext("2d");this.mouse.down&&(t=this.currentMouse.x,e=this.currentMouse.y),this.touch.down&&(t=this.currentTouch.x,e=this.currentTouch.y),this.touch&&s.lineTo(t,e),s.strokeStyle=this.penColor,s.lineWidth=2,s.stroke()},handleMouseDown:function(t){this.mouse.down=!0,this.mouse.current={x:t.pageX,y:t.pageY};var e=this.canvasElement,n=e.getContext("2d");n.moveTo(this.currentMouse.x,this.currentMouse.y)},handleMouseUp:function(){this.mouse.down=!1},handleMouseMove:function(t){this.mouse.current={x:t.pageX,y:t.pageY},this.draw(t)},touchstarted:function(t){this.touch.down=!0,this.touch.current={x:t.touches[0].clientX,y:t.touches[0].clientY};var e=this.canvasElement,n=e.getContext("2d");n.moveTo(this.currentTouch.x,this.currentTouch.y),this.draw(t),t.preventDefault()},ontouchmove:function(t){this.touch.current={x:t.touches[0].clientX,y:t.touches[0].clientY},this.draw(t),t.preventDefault()},ontouchend:function(t){this.touch.down=!1,t.preventDefault()}},ready:function(){var t=document.getElementById("canvas");t.clientWidth=this.canvasWidth;var e=t.getContext("2d");e.translate(.5,.5),e.imageSmoothingEnabled=!1}},x=y,E=Object(h["a"])(x,w,C,!1,null,null,null),S=E.exports,q={name:"OddEven",props:{questionModel:g},components:{sketchPad:S},data:function(){return{oddEvenQuestions:g,question:f}},created:function(){this.oddEvenQuestions=this.questionModel,this.question=this.questionModel.currentQuestion},mounted:function(){this.speak("Hi!! Can you count "+this.question.number1Image+". Is it even or odd?")},computed:{canvasWidth:function(){var t=document.getElementsByClassName("sketchPad")[0];return void 0===t?.75*window.innerWidth:.8*t.clientWidth+"px"}},methods:{onNext:function(){console.log("onNext clicked!!");var t=this.question.id,e=this.oddEvenQuestions.questions.filter((function(e){return e.id===t+1}));0===e.length&&this.$emit("onComplete"),this.question=e[0],this.question.answered=!1,this.question.isCorrect=!1,this.speak("Can you now count number of "+this.question.number1Image+"? Is it even or odd?")},validateAnswer:function(t){null!==this.question&&(this.question.result===t?(this.speak("You got it!! It is "+t),this.question.isCorrect=!0):(this.speak("Oh no. You got it wrong!! It is "+this.question.result),this.question.isCorrect=!1),this.oddEvenQuestions.currentQuestion.answered=!0)},speak:function(t){this.$emit("speak",t)}}},k=q,_=Object(h["a"])(k,b,v,!1,null,null,null),T=_.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron"},[n("h3",[t._v("Choose the smaller/grater number")]),n("div",{staticClass:"row",class:t.borderClass},[n("div",{staticClass:"col-sm-4 col-md-4 display-2 m-auto bg-white"},[t._v(t._s(t.question.number1))]),n("div",{staticClass:"col-sm-2 col-md-2"},[n("div",{staticClass:"d-flex flex-column"},[n("input",{staticClass:"btn btn-small btn-primary m-auto",attrs:{type:"button",value:">"},on:{click:function(e){return t.validateAnswer("Greater")}}}),n("br"),n("input",{staticClass:"btn btn-small btn-secondary m-auto",attrs:{type:"button",value:"="},on:{click:function(e){return t.validateAnswer("Equal")}}}),n("br"),n("input",{staticClass:"btn btn-small btn-warning m-auto",attrs:{type:"button",value:"<"},on:{click:function(e){return t.validateAnswer("Lesser")}}})])]),n("div",{staticClass:"col-sm-4 col-md-4 display-2 m-auto bg-white"},[t._v(t._s(t.question.number2)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.question&&t.question.answered,expression:"question && question.answered"}],staticClass:"col-sm-2"},[t.question.isCorrect?n("span",{staticClass:"text-success"},[n("sup",[t._v("correct")])]):t._e(),t.question.isCorrect?t._e():n("span",{staticClass:"text-danger"},[n("sup",[t._v("wrong")])])])]),n("div",{staticClass:"row m-3 p-3"},[n("div",{staticClass:"ml-auto"},[n("input",{staticClass:"btn btn-lg btn-info",attrs:{type:"button",value:"Next",id:"nextButton"},on:{click:function(e){return t.onNext()}}})])])])},O=[],N=(n("c975"),{name:"GreaterSmaller",props:{numberOfQuestions:Number,maxNumber:Number},data:function(){return{model:Array<f>=[],question:f}},created:function(){this.model=new Array(this.numberOfQuestions),this.buildModel(),this.question=this.model[0]},computed:{borderClass:function(){return void 0===this.question?"":this.question.answered?this.question.isCorrect?"border border-success":"border border-danger":""}},methods:{buildModel:function(){var t=[];while(t.length<this.numberOfQuestions){var e=Math.floor(Math.random()*this.maxNumber+1);if(t.indexOf(e)<0){t.push(e);var n=t.length-1,s=Math.floor(Math.random()*this.maxNumber+1),o=new Object;o.id=t.length,o.number1=e,o.number2=s,o.answered=!1,o.result=e===s?"Equal":e>s?"Greater":"Lesser",this.model[n]=o}}},onNext:function(){var t=this.question.id,e=this.model.filter((function(e){return e.id===t+1}));console.log(e.length),0!==e.length?this.question=e[0]:this.$emit("onComplete")},validateAnswer:function(t){this.question.answered=!1,this.question.isCorrect=!1,this.question.result===t&&(this.question.isCorrect=!0),this.question.answered=!0}}}),Q=N,I=Object(h["a"])(Q,M,O,!1,null,null,null),j=I.exports,P={subjectTopics:[{id:"1",title:"Odd-Even",description:"Choose odd and even number",target:"Maths/OddEven"},{id:"2",title:"Greater/Smaller",description:"Choose greater or smaller",target:"Maths/GreaterSmaller"},{id:"3",title:"Simple Addition",description:"Simple Addition of single digit number",target:"Maths/AddSimple"},{id:"4",title:"Addition",description:"Addition of two digit number",target:"Maths/Addition"},{id:"5",title:"Simple Subtraction",description:"Simple Subtraction of single digit number",target:"Maths/SubtractSimple"},{id:"6",title:"Subtraction",description:"Subtraction of two digit number",target:"Maths/Subtraction"}]},U={questions:[{id:1,number1Image:"Apple",number1Url:n("c32f"),number1:3,result:"Odd"},{id:2,number1Image:"Ball",number1Url:n("f84c"),number1:6,result:"Even"},{id:3,number1Image:"Cat",number1Url:n("1f53"),number1:2,result:"Even"},{id:4,number1Image:"Dog",number1Url:n("9424"),number1:7,result:"Odd"},{id:5,number1Image:"Elephant",number1Url:n("6cd4"),number1:1,result:"Odd"},{id:6,number1Image:"Frog",number1Url:n("f4be"),number1:4,result:"Even"},{id:7,number1Image:"Ball",number1Url:n("f84c"),number1:5,result:"Odd"}]},A={name:"MathApp",components:{card:p,oddEvenCard:T,comparisonCard:j},data:function(){return{currentView:String,topics:null,oddEvenQuestions:g}},created:function(){this.currentView="View Topics"},watch:{currentView:function(){switch(this.currentView){case"View Topics":this.topics=P.subjectTopics;break;case"Maths/OddEven":this.oddEvenQuestions=g,this.oddEvenQuestions.questions=U.questions,this.oddEvenQuestions.numberOfQuestions=U.questions.length,this.oddEvenQuestions.viewed=0,this.oddEvenQuestions.currentQuestion=U.questions[0],this.oddEvenQuestions.currentQuestion.answered=!1;break;case"Maths/GreaterSmaller":this.oddEvenQuestions=g,this.oddEvenQuestions.questions=U.questions,this.oddEvenQuestions.numberOfQuestions=U.questions.length,this.oddEvenQuestions.viewed=0,this.oddEvenQuestions.currentQuestion=U.questions[0],this.oddEvenQuestions.currentQuestion.answered=!1;break}}},methods:{ShowSection:function(t){return console.log("Request to show: "+t),this.currentView===t},NavigateToTopic:function(t){console.log("Clicked "+t),this.currentView=t},SpeakTheText:function(t){r.textToSpeach.speak(t)}}},B=A,V=(n("1b67"),Object(h["a"])(B,o,i,!1,null,null,null)),W=V.exports,H=n("5f5b");n("ab8b"),n("2dd8");s["default"].use(H["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(W)}}).$mount("#app")},"6cd4":function(t,e,n){t.exports=n.p+"img/elephant.74416c0a.png"},9424:function(t,e,n){t.exports=n.p+"img/dog.7ca67d2d.png"},b15a:function(t,e,n){},c32f:function(t,e,n){t.exports=n.p+"img/apple.477ba82d.png"},f4be:function(t,e,n){t.exports=n.p+"img/frog.e8abf334.png"},f84c:function(t,e,n){t.exports=n.p+"img/ball.9b0d6d2c.png"}});
//# sourceMappingURL=app.64879cb0.js.map