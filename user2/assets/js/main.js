function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  
    const text = "Start Maining \n  Bitcoin Today- \nPerson to Person-\nStrong Crypto Currency ";


  
    const h1 = document.getElementById('async-text');
    
 
    async function displayText() {
       
        for (let i = 0; i < text.length; i++) {
         
            const span = document.createElement('span');
    
            span.textContent = text[i];
         
            h1.appendChild(span);
       
            await new Promise(resolve => setTimeout(resolve, 45));
         
        }
    }
    
    displayText();

    let a = document.getElementById('financeSelect');
    let get_val = a.value;
    let price = document.getElementById("price").value

    function on_change(){
      let a = document.getElementById('financeSelect');
      let get_val = a.value;
      document.getElementById("financeInput").value = get_val;

      if(get_val == "Bitcoin"){
  
        document.getElementById("price").value = 300;
      
      }else if(get_val == "Ethereum"){
        document.getElementById("price").value = 200;
      }else{
        document.getElementById("price").value = 100;
      }
    }
    function cal(){
    let a = document.getElementById("how_much").value;
    let b = document.getElementById("price").value;
    document.getElementById("received").value = a*b;
    
    }
