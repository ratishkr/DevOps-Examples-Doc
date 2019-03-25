(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{234:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"sonarhelper-groovy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sonarhelper-groovy","aria-hidden":"true"}},[s._v("#")]),s._v(" SonarHelper.groovy")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("compuware"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("devops"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("util\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n Wrapper around the Git Plugin's Checkout Method\n @param URL - URL for the git server\n @param Branch - The branch that will be checked out of git\n @param Credentials - Jenkins credentials for logging into git\n @param Folder - Folder relative to the workspace that git will check out files into\n*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SonarHelper")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Serializable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" script\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" steps\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" scannerHome\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" pConfig\n")])])]),a("h1",{attrs:{id:"sonarhelper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sonarhelper","aria-hidden":"true"}},[s._v("#")]),s._v(" SonarHelper")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SonarHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("script     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" script\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("steps      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" steps\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("pConfig    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pConfig\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h1",{attrs:{id:"initialize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize","aria-hidden":"true"}},[s._v("#")]),s._v(" initialize")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* A Groovy idiosynchrasy prevents constructors to use methods, therefore class might require an additional "initialize" method to initialize the class */')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("initialize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("scannerHome    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tool "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("sqScannerName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h1",{attrs:{id:"scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scan","aria-hidden":"true"}},[s._v("#")]),s._v(" scan")]),s._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("withSonarQubeEnv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("sqServerName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'localhost' is the name of the SonarQube server defined in Jenkins / Configure Systems / SonarQube server section")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Finds all of the Total Test results files that will be submitted to SonarQube")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" tttListOfResults    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findFiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("glob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TTTSonar/*.xml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Total Test SonarQube result files are stored in TTTSonar directory")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Build the sonar testExecutionReportsPaths property\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Start will the property itself\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" sqTestResult       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"-Dsonar.testExecutionReportPaths="')]),s._v("    \n\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Loop through each result Total Test results file found\n            tttListOfResults"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("each \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sqTestResult       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqTestResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"TTTSonar/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" it"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Append the results file to the property\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Build the rest of the SonarQube Scanner Properties\n            \n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Test and Coverage results\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" sqScannerProperties   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('" -Dsonar.tests=tests '),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("sqTestResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(' -Dsonar.coverageReportPaths=Coverage/CodeCoverage.xml"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" SonarQube project to load results into\n            sqScannerProperties       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqScannerProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('" -Dsonar.projectKey='),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("JOB_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" -Dsonar.projectName="),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("JOB_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(' -Dsonar.projectVersion=1.0"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Location of the Cobol Source Code to scan\n            sqScannerProperties       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqScannerProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('" -Dsonar.sources='),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("ispwApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('\\\\${pConfig.mfSourceFolder}"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Location of the Cobol copybooks to scan\n            sqScannerProperties       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqScannerProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('" -Dsonar.cobol.copy.directories='),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("pConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("ispwApplication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('\\\\${pConfig.mfSourceFolder}"')]),s._v("  \n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" File extensions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Cobol and Copybook files"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("  The Total Test files need that contain tests need to be defined "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" cobol "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" SonarQube to process the results\n            sqScannerProperties       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqScannerProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('" -Dsonar.cobol.file.suffixes=cbl,testsuite,testscenario,stub -Dsonar.cobol.copy.suffixes=cpy -Dsonar.sourceEncoding=UTF-8"')]),s._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("//")]),s._v(" Call the SonarQube Scanner with properties defined above\n            steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("bat "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("scannerHome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v('/bin/sonar-scanner"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" sqScannerProperties\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}],!1,null,null,null);t.default=n.exports}}]);