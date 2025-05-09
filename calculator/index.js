let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string ='';



buttonsArray.forEach(btn => {



btn.addEventListener('click',(e) => {


        
     if(e.target.innerHTML == 'Del'){
       string = string.substring(0, string.length-1);
       document.querySelector('input').value = string;

     }else if(e.target.innerHTML == 'AC'){
        string ='';
        document.querySelector('input').value = string;
     }else if(e.target.innerHTML == '='){

      string = eval(string);
      document.querySelector('input').value = string;

     } 
     else{
      string += e.target.innerHTML;
      document.querySelector('input').value = string;

     

     }
 

  
  

  console.log(e.target.innerHTML)


});


});




