export default{
    textToSpeach:{
        speak:function(text){
            if ('speechSynthesis' in window) {
                try{
                    var msg = new SpeechSynthesisUtterance();
                    msg.text = text;
                    msg.pitch=0.7;
                    window.speechSynthesis.speak(msg);
              }catch(err)
              {
                  console.log(err);
              }       
              }else{
                      alert("Sorry, your browser doesn't support text to speech!");
                  }
      
              }
      
        
    }
}