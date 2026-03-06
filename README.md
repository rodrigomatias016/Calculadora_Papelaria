# Calculadora Tícia Artes 🎨

Uma calculadora web robusta desenvolvida para ajudar artesãos de papelaria personalizada a precificarem seus produtos (planners, cadernos, adesivos, kits e muito mais) com base em valores do mercado e custos reais de produção.

## 🚀 Funcionalidades

- **Assistente de Materiais**: Estimativa automática do custo de insumos (papel, encadernação, capa, impressão) baseada em dados reais como compras em fornecedores populares (Fortini Paper, Lavoro Papéis, A.Craft, etc).
- **Cálculo da Mão de Obra**: Precificação precisa que leva em conta o tempo investido para montar o projeto, o valor de sua hora de trabalho e a quantidade de peças (lote).
- **Proteção do Seu Lucro (Markup Reverso)**: Margem de lucro limpa! Se vender por marketplaces como Elo7 ou Mercado Livre (que levam ~15% em taxas), a calculadora faz o cálculo correto para que você aplique sua margem e não perca dinheiro na taxa final.
- **Comparativo de Mercado**: Um componente visual exibe uma barra de fácil visualização em relação aos concorrentes do mesmo nicho de papelaria, te dizendo se seu preço está alinhado, abaixo ou acima do mercado.
- **Gerador de Orçamento via WhatsApp**: Formata automaticamente todos os dados selecionados em uma mensagem vendedora, estilizada com negrito, emojis e os gatilhos certos para você compartilhar diretamente no WhatsApp de seus clientes.

## 💻 Tecnologias Utilizadas

Este projeto foi construído pensando na simplicidade, leveza e facilidade de manutenção sem frameworks pesados:

- **HTML5:** Código refatorado de forma acessível utilizando tags semânticas e labels acopláveis a componentes de *UI*.
- **CSS3 (Vanilla):** Cores declaradas via `:root` CSS variables que compõem o belíssimo "Design System" das Cores da Tícia Artes, com responsividade (Media Queries) e animações (`@keyframes`, transições de UI e medidores dinâmicos de comparação mercadológica).
- **JavaScript (Vanilla):** Lógica matemática complexa modularizada e tratamentos de DOM sem dependências externas. Estrutura de constantes facilitada para alteração dos valores-bases rapidamente no código-fonte.

## ⚙️ Como Utilizar

Basta abrir o arquivo principal [index.html](./index.html) em qualquer navegador web de sua preferência. Não há processo de build ("compilar") ou dependências de pacote (como Node.js). Ele funciona localmente e instantaneamente.

Caso queira hospedar online, o projeto está pronto para ir ao ar (deploy) em plataformas gratuitas como GitHub Pages, Vercel ou Netlify arrastando a pasta do projeto – já que é inteiramente Client-Side.

## 🛠 Configuração (Dev)

Se você desejar atualizar o banco de dados interno de preços dos insumos ou os valores das concorrentes:
1. Abra `/js/script.js` num editor como VS Code.
2. Altere as referências dos preços nas constantes `marketData`, `tbPapel`, `tbCapa`, `tbEnc`, etc. 
3. Salve o arquivo e atualize o navegador para testar sua calculadora recalibrada!

## 📜 Licença

Desenvolvido exclusivamente para a gestão de custos dos produtos de papelaria personalizada da marca **Tícia Artes** (2025).
