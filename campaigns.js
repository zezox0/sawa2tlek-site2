/* الحملات: كروت / جدول + بحث وفلترة وترتيب */
S.q=new URLSearchParams(location.search).get('q')||'';S.vw=store.get('s2t_vw')||'cards';
Pages.campaigns=function(){if(!D.length)return emptyPage('إدارة الحملات','Campaign Management');const c=s=>D.filter(d=>d.st===s).length;
return ph('إدارة الحملات','Campaign Management','<a class="btn" href="new-campaign.html">+ حملة جديدة</a>')+`<div class="grid kpis">${kpi('كل الحملات','Total',D.length)}${kpi('نشطة','Active',c('نشطة'))}${kpi('متوقفة','Paused',c('متوقفة'))}${kpi('منتهية','Ended',c('منتهية'))}</div>
<div class="tools"><input id="cq" placeholder="بحث بالاسم أو المنتج أو المنصة" value="${S.q}">${sel('fs',['نشطة','متوقفة','منتهية'],S.fs,'كل الحالات')}${sel('fp',CH,S.fp,'كل المنصات')}
<select id="so">${[['new','الأحدث'],['roas','الأعلى ROAS'],['budget','الأعلى ميزانية'],['name','الاسم']].map(([v,l])=>`<option value="${v}" ${S.so===v?'selected':''}>ترتيب: ${l}</option>`).join('')}</select>
<div class="seg"><button data-a="vw" data-v="cards" class="${S.vw==='cards'?'on':''}">▦ كروت</button><button data-a="vw" data-v="table" class="${S.vw==='table'?'on':''}">☰ جدول</button></div></div><div id="ctb">${campList()}</div>`};
document.addEventListener('input',e=>{if(e.target.id==='cq'){S.q=e.target.value;$('#ctb').innerHTML=campList()}});
document.addEventListener('change',e=>{const id=e.target.id;if(id==='fs'||id==='fp'||id==='so'){S[id]=e.target.value;$('#ctb').innerHTML=campList()}});
document.addEventListener('click',e=>{const a=e.target.closest('[data-a=vw]');if(a){S.vw=a.dataset.v;store.set('s2t_vw',S.vw);document.querySelectorAll('[data-a=vw]').forEach(b=>b.classList.toggle('on',b===a));$('#ctb').innerHTML=campList()}});
boot('campaigns');
