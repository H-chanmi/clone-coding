//이미지 배열 정의
const images = [
    { image: "images/audrey.jpg", link: "#", background: "#e0d0b7", adName: "영화 오드리 광고" },
    { image: "images/longlegs.jpg", link: "#", background: "#000000", adName: "영화 롱레그 광고" },
    { image: "images/yourcolor.jpg", link: "#", background: "#d6edfb", adName: "영화 너의 색 광고" },
    { image: "images/littleEema.jpg", link: "#", background: "#67bbea", adName: "영화 리틀 엠마 광고" }
];

// 랜덤 이미지 선택 함수
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
//Math.random()으로 0과 1사이의 난수 생성
//images.length로 이미지의 길이(4)가져옴
//(Math.random() * images.length ->0이상 4미만의 난수 생성
//Math.floor(...):소수점 내림으로 정수 반환
//return images[randomIndex] 인덱스에 해당 이미지 반환

const videos = [
    { video: "movies/Audrey_1080x608_PC.mp4", videoName: "세상 참 예쁜 오드리", videoPlot:"한 가족의 특별한 성장통과 <br> 서로의 사랑을 감동적으로 그려낸 영화"},
    { video: "movies/1012_colors_1080x608.mp4", videoName: "너의 색", videoPlot:"<목소리의형태> 감독 &<br><고양이의보은> 작가의컴백!"},
    { video: "movies/emma_1080x608_pc.mp4",videoName: "리틀 엠마", videoPlot:"한 뼘 소녀 '엠마'의 거대한 모험!<br>지금 바로 모혐 떠나자! 예매 GO"},
    { video: "movies/Longlegs_1080x608_pc.mp4", videoName: "롱레그스", videoPlot:"올해 호러 영화 흥행 신기록<br>10월 30일 CGV 대개봉"}
   ];

//랜덤 비디오함수   
function getRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos [randomIndex];
}

window.onload = function() { //페이지가 완전히 로드되면 함수 실행
   //배너 상수 선언
    const bannerImage = document.getElementById('bannerImage');
    const bannerLink = document.getElementById('bannerLink');
    const adNameSpan = bannerLink.querySelector('.hide');
    const randomImage = getRandomImage();

    // 배너 이미지, 링크, 배경색 설정
    bannerImage.src = randomImage.image; // 랜덤으로 선택된 이미지의 경로를 이미지의 src속성에 설정
    bannerLink.href = randomImage.link; //링크설정
    document.body.style.backgroundColor = randomImage.background; // 배경색 설정
    adNameSpan.textContent = randomImage.adName;

    //비디오 상수 선언
    const movieVideo = document.querySelector('.movie__video-video');
    const movieName = document.querySelector('.movie__introbox-name');
    const moviePlot = document.querySelector('.movie__introbox-plot');
    const randomVideo = getRandomVideo();

    // 비디오 이름,줄거리 설정
    movieVideo.src = randomVideo.video; // 랜덤으로 선택된 이미지의 경로를 이미지의 src속성에 설정
    movieName.textContent = randomVideo.videoName; 
    moviePlot.innerHTML = randomVideo.videoPlot;

    //잇풋이름 상수선언
    const inputBox = document.querySelector('.form__search');

    //랜덤 placeholder 설정
    inputBox.placeholder = getRandomInput();

    //인풋박스에 focus되면 placeholder 공백처리
    inputBox.addEventListener('focus',function(){
    inputBox.placeholder = '';
    });
  

    };

    // 배너 숨기기 함수
    function closeBanner() {
        const cgvAdTop = document.querySelector('.cgv_ad_top');
        cgvAdTop.style.display = 'none'; // 배너를 숨김.
        document.body.style.backgroundColor = 'transparent'; // 배경색을 투명으로 변경.
    }


      //서브페이지 display:none설정
      document.querySelectorAll('.nav__submenu').forEach(function(submenu){
        submenu.style.display='none';
    });
  

    //a에 닿으면 nav-box높이값 조절+서브페이지 display:block
    document.querySelectorAll('.nav__list').forEach(function(navList){
        navList.addEventListener('mouseenter',function(){
            document.querySelector('.nav-box').classList.add('active');
            document.querySelectorAll('.nav__submenu').forEach(function(submenu){
                submenu.style.display='block';
            });
        });
    });

    //nav-box에서 떠나면 nav-box 높이값 원래대로 + 서브페이지 display:none
    document.querySelector('.nav-box').addEventListener('mouseleave',function(){
        document.querySelector('.nav-box').classList.remove('active');
        document.querySelectorAll('.nav__submenu').forEach(function(submenu){
            submenu.style.display='none';});
    });

    //인풋박스 랜덤설정
    const inputBoxData = [
        {inputName: "롱레그스"},
        {inputName: "리틀 엠마"},
        {inputName: "너의 색"},
        {inputName: "김정난 X 박지훈"},
    ];
    
    function getRandomInput() {
        const randomIndex = Math.floor(Math.random() * inputBoxData.length);
        return inputBoxData[randomIndex].inputName; // inputName 반환
    }

    
  
    
  
    //비디오 컨트롤 버튼 
    const movieVideo = document.querySelector('.movie__video-video');
    const togglePlayButton = document.getElementById('video-control');
    const toggleSoundButton = document.getElementById('video-sound');
    
    togglePlayButton.addEventListener('click', function() {
        if (movieVideo.paused) { // 비디오가 재생중인지 정지중인지 
            movieVideo.play(); 
            togglePlayButton.style.backgroundImage = "url('images/pause.png')"; 
        } else {
            movieVideo.pause();
            togglePlayButton.style.backgroundImage = "url('images/play (1).png')"; // 일시 정지 아이콘으로 변경
        }
    });

    toggleSoundButton.addEventListener('click', function() {
        // 음소거 상태를 반전
        movieVideo.muted = !movieVideo.muted; 
    
        // 음소거 상태에 따라 버튼 이미지 변경
        if (movieVideo.muted) {
            toggleSoundButton.style.backgroundImage = "url('images/soundoff.png')";
        } else {
            toggleSoundButton.style.backgroundImage = "url('images/soundOn.png')";
        }
    });