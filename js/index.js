$("#mover").mousedown(function() {
    $("#allmenu").draggable();
    $("#allmenu").draggable("enable");
    $("#allmenu").draggable({
        containment: 'window'
    });
})

$("#mover").mouseup(function() {
    $("#allmenu").draggable();
    $("#allmenu").draggable("disable");
})

$(".reset").click(function() {
    $("#draggable").css({
        'left': $("#draggable").data('originalLeft'),
        'top': $("#draggable").data('origionalTop')
    });
});

$("#allmenu").data({
    'originalLeft': $("#allmenu").css('left'),
    'origionalTop': $("#allmenu").css('top')
});

$(".reset").click(function() {
    $("#allmenu").css({
        'left': $("#allmenu").data('originalLeft'),
        'top': $("#allmenu").data('origionalTop')
    });
});





$("#mover1").mousedown(function() {
    $("#allmenu1").draggable();
    $("#allmenu1").draggable("enable");
    $("#allmenu1").draggable({
        containment: 'window'
    });
})

$("#mover1").mouseup(function() {
    $("#allmenu1").draggable();
    $("#allmenu1").draggable("disable");
})

$(".reset1").click(function() {
    $("#draggable").css({
        'left': $("#draggable").data('originalLeft'),
        'top': $("#draggable").data('origionalTop')
    });
});

$("#allmenu1").data({
    'originalLeft': $("#allmenu1").css('left'),
    'origionalTop': $("#allmenu1").css('top')
});

$(".reset1").click(function() {
    $("#allmenu1").css({
        'left': $("#allmenu1").data('originalLeft'),
        'top': $("#allmenu1").data('origionalTop')
    });
});

function setTopo() {
    $(window).scrollTop(0);
}
$(window).bind('scroll', setTopo);

let aud = document.getElementById("radio");
aud.volume = 0.01;