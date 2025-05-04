fetch('../../header-nav-page.html')
.then(res => res.text())
.then(data => {
    document.getElementById('header-nav-page').innerHTML = data;
});

fetch('../../footer-page.html')
.then(res => res.text())
.then(data => {
    document.getElementById('footer-page').innerHTML = data;
});
