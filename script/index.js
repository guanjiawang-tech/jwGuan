let currentLang = 'zh'; // 默认语言
let currentSection = 'home'; // 当前激活的section

// 设置页面文本内容
function setLanguage(lang) {
  const config = langConfig[lang];
  // 确保config存在
  if (!config) return;
  
  // 首先设置所有带有data-lang属性的元素
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    // 直接从配置中获取值，但跳过数组属性
    if (key !== 'education' && key !== 'experience' && key !== 'projects_list' && key !== 'skills_list' && config[key] !== undefined) {
      // 确保值不是对象或数组，避免显示[object Object]
      if (typeof config[key] !== 'object' || config[key] === null) {
        element.textContent = config[key];
      }
    }
  });
  
  // 特殊处理教育经历页面 - 动态渲染时间线
  const educationSection = document.getElementById('education');
  if (educationSection && config.education && Array.isArray(config.education)) {
    const timelineContainer = educationSection.querySelector('.timeline');
    if (timelineContainer) {
      // 清空现有内容，但保留section-title
      timelineContainer.innerHTML = '';
      
      // 遍历教育经历数组，动态创建时间线项
      config.education.forEach((edu, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>${edu.university}</h3>
            <p class="timeline-period">${edu.period}</p>
            <p class="timeline-degree">${edu.degree}</p>
            <p class="timeline-description">${edu.description}</p>
          </div>
        `;
        timelineContainer.appendChild(timelineItem);
      });
    }
  }
  
  // 特殊处理工作经历页面 - 动态渲染工作经历卡片
  const experienceSection = document.getElementById('experience');
  if (experienceSection && config.experience && Array.isArray(config.experience)) {
    const experienceGrid = experienceSection.querySelector('.experience-grid');
    if (experienceGrid) {
      // 清空现有内容，但保留section-title
      experienceGrid.innerHTML = '';
      
      // 遍历工作经历数组，动态创建工作经历卡片
      config.experience.forEach((exp, index) => {
        const experienceCard = document.createElement('div');
        experienceCard.className = 'experience-card';
        
        // 构建技能标签HTML
        let skillsHTML = '';
        if (exp.skills && Array.isArray(exp.skills)) {
          exp.skills.forEach(skill => {
            skillsHTML += `<span class="skill-tag">${skill}</span>`;
          });
        }
        
        experienceCard.innerHTML = `
          <div class="card-header">
            <h3>${exp.company}</h3>
            <span class="card-period">${exp.period}</span>
          </div>
          <div class="card-position">${exp.position}</div>
          <div class="card-description">${exp.description}</div>
          <div class="card-skills">
            ${skillsHTML}
          </div>
        `;
        experienceGrid.appendChild(experienceCard);
      });
    }
  }
  
  // 特殊处理项目经历页面 - 动态渲染项目卡片
  const projectsSection = document.getElementById('projects');
  if (projectsSection && config.projects_list && Array.isArray(config.projects_list)) {
    const projectsGrid = projectsSection.querySelector('.projects-grid');
    if (projectsGrid) {
      // 清空现有内容，但保留section-title
      projectsGrid.innerHTML = '';
      
      // 遍历项目数组，动态创建项目卡片
      config.projects_list.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // 构建技术标签HTML
        let techsHTML = '';
        if (project.techs && Array.isArray(project.techs)) {
          project.techs.forEach(tech => {
            techsHTML += `<span class="tech-tag">${tech}</span>`;
          });
        }
        
        projectCard.innerHTML = `
          <div class="project-image">
            <img src="${project.images ? project.images[0] : project.image || './img/background2.jpg'}" alt="${project.title}" />
            <div class="project-overlay">
              <div class="project-links">
                <button class="project-link" onclick="openProjectModal('${project.id}', 'demo')" data-lang="view_demo">${config.view_demo}</button>
                <button class="project-link" onclick="openProjectModal('${project.id}', 'code')" data-lang="view_code">${config.view_code}</button>
              </div>
            </div>
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
              ${techsHTML}
            </div>
          </div>
        `;
        projectsGrid.appendChild(projectCard);
      });
    }
  }
  
  // 特殊处理技能页面 - 动态渲染技术栈
  const skillsSection = document.getElementById('skills');
  if (skillsSection && config.skills_list && Array.isArray(config.skills_list)) {
    const skillsContainer = skillsSection.querySelector('.skills-container');
    if (skillsContainer) {
      // 清空现有内容，但保留section-title
      skillsContainer.innerHTML = '';
      
      // 遍历技能数组，动态创建技能分类和项目
      config.skills_list.forEach((skillCategory, index) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        
        // 创建分类标题
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = config[skillCategory.category] || skillCategory.category;
        categoryElement.appendChild(categoryTitle);
        
        // 创建技能项容器
        const skillItems = document.createElement('div');
        skillItems.className = 'skill-items';
        
        // 遍历技能项
        skillCategory.items.forEach(skill => {
          const skillItem = document.createElement('div');
          skillItem.className = 'skill-item';
          
          skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
          `;
          
          skillItems.appendChild(skillItem);
        });
        
        categoryElement.appendChild(skillItems);
        skillsContainer.appendChild(categoryElement);
      });
    }
  }
}

