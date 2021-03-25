$(function () {
    $('.info_btn_m').click(function () {
        if (!$('.line_m').hasClass('active')) {
            $('.line_m').addClass('active');
            $("#panel_m").fadeIn(500);
        } else {
            $('.line_m').removeClass('active');
            $("#panel_m").fadeOut(500);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let dist = (document.body.clientWidth > 400) ? -100 : -200;
    console.log(dist)
    var options = {
        // Transition duration in milliseconds.
        duration: 200,
        // Perspective zoom. If 0, all items are the same size.
        dist: dist,
        // Set the spacing of the center item.
        shift: 0,
        // Set the padding between non center items.
        padding: 150,
        // Set the number of visible items.
        numVisible: 5,
        // Make the carousel a full width slider
        fullWidth: false,
        // Set to true to show indicators.
        indicators: false,
        // Don't wrap around and cycle through items.
        noWrap: false,
        // Callback for when a new slide is cycled to.
        // onCycleTo: kkk()
        onCycleTo: function (ele) {
            var index = $(ele).index();
            var name_arr = ["Nagoya <br> $1999", "Imabari Tsuruoka <br> $1799", "Dazaifu Tsuchiura <br> $1999", "Yanagawa <br> $1899", "Okayama Saitama <br> $2999"]
            var descr_arr = ["Overall Length: 41 3/8' Blade: 29'<br><br> A katana is a Japanese sword characterized by a" +
                "curved single-edged blade with a circular or squared guard and" +
                "long grip to accommodate two hands. It was used by the samurai of" +
                "ancient and feudal Japan. Contents. 1 Etymology and loanwords; 2 Description;",
                "Overall Length: 41 3/8' Blade: 43'<br><br> The red glint of paint sparkled under the sun. He had dreamed of owning this car since he was ten, and that dream had become a reality less than a year ago. It was his baby and he spent hours caring for it, pampering it, and fondling over it. She knew this all too well, and that's exactly why she had taken a sludge hammer to it",
                "Overall Length: 45 3/8' Blade: 40'<br><br> You can decide what you want to do in life, but I suggest doing something that creates. Something that leaves a tangible thing once you're done. That way even after you're gone, you will still live on in the things you created.",
                "Overall Length: 42 3/8' Blade: 45'<br><br> There was something special about this little creature. Donna couldn't quite pinpoint what it was, but she knew with all her heart that it was true. It wasn't a matter of if she was going to try and save it, but a matter of how she was going to save it. She went back to the car to get a blanket and when she returned the creature was gone.",
                "Overall Length: 46 3/8' Blade: 42'<br><br> It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was."
            ]
            $("#name_text").html(name_arr[index])
            $("#descr_box").html(descr_arr[index]);
        }
    }
    M.Carousel.init($("#carousel_container"), options);
});

function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

var isMobile = mobileCheck();
function JumpContent(destination) {
    if (isMobile) {
        setTimeout(function () {
            jump();
        }, 500);
    }
    else {
        jump();
    }

    function jump(){
        $("#panel_m").hide();
        $('.line_m').removeClass('active');
        $('html, body').animate({ scrollTop: $(destination).offset().top }, 500, function () {
        });
    }
}