// document.getElementById('iphone_plus_btn').addEventListener("click", function(){
    
//     programhandler(true);

// })


// document.getElementById("iphone_minus_btn").addEventListener("click", function(){
    
//     programhandler(false);

// })

// function programhandler(isIncrease){
//     const input_current = document.getElementById("input");
//     const input_int = parseInt(input_current.value);
//     let input_newcount = input_int;
//     if(isIncrease==true){
//         input_newcount = input_int+1;
//     }
//     if(isIncrease==false && input_int > 0){
//         input_newcount = input_int-1;
//     }
//      input_current.value = input_newcount;
  
//      const total =  input_newcount*1219;
//      document.getElementById("iphone_current_amount").innerText = total;
// }


// function cprogramhandler(isIncrease){
//     const input_current = document.getElementById("case-input");
//     const input_int = parseInt(input_current.value);
//     let input_newcount = input_int;
//     if(isIncrease==true){
//         input_newcount = input_int+1;
//     }
//     if(isIncrease==false && input_int > 0){
//         input_newcount = input_int-1;
//     }
//      input_current.value = input_newcount;
  
//      const total =  input_newcount*59;
//      document.getElementById("case_current_amount").innerText = total;
// }


function programhandler(product,isIncrease){
    const product_current = document.getElementById(product+"-count");
    const product_count = parseInt(product_current.value);
    let product_newcount = product_count;
    if(isIncrease==true){
        product_newcount = product_count+1;
    }
    if(isIncrease==false && product_count > 0){
        product_newcount = product_count-1;
    }
     product_current.value = product_newcount;
    
     let product_total = 0;
     if(product == 'phone'){
         product_total = product_newcount*1219 ;
     }
     if(product == 'case'){
        product_total = product_newcount*59;
     }
   
     document.getElementById(product+"-total").innerText = product_total;
     totalCount();
     
}

function totalCount(){
    const phoneCount =getValue('phone')
    const caseCount =getValue('case')

    const totalPrice = phoneCount*1219 + caseCount*59;
    document.getElementById('total-price').innerText = totalPrice;
    


    const tax = Math.round(totalPrice*0.1) ;
    document.getElementById('tax').innerText = tax;
    const grand_total = tax + totalPrice;
    document.getElementById('grand_total').innerText = grand_total;
    return totalPrice;
    


}

function getValue(product){
    const product_input = document.getElementById(product+'-count');
    const product_count = parseInt(product_input.value);
    return product_count;
}

document.getElementById('check-out').addEventListener("click", function(){
        alert('Sorry not possible ,under development !')
    
})
