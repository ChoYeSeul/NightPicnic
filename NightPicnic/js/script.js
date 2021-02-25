
// 버튼 클릭 시 오디오 플레이

function play(){
    var audio = document.querySelector('audio');
    // setTimeout(audio.play(), 2000);
    audio.play()
  }

// 제이쿼리 시작
(function($) {
$(document).ready(function() {
    console.log('jQuery Ready');


    // 버튼에 마우스를 올리면 배경 색 변하게 하기 -> 안하는게 나은 것 같지만 혹시 모르니 일단 두자.
    // $('.audioButton').hover(function(){
    //     // $('html').css('background-color', '#1EFF96');
    //     $('.testText').css('color', 'white');
    //     $('.Subject').css('color', 'white');
    // });
    // $('.audioButton').mouseleave(function(){
    //     // $('html').css('background-color', 'white');
    //     $('.Subject').css('color', 'black');
    //     $('.Subject').css('color', 'black');
    // });

    // // 처음 버튼을 누르면 시작되게 적용 - 버튼 불러오기
    var $button = document.querySelector('button');

    // // startCircle 가져오기
    // var $startCircle = document.querySelector('.startCircle');

    // // svg - 눈 -> 사용 안함, 애니메이션으로 대체
    // var $svg = document.querySelector('#Layer_2');


    //  ------------ 취소 ------------ //
    // // 원들 가져오기
    // var $C1 = document.querySelector('.circle1');
    // var $C2 = document.querySelector('.circle2');
    // var $C3 = document.querySelector('.circle3');
    // var $C4 = document.querySelector('.circle4');
    // var $C5 = document.querySelector('.circle5');
    // var $C6 = document.querySelector('.circle6');
    // var $C7 = document.querySelector('.circle7');
    // var $C8 = document.querySelector('.circle8');
    // var $C9 = document.querySelector('.circle9');
    // var $C10 = document.querySelector('.circle10');
    // var $C11 = document.querySelector('.circle11');
    // var $C12 = document.querySelector('.circle12');
    // var $C13 = document.querySelector('.circle13');
    // var $C14 = document.querySelector('.circle14');
    // var $C15 = document.querySelector('.circle15');

    // 버튼에 마우스 올리면 글씨색 변하기
    $button.addEventListener('mouseover',function(){
        $('.Subject').css('color','black');
    });
    $button.addEventListener('mouseleave',function(){
        $('.Subject').css('color','rgb(223, 223, 223)');
    });

    // 버튼에 마우스 올리면 아래 경고 문구가 뜨게 하기
    $button.addEventListener('mouseover',function(){
        $('.Subject0').css('opacity','1');
    });
    $button.addEventListener('mouseleave',function(){
        $('.Subject0').css('opacity','0');
    });

    // --------------버튼에 클릭이벤트 적용, main 함수 발동-------------- //

    $button.addEventListener('click', function(){
        $('button').css('display', 'none');
        $('.Myname').css('display', 'none');
        $('.subject1').css('display', 'none');
        $('.subject2').css('display', 'none');
        // 함수를 따로 빼면 안되넹 그럼 여기다 바로 씁니당
        // 가사 추가 - 1
        function ly1(){
            $('#ly').text("1. 안녕, 눈을 감으면 내 머리 위로 쏟아지는 달");
            $('#ly').css({
                'color': 'white',
                'font-weight': 800
            });
        }
        setTimeout(ly1, 1000);

        // 배경 컬러 전환
        function htmlColor(){
            $('html').css('background-color', '#1EFF96');
            // testText 끄기
            $('.testText').css('display', 'none');

            // ul 살리기
            // $('ul').css('display', 'inline');
        }
        htmlColor();   

       

        // function cssOn(){
            // 왜 안되는거징
        //     // 나타나렴!
        //     $C1.css("display","none");
        //     $C2.css("display","none");
        //     $C3.css("display","none");
        //     $C4.css("display","none");
        //     $C5.css("display","none");
        //     $C6.css("display","none");
        //     $C7.css("display","none");
        //     $C8.css("display","none");
        //     $C9.css("display","none");
        //     $C10.css("display","none");
        //     $C11.css("display","none");
        //     $C12.css("display","none");
        //     $C13.css("display","none");
        //     $C14.css("display","none");
        //     $C15.css("display","none");
        // }
        // setTimeout(cssOn, 1500);

        // 제목 없애기
        function SubjectOff(){
            $('.Subject').css('display', 'none');
        }
        // 실행!
        SubjectOff();

        // 눈 svg 나타나기
        // 눈 애니메이션으로 대체
        // function svgOn() {
        //     $('#Layer_2').css("display","inline-block");
        // }
        // setTimeout(svgOn, 440);

        // 눈 나타나기
        function HelloEye(){
            $("#wrap").css("display","inline");
        }

        setTimeout(HelloEye, 600);


        // 눈 애니메이션 발동!
        function eyeAni(){
            var _this = this;
            var _timer = 0;
            var _isReverse = void 0;
            var _cuFrame = 0;
    
             // // eye Setting.
            var _max = 12;
            var _col = 4;
            var _row = 4;
            var _imgW = 1758;
            var _imgH = 1680;
    
            var _itemW = null;
            var _itemH = null;
    
            function init() {
                layout();
                setting();
                // addEvent();
                reset();

                // 아까비..이거 되면 개꿀인데..
                // setTimeout(forPlay, 2000);
                // setTimeout(forReverse, 4000);
            }
    
            function layout() {
                _this.$el = $('.animation');
                _this.$btnPlay = $('.btn-play');
                _this.$btnReverse = $('.btn-reverse');
            }
    
            function setting() {
                // 시퀀스의 반전 상태 여부.
                _isReverse = false;
                _itemW = _imgW / _col; // 이미지에서 아이템 1개의 가로 폭 영역
                _itemH = _imgH / _row; // 이미지에서 아이템 1개의 세로 높이 영역
            }
    
            // function addEvent() {
            //     _this.$btnReverse.on('click', onClickBtnReverse);
            //     // _this.$btnPlay.on('click', onClickBtnPlay);
            // }

            // 아 이거 안되네,,;;
        //     function forPlay(){
        //         _this.$btnPlay.trigger("click"); // 클릭이벤트 강제 발생이라는데 되려낭,?
        //     }
        //    function forReverse(){
        //     _this.$btnReverse.trigger('click');
        //    }

        //    setTimeout(forPlay, 2000);
        //    setTimeout(forReverse, 4000);
    
            function reset() {
                updateFrame();
            }
    
            function onClickBtnPlay(e) {
                // e.preventDefault();
                console.log('Play');
                playFrame();
            }
            // 아놔 드디어 성공 미쳤다 이거 너무 만들고 싶었어 으아앙앙아앙ㅇ아앙뿌듯해!!!
            setTimeout(onClickBtnPlay, 0);
    
            function onClickBtnReverse(e) {
                // e.preventDefault();
                console.log('Reverse');
                reverseFrame();
            }
            setTimeout(onClickBtnReverse, 2500);
    
            // 애니메이션 기능.
            function playFrame() {
                clearInterval(_timer);
                _timer = setInterval(progressFrame, 80);
            }
    
            // 애니메이션을 반전시키는 기능.
            function reverseFrame() {
                clearInterval(_timer);
                _isReverse = true;
                _timer = setInterval(progressFrame, 80);
            }
    
            // 애니메이션을 정지하는 기능.
            function stopFrame() {
                clearInterval(_timer);
            }

            // 인터벌마다 변경되는 현재 프레임 설정.
            function progressFrame() {
                if(!_isReverse) { // 정방향 - 프레임 증가.
                    _cuFrame++;
                }else{ // 역방향 - 프레임 감소.
                    _cuFrame--;
                }
    
                // 첫 프레임은 0. _cuFrame 값이 0 보다 작아질 수 없다.
                if(_cuFrame <= 0) {
                    _cuFrame = 0;
                    if(_isReverse) stopFrame(); // 역방향 설정 후 0 이하가 될 경우 정지.
                }
    
                // 마지막 프레임은 _max - 1. _cuFrame 값이 _max - 1 보다 커질 수 없다.
                if(_cuFrame >= _max - 1) {
                    _cuFrame = _max - 1;
                    if(!_isReverse) stopFrame(); // 정방향 설정 후 _max - 1 이상이 될 경우 정지.
                }
    
                updateFrame();
            }
    
            // 현재 프레임에 따른 배경 이미지 위치 변경.
            function updateFrame() {
                var posX = 0; // 스프라이트 이미지에서의 현재 프레임 X 좌표.
                var posY = 0; // 스프라이트 이미지에서의 현재 프레임 Y 좌표.
    
                posX = _cuFrame % _row * _itemW * -1; // 이미지에서의 실제 X 좌표.
                posY = Math.floor(_cuFrame / _col) * _itemH * -1; // 이미지에서의 실제 Y 좌표.
                console.log(_cuFrame, posX + ', ' + posY);
                _this.$el.css({ 'background-position' : posX + 'px ' + posY + 'px'});
            }
    
            init();
        }
        
        setTimeout(eyeAni, 2000);


        //  둥둥 원 커지기
        function startCircleP(){
            $('.startCircle').css({
                // "top": "56%",
                "left": "48.6%",
                "animation": "startCircleScale 0.3s linear forwards alternate"
            });
            // $('.startCircle').css("transform","scale(2.9)");

        }
        startCircleP()
        // 둥둥 원 사라지기
        function startCircleOff(){
            $('.startCircle').css('display', 'none');
        }
        setTimeout(startCircleOff, 2000);
        
        // svg - shine 나타나기 -> 애니메이션으로 나타내기 도전!

        //-------------------- 생각보다 지저분해져서 일단 지워보자..--------------------//
        // function shine_Layer2(){
        //     $("#Layer_2").css("display", "inline");

        //     // 딱 나타나자마자 애니메이션을 주기 위해 동시에 켜주자.
        //     $(".st41").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st42").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st43").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st44").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st45").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st46").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st47").css('animation', 'dash 3s linear alternate infinite');
        //     $(".st48").css('animation', 'dash 3s linear alternate infinite');
        // }
        // setTimeout(shine_Layer2, 2000);

        // // 다들 사라지기
        // function shine_Layer2Off(){
        //     $(".st41").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st42").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st43").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st44").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st45").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st46").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st47").css('animation', 'dashOff 3s linear alternate forwards');
        //     $(".st48").css('animation', 'dashOff 3s linear alternate forwards');
        // }
        // setTimeout(shine_Layer2Off, 4000);

        // 움직이는 원들 나타내기 - 각자 다른 타이밍에 나타내기
        function MoveCircleOn(){
            $('.MoveCircle2').css('display', 'inline');
            $('.MoveCircle6').css('display', 'inline');
        }
        setTimeout(MoveCircleOn, 3000);

        function MoveCircleOn2(){
            $('.MoveCircle').css('display', 'inline');
            $('.MoveCircle3').css('display', 'inline');
        }
        setTimeout(MoveCircleOn2, 4000);

        function MoveCircleOn3(){
            $('.MoveCircle5').css('display', 'inline');
            $('.MoveCircle4').css('display', 'inline');
            $('.MoveCircle7').css('display', 'inline');
        }
        setTimeout(MoveCircleOn3, 4700);
        

        // 다들 밑으로 이동!
        function AllMoveDown(){
            $('.MoveCircle5').animate({
                top : 1000 + "%"
              }, 1200, function() {
              });
              $('.MoveCircle').animate({
                top : 1000 + "%"
              }, 3000, function() {
              });
              $('.MoveCircle2').animate({
                top : 1000 + "%"
              }, 1500, function() {
              });
              $('.MoveCircle3').animate({
                top : 1000 + "%"
              }, 4000, function() {
              });
              $('.MoveCircle4').animate({
                top : 1000 + "%"
              }, 1000, function() {
              });
              $('.MoveCircle6').animate({
                top : 1000 + "%"
              }, 1000, function() {
              });
              $('.MoveCircle7').animate({
                top : 1000 + "%"
              }, 2500, function() {
              });
              $('#wrap').animate({
                top : 1000 + "%"
              }, 2500, function() {
              });
        }
        setTimeout(AllMoveDown, 6000);
        function startCircleOn(){
            $('.startCircle').css('display', 'inline');
            $('.startCircle').css('background', 'white');

        }
        setTimeout(startCircleOn, 6000);

        // startCircle을 이용해서 배경 색을 바꿔줄 예정이당
        function startCircleBack(){
            $('.startCircle').css('animation', 'startCircleS2 1.7s ease-in forwards');
        }
        setTimeout(startCircleBack,6000);

        // 배경 색 변경 - 흰색으로
        function htmlColorOff(){
            $('html').css('background-color', 'white');
        }
        setTimeout(htmlColorOff, 7500);  

        //  원들이 생기고 펼쳐지며 opacity가 다 다르게 짜잔.
        function circle() {
            // 일단 없애놨기 때문에 inline으로 display를 바꿔서 보이게끔 만들어준다.
            $('.circle1').css('display', 'inline');
            $('.circle2').css('display', 'inline');
            $('.circle3').css('display', 'inline');
            $('.circle4').css('display', 'inline');
            $('.circle5').css('display', 'inline');

             // 슬슬 배경 색도 바꿔주자. #00E4FF
             // 너무 부자연스럽게 들어와서 일단 보류..!
            //  $('html').css({
            //     'background': 'linear-gradient(-45deg,  #00E4FF,  #00E4FF,#1EFF96, #1EFF96,#1EFF96)'
            //   });

            // 배경 컬러 전환 - 흰색으로 전환할랭..
            // 다른 방법을 찾았으니 잠시 꺼준다.
            // function htmlColor(){
            //     $('html').fadeOut('slow', function(){
            //         $this.css('background-color', 'white');
            //         $this.fadeIn("slow");
            //     });
            // }
            // htmlColor();  

            // 동시에 애니메이션을 줄테야.
            $('.startCircle').animate({
                opacity : "0"
              }, 4500, function() {
                console.log('애니메이션 완료!');
              });
            $('.circle1').animate({
                top : 172,
                left: 47.5 + '%'
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle2').animate({
                top : 272,
                left: 47.5 + '%'
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle3').animate({
                top : 372,
                left: 47.5 + '%'
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle4').animate({
                top : 472,
                left: 47.5 + '%'
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
              $('.circle5').animate({
                top : 572,
                left: 47.5 + '%'
              }, 500, function() {
                console.log('애니메이션 완료!');
              });
        }
        setTimeout(circle, 7000);

        // 가사 추가 - 2
        function ly2(){
            $('#ly').text("2. 네가 피워준 무지개 너와 날 약속할 수 없어도");
            $('#ly').css({
                'color': 'black',
                'font-weight': 800
            });
        }
        setTimeout(ly2, 8000);

         // 다시 가운데로 모이기
         function circleOff() {
            $('.circle1').animate({
                top : 450
              }, 500, function() {
                console.log('1가운데로'),
                'swing';
              });
              $('.circle2').animate({
                top : 450
              }, 500, function() {
                console.log('2가운데로'),
                'swing';
              });
              $('.circle3').animate({
                top : 450
              }, 500, function() {
                console.log('2가운데로'),
                'swing';
              });
              $('.circle4').animate({
                top : 450
              }, 500, function() {
                console.log('2가운데로'),
                'swing';
              });
              $('.circle5').animate({
                top : 450,
              }, 500, function() {
                console.log('2가운데로'),
                'swing';
              });
              // 이쯤에서 꺼줘
              $('.startCircle').css('display','none');
        }
        setTimeout(circleOff, 8000);

        // 원들 색깔 검정으로 변경
        function circleBlack(){
            $('.circle1').css('background-color', 'black');
            $('.circle2').css('background-color', 'black');
            $('.circle3').css('background-color', 'black');
            $('.circle4').css('background-color', 'black');
            $('.circle5').css('background-color', 'black');
        }
        setTimeout(circleBlack, 8400);

        // 원 하나(circle1)만 남기고 나머지는 none만들기 -> 왼쪽으로 이동, 크기 키우기
        function circleNone() {
            // $('.circle1').css('background-color', 'black');
            $('.circle2').css('display', 'none');
            $('.circle3').css('display', 'none');
            $('.circle4').css('display', 'none');
            $('.circle5').css('display', 'none');
            // 크기 키우기 - 2배
            $('.circle1').css('transform', 'scale(2)');
            $('.circle2').css('transform', 'scale(2)');
            // 왼쪽으로 이동
            $('.circle1').animate({
                left : 20 + "%"
              }, 500, function() {
                console.log('1왼쪽으로'),
                'swing';
              });   
              $('.circle2').animate({
                left : 20 + "%"
              }, 500, function() {
                console.log('2왼쪽으로'),
                'swing';
              });   
        }
        setTimeout(circleNone, 8700);


        // 포물선 그리면서 circle1이 움직이기
        // 할 수 있을까...?ㅠㅠ

        // --------------------- 아직 내가 이해를 못하는 함수 생성법이라서..도저히 이해가 안간당 방법 변경! --------------------//

        // var demoA = Y.one('#demo'); // circle1
        // var anim = ({
        //     node: $('circle1'),
        //     duration: 1.5,
        //     easing: document.Easing.easeOut
        // });

        // // startAnim 함수를 새로 만들어서 커브 점을 만들어준다
        // // 참고 : https://clarle.github.io/yui3/yui/docs/anim/curve.html
        // function startAnim() {
        //     anim.set('to', {
        //         curve: [ [241,116], [534,141], [539,294] ]
        //     });
        //     anim.run();
        // };

        // var resetToAnimStart = function(){
        //     $('circle1').setStyles({'left': 210, 'top': 294}); // Where x0, y0 is the animation starting point  
        // }
        
        // // Y.one('#btn-animate').on('click', function(){
        // //     resetToAnimStart();
        // //     startAnim();
        // // });
        // setTimeout(resetToAnimStart, 9000);
        // setTimeout(startAnim, 9000);

        // circle1 오른쪽으로 이동

        function circleRight(){
            $('.circle1').animate({
                left : 80 + "%"
              }, 650, 'linear', function() {
                console.log('1오른쪽으로');
              }); 
              $('.circle2').css('display', 'inline');
              // 점점 투명도 조절되길래 그거 빼버렸다.
              $('.circle2').css('animation', 'none');
        }
        setTimeout(circleRight, 9700);

        // 무지개가 뾰로로로롱
        // circle1 움직임이랑 맞춰야하는데 왜 안맞지 이게 여태 한 것중 제일 힘들다..!
        // 여기에만 두시간 쓴듯..? 어떻게 맞추는거지
        // 일단 보류*********************************************************
        function rainbowOn(){
            $('.Rainbow').css('display', 'inline');
            // $('.rainbowR').css('z-index', '99');
            $('.Rainbow').animate({
                width : '60%',
              }, 700, 'linear' , function() {
                console.log('R길어지기');
              }); 
            // $('.Rainbow').css('animation', 'rainbow1 0.7s ease-in-out');
        }
        setTimeout(rainbowOn, 9700);

        // 두 원이 가운데에서 만나게끔
        function Meet(){
            $('.circle1').animate({
                left : 47.5 + "%"
              }, 700,
              'swing'); 
              $('.circle2').animate({
                left : 47.5 + "%"
              }, 700,'swing'); 
              $('.Rainbow').animate({
                  width : 100 + '%',
                  left : 0
              },700, 'swing');
              $('.Rainbow').css('animation', 'dashOff 1s ease-in forwards');
            // 그리고 이쯤에서 빙글빙글 도는게 하나 나오면 좋겠당
            // $('.loader').css('display', 'inline');
        }
        setTimeout(Meet, 10700);

        // 빙글빙글 도는거 넣어주장. -> 일단 끄고 다시 보자
        function loaderOn(){
            $('.loader').css('display', 'inline');
        }
        setTimeout(loaderOn, 11700);

        // circel2 없애기
        // 이후를 위한 세팅
        function Circle2Off(){
            $('.circle2').css('display', 'none');
            $('.circle2').css('left' , '-10%');
            $('.circle2').css('top', '30%');
            $('.circle2').css('transform', 'scale(1)');

            $('.circle3').css({
                'left' : '100%',
                'top': '55%',
                'transform': 'scale(1)'
            });
        }
        setTimeout(Circle2Off, 12000);

        // 토오옹 튀기
        function JumpCircle1(){
            $('.loader').css('transform', 'scale(1)');
        }
        setTimeout(JumpCircle1, 12000);
        function JumpCircle1_1(){
            $('.circle1').addClass('bounceInUp');
            $('.circle1').css('display', 'none');
        }
        setTimeout(JumpCircle1_1,12700);

        // 원 두개 나타나서 쭉 긋기
        function inLineCircle(){
            $('.circle2').css({
                'display': 'inline'
            });
            $('.circle3').css({
                'display': 'inline'
            });
            $('.loader').addClass('bounceInUp');
        }
        function LineCircleOn(){
            $('.circle2').animate({
                'top' : '30%',
                'left' : '100%'
            },850, 'swing');
            
            $('.circle3').animate({
                'top' : '60%',
                'left' : '-10%'
            },870, 'swing');

            $('.line1').animate({
                width : '100%'
            }, 900, 'swing');
            $('.line1').css('display', 'inline');

            $('.line2').animate({
                width : '100%'
            }, 850, 'swing');
            $('.line2').css('display', 'inline');

            
        }
        setTimeout(inLineCircle, 13000);
        setTimeout(LineCircleOn, 14000);

        // 가사 추가 - 3
        function ly3(){
            $('#ly').text("3. 그날 우린 밤의 피크닉");
            $('#ly').css({
                'color': 'black',
                'font-weight': 800
            });
        }
        setTimeout(ly3, 15500);

        // 돌아가는 별 만들기 - 레퍼런스 참고
        // https://www.kapitza.com

        function svgOn(){
            $('svg').css('display', 'inline');
            $('.line1').css('animation', 'dashOff 1s ease forwards');
            $('.line2').css('animation', 'dashOff 1s ease forwards');
        }
        setTimeout(svgOn, 15500);

        // 진짜루 돌아가는거 만들어보쟝
        function star(){
            // star10
            $('#s_1_9_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_9_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_9_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_9_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });
            // 아 4등분이 아니라 5등분이네...체킹체킹..

            //star9
            $('#s_1_8_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_8_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_8_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_8_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

             //star8
             $('#s_1_7_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_7_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_7_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_7_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

             //star7
             $('#s_1_6_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_6_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_6_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_6_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

             //star6
             $('#s_1_5_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_5_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_5_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_5_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

             //star5
             $('#s_1_4_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_4_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_4_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_4_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

            //star4
            $('#s_1_3_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out  forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_3_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_3_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_3_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

            //star3
            $('#s_1_2_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_2_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_2_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_2_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

            //star2
            $('#s_1_1_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2_1_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3_1_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4_1_').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });

            //star1
            $('#s_1').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center'
            });
            $('#s_2').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '0.8s'
            });
            $('#s_3').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '1.6s'
            });
            $('#s_4').css({
                'transform-box' : 'fill-box',
                'animation': 's1 4s ease-in-out forwards',
                'transform-origin' : 'center',
                'animation-delay' : '2.4s'
            });
        }
        setTimeout(star, 16000);


        // 백그라운드 컬러 변경해주기
        function backgroundColor(){
            $('html').css({
                'animation' : 'backgroundColor 5.9s ease-in-out'
            });
        }
        setTimeout(backgroundColor, 17000);

        // 통통통 나타나기 
        function WaveCircle1(){
            $('.wave').css({
                'display' : 'inline',
                'animation' : 'WaveMove 600ms linear forwards'
            });
            $('.wave.-two').css({
                'display' : 'inline',
                'animation': 'WaveMove 1400ms linear forwards'
            });
            $('.wave.-three').css({
                'display' : 'inline',
                'animation': 'WaveMove 1000ms linear forwards'
            });
        }
        function WaveCircle2(){
            $('.wave2').css({
                'display' : 'inline',
                'animation' : 'WaveMove 600ms linear forwards'
            });
            $('.wave2.-two').css({
                'display' : 'inline',
                'animation': 'WaveMove 1400ms linear forwards'
            });
            $('.wave2.-three').css({
                'display' : 'inline',
                'animation': 'WaveMove 1000ms linear forwards'
            });
        }
        function WaveCircle3(){
            $('.wave3').css({
                'display' : 'inline',
                'animation' : 'WaveMove 600ms linear forwards'
            });
            $('.wave3.-two').css({
                'display' : 'inline',
                'animation': 'WaveMove 1400ms linear forwards'
            });
            $('.wave3.-three').css({
                'display' : 'inline',
                'animation': 'WaveMove 1000ms linear forwards'
            });
        }
        function WaveCircle3Move(){
            $('.wave3').css({
                'display' : 'inline',
                'top' : '40%',
                left : '50%',
                'animation' : 'WaveMove 600ms linear forwards'
            });
            $('.wave3.-two').css({
                'display' : 'inline',
                'top' : '40%',
                left : '50%',
                'animation': 'WaveMove 1400ms linear forwards'
            });
            $('.wave3.-three').css({
                'display' : 'inline',
                'top' : '40%',
                left : '50%',
                'animation': 'WaveMove 1000ms linear forwards'
            });
        }
        // 사용 후 한번 꺼주기 - 반복 사용을 위해서
        function WaveCircle1Off(){
            $('.wave').css({
                'display' : 'none'
            });
            $('.wave.-two').css({
                'display' : 'none'
            });
            $('.wave.-three').css({
                'display' : 'none'
            });
        }
        function WaveCircle2Off(){
            $('.wave2').css({
                'display' : 'none'
            });
            $('.wave2.-two').css({
                'display' : 'none'
            });
            $('.wave2.-three').css({
                'display' : 'none'
            });
        }
        function WaveCircle3Off(){
            $('.wave3').css({
                'display' : 'none'
            });
            $('.wave3.-two').css({
                'display' : 'none'
            });
            $('.wave3.-three').css({
                'display' : 'none'
            });
        }
        // 최소 1400은 더하고 꺼주기!
        // 어렵당...

        // 그
        setTimeout(WaveCircle1, 15500);
        setTimeout(WaveCircle1Off, 17000);

        //날
        setTimeout(WaveCircle2, 16000);
        setTimeout(WaveCircle2Off, 17500);

        //우
        setTimeout(WaveCircle3, 16500);
        setTimeout(WaveCircle3Off, 18000);

        //린
        setTimeout(WaveCircle2, 17500);
        setTimeout(WaveCircle2Off, 19000);

        //밤
        setTimeout(WaveCircle3Move, 19900);
        setTimeout(WaveCircle3Off, 22000);

        //의
        setTimeout(WaveCircle1, 20400);
        setTimeout(WaveCircle1Off, 23000);

        //피
        setTimeout(WaveCircle2, 20900);
        setTimeout(WaveCircle2Off, 23000);

        //크
        setTimeout(WaveCircle3, 21400);
        setTimeout(WaveCircle3Off, 24000);

        //닉
        setTimeout(WaveCircle1, 22700);
        setTimeout(WaveCircle1Off, 26000);  

        // 백그라운드 컬러 따닥 변경
        // 안되네..
        // function DUDU1(){
        //     $('html').css('animation', 'backgroundColor2 0.2s');
        // }
        // setTimeout(DUDU1, 32000);
        // function DUDU2(){
        //     $('html').css('animation', 'backgroundColor3 0.2s');
        // }
        // setTimeout(DUDU2, 36000);
        function backgroundColorOff(){
            $('html').css('background-color', 'none');
        }        
        setTimeout(backgroundColorOff, 22900);
        // 잠깐 따닥 변경
        function DUDU1(){
            $('html').css('background-color' , 'rgb(27, 27, 27)');
            $('#stars').css('display','none');
            $('#section2_2').css('display', 'inline');
        }
        setTimeout(DUDU1, 23000);
        setTimeout(backgroundColorOff, 23200);
        function DUDU2(){
            $('html').css('background-color' , '#1EFF96');
            // $('#stars').css('display','none');
            $('#ly').css('display', 'none');
            $('#section2_2').css('display', 'none');
        }
        setTimeout(DUDU2, 23400);

        // 마지막 씬 등장
        function last(){
            $('.oneline').css('display', 'none');
            $('#last').css('display', 'inline');
            $('html').css('background-color', 'white');
            $('footer').css('display','none');
        }
        setTimeout(last, 23450);

        // replay
        function replay(){
            $('.replay').hover(function(){
                $('.replay').css('color', 'white');
                $('#bar').css({
                    'animation': 'bar 1s infinite ease-in',
                    'transform-box' : 'fill-box',
                    'transform-origin' : 'center'
                });
            });
            $('.replay').mouseleave(function(){
                $('.replay').css('color', 'black');
                $('#bar').css('animation', 'none');
            });
        }
        setTimeout(replay, 23400);

        // 별 돌기
        function stars_1(){

            $('#_x5F_star1').css({
                'animation': 'starRotate 8s infinite ease-in',
                'transform-box' : 'fill-box',
                'transform-origin' : 'center'
            });
            $('#_x5F_star2').css({
                'animation': 'starRotate 8s infinite ease-in',
                'transform-box' : 'fill-box',
                'transform-origin' : 'center'
            });
            $('#_x5F_star3').css({
                'animation': 'starRotate 8s infinite ease-in',
                'transform-box' : 'fill-box',
                'transform-origin' : 'center'
            });
            $('#_x5F_star4_2_').css({
                'animation': 'starRotate 8s infinite ease-in',
                'transform-box' : 'fill-box',
                'transform-origin' : 'center'
            });

        }
        setTimeout(stars_1, 23400);

        // text 나타내기!
        function loopTextOn(){
            $('#NightLinnne2').css({
                'display' : 'inline'
            });
            $('#NightLinnne1').css({
                'display' : 'inline'
            });
        }
        setTimeout(loopTextOn, 23400);

        // 마지막 랜덤으로 눈깔 색 변경하기 -> 컬러코드 이용
        var RandomN = 0;
        // 마우스를 화면에 올리기만 하면 걍 실행!
        $("html").mouseover(function(){
            // 일정 시간마다 반복하게 해줄 예정,
            setInterval(function(){   

                // 랜덤하게
                // 16진수를 뽑아온다. - Math.random사용
                RandomN = Math.random() * 0xffffff;
                RandomN = parseInt(RandomN);
                RandomN = RandomN.toString(16);

                // 색깔 변경
                $("#ColorEye").css("fill","#"+RandomN);

            },5000);

            // 이거 마음에 드니까 첫 화면에서도 써먹어야징  
            // 마지막 랜덤으로 눈깔 색 변경하기 -> 컬러코드 이용
            // 아 안되넹 뭔가 조잡할 것 같기두 하구..걍 끄자
            // var RandomN2 = 0;
            // // 마우스를 화면에 올리기만 하면 걍 실행!
            // $("html").mouseover(function(){
            //     // 일정 시간마다 반복하게 해줄 예정,
            //     setInterval(function(){   
    
            //         // 랜덤하게
            //         // 16진수를 뽑아온다. - Math.random사용
            //         RandomN2 = Math.random() * 0xffffff;
            //         RandomN2 = parseInt(RandomN2);
            //         RandomN2 = RandomN2.toString(16);
    
            //         // 색깔 변경
            //         $(".Subject").css("fill","#"+RandomN2);
    
            //     },5000);


        });




        
        


    
    });

    });
})(jQuery);