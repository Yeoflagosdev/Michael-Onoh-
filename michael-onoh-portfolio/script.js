const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
function closeMenu(){toggle.classList.remove('active');toggle.setAttribute('aria-expanded','false');menu.classList.remove('open');menu.setAttribute('aria-hidden','true');document.body.classList.remove('menu-open')}
toggle.addEventListener('click',()=>{const open=!menu.classList.contains('open');toggle.classList.toggle('active',open);toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open);menu.setAttribute('aria-hidden',String(!open));document.body.classList.toggle('menu-open',open)});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.project-video').forEach(video=>{const label=video.parentElement.querySelector('.player-label');const setState=playing=>{label.lastChild.textContent=playing?' LOOPING PREVIEW':' PAUSED PREVIEW';label.classList.toggle('is-paused',!playing)};video.addEventListener('play',()=>setState(true));video.addEventListener('pause',()=>setState(false));});
