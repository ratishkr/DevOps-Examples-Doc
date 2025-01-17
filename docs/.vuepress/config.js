module.exports = {
  title: "Mainframe DevOps",
  //description: "Mainframe DevOps",
  ga: 'UA-139353569-1',
  themeConfig: {
    logo: '/compuware_logo.png',
    //displayAllHeaders: true,
    sidebarDepth: 1,
    nav: 
    [
      { 
        text: 'Pipelines',
        items: 
        [
          { 
            text: 'Getting Started',
            items: 
            [
              { 
                text: 'Getting started',
                link: '/pipelines/'
              },
              { 
                text: 'Basic Pipeline Scenario',
                link: '/pipelines/basic_scenario'
              },
              { 
                text: 'Basic Pipeline Example',
                link: '/pipelines/basic_example_pipeline'
              },
              { 
                text: 'Alternatives to Jenkins',
                link: '/pipelines/alternatives_to_jenkins'
              }
            ]
          },
          { 
            text: 'Pipeline Snippets',
            items: 
            [
              { 
                text: 'All Snippets',
                link: '/pipeline_snippets/'
              },
              { 
                text: 'Pushing test results to GitHub',
                link: '/pipeline_snippets/push_ttt_results_to_git'
              }
            ]
          },
          { 
            text: 'Advanced Pipelines',
            items: 
            [
              { 
                text: 'Shared Library Examples',
                link: '/advanced_pipelines/'
              },
              { 
                text: 'Elaborate Scenario',
                link: '/advanced_pipelines/elaborate_scenario'
              },
              { text: 'Git to ISPW Synchronization',
                link: '/advanced_pipelines/git_ispw_synchronization'
              },
              // { 
              //   text: 'Helper Classes',
              //   link: '/advanced_pipelines/helper_classes/'
              // },
              { 
                text: 'Groovy Tips',
                link: '/advanced_pipelines/jenkins_groovy'
              }
            ]
          }
        ]
      },
      { 
        text: 'Configuration',
        items: 
        [
          {
            text: 'Overview',
            link: '/tool_configuration/'
          },
          {
            text: 'Jenkins',
            items:
            [
              { 
                text: 'Introduction to Jenkins Plugins',
                link: '/tool_configuration/plugins'
              },
              { 
                text: 'Jenkins Configuration',
                link: '/tool_configuration/Jenkins_config'
              },
              { 
                text: 'Using Jenkins Plugins',
                link: '/tool_configuration/jenkins_usage'
              }
            ]
          },
          { 
            text: ' BMC Compuware',
            items:
            [
              { 
                text: 'CES Webhook Configuration',
                link: '/tool_configuration/webhook_setup'
              },
              { 
                text: 'CES Access Token Configuration',
                link: '/tool_configuration/CES_credentials_token'
              }
            ]
          }
        ] 
      },
      { 
        text: 'Guides',
        items: 
        [
          {
            text: 'Topaz for Total Test',
            items:
            [
              { 
                text: 'Total Test Best Practices',
                link: '/guidelines/ttt/ttt_best_practices'
              },
              { 
                text: 'Using Total Test Unit Test',
                link: '/guidelines/ttt/ttt_scenario'
              }
            ]
          },
          {
            text: 'ISPW',
            items:
            [
              { 
                text: 'ISPW Setup',
                link: '/guidelines/ispw/ispw_setup'
              },
              { 
                text: 'SonarLint and ISPW Setup',
                link: '/guidelines/ispw/ispw_projects' 
              }
            ]
          },
          {
            text: 'Git and ISPW',
            items:
            [
              { 
                text: 'GitHub Workflow and ISPW Integration Tutorial',
                link: '/guidelines/ispw/GitHub_to_ISPW_Integration_Tutorial' 
              },    
              { 
                text: 'Git to ISPW Integration Tutorial',
                link: '/guidelines/ispw/GIT_to_ISPW_Integration_Tutorial' 
              },
              { 
                text: 'Git to ISPW Integration - The ISPW YAML Configuration File',
                link: '/guidelines/ispw/Git to ISPW Integration - The ISPW YAML Configuration File' 
              }
            ]
          },
          {
            text: 'Azure DevOps',
            items:
            [
              { 
                text: 'Setting up Azure DevOps Pipelines',
                link: '/guidelines/azure_devops/azure_devops_pipeline'
              },
              {
                text: 'Powershell scripts',
                link: '/guidelines/azure_devops/powershell_scripts'
              }
            ]
          }
        ]
      },  
      { 
        text: 'APIs',
        items: 
        [
          {
            text: 'REST APIs',
            items: 
            [
              {
                text: 'Topaz Rest APIs',
                link: '/apis/rest_api_topaz'
              },
              {
                text: 'Topaz Total Test Rest APIs',
                link: '/apis/rest_api_ttt'
              },
              {
                text: 'ISPW Rest APIs',
                link: '/apis/rest_api_ispw'
              }
            ]
          },
          {
            text: 'Topaz CLI',
            items: [
              { 
                text: 'Topaz CLI',            
                link: '/apis/topaz_cli'
              }
            ]
          },
          {
            text: 'Topaz Java APIs',
            items: [
            { 
              text: 'Topaz Java API',            
              link: '/apis/topaz_api'
            },
            { 
              text: 'Topaz Workbench SDK',            
              link: '/apis/topaz_workbench_sdk'
            },
            { 
              text: 'Topaz Java API Code Examples',            
              link: '/apis/topaz_workbench_api_code_snippets'
            }
          ]
        },
          {
            text: 'Use cases',
            items: [
              { 
                text: 'Developing a Topaz Workbench Passticket Extension',            
                link: '/apis/passticket'
              }
            ]
          }
        ] 
      }
    ],
    sidebar: {
      '/pipelines/': [
        '',  
        'basic_scenario',
        'basic_example_pipeline',
        'alternatives_to_jenkins'
      ],
      '/guidelines/ttt/': [
        'ttt_best_practices',
        'ttt_scenario'
      ],
      '/guidelines/ispw/': [ 
        'ispw_setup',
        'ispw_projects',
        'GitHub_to_ISPW_Integration_Tutorial',
	      'GIT_to_ISPW_Integration_Tutorial',
        'Git to ISPW Integration - The ISPW YAML Configuration File',
      ],
      '/guidelines/azure_devops/': [
        'azure_devops_pipeline',
        'powershell_scripts'
      ],            
      '/advanced_pipelines/': [ 
        '',
        'coding_schared_lib_scripts',
        'setup',
        'elaborate_scenario',                
        'git_ispw_synchronization',
        'config_files',
        'parameters',
//        'helper_classes/',
        'jenkins_groovy'
      ],
      '/pipeline_snippets/': [ 
        '',
        'push_ttt_results_to_git'
      ],
      '/tool_configuration/': [
        '',
        'plugins',
        'Jenkins_config',
        'jenkins_usage',
        'webhook_setup',
        'CES_credentials_token'
      ],
      '/apis/': [
          'rest_api_topaz',
          'rest_api_ttt',
          'rest_api_ispw',
          'topaz_cli',
          'topaz_api',
          'topaz_workbench_sdk',
          'topaz_workbench_api_code_snippets',
          'passticket'
      ]
    }
  }
}
