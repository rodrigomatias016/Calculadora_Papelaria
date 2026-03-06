const marketData = {
  planner: [{ source: 'Lado B Papelaria', name: 'Planner personalizado A5', min: 127, max: 180 }, { source: 'Elo7 artesanal', name: 'Planner semestral encadernado', min: 85, max: 150 }, { source: 'Bromelia', name: 'Agenda/Planner datado', min: 70, max: 130 }],
  caderno: [{ source: 'Elo7 artesanal', name: 'Caderno personalizado A5', min: 45, max: 90 }, { source: 'Lado B Papelaria', name: 'Caderno encadernado wire-o', min: 75, max: 138 }, { source: 'A.Craft', name: 'Mini caderno planner', min: 35, max: 65 }],
  adesivos: [{ source: 'Imagicriar', name: 'Folha de adesivos planner', min: 9, max: 15 }, { source: 'Lado B Papelaria', name: 'Kit 4 cartelas adesivos', min: 40, max: 86 }, { source: 'Elo7', name: 'Cartela adesivos artesanal', min: 12, max: 25 }],
  kit: [{ source: 'Elo7 artesanal', name: 'Kit papelaria presente', min: 95, max: 200 }, { source: 'Dotti Papelaria', name: 'Box surpresa papelaria', min: 60, max: 140 }, { source: 'Elo7', name: 'Kit papelaria escolar criativo', min: 80, max: 160 }],
  washi: [{ source: 'A.Craft', name: 'Washi tape decorativo (un)', min: 9, max: 22 }, { source: 'Elo7', name: 'Kit washi tape 5 rolos', min: 35, max: 60 }, { source: 'Erva Doce Scrap', name: 'Kit washi+PET tape florais', min: 28, max: 55 }],
  carimbo: [{ source: 'Elo7 artesanal', name: 'Carimbo decorativo', min: 28, max: 65 }, { source: 'Papelaria Criativa', name: 'Carimbo personalizado', min: 35, max: 80 }, { source: 'Elo7', name: 'Kit carimbos temáticos', min: 45, max: 95 }],
  bloco: [{ source: 'Elo7 artesanal', name: 'Bloquinho A6 artesanal', min: 22, max: 45 }, { source: 'A.Craft', name: 'Bloco autoadesivo decorado', min: 15, max: 30 }, { source: 'Elo7', name: 'Bloco de notas temático', min: 18, max: 40 }],
  outro: [{ source: 'Elo7 artesanal', name: 'Produto artesanal médio', min: 25, max: 100 }, { source: 'Grandes papelarias', name: 'Referência mercado geral', min: 15, max: 80 }, { source: 'Papelaria criativa', name: 'Item exclusivo/personalizado', min: 40, max: 150 }]
};

