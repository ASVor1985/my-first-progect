$(document).ready(function() {
   
    $('.carousel__inner').slick({
        dots: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<canvas class="prevArrowCanvas a-left control-c prev slick-prev" width="15" height="50"></canvas>',
        nextArrow: '<canvas class="nextArrowCanvas a-right control-c next slick-next" width="15" height="50"></canvas>'
    });
    
    function drawNextPreviousArrows(strokeColor) {
        var c = $(".prevArrowCanvas")[0];
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.moveTo(15, 0);
        ctx.lineTo(0, 25);
        ctx.lineTo(15, 50);
        ctx.lineWidth = 2;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
        var c = $(".nextArrowCanvas")[0];
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.moveTo(0, 0);
        ctx.lineTo(15, 25);
        ctx.lineTo(0, 50);
        ctx.lineWidth = 2;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
    }
    drawNextPreviousArrows("#6b6060");

    $('img').on('click', function() {
        if($(this).attr('class')==undefined || !$(this).attr('class').match(/full/)){
            $('.fadeBlock > .content > img').attr('src',this.src);
            $('.fadeBlock').fadeIn('fast');
        }else{
            $('.fadeBlock > .content > img').attr('src','');
            $('.fadeBlock').fadeOut('fast');
        }
    });

});