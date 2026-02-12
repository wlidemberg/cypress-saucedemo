# Funcionalidade de Login

Sistema: saucedemo.com

Escopo: Página de Login


## 1 - Ideia

Permitir que usuários autenticados acessem a plataforma de produtos e outras funcionalidades internas, garantindo controle de acesso ao sistema.
**Problema resolvido:** Usuários não autenticados não devem visualizar ou interagir com catálogo de produtos, ou outras funcionalidades internas.
---

##  2 - Product Vision 

Garantir acesso seguro ao sistema por meio de autenticação com username e password, permitindo que apenas usuários cadastrados visualizem e interajam com a página de produtos.
---

## 3 - Product Backlog

 - Implementar autenticação com username e password.
 - Validar campos obrigatórios.
 - Exibir mensagem para credenciais incorretas.
 - Redirecionar usuário autenticado para "/inventory.html".
 - Bloquear acesso direto a página interna sem login.
 - Exibir mensagens especificas para campos obrigatórios.
---

## 4 - User Stories

**Como** usuário
**Quero** me autenticar com meu username e password
**Para** acessa página de produtos
---

## 5- Critérios de Aceite

### Login valido
**Dado** que um usuário informe username e password válidos.
**Quando** clicar no botão "Login"
**Então** deve ser redirecionado para "/inventory.html" e exibir a lista de produtos.
---

### Login com credenciais incorretas
**Dado** que um usuário informe username e password incorretas.
**Quando** clicar no botão "Login"
**Então** sistema deve exibir a mensagem “Username and password do not match any user in this service” e permanecer na página de login. 
---

### Login com username vazio
**Dado** que um usuário não preencha o campo username,
**Quando** clicar no botão de "Login",
**Então** o sistema deve exibir a mensagem "Username is required" e pemancer na página de login.
---

### Login com password vazio
**Dado** que um usuário não preencha o campo password,
**Quando** clicar no botão de "Login",
**Então** o sistema deve exibir mensagem de erro "Password is required" e permanecer na pagina de login
---

## 6. Plano de Teste
**Escopo**
Testar funcionalidade de autenticação da pagina de login

**Ambiente**
Web
Navegador: Google Chrome *Versão 144.0.7559.134 (Versão oficial) 64 bits*
Sistema: Saucedemo

**Tipos de Teste**
Teste Funcional
Teste Negativo
Teste de Validação de campos
Teste de Navegação
---

## 7. Cenários de Teste
1. Login com credenciais validas
2. Login com credenciais incorretas
3. Login campo username em branco
4. Login com campo password em branco
5. Acesso direto a página "/inventory.html"
---

## 8. Casos de Teste

### CT-LOG-01
Cenário: **Login com credenciais validas**  
Pré-condição: Usuário deve estar na página de login  
Passos: 
 - Preencher campo username  = standard_user
 - Preencher campo password  = secret_sauce
                                              		
 - Clicar no botão de "Login" 
  
  Resultado esperado:
 - redirecionar o usuário para página "/inventory.html"
 - Lista de Produtos visível
 - Ícone de carrinho no header
---
### CT-LOG-02
Cenário: **Login com credenciais incorretas**
Pré-condição: Usuário deve estar na página de login
Passos:
1. Preencher campo username incorreto
2. Preencher campo password incorreto
3. Clicar no botão de "Login"

Resultado esperado:
- Exibir mensagem de erro
“Username and password do not match any user in this service”
- Permanecer na tela de login
---
### CT-LOG 03
Cenário: **Login com username em branco**
Pré-condição: Usuário estar na tela de login
Passos:
1.	Não preencher o campo username
2.	Preencher campo password
3.	Clicar no botão de "Login"

Resultado esperado:
- Exibir mensagem de erro
"Username is required"
- Permanecer na tela de login
---
### CT -LOG-04
Cenário: **Login com password em branco**
Pré-condição: Usuário estar na página de login
Passos:
1. Preencher campo username
2. Não prencher campo password
3. Clicar no batão de "Login"

Resultado esperado:
- Exibir mensagem de erro
"Password is required"
- Permanecer na tela de login 
---
### CT-LOG-05
Cenário: **Acesso a página interna sem login**
Pré-condições: Usuário tentar acessar https://saucedemo.com/inventory.html
Passos:
1. Usuário tenta acessar pagina interna sem estar logado.

Resultado esperado:
- Redireciona para a página de login
---