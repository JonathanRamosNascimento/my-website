# Portfólio — Jonathan Ramos

Landing page trilíngue (PT-BR, inglês e espanhol) criada em React, Vite e TypeScript.

## Desenvolvimento local

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Hospedagem no homelab com Docker

No servidor, instale Docker com o plugin Docker Compose, clone ou copie esta pasta e execute:

```bash
docker compose up -d --build
```

O site ficará disponível em `http://IP-DO-SERVIDOR:8080`. Para alterar a porta exposta:

```bash
PORT=8090 docker compose up -d --build
```

### Reverse proxy e HTTPS

Para usar um domínio, exponha o container apenas para a rede local e encaminhe o domínio para `http://IP-DO-SERVIDOR:8080` usando seu reverse proxy (Nginx Proxy Manager, Caddy, Traefik ou Nginx). O proxy deve encerrar HTTPS e encaminhar a requisição para essa porta.

Exemplo mínimo de bloco Nginx no proxy:

```nginx
server {
  server_name seu-dominio.com;
  location / { proxy_pass http://127.0.0.1:8080; }
}
```

Após uma mudança no código, atualize com `docker compose up -d --build`.
