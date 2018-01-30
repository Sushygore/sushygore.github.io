var myLine = document.querySelectorAll('li > :first-child,.dropdown-item');
var icone = '<i class="fa fa-gamepad"></i>';
myLine.forEach(element => {
    element.innerHTML = icone + element.innerHTML;
});