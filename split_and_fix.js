const fs = require('fs');
const htmlFile = 'index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// 1. Extract and remove CSS
const styleRegex = /<style>([\s\S]*?)<\/style>/;
const styleMatch = html.match(styleRegex);
if (styleMatch) {
    fs.writeFileSync('css/style.css', styleMatch[1].trim());
    html = html.replace(styleRegex, '<link rel="stylesheet" href="css/style.css">');
}

// 2. Extract and remove JS
const scriptRegex = /<script>([\s\S]*?)<\/script>/;
const scriptMatch = html.match(scriptRegex);
let jsContent = '';
if (scriptMatch) {
    jsContent = scriptMatch[1].trim();
    html = html.replace(scriptRegex, '<script src="js/script.js"></script>');
}

// 3. Fix JS Math for taxaPlataforma
// Original: 
// const custoBase=custoMat+maoObra;
// let custoFinal=custoBase;
// if(taxaPlat)custoFinal*=1.15;
// const lucro=custoFinal*margemPct;
// let preco=custoFinal+lucro;

const oldMath = `const custoBase=custoMat+maoObra;
  let custoFinal=custoBase;
  if(taxaPlat)custoFinal*=1.15;
  const lucro=custoFinal*margemPct;
  let preco=custoFinal+lucro;`;
  
const newMath = `const custoBase = custoMat + maoObra;
  let custoFinal = custoBase;
  const lucro = custoFinal * margemPct;
  let preco = custoFinal + lucro;
  if (taxaPlat) {
    // Markup reverso: Preco = (Custo + Lucro) / (1 - 0.15)
    preco = preco / (1 - 0.15);
  }`;
jsContent = jsContent.replace(oldMath, newMath);

// 4. Fix HTML Labels accessibility
// We want to add for="id" to all labels that wrap an input or are previous to an input wrap
// Also refactor function setCard to receive array... actually the user just asked "implementar as melhorias sugeridas".
// Let's replace the common HTML labels.
// Pattern: <label class="config-label">Nº de páginas / folhas</label><div class="config-input-wrap"><input class="config-num" id="pl-folhas" ...
html = html.replace(/<label class="config-label">([^<]+)<\/label>\s*<div class="config-input-wrap">\s*<input class="config-num" id="([^"]+)"/g, '<label class="config-label" for="$2">$1</label><div class="config-input-wrap"><input class="config-num" id="$2"');
html = html.replace(/<label class="config-label">([^<]+)<\/label>\s*<select class="config-select" id="([^"]+)"/g, '<label class="config-label" for="$2">$1</label><select class="config-select" id="$2"');

fs.writeFileSync('js/script.js', jsContent);
fs.writeFileSync(htmlFile, html);
console.log('Done!');
