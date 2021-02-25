


// 내 생각대로 되는지 실험하기 위해 만든 스크립트 스케치.
// 생각대로 된다 신난당..!

// var $1 = document.querySelector(".circle1"),
//     $2 = document.querySelector(".circle2"),
//     $3 = document.querySelector(".circle3"),
//     $4 = document.querySelector(".circle4"),
//     $5 = document.querySelector(".circle5");

    // setTimeout(function(){
    //     console.log("타이머 작동!");
    //     circle1.css('top', '50%');
    //     circle2.css('top', '50%');
    //     circle3.css('top', '50%');
    //     circle4.css('top', '50%');
    //     circle5.css('top', '50%');
    // },600);

    // setTimeout(function(){
    //     $2.css('transform', 'translateX(10000px)');
    //     $3.css('transform', 'translateX(10000px)');
    //     $1.css('transform', 'translateX(10000px)');
    //     $4.css('transform', 'translateX(10000px)');
    //     $6.css('transform', 'translateX(10000px)');
    // },1000);

    // function circleScale(){
    //     $3.css('animation', 'circleScale');
    // }
    // setTimeout(circleScale, 600);

// 오디오 플레이

function play(){
  var audio = document.querySelector('audio');
  audio.play();
}

      console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

        // 가사 추가
        function ly1(){
            $('#ly').text("1. 한국에서 태어나 산다는데 어떤 의미를 두고 계시나요");
        }
        setTimeout(ly1, 1000);
        // var $1 = $('.circle2');

        // function sayHi() {
        //     $('.circle2').scale(1.5);
        //   }

        //   setTimeout(sayHi, 1000);
        // 아니 왜안되는데........왜안되는거냐고...................

        // 펼쳐지며 opacity 조정
        function circle() {
            $('.circle1').animate({
                top : 250
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle2').animate({
                top : 350
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle3').animate({
                top : 450
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle4').animate({
                top : 550
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle5').animate({
                top : 650
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
        }
        setTimeout(circle, 1500);


        // 다시 가운데로 모이기
        function circleOff() {
            $('.circle1').animate({
                top : 450
              }, 700, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle2').animate({
                top : 450
              }, 700, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle3').animate({
                top : 450
              }, 700, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle4').animate({
                top : 450
              }, 700, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle5').animate({
                top : 450
              }, 700, function() {
                console.log('애니메이션 완료!');
              });
        }
        setTimeout(circleOff, 2300);

        // 크기가 작아지기!
        function circleSizeS() {
            $('.circle1').css("transform","scale(0.5)");
            $('.circle2').css("transform","scale(0.5)");
            $('.circle3').css("transform","scale(0.5)");
            $('.circle4').css("transform","scale(0.5)");
            $('.circle5').css("transform","scale(0.5)");
        }
        setTimeout(circleSizeS, 3500);


        // 대각선으로 이동
        function circleD() {
            $('.circle1').animate({
                top : 250,
                left: 600
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle2').animate({
                top : 350,
                left: 500
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle3').animate({
                top : 450,
                left: 400
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle4').animate({
                top : 550,
                left: 300
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle5').animate({
                top : 650,
                left: 200
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
        }
        setTimeout(circleD, 4200);


        // 다섯개 ㄷㄷㄷㅈ

        // function circleDDDJ() {
        //     $('.circle6').css("opacity","1");
        //     $('.circle7').css("opacity","1");
        //     $('.circle8').css("opacity","1");
        //     $('.circle9').css("opacity","1");
        //     $('.circle10').css("opacity","1");
        // }
        // setTimeout(circleDDDJ, 5000);

        function circleDDDJ() {
            $('.circle6').css("display","inline-block");
            $('.circle7').css("display","inline-block");
            $('.circle8').css("display","inline-block");
            $('.circle9').css("display","inline-block");
            $('.circle10').css("display","inline-block");
        }
        setTimeout(circleDDDJ, 5000);

        function circleP() {
            
              $('.circle6').animate({
                top : 200,
                left: 680
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle7').animate({
                top : 300,
                left: 580
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle8').animate({
                top : 400,
                left: 480
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle9').animate({
                top : 500,
                left: 380
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle10').animate({
                top : 600,
                left: 280
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
        }
        setTimeout(circleP, 6000);



        // 11 - 15
        // 다섯개 더 ㄷㄷㄷㅈ

        // function circleDDDJ() {
        //     $('.circle6').css("opacity","1");
        //     $('.circle7').css("opacity","1");
        //     $('.circle8').css("opacity","1");
        //     $('.circle9').css("opacity","1");
        //     $('.circle10').css("opacity","1");
        // }
        // setTimeout(circleDDDJ, 5000);

        function circleDDDJ2() {
            $('.circle11').css("display","inline-block");
            $('.circle12').css("display","inline-block");
            $('.circle13').css("display","inline-block");
            $('.circle14').css("display","inline-block");
            $('.circle15').css("display","inline-block");
        }
        setTimeout(circleDDDJ2, 6500);

        function circleP2() {
            
              $('.circle11').animate({
                top : 150,
                left: 730
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle12').animate({
                top : 450,
                left: 430
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle13').animate({
                top : 580,
                left: 300
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle14').animate({
                top : 640,
                left: 240
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle15').animate({
                top : 720,
                left: 165
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
        }
        setTimeout(circleP2, 6500);

          // 하나로 합쳐지자
          function circleP3() {
            $('.circle1').animate({
                top : 450,
                left: 1100
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle2').animate({
                top : 450,
                left: 1100
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle3').animate({
                top : 450,
                left: 1100
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle4').animate({
                top : 450,
                left: 1100
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle5').animate({
                top : 450,
                left: 1100
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle6').css("display","none");
              $('.circle7').css("display","none");
              $('.circle8').css("display","none");
              $('.circle9').css("display","none");
              $('.circle10').css("display","none");
              $('.circle11').css("display","none");
              $('.circle12').css("display","none");
              $('.circle13').css("display","none");
              $('.circle14').css("display","none");
              $('.circle15').css("display","none");
      }
      setTimeout(circleP3, 7500);


        // 하나로 합쳐지자
        function circleP4() {
            $('.circle1').animate({
                top : 450,
                left: 500
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle2').animate({
                top : 450,
                left: 800
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle3').animate({
                top : 450,
                left: 1100
              }, 900, function() {
                console.log('애니메이션 완료!');
              });
            $('.circle4').css("display","none");
            $('.circle5').css("display","none");
      }
      setTimeout(circleP4, 7500);


  // 스르륵
  function circleP5() {
    $('.circle1').animate({
        top : 0,
      }, 900, function() {
        console.log('애니메이션 완료!');
      });
      $('.circle2').animate({
        top : 900,
        left: 800
      }, 900, function() {
        console.log('애니메이션 완료!');
      });
      $('.circle3').animate({
        top : 0,
        left: 1100
      }, 900, function() {
        console.log('애니메이션 완료!');
      });
}
setTimeout(circleP5, 10000);


    });
})(jQuery);