const tbPapel = {
  offset75: { pf: 0.019, nome: 'Offset 75g', fonte: 'Fortini Paper / Marpax' },
  offset90: { pf: 0.028, nome: 'Offset 90g', fonte: 'Fortini Paper (500fl≈R$12,90)' },
  Polen90: { pf: 0.042, nome: 'Pólen 90g', fonte: 'Lavoro Papéis / Marpax' },
  polen90: { pf: 0.042, nome: 'Pólen 90g', fonte: 'Lavoro Papéis / Marpax' },
  offset120: { pf: 0.052, nome: 'Offset 120g', fonte: 'Supperpapel / Carbopel' }
};
const tbMultTam = { a4: 2.0, a5: 1.0, a6: 0.5, pequeno: 0.25 };
const tbCapa = {
  papelao_laminado: { base: 4.80, nome: 'Papelão 2mm + laminação BOPP fosca', fonte: 'Lavoro Papéis + gráfica' },
  papelao_simples: { base: 2.20, nome: 'Papelão paraná + impressão', fonte: 'Lavoro Papéis / Carbopel' },
  capa_kraft: { base: 1.60, nome: 'Kraft artesanal', fonte: 'Papelaria / Mercado Livre' },
  tecido: { base: 6.50, nome: 'Tecido/EVA + acabamento manual', fonte: 'Estimativa artesanal' },
  papel_grosso: { base: 0.80, nome: 'Papel 240g impresso', fonte: 'Gráfica local' },
  sem: { base: 0.00, nome: 'Sem capa rígida', fonte: '—' }
};
const tbEnc = {
  wireo: { base: 1.00, nome: 'Wire-o A5 (2×1)', fonte: 'JMC Shop (36un≈R$36)' },
  espiral: { base: 0.60, nome: 'Espiral plástico A5', fonte: 'Mercado Livre' },
  costura: { base: 0.30, nome: 'Materiais p/ costura', fonte: 'Estimativa artesanal' },
  coladacanoa: { base: 0.40, nome: 'Cola + acabamento canoa', fonte: 'Estimativa artesanal' },
  cola: { base: 0.35, nome: 'Colagem na cabeça (blocagem)', fonte: 'Estimativa artesanal' },
  grampo: { base: 0.10, nome: 'Grampo', fonte: 'Estimativa artesanal' }
};
const tbImp = {
  sem: { pf: 0, det: 'Sem impressão', fonte: '—' },
  pb: { pf: 0.28, det: 'P&B frente/verso em gráfica', fonte: 'DeliveryPrint / Copy Laser' },
  colorido: { pf: 0.90, det: 'Colorido frente em gráfica', fonte: 'Gráfica local / online' },
  propria: { pf: 0.18, det: 'Inkjet/laser doméstico', fonte: 'Custo tinta estimado' },
  grafica: { pf: 0.90, det: 'Impressão digital em gráfica', fonte: 'Gráfica local' },
  plotagem: { pf: 1.20, det: 'Plotagem + corte em gráfica', fonte: 'Plotter gráfica' }
};
const tbAdesivo = {
  adesivo_brilho: { pf: 0.55, nome: 'Adesivo brilho inkjet A5', fonte: 'Mercado Livre / Lavoro Papéis' },
  adesivo_fosco: { pf: 0.60, nome: 'Adesivo fosco inkjet A5', fonte: 'Mercado Livre / Lavoro Papéis' },
  adesivo_transparente: { pf: 0.75, nome: 'Adesivo transparente A5', fonte: 'Mercado Livre' },
  adesivo_premium: { pf: 1.40, nome: 'Adesivo holográfico A5', fonte: 'Lavoro Papéis / atacado' }
};
const tbAcabAd = {
  tesoura: { base: 0, nome: 'Tesoura/guilhotina manual', fonte: 'Sem custo adicional' },
  silhouette: { base: 0.80, nome: 'Plotter de corte (amortizado)', fonte: 'Estimativa amortização' },
  grafica_corte: { base: 0.50, nome: 'Corte incluso na gráfica', fonte: 'Gráfica local' }
};
const tbEmbAd = {
  envelope: { base: 0.80, nome: 'Envelope kraft + saquinho plástico', fonte: 'Armarinho Santa Cecília' },
  plastico: { base: 0.25, nome: 'Saquinho plástico', fonte: 'Embalagens atacado' },
  sem: { base: 0, nome: 'Sem embalagem extra', fonte: '—' }
};
const tbKitEmb = {
  caixa_kraft: { base: 5.50, nome: 'Caixa kraft artesanal', fonte: 'Recopel / Embalagens atacado' },
  caixa_presente: { base: 9.00, nome: 'Caixa presente rígida', fonte: 'Recopel / Santa Cecília' },
  sacola_kraft: { base: 4.00, nome: 'Sacola kraft + papel seda', fonte: 'Embalagens atacado SP' },
  cesto: { base: 12.00, nome: 'Cestinha / bandeja decorada', fonte: 'Mercado Livre / artesanato' }
};
const tbKitItens = {
  papelaria: { p: 18, m: 40, g: 80, nome: 'Caderno + caneta + adesivos', fonte: 'Preços atacado SP' },
  washi: { p: 12, m: 30, g: 65, nome: 'Washi tapes + adesivos + marcadores', fonte: 'Papelândia Atacado' },
  escolar: { p: 10, m: 22, g: 50, nome: 'Bloco + lápis + borracha + régua', fonte: 'Papelaria atacado' },
  planner: { p: 25, m: 55, g: 100, nome: 'Planner + acessórios + adesivos', fonte: 'Estimativa artesanal' }
};
const tbKitDeco = {
  laco_tag: { base: 2.50, nome: 'Laço cetim + tag impressa', fonte: 'Santa Cecília / Armarinho' },
  papel_seda: { base: 1.80, nome: 'Papel seda + fita cetim', fonte: 'Embalagens atacado' },
  minimo: { base: 0.50, nome: 'Minimalista (tag simples)', fonte: 'Estimativa artesanal' }
};
const tbWashi = {
  simples: { '10mm': 1.50, '15mm': 2.20, '25mm': 3.80, fonte: 'Papelândia Atacado / Star Papelaria' },
  premium: { '10mm': 3.00, '15mm': 4.50, '25mm': 7.00, fonte: 'A.Craft / Erva Doce Scrap' },
  pet: { '10mm': 2.50, '15mm': 3.80, '25mm': 6.00, fonte: 'A.Craft / Mercado Livre' },
  custom: { '10mm': 1.00, '15mm': 1.50, '25mm': 2.50, fonte: 'Rolo virgem p/ impressão' }
};
const tbWashiEmb = {
  saquinho: { base: 0.50, nome: 'Saquinho + tag personalizada', fonte: 'Embalagens atacado' },
  caixa: { base: 2.50, nome: 'Caixinha decorada', fonte: 'Santa Cecília / armarinho' },
  sem: { base: 0, nome: 'Sem embalagem extra', fonte: '—' }
};
const tbCbMat = {
  polimero: { p: 3.50, m: 6.00, g: 10.00, nome: 'Polímero de alta qualidade', fonte: 'Criattiva / Mercado Livre' },
  borracha: { p: 2.50, m: 4.50, g: 8.00, nome: 'Borracha artesanal', fonte: 'Mercado Livre / artesanato' },
  eva: { p: 0.50, m: 1.00, g: 1.80, nome: 'EVA (econômico)', fonte: 'Papelaria local' }
};
const tbCbCabo = {
  madeira: { base: 2.50, nome: 'Cabo de madeira', fonte: 'Criattiva / Mercado Livre' },
  acrilico: { base: 3.50, nome: 'Base acrílico transparente', fonte: 'Mercado Livre' },
  sem: { base: 0.00, nome: 'Sem cabo', fonte: '—' }
};
const tbCbTinta = {
  sim: { base: 4.00, nome: 'Almofada de tinta inclusa', fonte: 'Mercado Livre' },
  nao: { base: 0.00, nome: 'Sem almofada', fonte: '—' }
};
const tbCbGrav = {
  terceirizado: { p: 8, m: 14, g: 22, nome: 'Gravação laser terceirizada', fonte: 'Gráficas locais / Cricut' },
  manual: { p: 0, m: 0, g: 0, nome: 'Entalhe manual (custo mínimo)', fonte: 'Sem custo adicional' },
  propria: { p: 2, m: 3.5, g: 5, nome: 'Máquina própria (amortizado)', fonte: 'Estimativa amortização' }
};
const tbCbEmb = {
  caixinha: { base: 2.50, nome: 'Caixinha + papel seda', fonte: 'Santa Cecília / embalagens' },
  saquinho: { base: 0.80, nome: 'Saquinho + tag', fonte: 'Embalagens atacado' },
  sem: { base: 0, nome: 'Sem embalagem extra', fonte: '—' }
};
const tbOutroCat = {
  papelaria: { p: 2, m: 6, g: 15, nome: 'Papelaria geral', fonte: 'Estimativa artesanal' },
  marcapagina: { p: 0.50, m: 1.20, g: 3, nome: 'Marca-página / tag', fonte: 'Estimativa artesanal' },
  envelope: { p: 0.80, m: 2.00, g: 5, nome: 'Envelope / cartão', fonte: 'Estimativa artesanal' },
  organizador: { p: 5, m: 12, g: 30, nome: 'Organizador / fichário', fonte: 'Estimativa artesanal' }
};
const tbOutroEmb = {
  saquinho: { base: 0.25, nome: 'Saquinho plástico', fonte: 'Embalagens atacado' },
  envelope_kraft: { base: 0.80, nome: 'Envelope kraft', fonte: 'Armarinho' },
  caixa: { base: 3.50, nome: 'Caixinha', fonte: 'Embalagens atacado' },
  sem: { base: 0, nome: 'Sem embalagem', fonte: '—' }
};

