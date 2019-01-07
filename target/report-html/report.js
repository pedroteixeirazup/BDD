$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resource/inserir_conta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\r\nComo um usuário\r\nGostaria de cadastrar contas\r\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 188800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5401524600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloomybrgames@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 273210400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro1997",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 140650900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1164692200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 68642700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 114034900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 341343600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 187286700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 540312000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 48493300,
  "status": "passed"
});
formatter.after({
  "duration": 809436900,
  "status": "passed"
});
formatter.before({
  "duration": 72600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5848228000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloomybrgames@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 274853300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro1997",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 158565200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1614112800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 61961600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 135626700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 406549900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 367290800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 60844900,
  "status": "passed"
});
formatter.after({
  "duration": 896078400,
  "status": "passed"
});
formatter.before({
  "duration": 57700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 33,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 34,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 35,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 38,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 39,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 5421295400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gloomybrgames@gmail.com",
      "offset": 19
    }
  ],
  "location": "InserirContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 259848300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pedro1997",
      "offset": 9
    }
  ],
  "location": "InserirContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 236172700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 989096400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 65150900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 105444200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 330976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "InserirContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 184532100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 439224600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 54364500,
  "status": "passed"
});
formatter.after({
  "duration": 801946900,
  "status": "passed"
});
});