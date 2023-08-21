let total = 0;

function clickBtn(target){
    const selectedItemNew = document.getElementById("selctedItem");
    const itemName = target.children[1].children[1].innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemNew.appendChild(li);

    const price = target.children[1].children[2].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    const totalFirst = document.getElementById('totalPrice').innerText = total;

    const applyButton = document.getElementById('couponButton');
    const purchaseButton = document.getElementById('purchaseBtn');
    if( totalFirst >= 200 ){
        applyButton.removeAttribute('disabled');
       
    }
    else if( totalFirst > 0 ){
        purchaseButton.removeAttribute('disabled');
     
    }



}


const applyButton = document.getElementById('couponButton');


applyButton.addEventListener('click', function(){
    const text = document.getElementById('couponText').value;
    const discountSection = document.getElementById('discount');
    const mainTotal = document.getElementById('totalMain');

if(text === "SELL200"){
    const discountPrice = (total*20/100);
    discountSection.innerText = discountPrice.toFixed(2);

    mainTotalPrice = total-discountPrice;
    mainTotal.innerText = mainTotalPrice.toFixed(2);

}
else{
    alert('Invalid Coupon Code!')
}


})


const homeButton = document.getElementById('goHomeBtn');
homeButton.addEventListener('click', function(){
    location.reload();
})
