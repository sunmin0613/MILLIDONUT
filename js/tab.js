$(function () {
    /*#tab ul li a(공지사항, 갤러리, 리뷰 버튼)를 클릭했을 때, 모든 #tab ul li에서 클래스 on이 없어지고 , 내가 방금 클릭한 a태그의 부모인 li에 클래스 on이 붙게 한다.*/
    $("#character_1 ul li a").click(function () {
        $("#character_1 ul li").removeClass("on");
        $(this).parent().addClass("on");
    });
    $(".top_left>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
        /*stop부분을 넣지 않으면 슬라이드다운되서 내려오는 중에 마우스가 나가면 sub 혼자 움직이는 현상이 발생하므로, 마우스가 도중에 나갈때는 행동이 취소될수 있게 한다.*/
    });

    $(".top_left>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();

    });
    $(".top_right>li").mouseenter(function () {
        $(this).children(".sub2").stop().slideDown();
    });
    $(".top_right>li").mouseleave(function () {
        $(this).children(".sub2").stop().slideUp();
    });

});


