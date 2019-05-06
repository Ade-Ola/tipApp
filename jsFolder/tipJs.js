(function(){

const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const eachMember = document.querySelector(".each");
const cal = document.querySelector(".calculate");
const bill = document.querySelector(".bill");
const people = document.querySelector(".people");
const service = document.querySelector(".optt");  
const res = document.querySelector(".result");  
const loaded = document.querySelector(".loads");  
const loading = document.querySelector(".loading");
const alerted = document.querySelector(".display-alert");  
    
     let services = [
           {
               value: 1,
               title: "Very Good - 20%"
           }, 
           {
               value: 2,
               title: "Ok - 10%"
           },
           {
               value: 3,
               title: "Bad - 20%"
           }
       ];
    

       
       
    services.forEach(function(service){
        let options = document.createElement("option"); 
        options.textContent = service.title;
        options.value = service.value;
        document.querySelector(".optt").appendChild(options);
    });
    
    
    
   cal.addEventListener("click", function(event){   
       event.preventDefault();
       
       let clientBill = bill.value;
       let numOfClient = people.value;
       let serviceQuality = service.textContent;

       
       if(clientBill === "0" || clientBill < "0" || numOfClient <= "0"  || serviceQuality < 0){
//           alerted.classList.add("hide", "alert-danger");
           alerted.innerHTML = `<p>Please check to make sure bill is inserted</p>
           <p>Please check to make sure numbers of clients  is inserted</p>
           <p>Please check to make sure service type is selected</p>`;
             alerted.classList.add("hide", "alert-danger");
           
           setTimeout(function(){
               alerted.classList.remove("hide");
           },4000);
       } else{
           loaded.classList.add("hide");
           loading.classList.add("hide");
           
           setTimeout(function(){
              loaded.classList.remove("hide");
           loading.classList.remove("hide");
               calculate();
               res.classList.add("hide");
           },4000)
       }
    
   });
    
    
    function calculate(){
        let percent = 0;
        
       let clientBill = bill.value;
       let numOfClient = people.value;
       let serviceQuality = service.textContent;

        if(service.value == 1){
            percent = 0.2;
        } else if(service.value == 2){
            percent = 0.1;
        } else if(service.value == 0.02){
            percent = 0.02;
        }
          
        let tipAmnt = parseInt(clientBill) * percent;
        tip.textContent = tipAmnt;
        console.log(tipAmnt);
        let billTotal = parseInt(clientBill) + tipAmnt;
        total.textContent = billTotal;
        console.log(billTotal);
        let memberPayment = Math.floor(clientBill / numOfClient);
        eachMember.textContent = memberPayment;
        console.log(memberPayment);
        
    }
    
    function clear(){
        bill.textContent = "";
        people.textContent =""
        service.value = 0;
    }
    
    
})();
    
    


 