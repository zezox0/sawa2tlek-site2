/* الجمهور */
Pages.audience=function(){const by=SEG.map(g=>{const a=D.filter(d=>d.au===g);return{seg:g,n:a.length,...T(a)}});
return ph('إدارة الجمهور','Audience Management',`<button class="btn" data-go="new">+ حملة لجمهور جديد</button>`)+`<div class="grid kpis">${SEG.map(s=>kpi(s,'Segment',D.filter(d=>d.au===s).length+' حملات')).join('')}</div>
<div class="grid three">${[['الفئات العمرية','Age Groups',AUD],['المواقع','Locations',LOC],['الاهتمامات','Interests',INT]].map(([a,b,x])=>card(`${a} <i>${b}</i>`,x.map(([l,p])=>bar(l,p*2.2,p+'%')).join(''))).join('')}</div>`+
card('أداء شرائح العملاء <i>Audience Performance</i>',tbl(['الشريحة','الحملات','المصروف','التحويلات','CPA','الإيراد','ROAS'],by.map(x=>[x.seg,x.n,n0(x.s),n0(x.v),x.v?n0(x.cpa):'—',n0(x.r),x.s?n1(x.roas)+'×':'—'])))+'<p class="mut sm">الفئات العمرية والمواقع والاهتمامات أرقام تجريبية (نسبة من التحويلات).</p>'};
boot('audience');
