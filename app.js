document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let code = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    code.style.left = x + 'px';
    code.style.top = y + 'px';

    let size = Math.random() * 80;
    code.style.width = 20 + size + 'px';
    code.style.height = 20 + size + 'px';

    let transfromValue = Math.random() * 360;
    code.style.transform = 'rotate(' + transfromValue + 'deg)';

    body.appendChild(code);

    setTimeout(function() {
        code.remove();
    }, 1000)
})