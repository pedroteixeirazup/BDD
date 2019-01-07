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
formatter.scenario({
  "line": 22,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 23,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 25,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 28,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 29,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "sou notificado que o nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 17975659700,
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
  "duration": 270531300,
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
  "duration": 157601000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 2653471000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 74138800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 116782600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 2317379500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 750158700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 57808200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 34,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 35,
  "name": "informo o usuário \"gloomybrgames@gmail.com\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 36,
  "name": "a senha \"pedro1997\"",
  "keyword": "E "
});
formatter.step({
  "line": 37,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 39,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 43,
  "name": "sou notificado que já existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 12267452100,
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
  "duration": 333228000,
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
  "duration": 174724700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1225741300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 91193000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 132787200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 368662200,
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
  "duration": 198574700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 486739200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 98375100,
  "status": "passed"
});
});