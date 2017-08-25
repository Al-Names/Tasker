$("ul").on("click", "li", function(event) {
  $(this).toggleClass('completed');
});

$("ul").on("click", "span", function(event) {
  /* Act on the event */
  $(this).parent().fadeOut('slow', function() {
    $(this).remove();
  });
  event.stopPropagation();

});

$("input[type= 'text']").keypress(function(event) {
  /* Act on the event */
  if(event.which === 13){

    var newTask = $(this).val();
      $(this).val("");
    $("ul").append('<li><span><i class="fa fa-minus-circle" aria-hidden="true"></i></span> '+ newTask + '</li>')
  }
});

$("#plus").click(function(){
  $("#newTask").fadeToggle()
});

// var backs= ["https://cdn.pixabay.com/photo/2015/09/13/00/08/chevrons-937583_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2012/04/10/17/04/pattern-26442_1280.png",
//
// "https://cdn.pixabay.com/photo/2016/03/27/19/33/music-1283877_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2017/08/15/09/34/technology-2643270_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2016/07/08/18/32/bike-1505039_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2016/02/19/10/47/street-1209403_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2013/07/24/03/33/road-166543_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2016/09/12/15/32/stone-1664918_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2015/06/18/15/20/camera-813814_1280.jpg",
//
// "https://cdn.pixabay.com/photo/2017/08/06/01/04/people-2587310_1280.jpg"
// ];
var backs= [ "bike-1505039_1280.jpg",

"bananas-698608_1280.jpg",

"camera-813814_1280.jpg",

"chevrons-937583_1280.jpg",

"music-1283877_1280.jpg",

"pattern-26442_1280.png",

"people-2587310_1280.jpg",

"puppy-1903313_1280.jpg",

"road-166543_1280.jpg",

"stone-1664918_1280.jpg",

"street-1209403_1280.jpg",

"technology-2643270_1280.jpg"
];

setInterval(function() {

      $("BODY").css("background-image", "url(" + backs[Math.floor(Math.random() * backs.length)] + ")");
}, 10000);



$("#backChange").on('click', function(event) {
  $("BODY").css("background-image", "url(" + backs[Math.floor(Math.random() * backs.length)] + ")");
});
