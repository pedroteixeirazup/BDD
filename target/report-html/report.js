$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resource/alugar_filme.feature");
formatter.feature({
  "line": 1,
  "name": "Alugar filme",
  "description": "Como um usuario\r\nEu quero cadastrar alugueis de filmes\r\nPara controlar preçõs e datas d entrega",
  "id": "alugar-filme",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Deve alugar um fime sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-fime-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 8
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 9
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "o preco do aluguel sera R$ 3",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "a data de entrega sera em 1 dia",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o estoque do filme sera 1 unidade",
  "keyword": "And "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 184122700,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 300900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 5655300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 1391500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 144500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Nao deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;nao-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "nao sera possivel por falta de estoque",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "o estoque do filme sera 0 unidade",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 407200,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.naoSeraPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 145800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeraUnidade(int)"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "que o preco do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "o preco do aluguel sera R$ \u003cvalor\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em \u003cqtdDias\u003e dias",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao sera de \u003cpontuacao\u003e pontos",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 35,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "10",
        "extendido",
        "20",
        "3",
        "2"
      ],
      "line": 38,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;4"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 39,
      "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "que o preco do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "o preco do aluguel sera R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 197500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 113100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 125500,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 182900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 99600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "que o preco do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "o preco do aluguel sera R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao sera de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 8662100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 128500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 490900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 210100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 585500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 234500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "que o preco do aluguel seja R$ 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "o preco do aluguel sera R$ 20",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao sera de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 123800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 73100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 270400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 2919200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 112900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condicoes conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condicoes-conforme-tipo-de-aluguel;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "que o preco do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "o preco do aluguel sera R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega sera em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "a pontuacao sera de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 159700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPrecoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 100500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 2302400,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.oPrecoDoAluguelSeraR$(int)"
});
formatter.result({
  "duration": 698500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeraEmDias(int)"
});
formatter.result({
  "duration": 598600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "AlugarFilmeSteps.aPontuacaoSeraDePontos(int)"
});
formatter.result({
  "duration": 135200,
  "status": "passed"
});
});