// 切换语言
function changeLanguage(language) {
  currentLang = language;
  setLanguage(currentLang);
}

// 动态加载页面内容
function loadPageContent(pageId) {
  const contentContainer = document.getElementById('content-container');
  const pageMap = {
    'home': './pages/home.html',
    'education': './pages/education.html',
    'experience': './pages/experience.html',
    'projects': './pages/projects.html',
    'skills': './pages/skills.html',
    'resources': './pages/resources.html'
  };
  
  const pageUrl = pageMap[pageId];
  if (!pageUrl) {
    console.error('页面不存在:', pageId);
    return;
  }
  
  // 显示加载动画
  contentContainer.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
  `;
  
  // 使用fetch加载页面内容
  fetch(pageUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('网络响应不正常');
      }
      return response.text();
    })
    .then(html => {
      // 解析HTML并提取body内容
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const bodyContent = doc.body.innerHTML;
      
      // 更新内容容器
      contentContainer.innerHTML = bodyContent;
      
      // 重新初始化语言设置
      setLanguage(currentLang);
      
      // 重新初始化动画和交互
      initializePageAnimations();
      
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(error => {
      console.error('加载页面失败:', error);
      contentContainer.innerHTML = `
        <div class="error-container">
          <h3>页面加载失败</h3>
          <p>请检查网络连接或稍后重试</p>
          <button onclick="loadPageContent('${pageId}')" class="btn-primary">重新加载</button>
        </div>
      `;
    });
}

// 初始化页面动画
function initializePageAnimations() {
  addSkillAnimations();
  addProjectAnimations();
  addTimelineAnimations();
}

// 切换移动端菜单
function toggleMobileMenu() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('mobileOverlay');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const floatingBtn = document.getElementById('floatingMenuBtn');
  
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // 更新按钮状态
  if (toggleBtn) toggleBtn.classList.toggle('active');
  if (floatingBtn) floatingBtn.classList.toggle('active');
  
  // 防止背景滚动
  if (sidebar.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// 关闭移动端菜单
function closeMobileMenu() {
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('mobileOverlay');
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const floatingBtn = document.getElementById('floatingMenuBtn');
  
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  
  // 更新按钮状态
  if (toggleBtn) toggleBtn.classList.remove('active');
  if (floatingBtn) floatingBtn.classList.remove('active');
  
  document.body.style.overflow = '';
}

// 滚动到指定section
function scrollToSection(sectionId) {
  switchSection(sectionId);
}

// 切换section
function switchSection(sectionId) {
  // 更新当前section
  currentSection = sectionId;
  
  // 更新桌面端导航链接状态
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });
  
  // 更新移动端侧边栏链接状态
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.classList.add('active');
    }
  });
  
  // 动态加载页面内容
  loadPageContent(sectionId);
}

// 返回顶部
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 显示/隐藏返回顶部按钮
function toggleBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

// 导航链接点击事件
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      switchSection(targetId);
    });
  });
  
  // 移动端侧边栏链接点击事件
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      switchSection(targetId);
      closeMobileMenu();
    });
  });
  
  // ESC键关闭移动端菜单
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
  
  // 窗口大小改变时关闭移动端菜单
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
  
  // 弹出层事件监听
  const modal = document.getElementById('projectModal');
  if (modal) {
    // 点击弹出层背景关闭
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
    
    // ESC键关闭弹出层
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
      }
    });
  }
}

// 滚动事件监听
function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    toggleBackToTop();
  });
}

// 键盘导航支持
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    const sections = ['home', 'education', 'experience', 'projects', 'skills', 'resources'];
    const currentIndex = sections.indexOf(currentSection);
    
    switch(e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
          switchSection(sections[currentIndex + 1]);
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        if (currentIndex > 0) {
          switchSection(sections[currentIndex - 1]);
        }
        break;
      case 'Home':
        e.preventDefault();
        switchSection('home');
        break;
      case 'End':
        e.preventDefault();
        switchSection('skills');
        break;
    }
  });
}

// 添加页面加载动画
function addPageLoadAnimation() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      heroContent.style.transition = 'all 0.8s ease-out';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
}

// 添加技能项动画
function addSkillAnimations() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'bounceIn 0.6s ease-out forwards';
      }
    });
  }, { threshold: 0.1 });
  
  skillItems.forEach(item => {
    observer.observe(item);
  });
}

// 添加项目卡片动画
function addProjectAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  projectCards.forEach(card => {
    observer.observe(card);
  });
}

// 添加时间线动画
function addTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
      }
    });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// 添加鼠标跟随效果
function addMouseFollowEffect() {
  // 检测是否为纯触摸设备（避免触控笔记本误判）
  const isTouchOnlyDevice = matchMedia('(pointer: coarse)').matches;

  if (isTouchOnlyDevice) {
	return; // 手机/平板等触屏设备直接退出
  }
	
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(255, 142, 111, 0.8);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    display: none;
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  
  document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
  });
  
  // 为可点击元素添加悬停效果
  const clickableElements = document.querySelectorAll('a, button, .nav-link');
  clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
}

// 添加粒子背景效果
function addParticleBackground() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.3;
  `;
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    };
  }
  
  function initParticles() {
    particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }
  }
  
  function updateParticles() {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }
  
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 142, 111, ${particle.opacity})`;
      ctx.fill();
    });
  }
  
  function animate() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }
  
  resizeCanvas();
  initParticles();
  animate();
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
}

// 初始化所有功能
function initializeApp() {
  // 设置初始语言
  setLanguage(currentLang);
  
  // 设置导航
  setupNavigation();
  
  // 设置滚动效果
  setupScrollEffects();
  
  // 设置键盘导航
  setupKeyboardNavigation();
  
  // 添加动画效果
  addPageLoadAnimation();
  
  // 添加视觉效果
  addMouseFollowEffect();
  addParticleBackground();
  
  // 加载默认页面（首页）
  loadPageContent('home');
  
  console.log('个人简介博客已初始化完成！');
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", initializeApp);

// 项目弹出层功能
const projectData = {
  project1: {
    title: "电商管理系统",
    demoImage: "./img/background2.jpg",
    demoDescription: "这是一个基于React和Node.js开发的电商管理系统，包含商品管理、订单处理、用户管理等功能模块。",
    code: `// 电商管理系统 - 主要组件
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 主应用组件
function EcommerceApp() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('获取商品失败:', error);
    }
  };
  
  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('获取订单失败:', error);
    }
  };
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/orders" element={<OrderManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default EcommerceApp;`,
    projectLink: "https://github.com/example/ecommerce-system"
  },
  project2: {
    title: "个人博客系统",
    demoImage: "./img/background3.jpg",
    demoDescription: "使用Vue.js和Express开发的个人博客系统，支持文章发布、分类管理、评论功能。",
    code: `// 个人博客系统 - Vue组件
<template>
  <div class="blog-app">
    <header class="blog-header">
      <h1>{{ blogTitle }}</h1>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/articles">文章</router-link>
        <router-link to="/about">关于</router-link>
      </nav>
    </header>
    
    <main class="blog-main">
      <router-view />
    </main>
    
    <footer class="blog-footer">
      <p>&copy; 2024 个人博客系统</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BlogApp',
  data() {
    return {
      blogTitle: '我的个人博客'
    };
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await this.$http.get('/api/articles');
        this.articles = response.data;
      } catch (error) {
        console.error('获取文章失败:', error);
      }
    }
  },
  mounted() {
    this.fetchArticles();
  }
};
</script>`,
    projectLink: "https://github.com/example/personal-blog"
  },
  project3: {
    title: "在线学习平台",
    demoImage: "./img/background4.jpg",
    demoDescription: "基于React和Node.js开发的在线学习平台，支持视频播放、课程管理、用户互动等功能。",
    code: `// 在线学习平台 - 课程组件
import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import CourseList from './CourseList';

function LearningPlatform() {
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);
  
  useEffect(() => {
    fetchCourses();
  }, []);
  
  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('获取课程失败:', error);
    }
  };
  
  return (
    <div className="learning-platform">
      <div className="course-sidebar">
        <CourseList 
          courses={courses} 
          onCourseSelect={setCurrentCourse}
        />
      </div>
      <div className="main-content">
        {currentCourse && (
          <VideoPlayer course={currentCourse} />
        )}
      </div>
    </div>
  );
}

export default LearningPlatform;`,
    projectLink: "https://github.com/example/learning-platform"
  },
  project4: {
    title: "移动端APP",
    demoImage: "./img/background5.jpg",
    demoDescription: "使用React Native开发的跨平台移动应用，集成了地图导航、社交分享、支付功能等。",
    code: `// 移动端APP - 主屏幕组件
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView from './MapView';
import SocialShare from './SocialShare';

function MainScreen() {
  const [userLocation, setUserLocation] = useState(null);
  
  useEffect(() => {
    getCurrentLocation();
  }, []);
  
  const getCurrentLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);
    } catch (error) {
      console.error('获取位置失败:', error);
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>我的应用</Text>
      </View>
      
      <MapView location={userLocation} />
      
      <SocialShare />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#667eea',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainScreen;`,
    projectLink: "https://github.com/example/mobile-app"
  }
};