// Prefixos dos cards por produto
const prodPrefix = { planner: 'pl', caderno: 'ca', adesivos: 'ad', kit: 'ki', washi: 'wa', carimbo: 'cb', bloco: 'bl', outro: 'ou' };

// Mapeamento de valores para campos do formulário
const applyMap = {
  planner: { mat: 'v1+v2', emb: null, imp: 'v3' },
  caderno: { mat: 'v1+v2', emb: null, imp: 'v3' },
  adesivos: { mat: 'v1', emb: 'v3', imp: 'v2' },
  kit: { mat: 'v2', emb: 'v1', imp: 'v3' },
  washi: { mat: 'v1', emb: 'v2', imp: 'v3' },
  carimbo: { mat: 'v1', emb: 'v3', imp: 'v2' },
  bloco: { mat: 'v1+v2', emb: null, imp: 'v3' },
  outro: { mat: 'v1', emb: 'v2', imp: 'v3' }
};

let currentProduct = 'planner';

function fmtR(n) { return n < 0.005 ? 'R$ 0,00' : 'R$ ' + n.toFixed(2).replace('.', ',') }
function fmt(n) { return 'R$ ' + n.toFixed(2).replace('.', ',') }

function setCard(pre, v1, d1, s1, v2, d2, s2, v3, d3, s3) {
  document.getElementById(pre + '-v1').textContent = fmtR(v1);
  document.getElementById(pre + '-d1').textContent = d1;
  document.getElementById(pre + '-s1').textContent = s1;
  document.getElementById(pre + '-v2').textContent = fmtR(v2);
  document.getElementById(pre + '-d2').textContent = d2;
  document.getElementById(pre + '-s2').textContent = s2;
  document.getElementById(pre + '-v3').textContent = v3 !== null ? fmtR(v3) : '—';
  document.getElementById(pre + '-d3').textContent = d3 || '—';
  document.getElementById(pre + '-s3').textContent = s3 || '—';
}

