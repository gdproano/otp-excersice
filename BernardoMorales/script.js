Vue.use(VueForm, {
	inputClasses: {
  	valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
});
const initFromData = { one: '', two: '', three:'', four:'', five:'', six:'' };



new Vue({
  el: '#app',
  data: {
   message:"Ingresa el código de 6 dígitos que hemos enviado a tu correo electronico xxxxxxx@gmail.com y celular XXXXXXXX",
   timer: 0,
   time:120,
    formstate: {},
    formData:  Object.assign({}, initFromData),
  },
  methods: {
    onKeyup(event){

      if((event.keyCode >= 48 && event.keyCode <= 57)||(event.keyCode >= 96&&event.keyCode<=105)){
      
      
        const next = event.target.nextElementSibling

     

       if(next === null) { return;  } 
       else{
       
         
        event.target.nextElementSibling.focus()

       }
        
      
      } 



        if (event.keyCode == 8) {
          const previous = event.target.previousElementSibling;

          if(previous === null) { return; } 
          else{
          
            
            event.target.previousElementSibling.focus();
   
          }


          
        } 
        return
    },
    onSubmit: function() {
      if(this.formstate.$valid == true){

        alert('Submit');
        location.reload();

      };
      
    },  	
    decrementOrAlert () {
    	if (this.time > 0) {
      	this.time--
        return
      }
     
      location.reload();
      
    }
  },

  computed: {
  	timeLeft () {
    	return ` tiempo ${this.minutes} minuto ${this.seconds} segundos`
    },
    minutes () {
    	return String(Math.floor(this.time / 60)).padStart(2, '0')
    },
    seconds () {
    	return String(this.time % 60).padStart(2, '0')
    }
  },
  created () {
     this.timer = setInterval(this.decrementOrAlert, 1000)
  }
});