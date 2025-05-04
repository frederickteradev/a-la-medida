fetch('../../modules/modals.html')
.then(res => res.text())
.then(data => {
    document.getElementById('modal-container').innerHTML = data;
});


fetch('../../modules/modals2.html')
.then(res => res.text())
.then(data => {
    document.getElementById('modal-container2').innerHTML = data;
});


fetch('../../modules/modals3.html')
.then(res => res.text())
.then(data => {
    document.getElementById('modal-container3').innerHTML = data;
});