// 打开项目弹出层
function openProjectModal(projectId, tabName = 'demo') {
  const modal = document.getElementById('projectModal');
  const config = langConfig[currentLang];
  const project = config.projects_list.find(p => p.id === projectId);
  
  if (!project) return;
  
  // 更新弹出层内容
  document.getElementById('modalTitle').textContent = project.title;
  
  // 从lang.js中获取demo_text和code_text
  if (project.demo_text) {
    document.getElementById('demoDescription').textContent = project.demo_text;
  } else {
    document.getElementById('demoDescription').textContent = config.view_demo + ' - ' + project.title;
  }
  
  if (project.code_text) {
    document.getElementById('codePreview').textContent = project.code_text;
  } else {
    document.getElementById('codePreview').textContent = config.view_code + ' - ' + project.title;
  }
  
  // 处理多图片展示
  const imagesContainer = document.getElementById('projectImagesContainer');
  imagesContainer.innerHTML = '';
  
  // 检查是否有images数组
  if (project.images && project.images.length > 0) {
    // 创建主图显示
    const mainImageWrapper = document.createElement('div');
    mainImageWrapper.className = 'project-main-image';
    const mainImage = document.createElement('img');
    mainImage.id = 'demoImage';
    mainImage.src = project.images[0];
    mainImage.alt = '项目演示';
    mainImageWrapper.appendChild(mainImage);
    imagesContainer.appendChild(mainImageWrapper);
    
    // 创建缩略图容器
    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.className = 'project-thumbnails';
    
    // 为每张图片创建缩略图
    project.images.forEach((imgSrc, index) => {
      const thumbnailWrapper = document.createElement('div');
      thumbnailWrapper.className = 'project-thumbnail-wrapper';
      if (index === 0) {
        thumbnailWrapper.classList.add('active');
      }
      
      const thumbnail = document.createElement('img');
      thumbnail.src = imgSrc;
      thumbnail.alt = `缩略图 ${index + 1}`;
      thumbnail.addEventListener('click', () => {
        // 更新主图
        mainImage.src = imgSrc;
        // 更新缩略图激活状态
        document.querySelectorAll('.project-thumbnail-wrapper').forEach(wrapper => {
          wrapper.classList.remove('active');
        });
        thumbnailWrapper.classList.add('active');
      });
      
      thumbnailWrapper.appendChild(thumbnail);
      thumbnailsContainer.appendChild(thumbnailWrapper);
    });
    
    imagesContainer.appendChild(thumbnailsContainer);
    imagesContainer.style.display = 'block';
  } else if (project.image) {
    // 兼容单个图片的情况
    imagesContainer.innerHTML = `
      <div class="project-main-image">
        <img id="demoImage" src="${project.image}" alt="项目演示" />
      </div>
    `;
    imagesContainer.style.display = 'block';
  } else {
    // 没有图片时隐藏图片容器
    imagesContainer.style.display = 'none';
  }
  
  // 隐藏访问项目按钮，因为我们现在使用文本形式展示
  const projectLinkBtn = document.getElementById('projectLink');
  projectLinkBtn.style.display = 'none';
  
  // 显示弹出层
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // 显示指定的标签
  switchModalTab(tabName);
}

