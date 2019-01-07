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
  "duration": 383200,
  "status": "passed"
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
  "duration": 9890960500,
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
  "duration": 327837400,
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
  "duration": 168237700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1663074500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 74954800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 116454500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 483454000,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 312791300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueONomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 70355900,
  "status": "passed"
});
formatter.after({
  "duration": 1062134400,
  "status": "passed"
});
formatter.before({
  "duration": 76900,
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
  "duration": 7701299800,
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
  "duration": 321117200,
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
  "duration": 178923500,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 1410218700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 70558800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 138565700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 380527300,
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
  "duration": 193811800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 414095200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasSteps.souNotificadoQueJáExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 57708400,
  "status": "passed"
});
formatter.after({
  "duration": 932058600,
  "status": "passed"
});
});