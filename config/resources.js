// 资源列表配置文件
const resources = {
  // 开发资源列表
  developmentResources: [
    {
      id: 'resource1',
      name: 'VS Code 官方网站',
      url: 'https://code.visualstudio.com/',
      description: 'Visual Studio Code 官方下载和文档'
    },
    {
      id: 'resource2',
      name: 'GitHub',
      url: 'https://github.com/',
      description: '代码托管和版本控制系统'
    },
    {
      id: 'resource3',
      name: 'npm',
      url: 'https://www.npmjs.com/',
      description: 'Node.js 包管理工具'
    },
    {
      id: 'resource4',
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/',
      description: 'Web 开发技术文档'
    },
    {
      id: 'resource5',
      name: 'React 官方文档',
      url: 'https://react.dev/',
      description: 'React 框架官方文档'
    }
  ],
  
  // 技术文档列表
  technicalDocuments: [
    {
      id: 'doc1',
      name: 'JavaScript 学习笔记',
      file: 'JavaScript学习笔记.pdf',
      description: 'JavaScript 基础到高级知识点总结'
    },
    {
      id: 'doc2',
      name: 'React 项目实践指南',
      file: 'React项目实践指南.pdf',
      description: 'React 框架实战项目开发指南'
    },
    {
      id: 'doc3',
      name: '前端性能优化手册',
      file: '前端性能优化手册.pdf',
      description: 'Web前端性能优化最佳实践'
    }
  ]
};

// 将resources对象挂载到window对象，使其成为全局变量
window.resources = resources;