function g(id) { return document.getElementById(id) }
function gv(id) { return g(id) ? g(id).value : '' }

function estimar(prod) {
  if (prod === 'planner') {
    const f = Math.max(10, parseInt(gv('pl-folhas')) || 100);
    const m = tbMultTam[gv('pl-tam')] || 1;
    const p = tbPapel[gv('pl-papel')];
    const c = tbCapa[gv('pl-capa')];
    const e = tbEnc[gv('pl-enc')];
    const i = tbImp[gv('pl-imp')];
    setCard('pl', p.pf * f * m, f + ' folhas × R$' + (p.pf * m).toFixed(3) + '/fl', p.fonte,
      (c.base + e.base) * m, c.nome + ' + ' + e.nome, c.fonte + ' · ' + e.fonte,
      i.pf * f * m, i.det, i.fonte);
  }
  if (prod === 'caderno') {
    const f = Math.max(10, parseInt(gv('ca-folhas')) || 80);
    const m = tbMultTam[gv('ca-tam')] || 1;
    const p = tbPapel[gv('ca-papel')];
    const c = tbCapa[gv('ca-capa')];
    const e = tbEnc[gv('ca-enc')];
    const i = tbImp[gv('ca-imp')];
    setCard('ca', p.pf * f * m, f + ' folhas × R$' + (p.pf * m).toFixed(3) + '/fl', p.fonte,
      (c.base + e.base) * m, c.nome + ' + ' + e.nome, c.fonte + ' · ' + e.fonte,
      i.pf * f * m, i.det, i.fonte);
  }
  if (prod === 'adesivos') {
    const f = Math.max(1, parseInt(gv('ad-folhas')) || 10);
    const m = tbMultTam[gv('ad-tam')] || 1;
    const p = tbAdesivo[gv('ad-papel')];
    const i = tbImp[gv('ad-imp')] || tbImp['propria'];
    const ac = tbAcabAd[gv('ad-acab')];
    const em = tbEmbAd[gv('ad-emb')];
    setCard('ad', p.pf * f * m, f + ' folhas × R$' + (p.pf * m).toFixed(2) + '/fl', p.fonte,
      (i.pf * f * m) + (ac.base * f), 'Impressão: ' + i.det + ' + ' + ac.nome, i.fonte + ' · ' + ac.fonte,
      em.base * f, em.nome + ' × ' + f + 'un', em.fonte);
  }
  if (prod === 'kit') {
    const tam = gv('ki-tam');
    const em = tbKitEmb[gv('ki-emb')];
    const it = tbKitItens[gv('ki-itens')];
    const de = tbKitDeco[gv('ki-deco')];
    setCard('ki', em.base, em.nome, em.fonte,
      it[tam], 'Kit ' + (tam === 'p' ? 'pequeno' : tam === 'm' ? 'médio' : 'grande') + ': ' + it.nome, it.fonte,
      de.base, de.nome, de.fonte);
  }
  if (prod === 'washi') {
    const r = Math.max(1, parseInt(gv('wa-rolos')) || 1);
    const tipo = gv('wa-tipo');
    const larg = gv('wa-larg');
    const tw = tbWashi[tipo];
    const cr = tw[larg] || tw['15mm'];
    const em = tbWashiEmb[gv('wa-emb')];
    const v3 = tipo === 'custom' ? r * 2.50 : 0;
    setCard('wa', cr * r, r + ' rolo(s) × R$' + cr.toFixed(2) + ' (' + larg + ' - ' + tipo + ')', tw.fonte,
      em.base, em.nome, em.fonte,
      v3, tipo === 'custom' ? 'Impressão customizada estimada' : 'Sem impressão adicional', tipo === 'custom' ? 'Estimativa artesanal' : '—');
  }
  if (prod === 'carimbo') {
    const tam = gv('cb-tam');
    const mat = tbCbMat[gv('cb-mat')];
    const cabo = tbCbCabo[gv('cb-cabo')];
    const tinta = tbCbTinta[gv('cb-tinta')];
    const grav = tbCbGrav[gv('cb-grav')];
    const em = tbCbEmb[gv('cb-emb')];
    setCard('cb', mat[tam] + cabo.base + tinta.base, mat.nome + ' + ' + cabo.nome + (tinta.base > 0 ? ' + almofada' : ''), mat.fonte + ' · ' + cabo.fonte,
      grav[tam], grav.nome, grav.fonte,
      em.base, em.nome, em.fonte);
  }
  if (prod === 'bloco') {
    const f = Math.max(10, parseInt(gv('bl-folhas')) || 50);
    const m = tbMultTam[gv('bl-tam')] || 0.5;
    const p = tbPapel[gv('bl-papel')] || tbPapel['offset90'];
    const e = tbEnc[gv('bl-enc')];
    const c = tbCapa[gv('bl-capa')];
    const i = tbImp[gv('bl-imp')];
    setCard('bl', p.pf * f * m, f + ' folhas × R$' + (p.pf * m).toFixed(3) + '/fl', p.fonte,
      (c.base + e.base) * m, c.nome + ' + ' + e.nome, c.fonte + ' · ' + e.fonte,
      i.pf * f * m, i.det, i.fonte);
  }
  if (prod === 'outro') {
    const cat = tbOutroCat[gv('ou-cat')];
    const porte = gv('ou-porte');
    const em = tbOutroEmb[gv('ou-emb')];
    const i = tbImp[gv('ou-imp')];
    const v1 = cat[porte === 'pequeno' ? 'p' : porte === 'medio' ? 'm' : 'g'];
    setCard('ou', v1, cat.nome + ' — porte ' + porte, cat.fonte,
      em.base, em.nome, em.fonte,
      i.pf * 2, i.det || 'Estimativa genérica', i.fonte || '—');
  }
}

