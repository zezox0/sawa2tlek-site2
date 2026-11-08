/* تفاصيل الحملة: نظرة عامة • الأداء • التحليل والنصائح • إدارة */
const TABS=[['ov','نظرة عامة','📋'],['pf','الأداء','📈'],['dg','ليه نجحت / فشلت','🧠'],['mg','إدارة الحملة','⚙️']];
S.tab=TABS.some(t=>t[0]===location.hash.slice(1))?location.hash.slice(1):'ov';
const cur=()=>D.find(x=>x.id===S.arg);
const days=d=>{const tot=Math.max(1,Math.round((new Date(d.ed)-new Date(d.sd))/864e5)),el=d.st==='منتهية'?tot:Math.min(tot,Math.max(0,Math.round((Date.now()-new Date(d.sd))/864e5)));return{tot,el,left:Math.max(0,tot-el),p:el/tot*100}};
const tabBody=d=>{const m=M(d),t=days(d);
if(S.tab==='ov')return (d.i?`<div class="grid kpis">${[['الإيراد','Revenue',n0(d.r)+' ج'],['المصروف','Spent',n0(d.s)+' ج'],['ROAS','',n1(m.roas)+'×'],['ROI','',n0(m.roi)+'%'],['CTR','',n1(m.ctr)+'%'],['CPC','',n1(m.cpc)+' ج'],['CPA','',n0(m.cpa)+' ج'],['التحويلات','Conversions',n0(d.v)]].map(k=>kpi(...k)).join('')}</div>`:card('النتائج','<p class="mut">الحملة جديدة ولسه مفيش نتائج مسجّلة. سجّلها من تبويب «إدارة الحملة».</p>'))+
`<div class="grid two">${card('⏱️ الجدول الزمني والصرف',`${bar('الوقت المنقضي',t.p,n0(t.p)+'%','sp')}${bar('الميزانية المستهلكة',m.burn,n0(m.burn)+'%',m.burn>=95?'bad':m.burn>=80?'warn':'rev')}<p class="mut sm">${t.el} يوم من ${t.tot}${d.st==='نشطة'?` • فاضل ${t.left} يوم`:''} • ${m.burn>t.p+20?'الصرف أسرع من الوقت ⚠️':m.burn<t.p-25&&d.st==='نشطة'?'الصرف أبطأ من الوقت':'الصرف متوازن مع الوقت ✓'}</p>`)}
${card('🗂️ بيانات الحملة',`<div class="info">${[['المنتج / العلامة',d.pr],['الهدف',d.ob],['الجمهور',d.au],['القناة',d.c],['البداية',d.sd],['النهاية',d.ed],['الميزانية',n0(d.b)+' ج'],['المتبقي',n0(Math.max(0,d.b-d.s))+' ج']].map(([a,b])=>`<div><small>${a}</small><b>${b}</b></div>`).join('')}</div><p class="mut">${d.ds}</p>`)}</div>`+
card('🔗 حملات تانية على نفس القناة',(D.filter(x=>x.c===d.c&&x.id!==d.id).map(x=>`<div class="li">${lk(x)}<span>${x.s?n1(M(x).roas)+'×':'—'} ${pill(x)}</span></div>`).join(''))||'<p class="mut">دي الحملة الوحيدة على القناة دي.</p>');
if(S.tab==='pf'){if(!d.i)return card('الأداء','<p class="mut">مفيش بيانات أداء لسه.</p>');const z=daily(d);
return `<div class="grid two">${card('قمع التحويل',funnel(d))}${card('استهلاك الميزانية',donut(d))}</div><div class="grid two">${card('الأداء عبر الوقت (تقديري)',lineChart(z.s,z.r))}${card('الحملة مقابل المتوسط',vsAvg(d))}</div>`+
card('📅 تفصيل يومي (تقديري)',tbl(['اليوم','المصروف','الإيراد','ROAS'],z.s.map((s,i)=>[i+1,n0(s)+' ج',n0(z.r[i])+' ج',n1(dv(z.r[i],s))+'×'])))}
if(S.tab==='dg')return diagHTML(d);
return `<div class="grid two">${card('📝 تسجيل / تحديث النتائج',`<form class="f" id="rf2">${[['i','الظهور'],['k','النقرات'],['v','التحويلات'],['s','المصروف (ج)'],['r','الإيراد (ج)']].map(([k,l])=>`<label>${l}<input name="${k}" type="number" min="0" value="${d[k]}" required></label>`).join('')}<div class="full"><button class="btn">حفظ النتائج</button></div></form>`)}
${card('⚙️ حالة الحملة والميزانية',`<form class="f" id="mf"><label>الحالة<select name="st">${['نشطة','متوقفة','منتهية'].map(s=>`<option ${d.st===s?'selected':''}>${s}</option>`).join('')}</select></label><label>الميزانية (ج)<input name="b" type="number" min="1" value="${d.b}" required></label><label class="full">وصف الحملة<textarea name="ds" rows="2">${d.ds}</textarea></label><div class="full"><button class="btn">حفظ التعديلات</button> <button type="button" class="btn g" data-a="del" style="color:var(--bad)">🗑️ حذف الحملة</button></div></form>`)}</div>`};
Pages.detail=function(){const d=cur();if(!d)return ph('الحملة غير موجودة','Not found')+card('مفيش حملة بالرقم ده','<p class="mut">يمكن اتحذفت أو الرابط غلط.</p><a class="btn" href="campaigns.html">← رجوع للحملات</a>');
const dg=diagnose(d);
return `<div class="dh2"><div class="crumb"><a href="campaigns.html">الحملات</a> › ${d.n}</div><h1>${d.n}</h1><div class="chips">${tag(d.st)}<span class="tag">${d.c}</span><span class="tag">${d.ob}</span><span class="pill ${dg.c}">الحكم: ${dg.v}</span></div><p>${d.pr} • ${d.sd} → ${d.ed}</p></div>
<div class="chips tabsr">${TABS.map(([k,l,i])=>`<button class="chip ${S.tab===k?'on':''}" data-a="dtab" data-t="${k}">${i} ${l}</button>`).join('')}</div><div id="tb">${tabBody(d)}</div>`};
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]');if(!a)return;const d=cur();
if(a.dataset.a==='dtab'){S.tab=a.dataset.t;history.replaceState(null,'','#'+S.tab);document.querySelectorAll('[data-a=dtab]').forEach(b=>b.classList.toggle('on',b===a));const tb=$('#tb');tb.innerHTML=tabBody(d);tb.classList.remove('pgin');void tb.offsetWidth;tb.classList.add('pgin')}
else if(a.dataset.a==='del'&&d&&confirm('متأكد إنك عايز تحذف «'+d.n+'»؟')){D=D.filter(x=>x.id!==d.id);save();go('campaigns')}});
document.addEventListener('submit',e=>{const f=e.target,d=cur();if(!d||(f.id!=='rf2'&&f.id!=='mf'))return;e.preventDefault();
if(f.id==='rf2'){const x={};['i','k','v','s','r'].forEach(k=>x[k]=+f[k].value);if(x.k>x.i||x.v>x.k){toast('الأرقام مش منطقية: النقرات ≤ الظهور والتحويلات ≤ النقرات',1);return}Object.assign(d,x);toast('تم تحديث النتائج ✓')}
else{d.st=f.st.value;d.b=+f.b.value;d.ds=f.ds.value||'—';toast('تم حفظ التعديلات ✓')}
save();render()});
boot('detail');
