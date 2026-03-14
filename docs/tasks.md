# URL Shortener - Tarefas

## FASE 0 — Ferramentas (mise + Makefile)

- [x] Verificar se o mise está instalado
- [x] Se não estiver, instalar o mise (já estava!)
- [x] Confirmar a instalação do mise (v2026.2.21)
- [x] Criar `.mise.toml` com a versão do Node.js
- [x] Rodar `mise install`
- [x] Verificar se Node.js e npm estão disponíveis
- [x] Criar o `Makefile` na raiz (na mão!)
- [x] Adicionar targets iniciais: `install`, `dev-backend`, `dev-frontend`, `build`, `test`

## FASE 1 — Setup Backend (Node.js + Express + TypeScript)

- [x] Criar pasta `backend/`
- [x] Inicializar projeto com `npm init` dentro de `backend/`
- [x] Instalar TypeScript e configurar `tsconfig.json`
- [x] Instalar Express e os tipos (`@types/express`)
- [x] Instalar `tsx` para rodar TypeScript em desenvolvimento
- [x] Criar o "Hello World" com Express + TypeScript
- [x] Entender o fluxo de requisição: req, res, rotas, listen

## FASE 2 — Construir a API REST

- [ ] Criar a estrutura de pastas (routes, controllers, services, types)
- [ ] Definir interfaces/tipos para URL
- [ ] Criar o service (gerar código curto, salvar, buscar)
- [ ] Criar o controller (receber request, chamar service, responder)
- [ ] Criar as rotas (POST /shorten, GET /:code)
- [ ] Testar com Postman

## FASE 3 — Testes Backend (Vitest)

- [ ] Verificar se Vitest está instalado
- [ ] Instalar e configurar Vitest
- [ ] Escrever testes pro service
- [ ] Escrever testes pras rotas (com supertest)

## FASE 4 — Setup Frontend (React + Vite + TypeScript)

- [ ] Criar projeto React com Vite
- [ ] Entender a estrutura de um projeto React
- [ ] Entender componentes, props, state e hooks

## FASE 5 — Construir o Frontend

- [ ] Criar componente de formulário (input + botão)
- [ ] Criar componente de exibição da URL encurtada
- [ ] Integrar com a API do backend
- [ ] Adicionar botão de copiar

## FASE 6 — Testes Frontend (Vitest + Testing Library)

- [ ] Configurar Vitest pra React
- [ ] Testar componentes
- [ ] Testar integração com API (mocks)
