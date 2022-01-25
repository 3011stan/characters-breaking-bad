# API em NodeJS para gerenciar personagens da série Breaking Bad
A API foi construída em NodeJS, os dados persistidos no banco de dados MongoDB e a documentação feita utilizando o Swagger
### Instanciando o MongoDB
Certifique-se de ter o MongoDB devidamente instalado em sua máquina e o serviço rodando na porta 27017.</br>
Caso queira estabelecer uma conexão com o banco através da extensão MongoDB do VSCode, utilize a QUERY-STRING: `mongodb://localhost:27017/BreakingBad`
### Instalando as dependências
    npm install
### Iniciando serviço do MongoDB : WSL 2
    sudo mongod --dbpath ~/data/db
### Iniciando serviço do MongoDB : Ubuntu
    sudo systemctl start mongod.service
### Acessando o swagger para ver a documentação e testar as rotas
    http://localhost:3000/api-docs/
# Deploy
