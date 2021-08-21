// function memoryTotal (){
//     const memory = document.getElementById('extra-memo');
//     const memoryCostText = memory.innerText;
//     const memoryCost = parseFloat(memoryCostText);
//     memory.innerText = 0;

//     const extraMemory = document.getElementById('extra-memo');
//     const extraMemoryCostText = extraMemory.innerText;
//     const extraMemortCost = parseFloat(extraMemoryCostText);
//     const extraMemoryPrice = extraMemory.innerText =  180;

//     const totalPrice = document.getElementById('total-price');
//     const totalPriceText = totalPrice.innerText;
//     const totalPriceInd = parseFloat(totalPriceText);

//     if(extraMemortCost !== 180 && totalPriceInd >= 1299){
//         totalPrice.innerText = extraMemoryPrice + totalPriceInd;
//     }
//     else if(extraMemortCost == 0 && totalPriceInd != 1299 && totalPriceInd >= 1299){
//         totalPrice.innerText = totalPriceInd - 180;
//     }else{
//         totalPrice.innerText = 0 + totalPriceInd;
//     }
    
// }

// memory handle -------
document.getElementById('normal-memory').addEventListener('click', function() {
    const memory = document.getElementById('extra-memo');
    const memoryCostText = memory.innerText;
    const memoryCost = parseFloat(memoryCostText);
    memory.innerText = 0;

    const extraMemory = document.getElementById('extra-memo');
    const extraMemoryCostText = extraMemory.innerText;
    const extraMemortCost = parseFloat(extraMemoryCostText);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    if(extraMemortCost == 0 && totalPriceInd != 1299 && totalPriceInd >= 1299){
        totalPrice.innerText = totalPriceInd - 180;
    }else{
        totalPrice.innerText = 0 + totalPriceInd;
    }



    // memoryTotal();
    
})

// extra memory area -------------
document.getElementById('extra-memory').addEventListener('click', function(){
    const extraMemory = document.getElementById('extra-memo');
    const extraMemoryCostText = extraMemory.innerText;
    const extraMemortCost = parseFloat(extraMemoryCostText);
    const extraMemoryPrice = extraMemory.innerText =  180;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseInt(totalPriceText);

    if(extraMemortCost !== 180){
        totalPrice.innerText = extraMemoryPrice + totalPriceInd;
    }
})


// storage area -------------

document.getElementById('normal-storage').addEventListener('click', function(){
    const storageNormal = document.getElementById('extra-store');
    const storageNormalText = storageNormal.innerText;
    const storageNormalCost = parseFloat(storageNormalText);
    storageNormal.innerText = 0;

    const storageNormal2 = document.getElementById('extra-store');
    const storageNormalText2 = storageNormal2.innerText;
    const storageNormalCost2 = parseFloat(storageNormalText2);

    const storageNormal3 = document.getElementById('extra-store');
    const storageNormalText3 = storageNormal3.innerText;
    const storageNormalCost3 = parseFloat(storageNormalText3);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    //
    if(storageNormalCost2 == 100  && totalPrice !== 1299){
        totalPrice.innerHTML = totalPriceInd - 100;
    }

    // 
    else if (storageNormalCost3 == 0 && totalPriceInd >= 1299 && totalPriceInd != 1299){
        totalPrice.innerHTML = totalPriceInd - 180;
    }
    else {
        totalPrice.innerText = 0 + totalPriceInd;
    }

})

document.getElementById('medium-storage').addEventListener('click', function(){
    const storageNormal = document.getElementById('extra-store');
    const storageNormalText = storageNormal.innerText;
    const storageNormalCost = parseFloat(storageNormalText);
    const trorageNormalTotal = storageNormal.innerText = 100;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    if(storageNormalCost !== 100){
        totalPrice.innerText = trorageNormalTotal + totalPriceInd;
    }
    
})

document.getElementById('strong-storage').addEventListener('click', function(){
    const storageNormal = document.getElementById('extra-store');
    const storageNormalText = storageNormal.innerText;
    const storageNormalCost = parseFloat(storageNormalText);
    const storageNormalTotal = storageNormal.innerText = 180;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    if(storageNormalCost !== 180){
        totalPrice.innerText = storageNormalTotal + totalPriceInd;
    }
})


// delivery area -------------
document.getElementById('free-delivery').addEventListener('click', function (){
    const delivaryFree = document.getElementById('delivery-crg');
    const deliveryFreeText = delivaryFree.innerText;
    const deliveryFree = parseFloat(deliveryFreeText);
    delivaryFree.innerText  = 0;

    const delivaryFree2 = document.getElementById('delivery-crg');
    const deliveryFreeText2 = delivaryFree2.innerText;
    const deliveryFree2 = parseFloat(deliveryFreeText2);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    if(deliveryFree2 == 0 && totalPriceInd != 1299 && totalPriceInd >= 1299){
        totalPrice.innerText = totalPriceInd - 20;
    }
    else{
        totalPrice.innerText = 0 + totalPriceInd;
    }
})

document.getElementById('charge-delivery').addEventListener('click', function (){
    const delivaryFree = document.getElementById('delivery-crg');
    const deliveryFreeText = delivaryFree.innerText;
    const deliveryFree = parseFloat(deliveryFreeText);
    const deliveryFee = delivaryFree.innerText = 20;

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceInd = parseFloat(totalPriceText);

    if(deliveryFree !== 20){
        totalPrice.innerText = deliveryFee + totalPriceInd;
    }
    
})