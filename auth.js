/* تسجيل الدخول / إنشاء حساب */
let mode='in';
function setMode(m){mode=m;const f=$('#af');document.querySelectorAll('.tabs button[data-m]').forEach(x=>x.classList.toggle('on',x.dataset.m===m));
$('#nl').classList.toggle('hide',m==='in');$('#cl').classList.toggle('hide',m==='in');$('#rr').classList.toggle('hide',m==='up');$('#dh').classList.toggle('hide',m==='up');
f.n.required=f.p2.required=m==='up';f.p.autocomplete=m==='up'?'new-password':'current-password';$('#ab').textContent=m==='in'?'Login':'Sign Up';$('#am').textContent='';f.dataset.m=m;
$('#ah').textContent=m==='in'?'أهلًا بيك تاني':'ابدأ حسابك مجانًا';$('#as').textContent=m==='in'?'سجّل دخولك وكمّل شغلك على حملاتك.':'دقيقة واحدة وتبدأ تنظّم حملاتك.'}
document.querySelectorAll('.tabs button[data-m]').forEach(b=>b.onclick=()=>setMode(b.dataset.m));
const f0=$('#af'),rem=store.get('s2t_email');if(rem){f0.e.value=rem;f0.r.checked=true}
$('#fp').onclick=e=>{e.preventDefault();const em=f0.e.value.trim().toLowerCase(),m=$('#am');m.style.color=users()[em]?'var(--ok)':'var(--warn)';m.textContent=!em?'اكتب الإيميل الأول.':users()[em]?'هيوصلك رابط إعادة تعيين كلمة المرور (تجريبي: مفيش إرسال فعلي).':'الإيميل ده مش مسجّل.'};
async function authSubmit(f){const em=f.e.value.trim().toLowerCase(),pw=f.p.value,m=$('#am'),u=users(),err=t=>{m.style.color='var(--bad)';m.textContent=t;return false};
if(mode==='up'){const n=f.n.value.trim();if(!n)return err('اكتب الاسم.');if(pw!==f.p2.value)return err('كلمتا المرور مش متطابقتين.');if(u[em])return err('الإيميل ده مسجّل قبل كده، سجّل دخول.');
u[em]={name:n,h:await hs(em+':'+pw)};saveUsers(u);store.set(dk(em),JSON.stringify({D:[],nid:1}));sess.set(em,false);return true}
if(!u[em])return err('الإيميل ده مش مسجّل. اعمل حساب جديد من Sign Up.');if(u[em].h!==await hs(em+':'+pw))return err('كلمة المرور غلط.');
f.r.checked?store.set('s2t_email',em):store.del('s2t_email');sess.set(em,f.r.checked);return true}
f0.addEventListener('submit',async e=>{e.preventDefault();const b=$('#ab'),t0=Date.now();b.classList.add('ld');b.disabled=true;let ok=false;
try{ok=await authSubmit(f0)}finally{await new Promise(r=>setTimeout(r,Math.max(0,550-(Date.now()-t0))))}
if(ok){location.href='dashboard.html';return}
b.classList.remove('ld');b.disabled=false;f0.classList.remove('shk');void f0.offsetWidth;f0.classList.add('shk')});
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(!a)return;
if(a.dataset.a==='eye'){const i=a.previousElementSibling,sh=i.type==='password';i.type=sh?'text':'password';a.textContent=sh?'🙈':'👁️'}
else if(a.dataset.a==='demo'){f0.e.value='demo@sawa2tlek.com';f0.p.value='demo123';f0.requestSubmit()}});
{const sg=$('#sg'),st=$('#sgt'),cap=$('#cap');
f0.p.addEventListener('input',()=>{const v=f0.p.value;let n=0;if(v.length>=6)n++;if(v.length>=10)n++;if(/[a-z]/.test(v)&&/[A-Z]/.test(v)&&/\d/.test(v))n++;if(/[^\w\s]/.test(v)&&v.length>=8)n++;if(!v)n=0;sg.dataset.s=n;st.textContent=v?'قوة كلمة المرور: '+['ضعيفة','ضعيفة','متوسطة','قوية','ممتازة'][n]:''});
f0.p.addEventListener('keyup',e=>cap.classList.toggle('on',!!(e.getModifierState&&e.getModifierState('CapsLock'))));f0.p.addEventListener('blur',()=>cap.classList.remove('on'))}
ensureDemo().then(()=>{const e=sess.get();if(e&&users()[e]&&location.hash!=='#signup'&&location.hash!=='#login'){location.replace('dashboard.html');return}setMode(location.hash==='#signup'?'up':'in')});
