# API em NodeJS para gerenciar personagens da série Breaking Bad
A API foi construída em NodeJS, os dados persistidos no banco de dados MongoDB e a documentação feita utilizando o Swagger
# Rodando localmente
### Instanciando o MongoDB
Certifique-se de ter o MongoDB devidamente instalado em sua máquina e o serviço rodando na porta 27017.</br>
Caso queira estabelecer uma conexão com o banco através da extensão MongoDB do VSCode, utilize a QUERY-STRING: `mongodb://localhost:27017/BreakingBad`
### Instalando as dependências
    npm install
### Iniciando serviço do MongoDB : WSL 2
    sudo mongod --dbpath ~/data/db
### Iniciando serviço do MongoDB : Ubuntu
    sudo systemctl start mongod.service
### Iniciando o servidor NodeJS
    npm start
### Acessando o swagger para ver a documentação e testar as rotas
    http://localhost:3000/api-docs/
# Deploy - Heroku
<h2>Obs.: A API já está hospedada no Heroku. Acesse o link para utilizar as rotas e acessar a documentação da API: <a href="https://backend-breaking-bad.herokuapp.com/api-docs">API Breaking Bad</a></h2>
<h1>Realizando seu próprio deploy</h1>
<ol>
    <li>Faça um fork deste repositório.</li>
    <li>Crie um novo app no <a href="https://dashboard.heroku.com/apps">Heroku</a></li>
    <li>Se estiver utilizando a mesma conta no Heroku, basta selecionar qual repositório quer realizar o deploy.</li>
</ol>
<h2>A aplicação Node JS já estará em produção se tudo correu bem até aqui. Agora precisamos hospedar o MongoDB no MongoDB Cloud</h2>
<a href="https://cloud.mongodb.com/">MongoDB Cloud</a>
<ol>
    <li>Crie uma conta, um proejto, escolha o cluster gratuito e escolha um provedor de nuvem.</li>
    <li>Crie um usuário e senha do banco de dados que será utilizado adiante.</li>
    <li>Adicione a variável de ambiente MONDOGB_URI no Heroku, seu valor encontra-se no banco criado na plataforma no caminho: Connect > Connect your application.</li>
    <li>Se tudo estiver corrido bem a aplicação estará funcionando integralmente.</li>
</ol>
<h5>Materiais de apoio para eventuais problemas:</h5>
<ul>
    <li>https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/</li>
    <li>https://stackoverflow.com/questions/60431996/mongooseerror-mongooseserverselectionerror-connection-monitor-to-52-6-250-2/60863977</li>
</ul>
