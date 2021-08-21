

function extraAccessories(accs, accsPrice){
    const extraMemory = document.getElementById(accs);
    const extraMemoryCostText = extraMemory.innerText;
    const extraMemortCost = parseFloat(extraMemoryCostText);
    const extraMemoryPrice = extraMemory.innerText =  accsPrice;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseInt(totalPriceText);

    const alltotalPrice = document.getElementById('all-Total-price');
    const allTotalText = alltotalPrice.innerText;
    const allTotal = parseFloat(allTotalText);
    const allValu = alltotalPrice.innerText = totalPriceInd;
   

   // console.log(totalPriceInd);

    if(extraMemortCost !== accsPrice){
        totalPrice.innerText = extraMemoryPrice + totalPriceInd;
    }
}

function noAccessories(accs, accsPrice){
    const memory = document.getElementById(accs);
    const memoryCostText = memory.innerText;
    const memoryCost = parseFloat(memoryCostText);
    const extraMemortCost = memory.innerText;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    const alltotalPrice = document.getElementById('all-Total-price');
    const allTotalText = alltotalPrice.innerText;
    const allTotal = parseFloat(allTotalText);

    const allValu = alltotalPrice.innerText = totalPriceInd;

    if(extraMemortCost == accsPrice ){
        totalPrice.innerText = totalPriceInd - accsPrice;
    }else{
        totalPrice.innerText = 0 + totalPriceInd;
    }

    memory.innerText = 0;

}

// memory handle -------
document.getElementById('normal-memory').addEventListener('click', function() {
    noAccessories('extra-memo', 180);
    
});

// extra memory area -------------
document.getElementById('extra-memory').addEventListener('click', function(){    
    extraAccessories('extra-memo', 180);  
});


// storage area -------------

document.getElementById('normal-storage').addEventListener('click', function(){
    const storageNormal = document.getElementById('extra-store');
    const storageNormalText = storageNormal.innerText;
    const storageNormalCost = parseFloat(storageNormalText);
    const storageNormalCostPrice = storageNormalCost;

   

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    const alltotalPrice = document.getElementById('all-Total-price');
    const allTotalText = alltotalPrice.innerText;
    const allTotal = parseFloat(allTotalText);

    const allValu = alltotalPrice.innerText = totalPriceInd;

    if(storageNormalCostPrice == 100){
         totalPrice.innerText = totalPriceInd - 100;
    }else if(storageNormalCostPrice == 180){
        totalPrice.innerText = totalPriceInd - 180;
    }
    storageNormal.innerText = 0;

});

document.getElementById('medium-storage').addEventListener('click', function(){
    const storageNormal = document.getElementById('extra-store');
    const storageNormalText = storageNormal.innerText;
    const storageNormalCost = parseFloat(storageNormalText);

    const trorageNormalTotal = storageNormal.innerText = 100;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    const alltotalPrice = document.getElementById('all-Total-price');
    const allTotalText = alltotalPrice.innerText;
    const allTotal = parseFloat(allTotalText);

    const allValu = alltotalPrice.innerText = totalPriceInd;

    if(storageNormalCost == 180){
        totalPrice.innerText = totalPriceInd - 180;
    }else if(storageNormalCost !== 100){
        totalPrice.innerText = trorageNormalTotal + totalPriceInd;
    }
    
});

document.getElementById('strong-storage').addEventListener('click', function(){
     extraAccessories('extra-store', 180);  
 });





// delivery area -------------
document.getElementById('free-delivery').addEventListener('click', function (){
    noAccessories('delivery-crg', 20); 
})

document.getElementById('charge-delivery').addEventListener('click', function (){
   extraAccessories('delivery-crg', 20);      
});


document.getElementById('pomo').addEventListener('click', function(){
    const codeInput = document.getElementById('code-input');
    const codeInputText = codeInput.value;
    const code = parseFloat(codeInputText);
    codeInput.value = 'stevekaku';

    const alltotalPrice = document.getElementById('all-Total-price');
    const allTotalText = alltotalPrice.innerText;
    const allTotal = parseFloat(allTotalText);

    alltotalPrice.innerText = allTotal / 20;
})