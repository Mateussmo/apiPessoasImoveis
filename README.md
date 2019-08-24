# apiPessoasImoveis
Api feita em Node.js

Para a rodar o projeto utilize o npm install.  

Após isso importe os JSON's para o mongoDB. Para exportar os JSON's foi utilizado o export do Mongo, então para realizar a importação é recomendado o utilizar o mesmo.  
obs: O server está rodando na porta 3001.  
Para verificar as funcionalidades da API, siga os seguintes passos:  
* Utilizando a Rota: http://localhost:3001/api/register, faça o registro do seu usuário na API, com isso você deverá copiar o token e adicionar no Header. Ex: Postman/Insomnia.  

![Exemplo de Registro](https://uploaddeimagens.com.br/imagens/registro-png-84185717-1138-43f3-92be-2aa27aa7347c)

* Após criar o registro do usuário, você poderá verificar a funcionalidade de autenticação com o usuário cadastrado. Para isso acesse a rota: http://localhost:3001/api/authenticate. Informando somente o usuário e senha.

* Com o usuário registrado e autenticado, acesse a rota http://localhost:3001/api/pessoas para realizar o cadastro de uma pessoa na API, as seguintes informações são necessárias:  
 *name, lastname, cpf, birthday, phone, street, state, city.*  
 
 **Obs: Tais informações são enviadas via Body - JSON.**
 
 * Após a pessoa cadastrada, pode-se verificar que é criada uma referência do user com a pessoa. E então é criado o registro no endpoint imóveis, por meio da rota: http://localhost:3001/api/imoveis. O content-type é o form-data, pois uma imagem (de um imóvel) deve ser enviada ao Mongo.  
 *title, description, offerType, immobileType, value, numberDormitory, hasGarage, city, street, neighborhood,houseNumber, state, image, people.*  
 
 **Obs: Essas informações devem ser preenchidas, a informação em "people" é o ID de um registro na collection people, e image é o arquivo de imagem. Não se esqueça do Token  no Header antes de qualquer POST e PUT.**   
 O token possui o seguinte formato: *Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjA3ZGY1MjVkYWJjMmJjOGM1YjliMCIsImlhdCI6MTU2NjYwNDc4OSwiZXhwIjoxNTY5MTk2Nzg5fQ.Jg0YrY9Ow-EpHOALt3U8R8N-FCp2I1xYv-20dKwLFIQ*  
 
 Com isso é criado o relacionamento entre ambas as collections, e todas as collections existentes.  
 Para adicionar mais informações em imóveis pode ser utilizado o PUT, passando o ID de um registro existente.
 
