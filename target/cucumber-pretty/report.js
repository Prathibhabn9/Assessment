$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Assessment.feature");
formatter.feature({
  "line": 2,
  "name": "BMICaculator",
  "description": "",
  "id": "bmicaculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmicaculator;calculate-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on https://www.calculator.net/ page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicks on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Metrics",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Age\u003cAge\u003e, Height\u003cHeight\u003e and Weight\u003cWeight\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Calculate BMI button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "BMI Result will be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "bmicaculator;calculate-bmi;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 15,
      "id": "bmicaculator;calculate-bmi;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 16,
      "id": "bmicaculator;calculate-bmi;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 17,
      "id": "bmicaculator;calculate-bmi;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 18,
      "id": "bmicaculator;calculate-bmi;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 19,
      "id": "bmicaculator;calculate-bmi;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 20,
      "id": "bmicaculator;calculate-bmi;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmicaculator;calculate-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on https://www.calculator.net/ page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicks on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Metrics",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Age10, Height127 and Weight40",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Calculate BMI button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "BMI Result will be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition1.user_is_on_https_www_calculator_net_page()"
});
formatter.result({
  "duration": 7998624900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_BMI_Calculator()"
});
formatter.result({
  "duration": 7542523200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_Metrics()"
});
formatter.result({
  "duration": 762548800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 15
    },
    {
      "val": "127",
      "offset": 25
    },
    {
      "val": "40",
      "offset": 39
    }
  ],
  "location": "Stepdefinition1.user_enters_Age_Height_and_Weight(int,int,int)"
});
formatter.result({
  "duration": 1091000900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.user_clicks_on_Calculate_BMI_button()"
});
formatter.result({
  "duration": 725295800,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.bmi_Result_will_be_shown()"
});
formatter.result({
  "duration": 83204300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.close_the_Browser()"
});
formatter.result({
  "duration": 1500999800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmicaculator;calculate-bmi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on https://www.calculator.net/ page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicks on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Metrics",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Age30, Height156 and Weight70",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Calculate BMI button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "BMI Result will be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition1.user_is_on_https_www_calculator_net_page()"
});
formatter.result({
  "duration": 6332754200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6312553500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_Metrics()"
});
formatter.result({
  "duration": 954840700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 15
    },
    {
      "val": "156",
      "offset": 25
    },
    {
      "val": "70",
      "offset": 39
    }
  ],
  "location": "Stepdefinition1.user_enters_Age_Height_and_Weight(int,int,int)"
});
formatter.result({
  "duration": 1338593600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.user_clicks_on_Calculate_BMI_button()"
});
formatter.result({
  "duration": 621993300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.bmi_Result_will_be_shown()"
});
formatter.result({
  "duration": 80386200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.close_the_Browser()"
});
formatter.result({
  "duration": 468068000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmicaculator;calculate-bmi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on https://www.calculator.net/ page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicks on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Metrics",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Age25, Height152 and Weight55",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Calculate BMI button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "BMI Result will be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition1.user_is_on_https_www_calculator_net_page()"
});
formatter.result({
  "duration": 5771998100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6463358500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_Metrics()"
});
formatter.result({
  "duration": 1846806700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 15
    },
    {
      "val": "152",
      "offset": 25
    },
    {
      "val": "55",
      "offset": 39
    }
  ],
  "location": "Stepdefinition1.user_enters_Age_Height_and_Weight(int,int,int)"
});
formatter.result({
  "duration": 1506502100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.user_clicks_on_Calculate_BMI_button()"
});
formatter.result({
  "duration": 604901000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.bmi_Result_will_be_shown()"
});
formatter.result({
  "duration": 72732100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.close_the_Browser()"
});
formatter.result({
  "duration": 642786300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmicaculator;calculate-bmi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on https://www.calculator.net/ page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicks on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Metrics",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Age20, Height160 and Weight45",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Calculate BMI button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "BMI Result will be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition1.user_is_on_https_www_calculator_net_page()"
});
formatter.result({
  "duration": 6318621400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6348726400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_Metrics()"
});
formatter.result({
  "duration": 1119751900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    },
    {
      "val": "160",
      "offset": 25
    },
    {
      "val": "45",
      "offset": 39
    }
  ],
  "location": "Stepdefinition1.user_enters_Age_Height_and_Weight(int,int,int)"
});
formatter.result({
  "duration": 1347085200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.user_clicks_on_Calculate_BMI_button()"
});
formatter.result({
  "duration": 418975200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.bmi_Result_will_be_shown()"
});
formatter.result({
  "duration": 250337300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.close_the_Browser()"
});
formatter.result({
  "duration": 329272300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Calculate BMI",
  "description": "",
  "id": "bmicaculator;calculate-bmi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on https://www.calculator.net/ page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "clicks on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on Metrics",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Age35, Height160 and Weight70",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Calculate BMI button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "BMI Result will be shown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition1.user_is_on_https_www_calculator_net_page()"
});
formatter.result({
  "duration": 7742537700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6795799100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.clicks_on_Metrics()"
});
formatter.result({
  "duration": 1472558300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 15
    },
    {
      "val": "160",
      "offset": 25
    },
    {
      "val": "70",
      "offset": 39
    }
  ],
  "location": "Stepdefinition1.user_enters_Age_Height_and_Weight(int,int,int)"
});
formatter.result({
  "duration": 1908560500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.user_clicks_on_Calculate_BMI_button()"
});
formatter.result({
  "duration": 429598500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.bmi_Result_will_be_shown()"
});
formatter.result({
  "duration": 196415400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition1.close_the_Browser()"
});
formatter.result({
  "duration": 394261100,
  "status": "passed"
});
});