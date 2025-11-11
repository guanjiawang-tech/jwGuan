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
      }
    ],
    
    // 工作经历
    experience: [
      {
        company: "沈阳工学院 现代化技术服务中心",
        period: "2025.07 - 至今",
        position: "全栈开发工程师",
        description: "参与鸿蒙版《智慧沈工》开发工作，使用ArkTS Spring Boot等技术实现。参与艺术团管理系统开发工作，使用Vue Spring Boot等技术实现。",
        skills: ["TypeScript", "JavaScript", "Spring Boot", "Vue3.js", "React", "MySQL"]
      },
      {
        company: "沈阳工学院 华为产业学院",
        period: "2025.03 - 2025.06",
        position: "前端开发实习生",
        description: "在实习期间参与了心理健康教育平台前端项目的页面开发工作，学习了现代前端开发技术栈，ArkTS框架，积累了项目经验。",
        skills: ["ArkTS", "AJAX", "TypeScript"]
      }
    ],
    
    // 项目经历标题
    projects: "项目经历",
    // 项目列表
    projects_list: [
      {
        id: "project3",
        title: "Smart Learning 智慧教学平台 | 全栈 | 在校项目 | 毕业设计 | 开发中",
        description: `基于Spring AI技术栈开发的智慧教学平台，集成了智能题库生成、在线考试评测、个性化学习推荐等功能，提升教学效率和学习体验。\n`,
        image: "./img/background2.jpg",
        techs: ["ArkTS", "React", "Spring AI", "Spring Boot", "MongoDB"]
      },
      {
        id: "project2",
        title: "助老志愿者服务平台 | 全栈 | 在校项目 | 省级奖项",
        description: `获得
        辽宁省教育厅办公室2024年国家及省级大学生创新训练计划立项 省级立项 \n
        2024 年辽宁省普通高等学校大学生微信小程序应用开发大赛 省级二等奖 \n
        2024 年辽宁省普通高等学校大学生移动应用开发大赛 省级三等奖 等多项奖项。\n`,
        image: "./img/background2.jpg",
        techs: ["Vue.js", "uni-app", "Spring MVC", "Node.js", "fast API", "MySQL"]
      },
      {
        id: "project1",
        title: "个人博客系统",
        description: "使用H5原生开发的个人博客系统，静态资源页面。",
        image: "./img/background3.jpg",
        techs: ["HTML5", "CSS3", "JavaScript"]
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
      }
    ],
    
    // 工作经历
    experience: [
      {
        company: "Shenyang Institute of Technology Modern Technology Service Center",
        period: "2025.07 - Present",
        position: "Full Stack Developer",
        description: "Participated in the development of HarmonyOS version of 'Smart Shenyang Institute of Technology', implemented using ArkTS, Spring Boot and other technologies. Participated in the development of art troupe management system, implemented using Vue and Spring Boot technologies.",
        skills: ["TypeScript", "JavaScript", "Spring Boot", "Vue3.js", "React", "MySQL"]
      },
      {
        company: "Shenyang Institute of Technology Huawei Industry Academy",
        period: "2025.03 - 2025.06",
        position: "Frontend Development Intern",
        description: "During the internship, participated in the page development of the mental health education platform frontend project, learned modern frontend development technology stack, ArkTS framework, and accumulated project experience.",
        skills: ["ArkTS", "AJAX", "TypeScript"]
      }
    ],
    
    // 项目经历标题
    projects: "Projects",
    // 项目列表
    projects_list: [
      {
        id: "project3",
        title: "Smart Learning Platform | Full Stack | School Project | Graduation Design | In Development",
        description: "Intelligent teaching platform developed based on Spring AI technology stack, integrating smart question bank generation, online exam evaluation, personalized learning recommendations and other functions to enhance teaching efficiency and learning experience.",
        image: "./img/background2.jpg",
        techs: ["ArkTS", "React", "Spring AI", "Spring Boot", "MongoDB"]
      },
      {
        id: "project2",
        title: "Elderly Volunteer Service Platform | Full Stack | School Project | Provincial Awards",
        description: "Awarded provincial-level project approval in the 2024 National and Provincial College Student Innovation Training Program by Liaoning Provincial Department of Education Office, provincial second prize in the 2024 Liaoning Province College Student WeChat Mini Program Application Development Competition, and provincial third prize in the 2024 Liaoning Province College Student Mobile Application Development Competition, among other awards.",
        image: "./img/background2.jpg",
        techs: ["Vue.js", "uni-app", "Spring MVC", "Node.js", "fast API", "MySQL"]
      },
      {
        id: "project1",
        title: "Personal Blog System",
        description: "Personal blog system developed with native H5, static resource page.",
        image: "./img/background3.jpg",
        techs: ["HTML5", "CSS3", "JavaScript"]
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