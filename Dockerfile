# Estágio 1: Build (Construir o app Vite)
# Usamos a imagem oficial do Node.js
FROM node:24-alpine AS build

# Define o diretório de trabalho
WORKDIR /src

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código-fonte
COPY . .

# Roda o build do Vite
RUN npm run build

# Estágio 2: Serve (Servir os arquivos estáticos)
# Usamos a imagem oficial do Nginx (um servidor web leve)
FROM nginx:1.29

# Copia os arquivos construídos (da pasta 'dist') para a pasta padrão do Nginx
COPY --from=build /src/dist/. /usr/share/nginx/html/

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]