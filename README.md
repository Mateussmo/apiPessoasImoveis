# apiPessoasImoveis
Api feita em Node.js

Para instalar as dependências utilize o *npm install*  
Para rodar o server utilize *npm run dev*  

Após isso importe os JSON's para o mongoDB. Para exportar os JSON's foi utilizado o export do Mongo, então para realizar a importação é recomendado o utilizar o mesmo.  

_Para acesso ao banco de dados:_  
_Nome do Database: nodeapi e não possui senha, rodando na porta 27017._  

_Na pasta *imgs* no projeto possui imagens de testes realizados via postman._  

_obs: O server está rodando na porta 3001._  


# Registro de usuário
_Rota: http://localhost:3001/api/register_  
O usuário primeiro deve se cadastrar na API. Para isso ele deve informar os seguintes campos: _name_, _email_ e _password_. Todos são strings. A senha do usuário é encriptada, para isso foi utilizado o Bcryptjs.  

![Registro](https://user-images.githubusercontent.com/26530039/63638937-962be880-c664-11e9-9ea8-a0d01047b167.png)


# Autenticação do usuário  
_Rota:http://localhost:3001/api/authenticate_  

Após esse procedimento é gerado o token, salve o token é coloque no Header das próximas rotas. A imagem  seguinte mostra como esse procedimento deve ser realizado.  

![autenticacao](https://user-images.githubusercontent.com/26530039/63639164-b65ca700-c666-11e9-9639-3ed96fea393a.png)

Com o token inserido no header, utilize o email e password, para se autenticar na API.

![autenticacao1](https://user-images.githubusercontent.com/26530039/63639212-181d1100-c667-11e9-8bfd-c15782e4af79.png)  


# Cadastro de Pessoas  
_Rota:http://localhost:3001/api/pessoas_  

*obs: Informe o token no header novamente.*  

![pessoas](https://user-images.githubusercontent.com/26530039/63639322-1ef85380-c668-11e9-8450-e96d4444aab1.png)


Com o Token no header, insira as informações da pessoa.  
*As informações são:*  
_name_: _string_  
_lastname_: _string_  
_cpf_: _string_  
_birthday_: _string_  
_phone_:_string_  
_state_:_string_  
_city_:_string_  

![pessoas1](https://user-images.githubusercontent.com/26530039/63639423-384dcf80-c669-11e9-9748-9d7c9bcbfdb5.png)



# Cadastro de Imóveis  
_Rota:http://localhost:3001/api/imoveis_  

*obs: Informe o token no header novamente.*  

![imoveis](https://user-images.githubusercontent.com/26530039/63639445-85ca3c80-c669-11e9-9c04-34069b4cd255.png)  

Após isso insira as informações de acordo a imagem abaixo.Obs: No Body do postman, escolha form-data. Pois o usuário poderá escolher uma imagem para ser salva, do imóvel que o mesmo está cadastrando. Essa imagem é redimensionada, e salva na pasta resized dentro da pasta uploads.  

![imoveis1](https://user-images.githubusercontent.com/26530039/63639483-e8bbd380-c669-11e9-94ce-8f07bf80576b.png)  
*As informações e os seus tipos, são:*  
_title_: _string_  
_description_: _string_  
_offerType_: _string_  
_immobileType_: _string_  
_value_:_Number_  
_numberDormitory_:_Number_  
_hasGarage_:_boolean_(true or false)  
_city_: _string_  
_street_:_string_  
_neighborhood_:_string_  
_houseNumber_:_string_  
_state_: _string_  
_image_:_string_  
_people_:_ObjectId_  



# Atualização de Imóveis  
_Rota:http://localhost:3001/api/imoveis/IDIMOVEL_  

O procedimento é parecido com o cadastro de imóveis, somente algumas validações a mais foram implementadas.  

![Put_IMOVEIS](https://user-images.githubusercontent.com/26530039/63639556-06d60380-c66b-11e9-9d83-505aacbfcd81.png)  

# Outras Rotas adicionadas  
_Rota - Get - Pessoas: http://localhost:3001/api/pessoas_  

_Rota - Get - Pelo id - Pessoas: http://localhost:3001/api/pessoas/IDPESSOAS_  

_Rota - Get - Imoveis: http://localhost:3001/api/imoveis_  

 
Com isso é criado o relacionamento entre a collections user e peoples (Salvando o ID do user em People) e também entre peoples e immobiles (Salvando o ID de uma ou mais pessoas em immobiles).  

Para mais informações: _mateusmoreirav@gmail.com_
 