function parseEstCard(pre, n) {
  const el = g(pre + '-v' + n);
  if (!el) return 0;
  return parseFloat(el.textContent.replace('R$ ', '').replace(',', '.')) || 0;
}

function getValues(prod) {
  const pre = prodPrefix[prod];
  return { v1: parseEstCard(pre, 1), v2: parseEstCard(pre, 2), v3: parseEstCard(pre, 3) };
}

function calcMapVal(src, v1, v2, v3) {
  if (!src) return 0;
  if (src === 'v1+v2') return v1 + v2;
  if (src === 'v1') return v1;
  if (src === 'v2') return v2;
  if (src === 'v3') return v3;
  return 0;
}

function aplicar(prod, modo) {
  estimar(prod);
  const { v1, v2, v3 } = getValues(prod);
  const map = applyMap[prod];
  const mat = calcMapVal(map.mat, v1, v2, v3);
  const emb = calcMapVal(map.emb, v1, v2, v3);
  const imp = calcMapVal(map.imp, v1, v2, v3);

  g('materiais').value = mat > 0 ? mat.toFixed(2) : '';
  if (modo === 'all') {
    g('embalagem').value = emb > 0 ? emb.toFixed(2) : '';
    g('impressao').value = imp > 0 ? imp.toFixed(2) : '';
  }
  flash('w-mat');
  if (modo === 'all') { if (emb > 0) flash('w-emb'); if (imp > 0) flash('w-imp'); }
  recalc();
  document.querySelector('.calc-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function flash(id) {
  const el = g(id); if (!el) return;
  el.classList.add('highlight');
  setTimeout(() => el.classList.remove('highlight'), 2000);
}

function selectProduct(btn, type) {
  document.querySelectorAll('.product-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentProduct = type;
  document.querySelectorAll('.mat-painel').forEach(p => p.classList.remove('show'));
  const painel = g('painel-' + type);
  if (painel) { painel.classList.add('show'); estimar(type); setTimeout(() => painel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); }
  recalc();
}

function updateRange(el, valId, suffix) {
  const pct = ((el.value - el.min) / (el.max - el.min)) * 100;
  el.style.setProperty('--pct', pct + '%');
  g(valId).textContent = el.value + suffix;
}

function recalc() {
  if (g('resultCard').classList.contains('show')) calcular(true);
}

function calcular(silent = false) {
  const mat = parseFloat(gv('materiais')) || 0;
  const emb = parseFloat(gv('embalagem')) || 0;
  const imp = parseFloat(gv('impressao')) || 0;
  const horas = parseFloat(gv('horas')) || 0;
  const valorHora = parseFloat(gv('valorHora')) || 25;
  const qtd = Math.max(1, parseInt(gv('quantidade')) || 1);
  const margemPct = parseFloat(gv('margem')) / 100;
  const taxaPlat = g('taxaPlataforma').checked;
  const custom = g('personalizado').checked;
  const freteInc = g('freteIncluso').checked;

  const custoMat = (mat + emb + imp) / qtd;
  const maoObra = (horas * valorHora) / qtd;
  const custoBase = custoMat + maoObra;
  let custoFinal = custoBase;
  const lucro = custoFinal * margemPct;
  let preco = custoFinal + lucro;
  if (taxaPlat) {
    preco = preco / (1 - 0.15); // Markup reverso
  }
  if (custom) preco *= 1.20;
  if (freteInc) preco += 18;
  const precoMin = custoFinal * 1.2 + (freteInc ? 18 : 0);
  const precoMax = preco * 1.35;
  const margemReal = ((preco - custoFinal) / preco * 100);
  const refs = marketData[currentProduct];

  g('priceMin').textContent = fmt(precoMin);
  g('priceMax').textContent = fmt(precoMax);
  g('priceIdeal').textContent = '✦ Ideal: ' + fmt(preco);
  g('bCusto').textContent = fmt(custoMat);
  g('bMaoObra').textContent = fmt(maoObra);
  g('bLucro').textContent = fmt(lucro);
  g('bMargem').textContent = margemReal.toFixed(0) + '%';
  g('bMin').textContent = fmt(precoMin);
  g('bSug').textContent = fmt(preco);

  const alertEl = g('alertBox');
  if (custoBase < 0.01 && !silent) { alertEl.style.display = 'block'; alertEl.textContent = '⚠️ Preencha os campos de custo para uma estimativa precisa.'; }
  else if (preco < refs[0].min * 0.5) { alertEl.style.display = 'block'; alertEl.textContent = '⚠️ Seu preço está bem abaixo do mercado. Confira se os custos estão completos.'; }
  else if (preco > refs[0].max * 2) { alertEl.style.display = 'block'; alertEl.textContent = '💡 Preço acima da média do mercado. Destaque bem o diferencial do seu produto.'; }
  else { alertEl.style.display = 'none'; }

  const allMax = Math.max(...refs.map(r => r.max), precoMax);
  let rows = `<div class="compare-row"><div class="compare-row-top"><div class="compare-source"><strong>Seu produto</strong><span>Preço calculado</span></div><div class="compare-right"><div class="compare-price">${fmt(preco)}</div><div class="compare-tag tag-match">Seu ✦</div></div></div><div class="compare-bar"><div class="compare-bar-fill" style="width:${Math.min(100, preco / allMax * 100)}%;background:linear-gradient(to right,#e8a4b8,#d4789a)"></div></div></div>`;
  refs.forEach(ref => {
    const mid = (ref.min + ref.max) / 2;
    let tag, cls;
    if (preco < ref.min * 0.85) { tag = 'Abaixo'; cls = 'tag-below'; }
    else if (preco > ref.max * 1.15) { tag = 'Acima'; cls = 'tag-above'; }
    else { tag = 'Alinhado'; cls = 'tag-match'; }
    rows += `<div class="compare-row"><div class="compare-row-top"><div class="compare-source"><strong>${ref.source}</strong><span>${ref.name}</span></div><div class="compare-right"><div class="compare-price">${fmt(ref.min)}–${fmt(ref.max)}</div><div class="compare-tag ${cls}">${tag}</div></div></div><div class="compare-bar"><div class="compare-bar-fill" style="width:${Math.min(100, mid / allMax * 100)}%"></div></div></div>`;
  });
  g('compareRows').innerHTML = rows;
  g('resultCard').classList.add('show');
  g('marketCompare').classList.add('show');
  if (!silent) setTimeout(() => g('resultCard').scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
}

function limpar() {
  ['materiais', 'embalagem', 'impressao', 'horas', 'valorHora'].forEach(id => g(id).value = '');
  g('quantidade').value = 1;
  g('margem').value = 100;
  g('margem').style.setProperty('--pct', '50%');
  g('margemVal').textContent = '100%';
  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  g('resultCard').classList.remove('show');
  g('marketCompare').classList.remove('show');
  g('alertBox').style.display = 'none';
}


function enviarWhatsApp() {
  const nomeProd = g('waNomeProduto').value.trim() || 'Produto artesanal';
  const precoSug = g('bSug').textContent;
  const qtd = parseInt(gv('quantidade')) || 1;

  const prodNomes = { planner: 'Planner / Agenda', caderno: 'Caderno / Diário', adesivos: 'Folha de Adesivos', kit: 'Kit / Presente', washi: 'Washi Tape', carimbo: 'Carimbo / Stamp', bloco: 'Bloco de Notas', outro: 'Produto Artesanal' };
  const catNome = prodNomes[currentProduct] || 'Papelaria';

  // Coletar detalhes dos itens do painel ativo (labels e detalhes, SEM preços)
  const pre = prodPrefix[currentProduct];
  const itens = [];
  for (let n = 1; n <= 3; n++) {
    const label = g(pre + '-v' + n) ? g(pre + '-v' + n).closest('.est-card').querySelector('.est-card-label') : null;
    const detalhe = g(pre + '-d' + n);
    if (label && detalhe && detalhe.textContent && detalhe.textContent !== '—') {
      itens.push('• ' + label.textContent.trim() + ': ' + detalhe.textContent.trim());
    }
  }

  const frases = [
    'Cada peça é pensada e produzida com cuidado, do início ao fim — do design à embalagem.',
    'Arte que conta a sua história. Feito à mão, personalizado para você.',
    'Não é só papelaria. É um produto exclusivo criado especialmente para quem valoriza o que é único.',
    'Cada detalhe importa: arte autoral, materiais selecionados e acabamento impecável.',
  ];
  const frase = frases[Math.floor(Math.random() * frases.length)];

  const msg =
    `🌸 *${nomeProd}* 🌸
_por Tícia Artes_

✦ _${frase}_

━━━━━━━━━━━━━━━
💎 *PRODUTO EXCLUSIVO & PERSONALIZADO*
Categoria: ${catNome}
Quantidade: ${qtd} peça${qtd > 1 ? 's' : ''}
━━━━━━━━━━━━━━━

🎨 *O que compõe este produto:*
${itens.join('\n')}

━━━━━━━━━━━━━━━
💰 *Valor: ${precoSug}*
━━━━━━━━━━━━━━━

✅ Arte desenvolvida exclusivamente
✅ Produção artesanal e customizada
✅ Materiais cuidadosamente selecionados
✅ Cada peça única, feita com amor 🤍

_Tícia Artes · Papelaria criativa e personalizada_`;

  const url = 'https://wa.me/?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
}

// INIT
g('margem').style.setProperty('--pct', '50%');
estimar('planner');
