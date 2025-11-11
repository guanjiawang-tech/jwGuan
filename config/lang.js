const langConfig = {
  zh: {
    // 基本信息
    username: "关佳旺",
    language: "语言",
    english: "英文",
    chinese: "中文",
    university: "沈阳工学院",
    profession: "计算机科学与技术",
    
    // 导航菜单
    home: "首页",
    nav_education: "教育经历",
    nav_experience: "工作经历",
    projects: "项目经历",
    skills: "技术栈",
    resources: "资源",
    
    // 首页内容
    hero_desc: "热爱编程，专注于前端开发和全栈技术。拥有扎实的计算机基础知识和丰富的项目经验，致力于创造优秀的用户体验。",
    view_projects: "查看项目",
    view_skills: "技术栈",
    
    // 教育经历
    education: [
      {
        university: "沈阳工学院",
        period: "2018 - 2022",
        degree: "计算机科学与技术 本科",
        description: "主修计算机科学与技术专业，学习了数据结构、算法、数据库、网络编程等核心课程。在校期间积极参与各类编程竞赛和项目实践，培养了扎实的编程基础和解决问题的能力。"
      },
      {
        university: "示例高中",
        period: "2014 - 2018",
        degree: "理科班",
        description: "在高中期间专注于理科学习，培养了良好的逻辑思维能力和数学基础，为后续的计算机学习打下了坚实的基础。"
      }
    ],
    
    // 工作经历
    experience: [
      {
        company: "沈阳工学院 现代化技术服务中心",
        period: "2025.07 - 至今",
        position: "全栈开发工程师",
        description: "负责公司鸿蒙版《智慧沈工》开发工作，使用ArkTS Spring Boot等技术实现。参与产品需求分析、技术方案设计，并与后端团队协作完成项目开发。",
        skills: ["ArkTS", "Spring Boot", "Node.js"]
      },
      {
        company: "实习公司",
        period: "2021.06 - 2021.12",
        position: "前端开发实习生",
        description: "在实习期间参与了多个前端项目的开发，学习了现代前端开发技术栈，包括React、Vue.js等框架的使用，积累了丰富的项目经验。",
        skills: ["HTML/CSS", "JavaScript", "React"]
      }
    ],
    
    // 项目经历标题
    projects: "项目经历",
    // 项目列表
    projects_list: [
      {
        id: "project1",
        title: "电商管理系统",
        description: "基于React和Node.js开发的电商管理系统，包含商品管理、订单处理、用户管理等功能模块。采用前后端分离架构，使用MongoDB存储数据。",
        image: "./img/background2.jpg",
        techs: ["React", "Node.js", "MongoDB"]
      },
      {
        id: "project2",
        title: "个人博客系统",
        description: "使用Vue.js和Express开发的个人博客系统，支持文章发布、分类管理、评论功能。采用响应式设计，适配多种设备。",
        image: "./img/background3.jpg",
        techs: ["Vue.js", "Express", "MySQL"]
      },
      {
        id: "project3",
        title: "在线学习平台",
        description: "基于React和Node.js开发的在线学习平台，支持视频播放、课程管理、用户互动等功能，为学习者提供优质的在线教育体验。",
        image: "./img/background4.jpg",
        techs: ["React", "Node.js", "WebRTC"]
      }
    ],
    view_demo: "查看演示",
    view_code: "查看代码",
    
    // 技术栈标题
    frontend_skills: "前端技术",
    backend_skills: "后端技术",
    tools_skills: "开发工具",
    // 技术栈数组
    skills_list: [
      {
        category: "frontend_skills",
        items: [
          { name: "HTML5", icon: "fab fa-html5" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
          { name: "JavaScript", icon: "fab fa-js-square" },
          { name: "React", icon: "fab fa-react" },
          { name: "Vue.js", icon: "fab fa-vue" },
          { name: "Angular", icon: "fab fa-angular" },
          { name: "Sass", icon: "fab fa-sass" },
          { name: "Bootstrap", icon: "fab fa-bootstrap" }
        ]
      },
      {
        category: "backend_skills",
        items: [
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "Python", icon: "fab fa-python" },
          { name: "MySQL", icon: "fas fa-database" },
          { name: "MongoDB", icon: "fas fa-server" },
          { name: "Express", icon: "fas fa-code" },
          { name: "Django", icon: "fas fa-code" },
          { name: "Redis", icon: "fas fa-code" },
          { name: "PostgreSQL", icon: "fas fa-code" }
        ]
      },
      {
        category: "tools_skills",
        items: [
          { name: "Git", icon: "fab fa-git-alt" },
          { name: "Docker", icon: "fab fa-docker" },
          { name: "AWS", icon: "fab fa-aws" },
          { name: "VS Code", icon: "fas fa-code" },
          { name: "Webpack", icon: "fas fa-code" },
          { name: "Babel", icon: "fas fa-code" },
          { name: "Jest", icon: "fas fa-code" },
          { name: "ESLint", icon: "fas fa-code" }
        ]
      }
    ],
    
    // 资源页面
    learning_resources: "学习资源",
    tools_recommendations: "工具推荐",
    contact_info: "联系方式",
    download_resources: "下载资源",
    
    // 移动端菜单
    language: "语言"
  },
  en: {
    // 基本信息
    username: "J·Wang Guan",
    language: "Language",
    english: "EN",
    chinese: "CN",
    university: "ShenYang Institute Of Technology",
    profession: "Computer Science and Technology",
    
    // 导航菜单
    home: "Home",
    nav_education: "Education",
    nav_experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    resources: "Resources",
    
    // 首页内容
    hero_desc: "Passionate about programming, focusing on frontend development and full-stack technologies. With solid computer science foundation and rich project experience, committed to creating excellent user experiences.",
    view_projects: "View Projects",
    view_skills: "Skills",
    
    // 教育经历
    education: [
      {
        university: "ShenYang Institute Of Technology",
        period: "2018 - 2022",
        degree: "Bachelor of Computer Science and Technology",
        description: "Majoring in Computer Science and Technology, studied core courses including data structures, algorithms, databases, and network programming. Actively participated in programming competitions and project practices during university, developing solid programming foundation and problem-solving abilities."
      },
      {
        university: "Example High School",
        period: "2014 - 2018",
        degree: "Science Class",
        description: "Focused on science subjects in high school, developed good logical thinking skills and mathematical foundation, laying a solid groundwork for subsequent computer studies."
      }
    ],
    
    // 工作经历
    experience: [
      {
        company: "Example Tech Company",
        period: "2022.06 - Present",
        position: "Frontend Developer",
        description: "Responsible for the development of the HarmonyOS version of 'Zhi Hui Shen Gong APP', using technologies such as ArkTS and Spring Boot. Participated in product requirement analysis, technical solution design, and collaborated with the backend team to complete the project development.",
        skills: ["ArkTS", "Spring Boot", "Node.js"]
      },
      {
        company: "Internship Company",
        period: "2021.06 - 2021.12",
        position: "Frontend Development Intern",
        description: "During the internship, participated in the development of multiple frontend projects, learned modern frontend development technology stack, including React, Vue.js and other frameworks, accumulated rich project experience.",
        skills: ["HTML/CSS", "JavaScript", "React"]
      }
    ],
    
    // 项目经历标题
    projects: "Projects",
    // 项目列表
    projects_list: [
      {
        id: "project1",
        title: "E-commerce Management System",
        description: "E-commerce management system developed with React and Node.js, including product management, order processing, user management and other functional modules. Adopts frontend-backend separation architecture and uses MongoDB for data storage.",
        image: "./img/background2.jpg",
        techs: ["React", "Node.js", "MongoDB"]
      },
      {
        id: "project2",
        title: "Personal Blog System",
        description: "Personal blog system developed with Vue.js and Express, supporting article publishing, category management, and comment functionality. Features responsive design and adapts to multiple devices.",
        image: "./img/background3.jpg",
        techs: ["Vue.js", "Express", "MySQL"]
      },
      {
        id: "project3",
        title: "Online Learning Platform",
        description: "Online learning platform developed with React and Node.js, supporting video playback, course management, and user interaction features. Provides quality online educational experiences for learners.",
        image: "./img/background4.jpg",
        techs: ["React", "Node.js", "WebRTC"]
      }
    ],
    view_demo: "View Demo",
    view_code: "View Code",
    
    // 技术栈标题
    frontend_skills: "Frontend Technologies",
    backend_skills: "Backend Technologies",
    tools_skills: "Development Tools",
    // 技术栈数组
    skills_list: [
      {
        category: "frontend_skills",
        items: [
          { name: "HTML5", icon: "fab fa-html5" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
          { name: "JavaScript", icon: "fab fa-js-square" },
          { name: "React", icon: "fab fa-react" },
          { name: "Vue.js", icon: "fab fa-vue" },
          { name: "Angular", icon: "fab fa-angular" },
          { name: "Sass", icon: "fab fa-sass" },
          { name: "Bootstrap", icon: "fab fa-bootstrap" }
        ]
      },
      {
        category: "backend_skills",
        items: [
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "Python", icon: "fab fa-python" },
          { name: "MySQL", icon: "fas fa-database" },
          { name: "MongoDB", icon: "fas fa-server" },
          { name: "Express", icon: "fas fa-code" },
          { name: "Django", icon: "fas fa-code" },
          { name: "Redis", icon: "fas fa-code" },
          { name: "PostgreSQL", icon: "fas fa-code" }
        ]
      },
      {
        category: "tools_skills",
        items: [
          { name: "Git", icon: "fab fa-git-alt" },
          { name: "Docker", icon: "fab fa-docker" },
          { name: "AWS", icon: "fab fa-aws" },
          { name: "VS Code", icon: "fas fa-code" },
          { name: "Webpack", icon: "fas fa-code" },
          { name: "Babel", icon: "fas fa-code" },
          { name: "Jest", icon: "fas fa-code" },
          { name: "ESLint", icon: "fas fa-code" }
        ]
      }
    ],
    
    // 资源页面
    learning_resources: "Learning Resources",
    tools_recommendations: "Tools Recommendations",
    contact_info: "Contact Information",
    download_resources: "Download Resources",
    
    // 移动端菜单
    language: "Language"
  }
};