# FamilyNet — Landing Page

React + Vite + Tailwind CSS + Framer Motion + Lucide.

## Rodar no seu computador
1. Instale o **Node.js 18+ (LTS)**: https://nodejs.org
2. Instale o **VS Code**: https://code.visualstudio.com
3. Descompacte a pasta `familynet`, abra o VS Code → **Arquivo > Abrir Pasta** → escolha `familynet`.
4. Abra o terminal do VS Code (**Terminal > Novo Terminal**) e rode:
```
npm install
npm run dev
```
5. Abra o endereço mostrado (normalmente http://localhost:5173).
6. Versão de produção: `npm run build` (gera a pasta `dist`).

**Problemas comuns:** `npm não é reconhecido` → reinstale o Node e reabra o VS Code. Erro de instalação → apague `node_modules` e `package-lock.json` e rode `npm install` de novo.

## Publicar na Vercel
1. Crie conta em https://github.com e clique em **New repository** (nome: `familynet-landing`, deixe vazio, sem README).
2. No terminal do VS Code:
```
git init
git add .
git commit -m "Landing page FamilyNet"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/familynet-landing.git
git push -u origin main
```
(Se pedir login, use sua conta do GitHub. É preciso ter o Git instalado: https://git-scm.com)
3. Acesse https://vercel.com → **Sign up with GitHub**.
4. **Add New… > Project** → escolha `familynet-landing` → **Import**.
5. A Vercel detecta o Vite sozinha (Build: `npm run build`, Output: `dist`). Clique **Deploy**.
6. Em ~1 minuto aparece o link público com HTTPS (ex.: `familynet-landing.vercel.app`). Copie.
7. Instagram: **Editar perfil > Links > Adicionar link externo** → cole o endereço.
8. Opcional: em **Settings > Domains** da Vercel você pode ligar um domínio próprio.

Obs.: no `index.html`, a imagem Open Graph usa caminho relativo (`/og-image.jpg`). Depois de publicar, troque por o endereço completo (ex.: `https://SEU-SITE.vercel.app/og-image.jpg`) para a prévia aparecer certinho no WhatsApp/Instagram.

## Cadastro de novos clientes e áreas atendidas
- Bairros atendidos: edite `src/lib/areas.js` (alimenta a seção "Áreas atendidas" e o seletor do cadastro).
- Cadastro: `src/components/CustomerRegistration.jsx`. Não há banco de dados: o formulário abre o WhatsApp da FamilyNet (número em `src/lib/whatsapp.js`) com a mensagem pronta, e o cliente confirma o envio no aplicativo.
- Os planos do seletor vêm de `PLANS` em `src/components/Plans.jsx` (preços em um só lugar).
