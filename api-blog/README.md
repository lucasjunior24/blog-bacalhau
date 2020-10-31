# Comandos usados para rodar projeto 

Para rodar esse projeto voçê precisa ter instalado no seu computador o nodeJS e banco de dados postgreSQL. 
LINK para instalção.

dentro da pastar api-blog rode o comando 
npm start

com o servidor rodando sera necessario criar banco de dados
acesse no seu terminal e rode o comando a seguir para criar banco de dados
PSQL -U postgres

dentro do postgres rode o comando parar criar o banco bacalhau
OBS: o banco tem que ter esse nome

CREATE DATABASE bacalhau;

para ver se o banco foi criado, rode no terminal: \l

com o banco rodando ja sera possivel criar as tabelas do banco

# Comandos usados na criação do projeto 

Para rodar esse projeto voçê precisa ter instalado no seu computador o nodeJS e banco de dados postgreSQL. 
LINK para instalção.


Apos ter eles instalados rode os sequintes comandos

npm init -y

Para instalar package.json
Depois rode

npm i nodemon -D

Para instalar nodemon e pasta node_modules, execulte também para instalar demais dependencias
 
npm i knex pg express
npm i body-parser cors




