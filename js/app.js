$(document).ready(function () {


    $('#textsong2').hide();
    $('#textsong3').hide();
    $('#textsong4').hide();
    $('#textsong5').hide();
    $('#textsong6').hide();
    $('#textsong7').hide();
    $('#textsong8').hide();
    $('#song1').addClass('active');




    $('#song1').on('click', function () {
        $('#textsong1').show('#textsong1');
        $("li").removeClass('active');
        $('#song1').addClass('active');
        $('#textsong2').hide();
        $('#textsong3').hide();
        $('#textsong4').hide();
        $('#textsong5').hide();
        $('#textsong6').hide();
        $('#textsong7').hide();
        $('#textsong8').hide();

    });


    $('#song2').on('click', function () {
        $('#textsong2').show('#textsong2');
        $('li').removeClass('active');
        $('#song2').addClass('active');
        $('#textsong1').hide();
        $('#textsong3').hide();
        $('#textsong4').hide();
        $('#textsong5').hide();
        $('#textsong6').hide();
        $('#textsong7').hide();
        $('#textsong8').hide();
    });

    $('#song3').on('click', function () {
        $('#textsong3').show('#textsong3');
        $('li').removeClass('active');
        $('#song3').addClass('active');
        $('#textsong1').hide();
        $('#textsong2').hide();
        $('#textsong4').hide();
        $('#textsong5').hide();
        $('#textsong6').hide();
        $('#textsong7').hide();
        $('#textsong8').hide();
    });

    $('#song4').on('click', function () {
        $('#textsong4').show('#textsong4');
        $('li').removeClass('active');
        $('#song4').addClass('active');
        $('#textsong1').hide();
        $('#textsong2').hide();
        $('#textsong3').hide();
        $('#textsong5').hide();
        $('#textsong6').hide();
        $('#textsong7').hide();
        $('#textsong8').hide();
    });


    $('#song5').on('click', function () {
        $('#textsong5').show('#textsong5');
        $('li').removeClass('active');
        $('#song5').addClass('active');

        $('#textsong1').hide();
        $('#textsong2').hide();
        $('#textsong3').hide();
        $('#textsong4').hide();
        $('#textsong6').hide();
        $('#textsong7').hide();
        $('#textsong8').hide();
    });

    $('#song6').on('click', function () {
        $('#textsong6').show('#textsong6');
        $('li').removeClass('active');
        $('#song6').addClass('active');

        $('#textsong1').hide();
        $('#textsong2').hide();
        $('#textsong3').hide();
        $('#textsong4').hide();
        $('#textsong5').hide();
        $('#textsong7').hide();
        $('#textsong8').hide();
    });


    $('#song7').on('click', function () {
        $('#textsong7').show('#textsong7');
        $('li').removeClass('active');
        $('#song7').addClass('active');

        $('#textsong1').hide();
        $('#textsong2').hide();
        $('#textsong3').hide();
        $('#textsong4').hide();
        $('#textsong5').hide();
        $('#textsong6').hide();
        $('#textsong8').hide();
    });


    $('#song8').on('click', function () {
        $('#textsong8').show('#textsong8');
        $('li').removeClass('active');
        $('#song8').addClass('active');
        $('#textsong1').hide();
        $('#textsong2').hide();
        $('#textsong3').hide();
        $('#textsong4').hide();
        $('#textsong5').hide();
        $('#textsong7').hide();
        $('#textsong6').hide();
    });


    $(document).on("scroll", onScroll);
    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('nav a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 2000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav a').removeClass("active");
            currentLink.addClass("active");
        } else {
            currentLink.removeClass("active");
        }
    });

}


$('#german').hide();

$('.übersetzen').on('click', function () {

    $('#english').hide();
    $('#german').show();


});

$('.translate').on('click', function () {

    $('#english').show();
    $('#german').hide();


});



