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
    hero_desc: "热爱编程，专注于前端开发和全栈技术。对于新兴技术学习能力强，喜欢各个国家民族的文学作品。",
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
        id: "project4",
        title: "《沈工智校》 | 上线项目 | 实习项目 | 团队项目",
        description: `根据现有的《沈工智校》移动端(CloudAPI)开发鸿蒙版的项目，已经成功上线到华为应用商城\n`,
        images: ["./img/project4_1.jpg", "./img/project4_2.jpg", "./img/project4_3.jpg", "./img/project4_4.jpg"],
        techs: ["ArkTS", "HarmonyOS", "Spring Boot", "Oracle"],
        demo_text: "展示部分公开页面以及上线图片",
        code_text: "其他公司的知识产权无法展示源代码，有问题请跳转到资源发邮箱联系我"
      },
      {
        id: "project3",
        title: "Smart Learning 智慧教学平台 | 全栈 | 在校项目 | 毕业设计 | 开发中",
        description: `基于Spring AI技术栈开发的智慧教学平台，集成了智能题库生成、在线考试评测、个性化学习推荐等功能，提升教学效率和学习体验。\n`,
        images: ["./img/background2.jpg", "./img/background5.jpg", "./img/background6.jpg"],
        techs: ["ArkTS", "React", "Spring AI", "Spring Boot", "MongoDB"],
        demo_text: "项目正在开发中，预计2026年7月完成演示。",
        code_text: "代码目前在私有仓库中，完成后并且完成毕业将开放部分核心模块代码。"
      },
      {
        id: "project2",
        title: "助老志愿者服务平台 | 全栈 | 在校项目 | 省级奖项",
        description: `获得
        辽宁省教育厅办公室2024年国家及省级大学生创新训练计划立项 省级立项 \n
        2024 年辽宁省普通高等学校大学生微信小程序应用开发大赛 省级二等奖 \n
        2024 年辽宁省普通高等学校大学生移动应用开发大赛 省级三等奖 等多项奖项。\n`,
        images: ["./img/project2_1.png", "./img/project2_2.png", "./img/project2_3.png", "./img/project2_4.png"],
        techs: ["Vue.js", "uni-app", "Spring MVC", "Node.js", "fast API", "MySQL"],
        demo_text: "平台演示视频链接：https://pan.baidu.com/s/1biZdugpjBvYtdoK3JhoX2Q?pwd=5239",
        code_text: "代码目前在私有仓库中，预计2025-12-01开放"
      },
      {
        id: "project1",
        title: "个人博客系统",
        description: "使用H5原生开发的个人博客系统，静态资源页面。",
        images: ["./img/background3.jpg", "./img/background4.jpg", "./img/background2.jpg"],
        techs: ["HTML5", "CSS3", "JavaScript"],
        demo_text: "本项目为静态页面，长期维护并展示我的个人信息，需要可GitHub自提",
        code_text: "本项目为静态页面，长期维护并展示我的个人信息，需要可GitHub自提:https://github.com/guanjiawang-tech/jwGuan.git"
      }
    ],
    view_demo: "查看演示",
    view_code: "查看代码",
    
    // 技术栈标题
    frontend_skills: "前端框架",
    backend_skills: "后端框架",
    tools_skills: "开发语言及技术",
    // 技术栈数组
    skills_list: [
      {
        category: "frontend_skills",
        items: [
          { name: "React", icon: "fab fa-react" },
          { name: "Vue.js", icon: "fab fa-vuejs" },
          { name: "React Native", icon: "fab fa-react" },
          { name: "Uni-APP", icon: "fa-solid fa-code" },
          { name: "Android(Kotlin)", icon: "fab fa-android" },
          { name: "Harmony(ArkTS)", icon: "fa-solid fa-code" },
        ]
      },
      {
        category: "backend_skills",
        items: [
          { name: "Spring AI", icon: "fa-brands fa-java" },
          { name: "Spring Boot", icon: "fa-brands fa-java" },
          { name: "Spring MVC", icon: "fa-brands fa-java" },
          { name: "Node.js", icon: "fab fa-node-js" },
        ]
      },
      {
        category: "tools_skills",
        items: [
          { name: "HTML5", icon: "fab fa-html5" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
          { name: "Java", icon: "fa-brands fa-java" },
          { name: "JavaScript", icon: "fab fa-js-square" },
          { name: "TypeScript", icon: "fa-regular fa-file-code" },
          { name: "Git", icon: "fab fa-git-alt" },
          { name: "MySQL", icon: "fas fa-database" },
          { name: "MongoDB", icon: "fas fa-server" },
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
  ja: {
    // 基本情報
    username: "関佳旺",
    language: "言語",
    english: "英語",
    chinese: "中国語",
    university: "瀋陽工学院",
    profession: "コンピュータサイエンス・テクノロジー",
    
    // ナビゲーションメニュー
    home: "ホーム",
    nav_education: "教育歴",
    nav_experience: "職務経験",
    projects: "プロジェクト経験",
    skills: "スキル",
    resources: "リソース",
    
    // ホームページコンテンツ
    hero_desc: "プログラミングを熱愛し、フロントエンド開発とフルスタック技術に特化。純粋なコンピュータ科学の基礎知識と豊富なプロジェクト経験を持ち、優れたユーザーエクスペリエンスの創造に取り組んでいます。",
    view_projects: "プロジェクトを見る",
    view_skills: "スキル",
    
    // 教育歴
    education: [
      {
        university: "瀋陽工学院",
        period: "2018 - 2022",
        degree: "コンピュータサイエンス・テクノロジー 学士",
        description: "コンピュータサイエンス・テクノロジーを専攻し、データ構造、アルゴリズム、データベース、ネットワークプログラミングなどの中核科目を学びました。大学在学中は様々なプログラミングコンテストやプロジェクト実践に積極的に参加し、堅牢なプログラミングの基礎と問題解決能力を養いました。"
      }
    ],
    
    // 職務経験
    experience: [
      {
        company: "瀋陽工学院 現代化技術サービスセンター",
        period: "2025.07 - 現在",
        position: "フルスタック開発エンジニア",
        description: "HarmonyOS版『スマート瀋陽工学』の開発に参加し、ArkTS、Spring Bootなどの技術を使用して実装。芸術団管理システムの開発にも参加し、Vue、Spring Bootなどの技術を使用して実装。",
        skills: ["TypeScript", "JavaScript", "Spring Boot", "Vue3.js", "React", "MySQL"]
      },
      {
        company: "瀋陽工学院 ファーウェイ産業学院",
        period: "2025.03 - 2025.06",
        position: "フロントエンド開発インターン",
        description: "インターンシップ中、精神健康教育プラットフォームのフロントエンドプロジェクトのページ開発に参加し、現代的なフロントエンド開発技術スタック、ArkTSフレームワークを学び、プロジェクト経験を積みました。",
        skills: ["ArkTS", "AJAX", "TypeScript"]
      }
    ],
    
    // プロジェクト経験タイトル
    projects: "プロジェクト経験",
    // プロジェクトリスト
    projects_list: [
      {
        id: "project4",
        title: "「沈工智校」 | リリースプロジェクト | インターンシッププロジェクト | チームプロジェクト",
        description: `既存の「沈工智校」モバイル版(CloudAPI)に基づいてHarmonyOS版を開発し、华为アプリストアに正常にリリースされました\n`,
        images: ["./img/project4_1.jpg", "./img/project4_2.jpg", "./img/project4_3.jpg", "./img/project4_4.jpg"],
        techs: ["ArkTS", "HarmonyOS", "Spring Boot", "Oracle"],
        demo_text: "一部の公開ページとリリース画像を展示します",
        code_text: "他社の知的財産権のため、ソースコードを展示できません。質問がある場合はリソースページからメールでお問い合わせください"
      },
      {
        id: "project3",
        title: "Smart Learning スマート教育プラットフォーム | フルスタック | 大学プロジェクト | 卒業設計 | 開発中",
        description: `Spring AI技術スタックに基づいて開発されたスマート教育プラットフォームで、智能問題バンク生成、オンラインテスト評価、個別化学習推奨などの機能を統合し、教育効率と学習体験を向上させます。\n`,
        images: ["./img/background2.jpg", "./img/background5.jpg", "./img/background6.jpg"],
        techs: ["ArkTS", "React", "Spring AI", "Spring Boot", "MongoDB"],
        demo_text: "プロジェクトは開発中で、2026年7月にデモが完成予定です。",
        code_text: "コードは現在プライベートリポジトリにあり、完成後に卒業を終えてから一部のコアモジュールのコードを公開する予定です。"
      },
      {
        id: "project2",
        title: "高齢者ボランティアサービスプラットフォーム | フルスタック | 大学プロジェクト | 省レベル賞",
        description: `遼寧省教育庁弁公室2024年国家及び省レベル大学生革新訓練計画立案 省レベル立案 \n
        2024年遼寧省普通高等学校大学生WeChatミニプログラムアプリケーション開発コンテスト 省レベル二等賞 \n
        2024年遼寧省普通高等学校大学生モバイルアプリケーション開発コンテスト 省レベル三等賞 など複数の賞を受賞。\n`,
        images: ["./img/project2_1.png", "./img/project2_2.png", "./img/project2_3.png", "./img/project2_4.png"],
        techs: ["Vue.js", "uni-app", "Spring MVC", "Node.js", "fast API", "MySQL"],
        demo_text: "平台デモ動画リンク：https://pan.baidu.com/s/1biZdugpjBvYtdoK3JhoX2Q?pwd=5239",
        code_text: "フロントエンドはVue.js + uni-appで構築され、バックエンドはSpring MVC + Node.jsアーキテクチャを採用し、データベースにはMySQLを使用しています。"
      },
      {
        id: "project1",
        title: "パーソナルブログシステム",
        description: "H5ネイティブで開発されたパーソナルブログシステム、静的リソースページ。",
        images: ["./img/background3.jpg", "./img/background4.jpg", "./img/background2.jpg"],
        techs: ["HTML5", "CSS3", "JavaScript"],
        demo_text: "記事の公開、カテゴリ管理、コメントインタラクションなどの基本的なブログ機能をサポートしています。",
        code_text: "フロントエンドのみで実装され、HTML5セマンティックタグを使用し、CSS3でレスポンシブレイアウトを実現し、JavaScriptでインタラクティブ機能を実装しています。"
      }
    ],
    view_demo: "デモを見る",
    view_code: "コードを見る",
    
    // スキルタイトル
    frontend_skills: "フロントエンド技術",
    backend_skills: "バックエンド技術",
    tools_skills: "開発言語と技術",
    // スキルリスト
    skills_list: [
      {
        category: "frontend_skills",
        items: [
          { name: "React", icon: "fab fa-react" },
          { name: "Vue.js", icon: "fab fa-vuejs" },
          { name: "React Native", icon: "fab fa-react" },
          { name: "Uni-APP", icon: "fa-solid fa-code" },
          { name: "Android(Kotlin)", icon: "fab fa-android" },
          { name: "Harmony(ArkTS)", icon: "fa-solid fa-code" },
        ]
      },
      {
        category: "backend_skills",
        items: [
          { name: "Spring AI", icon: "fa-brands fa-java" },
          { name: "Spring Boot", icon: "fa-brands fa-java" },
          { name: "Spring MVC", icon: "fa-brands fa-java" },
          { name: "Node.js", icon: "fab fa-node-js" },
        ]
      },
      {
        category: "tools_skills",
        items: [
          { name: "HTML5", icon: "fab fa-html5" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
          { name: "Java", icon: "fa-brands fa-java" },
          { name: "JavaScript", icon: "fab fa-js-square" },
          { name: "TypeScript", icon: "fa-regular fa-file-code" },
          { name: "Git", icon: "fab fa-git-alt" },
          { name: "MySQL", icon: "fas fa-database" },
          { name: "MongoDB", icon: "fas fa-server" },
        ]
      }
    ],
    
    // リソースページ
    learning_resources: "学習リソース",
    tools_recommendations: "ツール推奨",
    contact_info: "連絡先情報",
    download_resources: "リソースをダウンロード",
    
    // モバイルメニュー
    language: "言語"
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
        id: "project4",
        title: "Shen Gong Zhi Xiao | Released Project | Internship Project | Team Project",
        description: "Developed a HarmonyOS version based on the existing ‘Shen Gong Zhi Xiao’ mobile version (CloudAPI), successfully released on Huawei AppGallery\n",
        images: ["./img/project4_1.jpg", "./img/project4_2.jpg", "./img/project4_3.jpg", "./img/project4_4.jpg"],
        techs: ["ArkTS", "HarmonyOS", "Spring Boot", "Oracle"],
        demo_text: "Display some public pages and release images",
        code_text: "Cannot show source code due to other company's intellectual property rights. Please contact me via email from the resources page if you have any questions"
      },
      {
        id: "project3",
        title: "Smart Learning Platform | Full Stack | School Project | Graduation Design | In Development",
        description: "Intelligent teaching platform developed based on Spring AI technology stack, integrating smart question bank generation, online exam evaluation, personalized learning recommendations and other functions to enhance teaching efficiency and learning experience.",
        images: ["./img/background2.jpg", "./img/background5.jpg", "./img/background6.jpg"],
        techs: ["ArkTS", "React", "Spring AI", "Spring Boot", "MongoDB"],
        demo_text: "The project is under development, and the demo is expected to be completed in July 2026.",
        code_text: "The code is currently in a private repository, and after completion and graduation, some core module code will be opened."
      },
      {
        id: "project2",
        title: "Elderly Volunteer Service Platform | Full Stack | School Project | Provincial Awards",
        description: "Awarded provincial-level project approval in the 2024 National and Provincial College Student Innovation Training Program by Liaoning Provincial Department of Education Office, provincial second prize in the 2024 Liaoning Province College Student WeChat Mini Program Application Development Competition, and provincial third prize in the 2024 Liaoning Province College Student Mobile Application Development Competition, among other awards.",
        images: ["./img/project2_1.png", "./img/project2_2.png", "./img/project2_3.png", "./img/project2_4.png"],
        techs: ["Vue.js", "uni-app", "Spring MVC", "Node.js", "fast API", "MySQL"],
        demo_text: "Platform demo video link：https://pan.baidu.com/s/1biZdugpjBvYtdoK3JhoX2Q?pwd=5239",
        code_text: "The frontend is built with Vue.js + uni-app, the backend adopts Spring MVC + Node.js architecture, and MySQL is used for the database."
      },
      {
        id: "project1",
        title: "Personal Blog System",
        description: "Personal blog system developed with native H5, static resource page.",
        image: "./img/background3.jpg",
        techs: ["HTML5", "CSS3", "JavaScript"],
        demo_text: "Supports basic blog functions such as article publishing, category management, and comment interaction.",
        code_text: "Implemented with pure frontend, using HTML5 semantic tags, CSS3 for responsive layout, and JavaScript for interactive functions."
      }
    ],
    view_demo: "View Demo",
    view_code: "View Code",
    
    // 技术栈标题
    frontend_skills: "Front-end framework",
    backend_skills: "Back-end framework",
    tools_skills: "Programming language and technologies",
    // 技术栈数组
    skills_list: [
      {
        category: "frontend_skills",
        items: [
          { name: "React", icon: "fab fa-react" },
          { name: "Vue.js", icon: "fab fa-vuejs" },
          { name: "React Native", icon: "fab fa-react" },
          { name: "Uni-APP", icon: "fa-solid fa-code" },
          { name: "Android(Kotlin)", icon: "fab fa-android" },
          { name: "Harmony(ArkTS)", icon: "fa-solid fa-code" },
        ]
      },
      {
        category: "backend_skills",
        items: [
          { name: "Spring AI", icon: "fa-brands fa-java" },
          { name: "Spring Boot", icon: "fa-brands fa-java" },
          { name: "Spring MVC", icon: "fa-brands fa-java" },
          { name: "Node.js", icon: "fab fa-node-js" },
        ]
      },
      {
        category: "tools_skills",
        items: [
          { name: "HTML5", icon: "fab fa-html5" },
          { name: "CSS3", icon: "fab fa-css3-alt" },
          { name: "Java", icon: "fa-brands fa-java" },
          { name: "JavaScript", icon: "fab fa-js-square" },
          { name: "TypeScript", icon: "fa-regular fa-file-code" },
          { name: "Git", icon: "fab fa-git-alt" },
          { name: "MySQL", icon: "fas fa-database" },
          { name: "MongoDB", icon: "fas fa-server" },
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