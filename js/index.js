$("#mover").mousedown(function () {
    $("#allmenu").draggable();
    $("#allmenu").draggable("enable");
    $("#allmenu").draggable({
        containment: 'window'
    });
})

$("#mover").mouseup(function () {
    $("#allmenu").draggable();
    $("#allmenu").draggable("disable");
})

$(".reset").click(function () {
    $("#draggable").css({
        'left': $("#draggable").data('originalLeft'),
        'top': $("#draggable").data('origionalTop')
    });
});

$("#allmenu").data({
    'originalLeft': $("#allmenu").css('left'),
    'origionalTop': $("#allmenu").css('top')
});

$(".reset").click(function () {
    $("#allmenu").css({
        'left': $("#allmenu").data('originalLeft'),
        'top': $("#allmenu").data('origionalTop')
    });
});

$('.card-deck a').fancybox({
    caption: function (instance, item) {
        return $(this).parent().find('.card-text').html();
    }
});