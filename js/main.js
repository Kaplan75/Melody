$(document).ready(function () {
    var currentFloor = 2; // переменная, где хранится текущий этаж 
    var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
    var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/
    var modal = $(".modal");
    var modaCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats")

    // функция при наведении мышью на этаж 
   floorPath.on("mouseover", function() {
       floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
       currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
       $(".counter").text(currentFloor); // записываем значение текущего этажа в счетчик справа
   });

    floorPath.on("click", toggltModal);

    modaCloseButton.on("click", toggltModal);

    viewFlatsButton.on("click", toggltModal);

    counterUp.on("click", function () {  // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем значение этажа(не должно быть больше 18)
        currentFloor++; // прибавляем 1 этаж
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
        useGrouping: false });//форматируем переменную с этажом(чтобы 01, а не 1)
        $(".counter").text(usCurrentFloor);//записываем значение текущего этажа в счетчик справа
        floorPath.removeClass("current-floor");//удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текщий этаж
    }
   });

   counterDown.on("click", function () {
       if(currentFloor > 2) {
        currentFloor--;
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
        useGrouping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
       }
   });
   function toggltModal() {
    modal.toggleClass("is-open");
 }
});