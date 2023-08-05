const button=document.querySelector('.btn');
const container=document.querySelector('.container');



let mouseDown = false;
container.setAttribute('draggable', 'false')

function createGrids(){
    container.innerHTML='';
    let times = parseInt(prompt("times"));
    if (isNaN(times)||times<1)
    {
        times=16;
    }



    for (let i=0;i<times*times;i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid');
        cell.style.backgroundColor="gray";
        
        cell.setAttribute('draggable', 'false')
    
        cell.style.width=container.clientWidth/times+'px';
        cell.style.height=container.clientHeight/times+'px';
    
        cell.addEventListener('mousemove', () => {
            if (mouseDown) cell.classList.add('black');
            
        });
        cell.addEventListener('click', () => {
           cell.classList.add('black');
            
        });
    
    
        cell.addEventListener('mousedown', () => {
            mouseDown = true;
    
        });
        cell.addEventListener('mouseup', () => {
            mouseDown = false;
    
        });
    
        cell.addEventListener('dragstart', (e:any) => {
            e.preventDefault();
        });
        
        container?.appendChild(cell);
    }
}

createGrids();

button?.addEventListener("click",createGrids);