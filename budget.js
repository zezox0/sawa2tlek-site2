/* الميزانية */
Pages.budget=function(){if(!D.length)return emptyPage('إدارة الميزانية','Budget Management');const t=T(D),al=alerts();
return ph('إدارة الميزانية','Budget Management')+`<div class="grid kpis">${kpi('إجمالي الميزانية','Total Budget',n0(t.b)+' ج')}${kpi('الميزانية المستهلكة','Spent',n0(t.s)+' ج',n0(dv(t.s,t.b)*100)+'%')}${kpi('الميزانية المتبقية','Remaining',n0(t.b-t.s)+' ج')}</div>`+
card('تنبيهات الميزانية',al.length?al.map(a=>`<div class="ins ${a.lvl}">${a.lvl==='bad'?'🚨':'⚠️'} ${a.t}</div>`).join(''):'<p class="mut">مفيش حملات قريبة من تجاوز ميزانيتها.</p>')+
`<div class="grid two">${card('الميزانية مقابل الإنفاق الفعلي',D.map(d=>bar(d.n,100,n0(d.b),'sp')+bar('الفعلي',dv(d.s,d.b)*100,n0(d.s),'rev')).join('')+'<div class="lg"><span><i style="background:var(--sky)"></i>الميزانية</span><span><i style="background:var(--ink)"></i>المصروف</span></div>')}${card('الإنفاق لكل حملة',tbl(['الحملة','المصروف','المتبقي','الاستهلاك'],D.map(d=>[lk(d),n0(d.s),n0(Math.max(0,d.b-d.s)),`<span class="${M(d).burn>=95?'low':M(d).burn>=80?'mid':''}">${n0(M(d).burn)}%</span>`])))}</div>`};
boot('budget');