// 关闭项目弹出层
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// 切换弹出层标签
function switchModalTab(tabName) {
  // 更新标签状态
  const tabs = document.querySelectorAll('.modal-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  const contents = document.querySelectorAll('.modal-tab-content');
  contents.forEach(content => content.classList.remove('active'));
  
  // 激活选中的标签和内容
  if (tabName === 'demo') {
    document.querySelector('.modal-tab[onclick*="demo"]').classList.add('active');
    document.getElementById('demoContent').classList.add('active');
  } else if (tabName === 'code') {
    document.querySelector('.modal-tab[onclick*="code"]').classList.add('active');
    document.getElementById('codeContent').classList.add('active');
  }
}

// 下载文件功能
function downloadFile(filename) {
  // 特殊处理开发资源和技术文档的点击事件
  if (filename === 'projects.zip') {
    showDevelopmentResourcesModal();
    return;
  } else if (filename === 'docs.pdf') {
    showTechnicalDocumentsModal();
    return;
  }
  
  // 这里可以添加实际的下载逻辑
  // 例如：创建一个临时的下载链接
  const link = document.createElement('a');
  
  // 特殊处理简历文件下载
  if (filename === 'resume.pdf') {
    link.href = './resources/J·Wang Guan.pdf';
    link.download = 'J·Wang Guan.pdf';
  } else {
    // 其他文件保持原路径
    link.href = `./resources/${filename}`;
    link.download = filename;
  }
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // 显示下载提示
  showDownloadNotification(filename);
}

// 确保resources对象已加载
if (!window.resources) {
  window.resources = {
    developmentResources: [],
    technicalDocuments: []
  };
}

// 显示开发资源弹窗
function showDevelopmentResourcesModal() {
  // 创建模态框
  const modal = document.createElement('div');
  modal.className = 'resources-modal';
  
  // 构建资源列表HTML
  let resourcesHTML = '';
  resources.developmentResources.forEach(resource => {
    resourcesHTML += `
      <div class="resource-item">
        <div class="resource-info">
          <h4>${resource.name}</h4>
          <p>${resource.description}</p>
          <div class="resource-url-container">
            <span class="resource-url">${resource.url}</span>
            <button class="copy-btn" onclick="copyToClipboard('${resource.url}', this)">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>开发资源列表</h3>
        <span class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
      </div>
      <div class="modal-body">
        <div class="resources-list">
          ${resourcesHTML}
        </div>
      </div>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .resources-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background: white;
      border-radius: 10px;
      width: 90%;
      max-width: 800px;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    .modal-header {
      padding: 20px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header h3 {
      margin: 0;
      color: #333;
    }
    .modal-close {
      font-size: 28px;
      cursor: pointer;
      color: #666;
      background: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .modal-close:hover {
      color: #333;
      background: #f5f5f5;
    }
    .modal-body {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }
    .resources-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .resource-item {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f9f9f9;
    }
    .resource-info h4 {
      margin: 0 0 8px 0;
      color: #333;
    }
    .resource-info p {
      margin: 0 0 10px 0;
      color: #666;
      font-size: 14px;
    }
    .resource-url-container {
      display: flex;
      align-items: center;
      gap: 10px;
      background: white;
      padding: 8px 12px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
    .resource-url {
      flex: 1;
      font-size: 14px;
      color: #0066cc;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .copy-btn {
      background: #f0f0f0;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666;
    }
    .copy-btn:hover {
      background: #e0e0e0;
      color: #333;
    }
    .copy-btn.copied {
      background: #4caf50;
      color: white;
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(modal);
  
  // 点击模态框背景关闭
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  };
}

// 显示技术文档弹窗
function showTechnicalDocumentsModal() {
  // 创建模态框
  const modal = document.createElement('div');
  modal.className = 'resources-modal';
  
  // 构建文档列表HTML
  let documentsHTML = '';
  resources.technicalDocuments.forEach(doc => {
    documentsHTML += `
      <div class="document-item">
        <div class="document-info">
          <h4>${doc.name}</h4>
          <p>${doc.description}</p>
          <button class="download-doc-btn" onclick="downloadDocument('${doc.file}')">
            <i class="fas fa-download"></i>
            下载文档
          </button>
        </div>
      </div>
    `;
  });
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>技术文档列表</h3>
        <span class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">&times;</span>
      </div>
      <div class="modal-body">
        <div class="documents-list">
          ${documentsHTML}
        </div>
      </div>
    </div>
  `;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .resources-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background: white;
      border-radius: 10px;
      width: 90%;
      max-width: 800px;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    .modal-header {
      padding: 20px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header h3 {
      margin: 0;
      color: #333;
    }
    .modal-close {
      font-size: 28px;
      cursor: pointer;
      color: #666;
      background: white;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .modal-close:hover {
      color: #333;
      background: #f5f5f5;
    }
    .modal-body {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }
    .documents-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .document-item {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f9f9f9;
    }
    .document-info h4 {
      margin: 0 0 8px 0;
      color: #333;
    }
    .document-info p {
      margin: 0 0 10px 0;
      color: #666;
      font-size: 14px;
    }
    .download-doc-btn {
      background: #0066cc;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
    }
    .download-doc-btn:hover {
      background: #0052a3;
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(modal);
  
  // 点击模态框背景关闭
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  };
}

// 复制文本到剪贴板
function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    // 更改按钮状态表示已复制
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.classList.add('copied');
    
    // 2秒后恢复按钮状态
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 2000);
    
    // 显示复制成功提示
    showNotification('复制成功！');
  }).catch(err => {
    console.error('复制失败:', err);
    showNotification('复制失败，请手动复制', true);
  });
}

// 下载技术文档
function downloadDocument(filename) {
  const link = document.createElement('a');
  link.href = `./resources/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // 显示下载提示
  showDownloadNotification(filename);
}

// 显示通用通知
function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.className = 'notification' + (isError ? ' error' : ' success');
  notification.textContent = message;
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 5px;
      color: white;
      font-size: 14px;
      z-index: 1001;
      animation: slideInRight 0.3s ease-out;
    }
    .notification.success {
      background: #4caf50;
    }
    .notification.error {
      background: #f44336;
    }
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(notification);
  
  // 3秒后移除通知
  setTimeout(() => {
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// 显示微信二维码图片
function showWeChatQR() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'qrcode-modal';
    modal.innerHTML = `
        <div class="qrcode-content">
            <span class="qrcode-close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <img src="./img/WeChat.jpg" alt="微信二维码" class="qrcode-image">
            <p>扫描二维码添加微信</p>
        </div>
    `;
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .qrcode-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .qrcode-content {
            background: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            position: relative;
            min-width: 400px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .qrcode-close {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 28px;
            cursor: pointer;
            color: #666;
            background: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .qrcode-close:hover {
            color: #333;
            background: #f5f5f5;
        }
        .qrcode-image {
            max-width: 350px;
            max-height: 350px;
            border: 2px solid #ddd;
            border-radius: 8px;
            margin: 20px 0;
        }
        .qrcode-content p {
            margin-top: 15px;
            font-size: 16px;
            color: #333;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // 点击模态框背景关闭
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

// 显示下载通知
function showDownloadNotification(filename) {
  const notification = document.createElement('div');
  notification.className = 'download-notification';
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <span>正在下载 ${filename}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // 3秒后自动移除通知
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// 添加CSS动画关键帧
const style = document.createElement('style');
style.textContent = `
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes slideInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);