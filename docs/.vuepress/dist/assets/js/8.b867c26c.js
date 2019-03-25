(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(e,t,s){e.exports=s.p+"assets/img/Example_life_cycle.54b2d76b.png"},206:function(e,t,s){e.exports=s.p+"assets/img/TTT_project_structure.2891ce59.png"},207:function(e,t,s){e.exports=s.p+"assets/img/TTT_in_Git_and_GitHub.fced6173.png"},261:function(e,t,s){"use strict";s.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"best-practices-for-topaz-for-topaz-total-unit-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-for-topaz-for-topaz-total-unit-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Best Practices for Topaz for Topaz Total Unit Tests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Since most mainframe development is not green field development, the first step in working with Topaz for Total Test will be executing a program in question under control of the Xpediter debugger. During the debugging session Xpediter and Topaz for Total Test allow recording individual test cases. One such test case, in the sense of Topaz for Total Test, is one execution of a program (compile unit) from beginning ("),t("code",[this._v("PROCEDURE DIVISION")]),this._v(" or "),t("code",[this._v("ENTRY")]),this._v(" point) to end (e.g. "),t("code",[this._v("GOBACK")]),this._v("). It consists of")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Input values as recorded at program "),s("code",[e._v("ENTRY")])]),e._v(" "),s("li",[e._v("Output values as recorded at program exit (e.g. "),s("code",[e._v("GOBACK")]),e._v(")")]),e._v(" "),s("li",[e._v("Assertions for the recorded output values")]),e._v(" "),s("li",[e._v("Stubs (simulation data) for\n"),s("ul",[s("li",[e._v("Sub program calls")]),e._v(" "),s("li",[e._v("File I/O, i.e. "),s("code",[e._v("QSAM")]),e._v(" or "),s("code",[e._v("VSAM")]),e._v(" reads and writes")]),e._v(" "),s("li",[s("code",[e._v("DB2 SQL")]),e._v(" statement execution\n"),s("ul",[s("li",[e._v("Host variables")]),e._v(" "),s("li",[e._v("Column values")]),e._v(" "),s("li",[s("code",[e._v("SQLCODE")])])])]),e._v(" "),s("li",[s("code",[e._v("IMS DL/I")]),e._v(" calls\n"),s("ul",[s("li",[e._v("PCB/ACB before and after each call (incl. "),s("code",[e._v("IMS STATUS-CODE")]),e._v(")")]),e._v(" "),s("li",[e._v("Segment Search Argument ("),s("code",[e._v("SSA")]),e._v(")")]),e._v(" "),s("li",[e._v("Segment data")])])])])]),e._v(" "),s("li",[e._v("Any write stub will also create assertions for the data written to the external data source")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"structuring-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structuring-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Structuring Tests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"naming-conventions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions","aria-hidden":"true"}},[this._v("#")]),this._v(" Naming conventions")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("The Topaz for Total Test project name uses "),s("code",[e._v("<Target_Program_Name>_Unit_Tests")]),e._v(" as project name")]),e._v(" "),s("li",[e._v("The test scenario files or test suite files contain the "),s("code",[e._v("<Target_Program_Name>")]),e._v(" as first part of their file name, followed by an underscore "),s("code",[e._v("_")]),e._v(", follwowed by any trailing name.")]),e._v(" "),s("li",[e._v("Topaz for Total Test itself requires the file extensions\n"),s("ul",[s("li",[s("code",[e._v(".testscenario")]),e._v(" for test scenarios")]),e._v(" "),s("li",[s("code",[e._v(".testsuite")]),e._v(" for test suites")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-topaz-for-total-test-project-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-topaz-for-total-test-project-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" The Topaz for Total Test project structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("<project_name>(root)                            # e.g. <Target_Program_Name>_Unit_Tests\n+- Unit Tests\n    +- Interfaces                               # interfaces to programs (LINKAGE SECTION) and I/O stubs\n    +- JCL                                      # jcl 'members' for the execution of tests\n    +- Scenarios                                # test scenarios\n    +- Structures                               # COBOL structures (01-levels and subfields) making up the different interfaces \n    +- Stubs                                    # Simulation data for sub-programs and external I/O\n    +- Suites                                   # test suite(s) executing one or more test scenarios\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(206),alt:"TTT_project"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-runner-jcl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-runner-jcl","aria-hidden":"true"}},[this._v("#")]),this._v(" The runner.jcl")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("When using Xpediter/Topaz for Total Test to record test cases, the "),s("code",[e._v("JCL")]),e._v(" folder will contain sample "),s("code",[e._v("JCL")]),e._v(" code which is required to exeute the Topaz for Total Test driver program "),s("code",[e._v("TTTRUNNR")]),e._v(". As of now, Topaz for Total Test cannot create stub data for 100% of all  "),s("code",[e._v("SQL")]),e._v(" statements or "),s("code",[e._v("DL/I")]),e._v(' calls. Therefore, test execution of some programs will require a "mixed" mode - partly stubbed, partly using life data. For these situations the following sample '),s("code",[e._v("JCL")]),e._v("is generated:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("RunnerBmp.jcl")]),e._v(" for tests of "),s("code",[e._v("IMS")]),e._v(' programs in "mixed" mode')]),e._v(" "),s("li",[s("code",[e._v("RunnerBmpDB2.jcl")]),e._v(" for tests of "),s("code",[e._v("DB2/IMS")]),e._v(' programs in "mixed" mode')]),e._v(" "),s("li",[s("code",[e._v("RunnerDb2.jcl")]),e._v(" for tests of "),s("code",[e._v("DB2")]),e._v(' programs in "mixed" mode')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In case all I/O can be stubbed, the "),t("code",[this._v("Runner.jcl")]),this._v(" can be used as a template for the test execution "),t("code",[this._v("JCL")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Due to the design of the example application, there are three paths through the development stages. Therefore, there will be three different "),s("code",[e._v("STEPLIB")]),e._v(" concatenations to use in the Topaz for Total Test "),s("code",[e._v("runner.jcl")]),e._v(". The approach taken in the example is to have three different versions of the "),s("code",[e._v("runner.jcl")]),e._v(" each using a different "),s("code",[e._v("STEPLIB")]),e._v(" concatenation. The code of the pipeline will determine which "),s("code",[e._v("jcl")]),e._v(" to use.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("Runner_PATH1.jcl")]),e._v(" is used for the path from "),s("code",[e._v("DEV1")]),e._v(" to "),s("code",[e._v("PRD")])]),e._v(" "),s("li",[s("code",[e._v("Runner_PATH2.jcl")]),e._v(" is used for the path from "),s("code",[e._v("DEV2")]),e._v(" to "),s("code",[e._v("PRD")])]),e._v(" "),s("li",[s("code",[e._v("Runner_PATH3.jcl")]),e._v(" is used for the path from "),s("code",[e._v("DEV3")]),e._v(" to "),s("code",[e._v("PRD")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(176),alt:"Life Cycle"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-jcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("//RUNNER EXEC PGM=TTTRUNNR\n\n//STEPLIB  DD DISP=SHR,DSN=SYS2.CW.&CWGACX..SLCXLOAD\n//         DD   DSN=CEE.SCEERUN,DISP=SHR\n//         DD   DISP=SHR,DSN=SALESSUP.RXN3.DEV2.LOAD\n//         DD   DISP=SHR,DSN=SALESSUP.RXN3.QA2.LOAD\n//         DD   DISP=SHR,DSN=SALESSUP.RXN3.STG.LOAD\n//         DD   DISP=SHR,DSN=SALESSUP.RXN3.PRD.LOAD\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"adding-new-test-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-test-cases","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding new test cases")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"storing-the-topaz-for-total-test-project-in-git-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storing-the-topaz-for-total-test-project-in-git-github","aria-hidden":"true"}},[this._v("#")]),this._v(" Storing the Topaz for Total Test project in Git/GitHub")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:s(207),alt:"TTT in Git"}})])}],o=s(1),a=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Topaz for Total Test allows storing one or more test case for one or more programs. It is a recommended practice, though, to create one Topaz for Total Test project per program. These projects allow grouping test cases into different scenarios (e.g. by major program branch being executed) and to define and use test suites to execute all test scenarios in one run.")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("In order to map Topaz for Total Test project assets, stored in Git, to program components, stored in ISPW, naming conventions are used. These should be followed already when recording the unit tests, but asset names may be changed later, after recording, to use the following naming conventions:")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("The "),s("router-link",{attrs:{to:"./TTT_in_Git.html"}},[e._v("Git repository")]),e._v(" uses "),s("code",[e._v("<ISPW_Stream_Name>_<ISPW_Application_Name>_Unit_Tests")]),e._v(" as name.")],1),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("A Topaz for Total Test project will use the following folder structure, which will be generated and populated automatically, when the first test case gets recorded by Xpediter/Topaz for Total Test:")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._m(17),e._v(" "),s("p",[e._v("New test cases may be added to an existing test scenario by duplicating existing test cases and modifying the input and assertion data (based on any new requirements). Refer to the Topaz for Total Test online help for more details.")]),e._v(" "),e._m(18),e._v(" "),s("p",[e._v("The recommended procedure to share Topaz for Total Test projects across teams and to use them in automation pipelines is "),s("router-link",{attrs:{to:"./TTT_in_Git.html"}},[e._v("storing these projects in Git/GitHub repositories.")])],1),e._v(" "),e._m(19)])},r,!1,null,null,null);t.default=a.exports}}]);