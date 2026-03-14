# URL Shortener

Projeto fullstack de encurtador de URLs, construído do zero para aprender TypeScript, Node.js, React e boas práticas de desenvolvimento.

## Stack

- **Backend:** Node.js + Express + TypeScript
- **Frontend:** React + TypeScript (Vite)
- **Testes:** Vitest
- **Gerenciador de ferramentas:** mise

## Funcionalidades

- Encurtar uma URL longa e receber um código curto
- Acessar o código curto e ser redirecionado para a URL original

## Pré-requisitos

- [mise](https://mise.jdx.dev/) instalado

## Como rodar

```bash
# Instala as ferramentas (Node.js via mise)
make install

# Instala as dependências do backend
cd backend && npm install

# Sobe o servidor de desenvolvimento
make dev-backend
```

O servidor estará disponível em `http://localhost:3000`.

## Estrutura do projeto

```
url-shortener/
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
├── Makefile
├── .mise.toml
└── README.md
```
