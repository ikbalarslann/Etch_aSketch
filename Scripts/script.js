var button = document.querySelector('.btn');
var container = document.querySelector('.container');
var mouseDown = false;
container.setAttribute('draggable', 'false');
function createGrids() {
    container.innerHTML = '';
    var times = parseInt(prompt("times"));
    if (isNaN(times) || times < 1) {
        times = 16;
    }
    var _loop_1 = function (i) {
        var cell = document.createElement('div');
        cell.classList.add('grid');
        cell.style.backgroundColor = "gray";
        cell.setAttribute('draggable', 'false');
        cell.style.width = container.clientWidth / times + 'px';
        cell.style.height = container.clientHeight / times + 'px';
        cell.addEventListener('mousemove', function () {
            if (mouseDown)
                cell.classList.add('black');
        });
        cell.addEventListener('click', function () {
            cell.classList.add('black');
        });
        cell.addEventListener('mousedown', function () {
            mouseDown = true;
        });
        cell.addEventListener('mouseup', function () {
            mouseDown = false;
        });
        cell.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });
        container === null || container === void 0 ? void 0 : container.appendChild(cell);
    };
    for (var i = 0; i < times * times; i++) {
        _loop_1(i);
    }
}
createGrids();
button === null || button === void 0 ? void 0 : button.addEventListener("click", createGrids);
