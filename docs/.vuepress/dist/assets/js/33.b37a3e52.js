(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{232:function(e,t,o){"use strict";o.r(t);var r=o(1),i=Object(r.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./FileHelper.html"}},[o("code",[e._v("FileHelper")])]),e._v(" class is used to read external files and provides the methods")],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"./FileHelper.html#FileHelper"}},[o("code",[e._v("FileHelper(steps)")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("steps")]),e._v(" from the pipeline to "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("allow use of pipeline step within the class code")]),e._v(".")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./FileHelper.html#readLines"}},[o("code",[e._v("readLines(String path)")])])],1),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./GitHelper.html"}},[o("code",[e._v("GitHelper")])]),e._v(" class serves as a wrapper around the Git SCM plugin and provides the methods")],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"./GitHelper.html#GitHelper"}},[o("code",[e._v("GitHelper(steps)")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("steps")]),e._v(" from the pipeline to "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("allow use of pipeline step within the class code")]),e._v(".")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./GitHelper.html#checkout"}},[o("code",[e._v("checkout(String gitUrl, String gitBranch, String gitCredentials, String tttFolder)")])])],1),e._v(" "),e._m(5),e._v(" "),o("p",[o("router-link",{attrs:{to:"./GitHelper.html#checkoutPath"}},[o("code",[e._v("checkoutPath(String gitUrl, String gitBranch, String path, String gitCredentials, String gitProject)")])])],1),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./IspwHelper.html"}},[o("code",[e._v("IspwHelper")])]),e._v(" class serves as a wrapper around the Compuware ISPW plugin and provides the methods")],1),e._v(" "),e._m(8),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("steps")]),e._v(" from the pipeline to "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("allow use of pipeline step within the class code")]),e._v(" and a "),o("router-link",{attrs:{to:"./#PipelineConfig"}},[o("code",[e._v("PipelineConfig")])]),e._v(" to make use of pipeline execution specific parameters.")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./IspwHelper.html#downloadSources"}},[o("code",[e._v("downloadSources()")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("downloads all sources (COBOL programs and copybooks) contained in "),o("router-link",{attrs:{to:"./../scenario/"}},[e._v("ISPW set")]),e._v(" triggering the pipeline")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./IspwHelper.html#downloadCopyBooks"}},[o("code",[e._v("downloadCopyBooks(String workspace)")])])],1),e._v(" "),o("blockquote",[o("ul",[e._m(9),e._v(" "),e._m(10),e._v(" "),o("li",[e._v("uses a "),o("router-link",{attrs:{to:"./Jcl_skeletons.html"}},[o("code",[e._v("JclSkeleton")])]),e._v(" object's "),o("code",[e._v("createIebcopyCopyBooksJcl")]),e._v(" method to create an "),o("code",[e._v("IEBCOPY")]),e._v(" job "),o("code",[e._v("JCL")]),e._v(" that copies all required copybooks in the list from the ISPW libraries into a temporary PDS")],1),e._v(" "),o("li",[e._v("submits this "),o("code",[e._v("JCL")]),e._v(" using the "),o("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Compuware+Topaz+Utilities+Plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Topaz Utilities"),o("OutboundLink")],1),e._v(" plugin")]),e._v(" "),o("li",[e._v("downloads the content of the temporary PDS, using the "),o("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Compuware+Source+Code+Download+for+Endevor,+PDS,+and+ISPW+Plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISPW PDS downloader"),o("OutboundLink")],1)]),e._v(" "),e._m(11),e._v(" "),e._m(12)])]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./IspwHelper.html#referencedCopyBooks"}},[o("code",[e._v("referencedCopyBooks(String workspace)")])])],1),e._v(" "),e._m(13),e._v(" "),o("p",[o("router-link",{attrs:{to:"./IspwHelper.html#regressAssignmentList"}},[o("code",[e._v("regressAssignmentList(assignmentList, cesToken)")])])],1),e._v(" "),e._m(14),e._v(" "),o("p",[o("router-link",{attrs:{to:"./IspwHelper.html#regressAssignment"}},[o("code",[e._v("def regressAssignment(assignment, cesToken)")])])],1),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./JclSkeleton.html"}},[o("code",[e._v("JclSkeleton")])]),e._v(" class allows the pipelines to customize pieces of "),o("code",[e._v("JCL")]),e._v(" in certain, predefined ways. This allows changing e.g. "),o("code",[e._v("job cards")]),e._v(", "),o("code",[e._v("STEPLIB")]),e._v(" concatenations and others during runtime. The "),o("code",[e._v("JCL")]),e._v(" skeletons are read from folder "),o("router-link",{attrs:{to:"./Jcl_skeletons.html"}},[e._v("'./config/skels'")]),e._v(" in the pipeline workspace.")],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"./Jcl_skeletons.html#JclSkeleton"}},[o("code",[e._v("JclSkeleton(steps, String workspace, String ispwApplication, String ispwPathNum)")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("steps")]),e._v(" from the pipeline to "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("allow use of pipeline step within the class code")]),e._v(", the path to the pipeline "),o("code",[e._v("workpace")]),e._v(", the name of the ISPW application in "),o("code",[e._v("ispwApplication")]),e._v(" and the "),o("router-link",{attrs:{to:"./../scenario/TTT_scenario.html"}},[e._v("number of the development path")]),e._v(" in "),o("code",[e._v("pathNum")]),e._v(".")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./Jcl_skeletons.html#initialize"}},[o("code",[e._v("initialize()")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("is used for additional "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("initialization which cannot be executed in the custructor")]),e._v(" and")],1),e._v(" "),e._m(17)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./Jcl_skeletons.html"}},[o("code",[e._v("buildIebcopySkel()")])])],1),e._v(" "),e._m(18),e._v(" "),o("p",[o("router-link",{attrs:{to:"./Jcl_skeletons.html"}},[o("code",[e._v("createIebcopyCopyBooksJcl(String targetDsn, List copyMembers)")])])],1),e._v(" "),e._m(19),e._v(" "),o("p",[o("router-link",{attrs:{to:"./Jcl_skeletons.html"}},[o("code",[e._v("createDeleteTempDsn(String targetDsn)")])])],1),e._v(" "),e._m(20),e._v(" "),o("p",[o("router-link",{attrs:{to:"./Jcl_skeletons.html"}},[o("code",[e._v("readSkelFile(String fileName)")])])],1),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./PipelineConfig.html"}},[o("code",[e._v("PipelineConfig")])]),e._v(" class stores and allows retrieval of any pipeline "),o("router-link",{attrs:{to:"./../pipeline_parameters.html"}},[e._v("configuration and runtime specific parameters")]),e._v(".")],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"./PipelineConfig.html#PipelineConfig"}},[o("code",[e._v("PipelineConfig(steps, workspace, params, mailListLines)")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("steps")]),e._v(" from the pipeline to "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("allow use of pipeline step within the class code")]),e._v(", the path of the pipeline "),o("code",[e._v("workspace")]),e._v(" the "),o("code",[e._v("Map")]),e._v(" "),o("code",[e._v("params")]),e._v(" containing the "),o("code",[e._v("key:value")]),e._v(" parameter pairs from the "),o("router-link",{attrs:{to:"./../Mainframe_CI_Pipeline_from_Shared_Lib.html"}},[e._v("pipeline call")]),e._v(", and a the list of records from the "),o("router-link",{attrs:{to:"./../../tool_configuration/"}},[o("code",[e._v("mailList.config")]),e._v(" file")]),e._v(" and initializes all parameters that can be initialized immediately.")],1)]),e._v(" "),e._m(23),e._v(" "),o("blockquote",[o("p",[e._v("is used for additional "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("initialization which cannot be executed in the custructor")]),e._v(" and")],1),e._v(" "),o("ul",[o("li",[e._v("deletes any old content from the pipeline workspace")]),e._v(" "),o("li",[e._v("Uses the "),o("code",[e._v("checkoutPath")]),e._v("method of the "),e._m(24),e._v(" to download the path containing the configuration files from the GitHub repository containing the configuration. (In future configuration files will be move to "),o("router-link",{attrs:{to:"./../../tool_configuration/"}},[e._v("Managed Files")]),e._v(", thus avoiding to have to download configuration from GitHub and exposure of configuration on GitHub.)")],1),e._v(" "),o("li",[e._v("execute the following internal methods to set the remaining configuration values")])])]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./SonarHelper.html"}},[o("code",[e._v("SonarHelper")])]),e._v(" class serves as a wrapper to execute the SonarQube scanner.(../pipeline_parameters.md).")],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"./SonarHelper.html#SonarHelper"}},[o("code",[e._v("SonarHelper(script, steps, pConfig)")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("script")]),e._v("object and the "),o("code",[e._v("steps")]),e._v(" from the pipeline  and a "),o("router-link",{attrs:{to:"./#PipelineConfig"}},[o("code",[e._v("PipelineConfig")])]),e._v(" to make use of pipeline execution specific parameters.")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./SonarHelper.html#initialize"}},[o("code",[e._v("initialize()")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("is used for additional "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("initialization which cannot be executed in the custructor")]),e._v(" and determines the scanner home path")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./SonarHelper.html#scan"}},[o("code",[e._v("scan()")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("Executes the Sonar scanner. First it prepares all required parameters required for this scenario:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Generic+Test+Data",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.testExecutionReportPaths=")]),o("OutboundLink")],1),e._v(" allows using a comma-seprated list of paths the results of unit tests (Topaz for Total Test in our case) in the format required by the Sonar scanner.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Analysis+Parameters",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.tests")]),o("OutboundLink")],1),e._v(" comma-seperated list of colders containing unit tests (Topaz for Total Test projects in our case)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Generic+Test+Data",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("coverageReportPaths")]),o("OutboundLink")],1),e._v(" path to code coverage results. With Xpediter Code Coverage the results will reside in "),o("code",[e._v("Coverage/Coverage.xml")]),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Analysis+Parameters",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.projectKey")]),o("OutboundLink")],1),e._v(" the SonarQube project key that is unique for each project. Our example pipelines use the "),o("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Building+a+software+project",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins environment variable"),o("OutboundLink")],1),e._v(" "),o("code",[e._v("JOB_NAME")]),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Analysis+Parameters",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.projectName")]),o("OutboundLink")],1),e._v(" the SonarQube project name that is unique for each project. Our example pipelines use the "),o("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/Building+a+software+project",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins environment variable"),o("OutboundLink")],1),e._v(" "),o("code",[e._v("JOB_NAME")]),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Analysis+Parameters",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.projectVersion")]),o("OutboundLink")],1),e._v(" the SonarQube project version. The current examples to not modify the project version between executions.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/SONAR/Analysis+Parameters",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.sources")]),o("OutboundLink")],1),e._v(" comma-separated paths to directories containing source files. With the ISPW downloader the sources reside in folder "),o("code",[e._v("<ispw_application>/MF_Source")]),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/PLUG/COBOL+Plugin+Advanced+Configuration",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.cobol.copy.directories")]),o("OutboundLink")],1),e._v(" comma-separated paths to COBOL copybooks.  With the ISPW downloader the sources reside in folder "),o("code",[e._v("<ispw_application>/MF_Source")]),e._v(" and the "),o("code",[e._v("downloadCopyBooks")]),e._v(" method of the "),o("router-link",{attrs:{to:"./#IspwHelper.html"}},[o("code",[e._v("IspwHelper")])]),e._v(" class cobybooks will reside in the same folder as the COBOL sources "),o("code",[e._v("<ispw_application>/MF_Source")]),e._v(".")],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/PLUG/COBOL+Plugin+Advanced+Configuration",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.cobol.file.suffixes")]),o("OutboundLink")],1),e._v(" file suffixes for the Sonar scanner to identify files that need to be scanned.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.sonarqube.org/display/PLUG/COBOL+Plugin+Advanced+Configuration",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sonar.cobol.copy.suffixes")]),o("OutboundLink")],1),e._v(" file suffixes for the Sonar scanner to identify COBOL copybooks.")])])]),e._v(" "),e._m(34),e._v(" "),o("p",[e._v("The "),o("router-link",{attrs:{to:"./TttHelper.html"}},[o("code",[e._v("TttHelper")])]),e._v(" class serves as a wrapper around Topaz for Total Test related activities like, executing the unit tests for the downloaded programs in a loop, and gathering the results from Code Coverage.")],1),e._v(" "),o("p",[o("router-link",{attrs:{to:"./TttHelper.html#TttHelper"}},[o("code",[e._v("TttHelper(script, steps, pConfig)")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("The constructor recieves the "),o("code",[e._v("script")]),e._v("object and the "),o("code",[e._v("steps")]),e._v(" from the pipeline  and a "),o("router-link",{attrs:{to:"./#PipelineConfig.html"}},[o("code",[e._v("PipelineConfig")])]),e._v(" to make use of pipeline execution specific parameters.")],1)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./TttHelper.html#initialize"}},[o("code",[e._v("initialize()")])])],1),e._v(" "),o("blockquote",[o("p",[e._v("is used for additional "),o("router-link",{attrs:{to:"./../Jenkins_Groovy.html"}},[e._v("initialization which cannot be executed in the custructor")]),e._v(" and")],1),e._v(" "),e._m(35)]),e._v(" "),o("p",[o("router-link",{attrs:{to:"./TttHelper.html#loopThruScenarios"}},[o("code",[e._v("loopThruScenarios()")])])],1),e._v(" "),e._m(36),e._v(" "),o("p",[o("router-link",{attrs:{to:"./TttHelper.html#passResultsToJunit"}},[o("code",[e._v("passResultsToJunit()")])])],1),e._v(" "),e._m(37),e._v(" "),o("p",[o("router-link",{attrs:{to:"./TttHelper.html#collectCodeCoverageResults"}},[o("code",[e._v("collectCodeCoverageResults()")])])],1),e._v(" "),e._m(38)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"helper-classes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#helper-classes","aria-hidden":"true"}},[this._v("#")]),this._v(" Helper classes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The helper classes primarily serve as wrapper classes for the use of the different methods used by the plugins. Other serve purposes like provided configuration data ("),t("code",[this._v("PipelineConfig")]),this._v(") or preparing "),t("code",[this._v("JCL")]),this._v(" for one specific execution of a pipeline ("),t("code",[this._v("JclSkeleton")]),this._v(").")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"filehelper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filehelper","aria-hidden":"true"}},[this._v("#")]),this._v(" FileHelper")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("reads the records of a file at location "),t("code",[this._v("path")]),this._v(" and returns an "),t("code",[this._v("ArrayList")]),this._v(" of the individual records.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"githelper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#githelper","aria-hidden":"true"}},[this._v("#")]),this._v(" GitHelper")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("checks out the branch "),o("code",[e._v("gitBranch")]),e._v(" in the Git(Hub) repository at "),o("code",[e._v("gitUrl")]),e._v(". It uses the "),o("code",[e._v("gitCredentials")]),e._v(" to authenticate, and places the cloned Git repository into the folder "),o("code",[e._v("tttFolder")]),e._v(" (within the Jenkins workspace).")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("performs a "),o("em",[e._v("sparse checkout")]),e._v(", and checks out path "),o("code",[e._v("path")]),e._v(" in the branch "),o("code",[e._v("gitBranch")]),e._v(" in the project "),o("code",[e._v("gitProject")]),e._v(" in the Git(Hub) repository at "),o("code",[e._v("gitUrl")]),e._v(". It uses the "),o("code",[e._v("gitCredentials")]),e._v(" to authenticate.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ispwhelper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ispwhelper","aria-hidden":"true"}},[this._v("#")]),this._v(" IspwHelper")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("IspwHelper(steps, pConfig)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("recieves the path to the "),t("code",[this._v("workspace")]),this._v(" of the pipeline job")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("uses the "),t("code",[this._v("referencedCopyBooks")]),this._v(" method to determine all copybooks used by the download COBOL programs")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[e._v("uses the "),o("code",[e._v("JclSkeleton")]),e._v(" method "),o("code",[e._v("jclSkeleton.createDeleteTempDsn")]),e._v(" to create a "),o("code",[e._v("DELETE")]),e._v(" job "),o("code",[e._v("JCL")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("and submits that "),t("code",[this._v("JCL")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("ul",[o("li",[e._v("recieves the path to the "),o("code",[e._v("workspace")]),e._v(" of the pipeline job")]),e._v(" "),o("li",[e._v("searches all "),o("code",[e._v("*.cbl")]),e._v(" program sources in the folder containing all downloaded sources and builds a list of COBOL programs")]),e._v(" "),o("li",[e._v("for each program in the list it")]),e._v(" "),o("li",[e._v("reads the source file")]),e._v(" "),o("li",[e._v("scans the content for valid "),o("code",[e._v("COPY")]),e._v(" statements (e.g. not comments)")]),e._v(" "),o("li",[e._v("determines the referenced copybook")]),e._v(" "),o("li",[e._v("add each copybook to the list of copybooks")]),e._v(" "),o("li",[e._v("returns the resulting list of copybooks")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("recieves a list of assignment IDs in "),o("code",[e._v("assignmentList")]),e._v(", the "),o("a",{attrs:{href:""}},[e._v("CES Token")]),e._v(" in "),o("code",[e._v("cesToken")]),e._v(" and calls method "),o("code",[e._v("regressAssignment")]),e._v(" for each element of "),o("code",[e._v("assignmentList")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("receives an Assignment ID in "),t("code",[this._v("assigment")]),this._v(", the "),t("a",{attrs:{href:""}},[this._v("CES Token")]),this._v(" in "),t("code",[this._v("cesToken")]),this._v(" and uses the ISPW REST API to regress the assignment")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jclskeleton"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jclskeleton","aria-hidden":"true"}},[this._v("#")]),this._v(" JclSkeleton")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("reads the "),o("code",[e._v("JobCard.jcl")]),e._v(" skeleton file")]),e._v(" "),o("li",[e._v("reads the "),o("code",[e._v("deleteDs.skel")]),e._v(" skeleton file")]),e._v(" "),o("li",[e._v("initializes the "),o("code",[e._v("IEBCOPY")]),e._v(" "),o("code",[e._v("JCL")]),e._v(" by using the "),o("code",[e._v("buildIebcopySkel")]),e._v(" method")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("initializes the "),o("code",[e._v("IEBCOPY")]),e._v(" "),o("code",[e._v("JCL")]),e._v(" by")]),e._v(" "),o("ul",[o("li",[e._v("reading the "),o("code",[e._v("iebcopy.skel")]),e._v(" skeleton file (main "),o("code",[e._v("JCL")]),e._v(")")]),e._v(" "),o("li",[e._v("reading the "),o("code",[e._v("iebcopyInDd.skel")]),e._v(" skeleton file (input "),o("code",[e._v("DD")]),e._v(" statements)")]),e._v(" "),o("li",[e._v("building the required "),o("code",[e._v("INDD=INx")]),e._v(" cards")]),e._v(" "),o("li",[e._v("replacing the placeholders in the skeleton "),o("code",[e._v("JCL")]),e._v(" by the conrete values")]),e._v(" "),o("li",[e._v("returning the resulting "),o("code",[e._v("JCL")]),e._v(" code")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("recieves the target DSN for the "),o("code",[e._v("IEBCOPY")]),e._v(" job in "),o("code",[e._v("targetDsn")]),e._v(" and the list of required copybooks in "),o("code",[e._v("copyMembers")]),e._v(" and")]),e._v(" "),o("ul",[o("li",[e._v("places the "),o("code",[e._v("job card")]),e._v(" from "),o("code",[e._v("initialize")]),e._v(" in front of the "),o("code",[e._v("JCL")]),e._v(" code")]),e._v(" "),o("li",[e._v("builds a "),o("code",[e._v("SELECT MEMBER=")]),e._v(" card for each entry in "),o("code",[e._v("copyMembers")])]),e._v(" "),o("li",[e._v("replaces the placeholders in the skeleton "),o("code",[e._v("JCL")]),e._v(" by the conrete values")]),e._v(" "),o("li",[e._v("returns the resulting "),o("code",[e._v("JCL")]),e._v("code")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("recieves the target DSN for the "),o("code",[e._v("DELETE")]),e._v(" job in "),o("code",[e._v("targetDsn")]),e._v(" and")]),e._v(" "),o("ul",[o("li",[e._v("places the "),o("code",[e._v("job card")]),e._v(" from "),o("code",[e._v("initialize")]),e._v(" in front of the "),o("code",[e._v("JCL")]),e._v(" code")]),e._v(" "),o("li",[e._v("adds the "),o("code",[e._v("DELETE")]),e._v(" skeleton code")]),e._v(" "),o("li",[e._v("replaces the placeholders in the skeleton "),o("code",[e._v("JCL")]),e._v(" by the conrete values")]),e._v(" "),o("li",[e._v("returns the resulting "),o("code",[e._v("JCL")]),e._v("code")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("receives a "),t("code",[this._v("fileName")]),this._v(" and")]),this._v(" "),t("ul",[t("li",[this._v("reads the corresponding file from the skeletons folder in the pipeline workspace")]),this._v(" "),t("li",[this._v("returns the content of the file as list of records")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"pipelineconfig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pipelineconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" PipelineConfig")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:".PipelineConfig#initialize"}},[t("code",[this._v("initialize()")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"#GitHelper"}},[t("code",[this._v("GitHelper")]),this._v(" class")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:".PipelineConfig#setServerConfig"}},[t("code",[this._v("setServerConfig()")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("ul",[t("li",[this._v("reads the pipeline configuration file "),t("code",[this._v("pipeline.config")]),this._v(", containing server URLs (e.g. Sonar, XL Release) etc.")]),this._v(" "),t("li",[this._v("extracts the values for the corresponding parameters")]),this._v(" "),t("li",[this._v("sets the parameters")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:".PipelineConfig#setTttGitConfig"}},[t("code",[this._v("setTttGitConfig()")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("ul",[t("li",[this._v("reads the pipeline configuration file "),t("code",[this._v("tttgit.config")]),this._v(", containing information about the GitHub repository storing the Topaz for Total Test projects")]),this._v(" "),t("li",[this._v("extracts the values for the corresponding parameters")]),this._v(" "),t("li",[this._v("sets the parameters")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:".PipelineConfig#setMailConfig"}},[t("code",[this._v("setMailConfig()")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("ul",[o("li",[e._v("loops though the list of "),o("code",[e._v("mailListLines")]),e._v(" containing the "),o("code",[e._v("TSO user:email")]),e._v(" pairs")]),e._v(" "),o("li",[e._v("turns the records into a "),o("code",[e._v("Map")])]),e._v(" "),o("li",[e._v("determines the email address for the owner of the ISPW set and sets the parameter "),o("code",[e._v("mailRecipient")]),e._v(" accordingly")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{href:".PipelineConfig#readConfigFile"}},[t("code",[this._v("readConfigFile(String fileName)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("uses an instance of the "),t("a",{attrs:{href:"#FileHelper"}},[t("code",[this._v("FileHelper")])]),this._v(" class to read the configuration files")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sonarhelper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sonarhelper","aria-hidden":"true"}},[this._v("#")]),this._v(" SonarHelper")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ttthelper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ttthelper","aria-hidden":"true"}},[this._v("#")]),this._v(" TttHelper")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("Instanciates a "),o("code",[e._v("JclSkeleton")]),e._v(" for later use by "),o("code",[e._v("loopThruScenarios()")]),e._v(".")]),e._v(" "),o("li",[e._v("Builds a list of downloaded COBOL sources and a list of downloaded "),o("code",[e._v(".testscenarios")]),e._v(".")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",[o("p",[e._v("loops through the "),o("code",[e._v(".testscenarios")]),e._v(" and for each scenario")]),e._v(" "),o("ul",[o("li",[e._v("determines if the scenario matches one of the COBOL programs")]),e._v(" "),o("li",[e._v("in that case")]),e._v(" "),o("li",[e._v("the job card of the corresponding runner jcl gets replaced by the configuration job card")]),e._v(" "),o("li",[e._v("the scenario gets executed")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("uses the JUnit plugin to display the unit test results on the pipeline dashboard.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("uses the Xpediter Code Coverage plugin to retrieve code coverage results from the Xpediter Code Coverage repository.")])])}],!1,null,null,null);t.default=i.exports}}]);