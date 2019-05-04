(function(){

const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const eachMember = document.querySelector(".each");
const cal = document.querySelector(".calculate");
const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const opts = document.querySelector(".optt");  
const res = document.querySelector(".result");  
const loaded = document.querySelector(".loads");  
const loading = document.querySelector(".loading");
     
   cal.addEventListener("click", function(event){     
       event.preventDefault();
       
       
       
                loading.classList.add("hide");
           
                setTimeout(function(){
                    loaded.classList.remove("hide"); 
                     loading.classList.remove("hide");
                       res.classList.add("hide");
                        calculate();
                },4000);
                            
});
    
    
   function calculate(){
      let bills = bill.value;
            let peoples = people.value;
                let service = 0;
       
       if(opts.value === "20"){
           service = 0.2;
       } else if(opts.value === "10"){
           service = 0.1;
       } else if(opts.value === "2"){
           service = 0.02;
       }
            
       
       
            if(opts.value === "20"){
                let tipAmount = parseInt(bills) * service
            tip.textContent = tipAmount;
                let tot = parseInt(bills)+tipAmount;
                total.textContent = tot;
                    let pers = Math.floor(bills / peoples);
                        eachMember.textContent = pers; 
            } else if(opts.value === "10"){
                
            }
        
        }
  
})();
    
    


 