var container = document.querySelector('.container');
var times = 64;
var mouseDown = false;
var _loop_1 = function (i) {
    var cell = document.createElement('div');
    cell.classList.add('grid');
    cell.style.backgroundColor = "gray";
    cell.style.width = container.clientWidth / times + 'px';
    cell.style.height = container.clientHeight / times + 'px';
    cell.addEventListener('mousemove', function () {
        if (mouseDown)
            cell.classList.add('black');
        else
            cell.classList.remove('black');
    });
    cell.addEventListener('mousedown', function () {
        mouseDown = true;
    });
    cell.addEventListener('mouseup', function () {
        mouseDown = false;
    });
    container === null || container === void 0 ? void 0 : container.appendChild(cell);
};
for (var i = 0; i < times * times; i++) {
    _loop_1(i);
}
