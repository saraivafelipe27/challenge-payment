# ChallengeFrontPayment :octocat:

# Documentação do Projeto: Sistema de Gerenciamento de pagamentos :moneybag:

## 1. Introdução
Este projeto é um sistema básico de gerenciamento de pagamentos desenvolvido com Angular TypeScript. Ele permite:

Login de usuários com verificação de credenciais.
CRUD (Create, Read, Update, Delete) de pagamentos na interface de dashboard.
Pesquisa e Paginação dos pagamentos.
Integração com uma API mock (JSON Server) para simular as operações de backend.


## 2. Tecnologias Utilizadas
Frontend: Angular 16, TypeScript, HTML5, SCSS.
Mock API: JSON Server.
Bibliotecas e Frameworks:
Angular CLI.
Jasmine e Karma (testes unitários).
HttpClient (requisições HTTP).
Gerenciador de Pacotes: npm.

## 3. Instalação
Clone o repositório:

No seu terminal
cole o código  `git clone https://github.com/saraivafelipe27/challenge-payment` e execute
cd challenge-payment

Instale as dependências do projeto:

No seu terminal
cole o código
`npm install` e execute

Instale o JSON Server globalmente:

No seu terminal
cole o código
`npm install -g json-server`


## 4. Inicialização

Execute o servidor de desenvolvimento Angular:
`npm start`
Acesse o sistema no navegador em:
http://localhost:4200


Execute o Json server em outra aba do seu terminal
`json-server --watch db.json --port 3030`

O servidor será iniciado em:
http://localhost:3030


## 5. Funcionalidades

## 5.1 Login
O usuário pode fazer login utilizando o seguinte usuário padrão:

"email": "usuario@gmail.com",

"password": "usuario"

Após autenticação bem-sucedida, o usuário será redirecionado para o Dashboard.

## 5.2 Dashboard

O Dashboard exibe uma tabela com os pagamentos cadastrados.

Funcionalidades disponíveis:

Adicionar Pagamento: Cria um novo pagamento.

Editar Pagamento: Atualiza os dados de um pagamento específico.

Deletar Pagamento: Deleta um pagamento da tabela.

Pesquisar Pagamento: Permite buscar pelo título do pagamento.

Organiza pagamento: Permite a organização por data ASC/DESC.

Paginação: Possibilita a navegação por páginas.
