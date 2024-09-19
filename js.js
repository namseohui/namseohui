$(document).ready(function(){

    // ♤♤♤♤♤♤ 화면 스크롤할 때, 섹션 두둥탁 ♤♤♤♤♤
        // 브라우저의 높이값을 찾아라
        var winth = $(window).height()

        // 화면이 리사이징될때마다, 브라우저의 화면높이를 찾아라
        $(window).resize(function(){
            var winth2 = $(window).height()
            $('section').height(winth2)
        })

        $('section').height(winth)
        console.log(winth)


        // 화면에서 스크롤했을 때, 스크롤탑값을 구해라.
        $(window).scroll(function(){

            let sc = $(this).scrollTop()
            let sht = $(window).height()

        })

        // 섹션에서 마우스휠 했을 때, 화면이 움직인다.
        $('section').mousewheel(function(event,delta){
            event.preventDefault()
            
            if(delta>0){
                // 마우스를 올리면 이전화면으로 움직이고
                let prev = $(this).prev().offset().top  //.offset().top 외우기★

                $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
            }

            if(delta<0){
                // 마우스를 내리면 다음화면으로 움직인다.
                let next = $(this).next().offset().top;

                $('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')
            }
            
            

        })

    
    // ♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤


    // ★★★★★★★★★ 이모지 설정 ★★★★★★★★★
        //이모지에 마우스가 들어갔을 때, z-index 변경과 뒷배경 사이즈가 커진다.
        $('.imog').mouseenter(function(){
            $('.imog_bg').addClass('on')
            $('.imog_basic').addClass('on')
        })

        // 이모지에 마우스가 떠났을 때, 다시 돌아온다.
        $('.imog').mouseleave(function(){
            $('.imog_bg').removeClass('on')
            $('.imog_basic').removeClass('on')           
        })

        // 이모지를 클릭했을 때, popup창이 나온다
        $('.imog').click(function(){
            $('.popup').css({'display':'block'})
        })

        // popup창의 x를 눌렀을 때, popup창이 없어진다
        $('.fa-xmark').click(function(){
            $('.popup').css({'display':'none'})
        })

    // ☆☆☆☆☆☆☆☆☆ 이모지 설정끝 ☆☆☆☆☆☆☆☆☆





    // ★★★★★★★★★ 이모지 클릭 후 프로필화면 설정 스크롤탑값 1020★★★★★★★★★
        $('.popup1 h2').click(function(){
            $('.popup').css({'display':'none'})
            $(window).scrollTop('1020')
        })


    // ☆☆☆☆☆☆☆☆☆ 이모지 클릭 후 프로필화면 설정끝 ☆☆☆☆☆☆☆☆☆








    // ◆◆◆◆◆◆ 1.section 첫번째 섹션 설정 ◆◆◆◆◆◆
        // 마우스가 움직일 때,
        // .mouse 가 따라다녀라
        $(window).mousemove(function(e){

            var x = e.pageX;
            var y = e.pageY;

            $('.mouse').css({'left':x, 'top':y})
                
        })


        //.clickBox를 클릭했을 때, 프로필 popup이 나온다.
        $('.clickBox').click(function(){
            $('.popup').css({'display':'block'})
        })



    // ◇◇◇◇◇◇ 1.section 첫번째 섹션 설정 끝 ◇◇◇◇◇◇



    


    // ◆◆◆◆◆◆ 2.section 두번째 섹션 설정 ◆◆◆◆◆◆
        // .about_프로젝트에 마우스엔터했을 때, about_프로젝트_pop 가 나타난다
        $('.about_stein').mouseenter(function(){
            $('.about_stein_pop').css({'opacity':0}).stop().animate({'opacity':'1'},800)
        })
        $('.about_stein_pop').mouseenter(function(){
            $('.about_stein_pop').css({'opacity':0}).stop().animate({'opacity':'1'},800)
        })
        $('.about_kiss').mouseenter(function(){
            $('.about_kiss_pop').css({'opacity':0}).stop().animate({'opacity':'1'},800)
        })
        $('.about_kiss_pop').mouseenter(function(){
            $('.about_kiss_pop').css({'opacity':0}).stop().animate({'opacity':'1'},800)
        })
        $('.about_coffee').mouseenter(function(){
            $('.about_coffee_pop').css({'opacity':0}).stop().animate({'opacity':'1'},800)
        })
        $('.about_coffee_pop').mouseenter(function(){
            $('.about_coffee_pop').css({'opacity':0}).stop().animate({'opacity':'1'},800)
        })


        // .about_프로젝트_pop에 마우스리브했을 때, about_프로젝트_pop 가 없어진다
        $('.about_stein_pop').mouseleave(function(){
            $('.about_stein_pop').css({'opacity':'1'}).stop().animate({'opacity':'0'},500)
        })
        $('.about_stein').mouseleave(function(){
            $('.about_stein_pop').css({'opacity':'1'}).stop().animate({'opacity':'0'},500)
        })
        $('.about_kiss_pop').mouseleave(function(){
            $('.about_kiss_pop').css({'opacity':'1'}).stop().animate({'opacity':'0'},500)
        })
        $('.about_kiss').mouseleave(function(){
            $('.about_kiss_pop').css({'opacity':'1'}).stop().animate({'opacity':'0'},500)
        })
        $('.about_coffee_pop').mouseleave(function(){
            $('.about_coffee_pop').css({'opacity':'1'}).stop().animate({'opacity':'0'},500)
        })
        $('.about_coffee').mouseleave(function(){
            $('.about_coffee_pop').css({'opacity':'1'}).stop().animate({'opacity':'0'},500)
        })

        // 컨셉보기 화면 팝업열기
        $('.stein_poppop>div').click(function(){
            $('.stein_poppopup').css({'z-index': '-50'}).stop().animate({'z-index' : '999999'})
        })
        $('.kiss_poppop>div').click(function(){
            $('.kiss_poppopup').css({'z-index': '-50'}).stop().animate({'z-index' : '999999'})
        })

        $('.coffee_poppop>div').click(function(){
            $('.coffee_poppopup').css({'z-index': '-50'}).stop().animate({'z-index' : '999999'})
        })





        $('figure .fa-xmark').click(function(){
            $('.stein_poppopup').css({'z-index': '999999'}).stop().animate({'z-index' : '-50'},0)
            $('.kiss_poppopup').css({'z-index': '999999'}).stop().animate({'z-index' : '-50'},0)
            $('.coffee_poppopup').css({'z-index': '999999'}).stop().animate({'z-index' : '-50'},0)
        })






        // 두번째 섹션 컨셉뷰보기 팝업설정 모니터안 화면 전환

        var i = 0;
        setInterval(function(){
            i++;
            if(i==4)i=0

            console.log(i)
            $('#puu li').eq(i-1).css({'left':0}).stop().animate({'left':'100%'})
            $('#puu li').eq(i).css({'left':'-100%'}).stop().animate({'left':0})

            $('#puuu li').eq(i-1).css({'left':0}).stop().animate({'left':'100%'})
            $('#puuu li').eq(i).css({'left':'-100%'}).stop().animate({'left':0})

            $('#puuuu li').eq(i-1).css({'left':0}).stop().animate({'left':'100%'})
            $('#puuuu li').eq(i).css({'left':'-100%'}).stop().animate({'left':0})

        },2000)



        


    // ◇◇◇◇◇◇ 2.section 두번째 섹션 설정 끝 ◇◇◇◇◇◇






    // ◆◆◆◆◆◆ popup 상세 설정 ◆◆◆◆◆◆
        // popup에 li .popli_11 / .popli_22 / .popli_33 에 호버했을때, css 변경
        $('.popli_11').mouseenter(function(){
            $('.popup_txt li').removeClass('tt')
            $('.popli_11').addClass('tt')
            $('.popli_22').css({'opacity':'0.3'})
            $('.popli_33').css({'opacity':'0.3'})
        })
        $('.popli_22').mouseenter(function(){
            $('.popup_txt li').removeClass('tt')
            $('.popli_22').addClass('tt')
            $('.popli_11').css({'opacity':'0.3'})
            $('.popli_33').css({'opacity':'0.3'})
        })
        $('.popli_33').mouseenter(function(){
            $('.popup_txt li').removeClass('tt')
            $('.popli_33').addClass('tt')
            $('.popli_11').css({'opacity':'0.3'})
            $('.popli_22').css({'opacity':'0.3'})
        })

        // popup에 li .popli_11 / .popli_22 / .popli_33 에 마우스나갔을때, css 돌아옴
        $('.popup_txt li').mouseleave(function(){
            $('.popup_txt li').removeClass('tt')
            $('.popli_11').css({'opacity':'1'})
            $('.popli_22').css({'opacity':'1'})
            $('.popli_33').css({'opacity':'1'})
        })


        // 이모지에 마우스가 들어갈 때, 폭죽이미지가 블럭되고 // 마우스가 나갈 때, 다시 none
        $('.popup_imog img').mouseenter(function(){
            $('.bomb').css({'display':'block'})
            $('.popup_imog .img4').css({'z-index':'2'})
        })
        $('.popup_imog img').mouseleave(function(){
            $('.bomb').css({'display':'none'})
            $('.popup_imog .img4').css({'z-index':'1'})
        })

        // p1~6에 마우스가 들어갈 때, 이미지 변경 z-index 변경
        $('.p1').mouseenter(function(){$('.popup_imog .img2').css({'z-index':'2'})})
        $('.p2').mouseenter(function(){$('.popup_imog .img6').css({'z-index':'2'})})
        $('.p3').mouseenter(function(){$('.popup_imog .img4').css({'z-index':'2'})})
        $('.p4').mouseenter(function(){$('.popup_imog .img3').css({'z-index':'2'})})
        $('.p5').mouseenter(function(){$('.popup_imog .img5').css({'z-index':'2'})})
        $('.p6').mouseenter(function(){$('.popup_imog .img7').css({'z-index':'2'})})
        // p1~6에 마우스가 들어갈 때, 이미지 변경 z-index 변경
        $('.p1').mouseleave(function(){$('.popup_imog .img2').css({'z-index':'1'})})
        $('.p2').mouseleave(function(){$('.popup_imog .img6').css({'z-index':'1'})})
        $('.p3').mouseleave(function(){$('.popup_imog .img4').css({'z-index':'1'})})
        $('.p4').mouseleave(function(){$('.popup_imog .img3').css({'z-index':'1'})})
        $('.p5').mouseleave(function(){$('.popup_imog .img5').css({'z-index':'1'})})
        $('.p6').mouseleave(function(){$('.popup_imog .img7').css({'z-index':'1'})})

    // ◇◇◇◇◇◇ popup 설정 끝 ◇◇◇◇◇◇










    // 두번째 섹션에 반짝이 효과!!
    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Star {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.flickerInterval = Math.floor(Math.random() * 50) + 50;
            this.flickerCounter = 0;
        }
    
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    
        update() {
            this.flickerCounter++;   
            if (this.flickerCounter === this.flickerInterval) {
                this.radius = getRandom(0.5, 2);
                this.color = `rgba(255, 255, 255, ${getRandom(0.3, 1)})`;
                this.flickerCounter = 0;
                this.flickerInterval = Math.floor(Math.random() * 50) + 50;
            }
            this.draw();
        }
    }
    
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    function spawnStars() {
        const x = getRandom(0, canvas.width);
        const y = getRandom(0, canvas.height);
        const radius = getRandom(0.5, 2);
        const color = `rgba(255, 255, 255, ${getRandom(0.3, 1)})`;
        return new Star(x, y, radius, color);
    }
    
    let stars;
    function init() {
        stars = [];    
        for (let i = 0; i < 200; i++) {
            stars.push(spawnStars());
        }
    }
    
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        stars.forEach(star => {
            star.update();
        });
    }
    
    init();
    animate();




    // 스킬부분 설정

   



    $('.popup_sk').mouseenter(function(){
        $('.popskill').css({'display':'flex'})

        $('.canvass').each(function() { 
            // 퍼센트를 표시할 요소 선택
            const spanpercent = $(this).siblings('.percent');
            
            // 원의 테두리 너비(px) 및 애니메이션 지속 시간(ms) 정의 
            const border = 16;
            const duration = 1000; 
        
            // 캔버스 및 2D 컨텍스트 설정
            const canvas = $(this)[0]; 
            const ctx = canvas.getContext('2d');
        
            // 애니메이션에 필요한 변수 및 데이터 속성에서 목표 퍼센트 가져오기
            const targetPercent = $(this).data('percent');
            const posX = canvas.width / 2;
            const posY = canvas.height / 2;
            const onePercent = 360 / 100;
            const result = onePercent * targetPercent;
            const radius = (canvas.width / 2) - (border / 2);
            let percent = 0;
            ctx.lineCap = (targetPercent <= 0) ? 'butt' : 'round';
        
            // 원을 그리고 퍼센트 업데이트하는 함수
            function arcMove() {
                let degrees = 0;
                let startTime = null;
        
                // 애니메이션을 처리하는 함수
                function animate(timestamp) {
                    if (!startTime) startTime = timestamp;
                    let progress = (timestamp - startTime) / duration;
                    progress = Math.min(1, progress);
                    degrees = progress * result;
        
                    // 캔버스 초기화 및 퍼센트 업데이트
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    percent = Math.floor(degrees / onePercent);
                    spanpercent.text(percent);
        
                    // 배경 선 그리기
                    ctx.beginPath();
                    ctx.arc(posX, posY, radius, 0, Math.PI * 2);
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = border;
                    ctx.stroke();
        
                    // 애니메이션 되는 선 그리기
                    ctx.beginPath();
                    ctx.strokeStyle = '#ffff00';
                    ctx.lineWidth = border;
                    ctx.arc(posX, posY, radius, Math.PI * -0.5, (Math.PI / 180) * degrees - (Math.PI / 2));
                    ctx.stroke();
        
                    // 애니메이션이 완료되지 않았다면 계속해서 프레임 요청
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                // 첫 프레임 요청
                requestAnimationFrame(animate);
            }
        
            // 애니메이션 함수 호출
            arcMove();
        });

    })
    $('.popup_sk').mouseleave(function(){
        $('.popskill').css({'display':'none'})
    })


    $('.popup_ed').mouseenter(function(){
        $('.popedu').css({'display':'block'})
    })
    $('.popup_ed').mouseleave(function(){
        $('.popedu').css({'display':'none'})
    })

    // .popcar
    $('.popup_ca').mouseenter(function(){
        $('.popcar').css({'display':'block'})
    })
    $('.popup_ca').mouseleave(function(){
        $('.popcar').css({'display':'none'})
    })

    // popits
    $('.popup_it').mouseenter(function(){
        $('.popits').css({'display':'block'})

        

    })
    $('.popup_it').mouseleave(function(){
        $('.popits').css({'display':'none'})
    })



})