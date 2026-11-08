/* الصفحة الرئيسية */
function counters(){document.querySelectorAll('[data-count]').forEach(el=>{const to=el.dataset.count==='live'?allCount():+el.dataset.count;let t0;const f=ts=>{t0=t0||ts;const p=Math.min(1,(ts-t0)/1200);el.textContent=n0(to*p);if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);setTimeout(()=>el.textContent=n0(to),1500)})}
const LS=['about','problem','scope','features','pricing','faq','contact'];
function spyL(){let c='about';LS.forEach(k=>{const el=$('#l-'+k);if(el&&el.getBoundingClientRect().top<=140)c=k});if(innerHeight+scrollY>=document.body.scrollHeight-4)c='contact';document.querySelectorAll('#ln button').forEach(b=>b.classList.toggle('on',b.dataset.sc===c))}
addEventListener('scroll',spyL,{passive:true});
document.addEventListener('click',e=>{const s=e.target.closest('[data-sc]');if(s){e.preventDefault();$('#l-'+s.dataset.sc)?.scrollIntoView({behavior:'smooth'})}});
document.addEventListener('submit',e=>{const f=e.target;if(f.id==='lc'){e.preventDefault();$('#lm').textContent='شكرًا '+f.n.value+'، وصلت رسالتك وهنرد عليك قريبًا.';f.reset()}});
ensureDemo().then(()=>{const e=sess.get();$('#lres').classList.toggle('hide',!(e&&users()[e]));counters();spyL()});
