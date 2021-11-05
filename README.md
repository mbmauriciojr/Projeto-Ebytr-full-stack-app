# Projeto-Ebytr-full-stack-app

O projeto consiste em criar um sistema para organizar tarefas do usuário em específico. 

## Back-end
Foi implementado um servidor API utilizando Node.js com o framework Express no diretório do back-end. Nele apliquei conceitos de arquitetura MSC para separar e deixar as camas independentes e organizadas, assim como ao máximo a utilização do SOLID para deixar o meu código mais estruturado. O servidor conta com alguns endpoints que farão funcionalidades no banco de dados não relacional criado, no caso MongoDB, assim então podendo ter sua ligação com o lado do Cliente(Front-end).

## Front-end
Foi criado uma aplicação em React.js onde simula uma tela de login, que caso seja feita com sucesso irá para uma página home onde carregará todas as tarefas daquele usupário. Contando com a opção de criar uma nova ou deletar alguma delas. Aqui foi utilizado o React.js para a criação de componentes e o Context-API para que se utilizasse os hooks e estados de uma maneira geral entre os componentes. Também utilizei a lib Axios para a conexão com os enpoints do servidor, podendo escolher os métodos HTTP e as informações a serem enviadas para o servidor.

## Implementações futuras
Será implementado ainda a opção de editar as tarefas existentes e a criação de novos usuários na parte do Front-end. Assim como algumas verificações na parte de login e criação de tarefas. Ainda sobre a parte do Front-end será implementado um CSS mais funcional e responsível. Em uma visão geral, pretendo fazer a criação de testes unitários para deixar ainda mais robusto esse projeto. E por final fazer o deploy do projeto para funcionar através do Heroku e sem a preocupação de instalar na máquina.

## Informações adicionais
Para saber como instalar e funcionar por favor acesse cada diretório para encontrar como fazer funcionar cada parte. Lembrando que o Servidor é o primeiro que deve ser rodado!

## Agradecimento
Muito obrigado por chegar até aqui e espero que goste!
