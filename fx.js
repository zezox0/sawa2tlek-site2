/* sawa2tlek – حركات خفيفة مشتركة */
(()=>{const de=document.documentElement,$=s=>document.querySelector(s);
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;de.classList.add('fx');
const bar=document.createElement('div');bar.id='fxb';document.body.prepend(bar);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('#home .sh,#home .sh2,#home .card,.faq details').forEach(el=>{const i=[...el.parentElement.children].indexOf(el);el.style.setProperty('--d',Math.min(i,5)*80+'ms');el.classList.add('rv');io.observe(el)});
let tk=false;const sc=()=>{tk=false;const y=scrollY,h=de.scrollHeight-innerHeight;bar.style.setProperty('--sp',h>0?y/h:0);$('#lh')?.classList.toggle('sc',y>20);$('.hero')?.style.setProperty('--py',y)};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(sc)}},{passive:true});sc();
document.addEventListener('pointermove',e=>{const c=e.target.closest?.('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')},{passive:true});
document.addEventListener('click',e=>{if(e.target.closest('[data-a=theme],[data-a=th]')){de.classList.add('tr');setTimeout(()=>de.classList.remove('tr'),600)}});
})();
