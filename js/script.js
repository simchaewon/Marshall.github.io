/* header 스크롤내리면 bar 생기는거 */
window.addEventListener('scroll',()=>{
  const header = document.querySelector('header');
  // console.log( window.scrollY );
  if( window.scrollY>0 ){
    header.classList.add('fix');
  }else{
    header.classList.remove('fix');
  }
});

const mainMenu = document.querySelectorAll('.gnb>ul>li');

const enterFunc=(e)=>{
  if(e.currentTarget.querySelector('.sub')){
    e.currentTarget.querySelector('.sub').style.display = 'block';
  }
}
const leaveFunc=(e)=>{
  if(e.currentTarget.querySelector('.sub')){
    e.currentTarget.querySelector('.sub').style.display = 'none';
  }
}
const checkWindow=()=>{
  if( window.innerWidth>=1200 ){
    mainMenu.forEach((list)=>{
      list.addEventListener('mouseenter',enterFunc);
      list.addEventListener('mouseleave',leaveFunc);
    })
  }else{
    mainMenu.forEach((list)=>{
      list.removeEventListener('mouseenter',enterFunc);
      list.removeEventListener('mouseleave',leaveFunc);
    })
  }
}
checkWindow(); // 최초 실행
window.addEventListener('resize', checkWindow);

const toggle = document.querySelector('.toggle');
const gnb = document.querySelector('.gnb');
const bg = document.querySelector('.black_bg');
const gnbClose = document.querySelector('.close');
let toggleState = true;
toggle.addEventListener('click',()=>{
  if( toggleState ){
    gnb.style.left = 0;         
    bg.style.display = 'block';
    bg.style.zIndex = 99998;    
    toggleState = false;
  }else{
    gnb.style.left = '-70vw';
    bg.style.display = 'none';
    toggleState = true;
  }
})
gnbClose.addEventListener('click', ()=>{
  gnb.style.left = '-70vw';
  bg.style.display = 'none';
  toggleState = true;
})

mainMenu.forEach((mainMenu, index)=>{
  if(index===1){
    mainMenu.querySelector('a').addEventListener('click', (e)=>{
      //console.log( e.currentTarget.nextElementSibling.style )
      if( window.innerWidth<1200 ){       
        const sub = e.currentTarget.nextElementSibling;
        if(sub){ 
          e.preventDefault();  // console.log( this, e.target, e.currentTarget )
          if(sub.style.display=='none' || sub.style.display==''){
            sub.style.display='block';
          }else{
            sub.style.display='none';
          }
        }
      }
    });
  }
});

const searchForm = document.querySelector('#searchForm'); //('form')
searchForm.addEventListener('keypress', (event)=>{
  if( event.key==='Enter' ){ // keyCode 제어 바꾸기
    event.preventDefault();
    this.submit();
  }
});

// 스크롤 이벤트를 감지하여 이미지 등장
window.addEventListener('scroll', function() {
  const storyImage = document.querySelector('.room1'); // 클래스 선택자 사용
  const imagePosition = storyImage.getBoundingClientRect().top; // 이미지의 위치
  const windowHeight = window.innerHeight; // 현재 창의 높이

  if (imagePosition < windowHeight) {
    storyImage.classList.add('visible'); // 스크롤 시 이미지 등장
  }
});
window.addEventListener('scroll', function() {
  const storyImage = document.querySelector('.room3'); // 클래스 선택자 사용
  const imagePosition = storyImage.getBoundingClientRect().top; // 이미지의 위치
  const windowHeight = window.innerHeight; // 현재 창의 높이

  if (imagePosition < windowHeight) {
    storyImage.classList.add('visible'); // 스크롤 시 이미지 등장
  }
});
window.addEventListener('scroll', function() {
  const storyImage = document.querySelector('.room4'); // 클래스 선택자 사용
  const imagePosition = storyImage.getBoundingClientRect().top; // 이미지의 위치
  const windowHeight = window.innerHeight; // 현재 창의 높이

  if (imagePosition < windowHeight) {
    storyImage.classList.add('visible'); // 스크롤 시 이미지 등장
  }
});
window.addEventListener('scroll', function() {
  const storyImage = document.querySelector('.room5'); // 클래스 선택자 사용
  const imagePosition = storyImage.getBoundingClientRect().top; // 이미지의 위치
  const windowHeight = window.innerHeight; // 현재 창의 높이

  if (imagePosition < windowHeight) {
    storyImage.classList.add('visible'); // 스크롤 시 이미지 등장
  }
});
window.addEventListener('scroll', function() {
  const storyImage = document.querySelector('.room6'); // 클래스 선택자 사용
  const imagePosition = storyImage.getBoundingClientRect().top; // 이미지의 위치
  const windowHeight = window.innerHeight; // 현재 창의 높이

  if (imagePosition < windowHeight) {
    storyImage.classList.add('visible'); // 스크롤 시 이미지 등장
  }
});


  /* 동영상 */ 
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;
  let isPlayerReady = false;

  window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player('player', {
          videoId: 'Q2xC9qADZJI',
          playerVars: {
              'autoplay': 0,
              'controls': 0,
              'rel': 0,
              'showinfo': 0,
              'modestbranding': 1,
              'loop': 1,
              'playlist': 'Q2xC9qADZJI',
              'enablejsapi': 1,
              'mute': 1
          },
          events: {
              'onReady': onPlayerReady
          }
      });
  }

  const onPlayerReady = (e) => {
      isPlayerReady = true;
      const videoSection = document.getElementById('video');
      player.setSize(videoSection.offsetWidth, videoSection.offsetHeight);
  }

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && isPlayerReady) {
              console.log('playVideo');
              player.playVideo();
          } else if (isPlayerReady) {
              player.pauseVideo();
          }
      })
  }, options);

  document.addEventListener('DOMContentLoaded', () => {
      const videoSection = document.getElementById('video');
      observer.observe(videoSection);
  });

  window.addEventListener('resize', () => {
      if (isPlayerReady) {
          const videoSection = document.getElementById('video');
          player.setSize(videoSection.offsetWidth, videoSection.offsetHeight);
      }
  });







