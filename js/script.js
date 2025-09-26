//selecting the elements we need
let addqty = document.getElementsByClassName('plus');
let minqty = document.getElementsByClassName('minus');
let heart = document.getElementsByClassName('heart');
let del = document.querySelectorAll('.del')

//selecting the total amount and value
let total = document.getElementById('total');
let totalValue = total.textContent.split(' ')[0];
// console.log(addqty);

//function to add more quantity
Array.from(addqty).forEach(function(item) {
    item.addEventListener('click', function(){
        let qt = item.nextElementSibling;
        qt.textContent = Number(qt.textContent) + 1;
        let pm = qt.parentElement.previousElementSibling;
        let val = pm.textContent.split(' ')[0];
        totalValue = Number(totalValue) + Number(val);
        total.textContent = totalValue + " $";
    })
});

//function to remove quantity
[...minqty].forEach(function(item) {
    item.addEventListener('click', function() {
        let mt = item.previousElementSibling;
        // console.log(mt)
        if (mt.textContent !== '0') {
            mt.textContent = Number(mt.textContent) - 1;
            let pm = mt.parentElement.previousElementSibling;
            let val = pm.textContent.split(' ')[0];
            totalValue = Number(totalValue) - Number(val);
            total.textContent = totalValue + " $";
        }
    })
});

//function to toggle the heart color between black and red
[...heart].forEach(function(item) {
    item.addEventListener('click', function() {
        // item.style.color = 'red'
        if (item.style.color === '' || item.style.color === 'black') {
            item.style.color = 'red';
        } else {
            item.style.color = 'black';
        }
    })
})

//adding listener to the trash button.
//console.log(del);
del.forEach(function(del) {
    del.addEventListener('click', function() {
        let del_body = del.parentElement.parentElement.parentElement.parentElement;
        let qty = del.parentElement.previousElementSibling.children[1].textContent;
        let price = del.parentElement.parentElement.children[2].textContent.split(' ')[0];
        let total = del.closest('.shopping-card-container').querySelector('#total');
        total.textContent = Number(total.textContent.split(' ')[0]) - (Number(qty) * Number(price)) + " $";
        del_body.style.display = 'none';
        //console.log(del.closest('.card-body')) .card-body is a class it can work for id and name too
        //it is better than chaining. 
    })
})

