const container=document.querySelector('.container');

let times = 64;
let mouseDown = false;

for (let i=0;i<times*times;i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid');
    cell.style.backgroundColor="gray";


    cell.style.width=container.clientWidth/times+'px';
    cell.style.height=container.clientHeight/times+'px';

    cell.addEventListener('mousemove', () => {
        if (mouseDown) cell.classList.add('black');
        else cell.classList.remove('black');
    });


    cell.addEventListener('mousedown', () => {
        mouseDown = true;

    });
    cell.addEventListener('mouseup', () => {
        mouseDown = false;

    });
    
    container?.appendChild(cell);
}
