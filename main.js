const out = document.getElementById('Out');
const share = document.querySelector('.ShareRSSS');
const Enter = document.getElementById('Enter')

out.addEventListener('click', e => {
e.preventDefault();
share.style.display = 'none';
});

Enter.addEventListener('click', e => {
    e.preventDefault();
    share.style.display = 'flex'
})