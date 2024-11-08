# Используем базовый образ Node.js
FROM node:16-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install
RUN npm install sass-embedded node-sass sass-migrator react-responsive react-router-dom uuid4
# Копируем все файлы проекта в контейнер
COPY . .

# # Запускаем приложение в режиме разработки
# CMD ["npm", "run", "dev"]

COPY --from=build /dist /usr/share/nginx/html
COPY --from=build nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]