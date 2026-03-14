# Notas de Aprendizado — URL Shortener

## FASE 0 — Ferramentas

### mise
- Gerencia versões de ferramentas localmente (Node.js, etc.)
- `.mise.toml` define as versões usadas no projeto — qualquer pessoa que clonar o repo roda `mise install` e tem o mesmo ambiente

### Makefile
- Arquivo de atalhos pra comandos repetitivos
- Sintaxe: `target:` na primeira linha, comando com TAB na linha de baixo (nunca espaço!)
- `@` antes do comando suprime o echo do comando no terminal
- Dependências: `target: outro-target` faz o outro rodar antes

---

## FASE 1 — Setup Backend

### package.json
- É a "lista de compras" do projeto: dependências, scripts, metadados
- `dependencies` → bibliotecas que rodam em produção (ex: express)
- `devDependencies` → só em desenvolvimento (ex: typescript, tsx)
- `"type": "module"` → habilita o `import` moderno no Node.js

### package-lock.json
- Gerado automaticamente pelo npm
- Trava as versões exatas instaladas — garante que todo mundo instala o mesmo

### tsconfig.json
- Configurações do TypeScript
- `rootDir` → onde ficam os arquivos `.ts` que você escreve (`./src`)
- `outDir` → onde o TypeScript gera os arquivos `.js` compilados (`./dist`)
- `"types": ["node"]` → diz pro TypeScript que o ambiente é Node.js

### tsx
- Roda TypeScript direto sem precisar compilar manualmente
- Usado em desenvolvimento via `npm run dev`

### Express — conceitos básicos
- `import express from 'express'` → traz a biblioteca pro arquivo
- `const app = express()` → cria a aplicação (objeto com todos os métodos)
- `app.get(caminho, função)` → registra uma rota que responde a requisições GET
- `app.listen(porta)` → liga o servidor — sempre vai por último
- `req` → objeto com tudo que chegou do cliente (body, params, query, etc.)
- `res` → objeto pra enviar a resposta (`res.send()`, `res.json()`, `res.status()`)

### Métodos HTTP
- **GET** → buscar/ler algo (navegador usa por padrão)
- **POST** → enviar/criar algo
- **PUT/PATCH** → atualizar algo
- **DELETE** → deletar algo

### Fluxo de uma requisição
```
Usuário acessa localhost:3000/
→ navegador manda GET /
→ servidor (listen) recebe
→ encontra app.get('/', ...)
→ executa a função
→ res.send() responde
→ navegador exibe
```
