# Secret Friend Server
Aplicação backend Nodejs + Express + MongoDB com Mongoose + Nodemailer com handlebars

Um pequeno servidor para gerar um algorítimo de sorteio de amigo secreto.
Após cadastrar os participantes é possivel fazer o sorteio.
depois do sorteio um email é enviado ao usuário logado contendo a lista de particiantes com seus sorteados.

--------------------------------------------------------------------------
informações
Para o Rodar o servidor basta  renomear o arquivo env.exemple e 
em seguida entrar com as suas informações

--------------------------------------------------------------------------
nome do app 
APP_NAME = Server Secret Friend

--------------------------------------------------------------------------
configuração do cors para permitir acesso a url da spa 
CORS_ORIGIN = ['http://localhost:3000', 'http://dev.app.carp:3000']

--------------------------------------------------------------------------
porta do servidor 
SERVER_PORT = 4000

url de conexão com seu banco mongoDB aqui um exemplo de conexao com o atlas

--------------------------------------------------------------------------
DB_URI = mongodb+srv://<MEU USUARIO>:<MINHA SENHA>@<URL DO MEU BANCO>/<NOME DO BANCO>?retryWrites=true&w=majority

-------------------------------------------------------------------------
dados de conexao com o servidor smtp para disparar os emails sugiro de uso do mailtrap para testar

EMAIL_HOST = SMTP.MEUSERVIDOR.COM
EMAIL_PORT = 2525,
EMAIL_USER = USUARIO,
EMAIL_PASSWORD = SENHA,


key secreta para o jasonwebtoken você pode gerar um hash em qualquer site online e colocar aqui

---------------------------------------------------------------------------------------
KEY = ALGUMA HASH PARA O JSON WEBTOKEN