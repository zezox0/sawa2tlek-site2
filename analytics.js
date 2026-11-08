/* التحليلات */
Pages.analytics=function(){if(!D.length)return emptyPage('التحليلات والأداء','Analytics & Performance');const t=T(D),z=agg(),r=ranked();
return ph('التحليلات والأداء','Analytics & Performance')+`<div class="grid kpis">${[['CTR','معدل النقر',n1(t.ctr)+'%'],['CPC','تكلفة النقرة',n1(t.cpc)+' ج'],['CPM','تكلفة ألف ظهور',n0(t.cpm)+' ج'],['CPA','تكلفة الإجراء',n0(t.cpa)+' ج'],['Conversion Rate','معدل التحويل',n1(t.cvr)+'%'],['ROAS','العائد على الإنفاق',n1(t.roas)+'×'],['ROI','العائد على الاستثمار',n0(t.roi)+'%']].map(([a,b,c])=>kpi(b,a,c)).join('')}</div>`+
card('مقارنة الحملات',`<div class="chips" id="cc">${D.map(d=>`<button class="chip ${S.cmp.includes(d.id)?'on':''}" data-a="cmp" data-id="${d.id}">${d.n}</button>`).join('')}</div><div id="ct">${cmpTable()}</div>`)+
`<div class="grid two">${card('مقارنة المنصات',tbl(['المنصة','الحملات','المصروف','CPA','ROAS'],plats().map(p=>[p.c,p.n,n0(p.s),n0(p.cpa),n1(p.roas)+'×']))+plats().map(p=>bar(p.c,p.roas/6*100,n1(p.roas)+'×','rev')).join(''))}${card('الأداء عبر الوقت',lineChart(z.s,z.r))}</div>
<div class="grid two">${card('🏆 أفضل الحملات أداءً',r.slice(0,3).map(d=>bar(d.n,M(d).roas/M(r[0]).roas*100,n1(M(d).roas)+'×','rev')).join(''))}${card('📉 أسوأ الحملات أداءً',[...r].reverse().slice(0,3).map(d=>bar(d.n,M(d).roas/M(r[0]).roas*100,n1(M(d).roas)+'×','bad')).join(''))}</div>`};
document.addEventListener('click',e=>{const a=e.target.closest('[data-a=cmp]');if(!a)return;const id=+a.dataset.id;S.cmp=S.cmp.includes(id)?S.cmp.filter(x=>x!==id):S.cmp.length<3?[...S.cmp,id]:S.cmp;
$('#cc').innerHTML=D.map(d=>`<button class="chip ${S.cmp.includes(d.id)?'on':''}" data-a="cmp" data-id="${d.id}">${d.n}</button>`).join('');$('#ct').innerHTML=cmpTable()});
boot('analytics');
