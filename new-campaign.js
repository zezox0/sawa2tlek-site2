/* حملة جديدة */
Pages.new=function(){return ph('حملة جديدة','Create New Campaign',`<button class="btn g" data-go="campaigns">← رجوع</button>`)+`<form class="card f" id="nf">
<label>اسم الحملة<input name="n" required></label><label>المنتج / العلامة التجارية<input name="pr" required></label>
<label>هدف الحملة<select name="ob">${OBJ.map(o=>`<option>${o}</option>`).join('')}</select></label><label>الجمهور المستهدف<select name="au">${SEG.map(o=>`<option>${o}</option>`).join('')}</select></label>
<label>قناة التسويق<select name="c">${CH.map(o=>`<option>${o}</option>`).join('')}</select></label><label>ميزانية الحملة (ج)<input name="b" type="number" min="1" required></label>
<label>تاريخ البداية<input name="sd" type="date" required></label><label>تاريخ النهاية<input name="ed" type="date" required></label>
<label class="full">وصف الحملة<textarea name="ds" rows="3"></textarea></label><div class="full"><button class="btn">حفظ الحملة</button> <span id="nm" class="mut"></span></div></form>`};
document.addEventListener('submit',e=>{const f=e.target;if(f.id!=='nf')return;e.preventDefault();
if(f.ed.value<f.sd.value){$('#nm').textContent='تاريخ النهاية لازم يكون بعد البداية.';return}
const id=nid++;D.push({id,n:f.n.value,pr:f.pr.value,ob:f.ob.value,au:f.au.value,c:f.c.value,b:+f.b.value,s:0,i:0,k:0,v:0,r:0,st:'نشطة',sd:f.sd.value,ed:f.ed.value,ds:f.ds.value||'—'});save();toast('تم حفظ الحملة ✓');setTimeout(()=>go('detail',id),400)});
boot('new');
