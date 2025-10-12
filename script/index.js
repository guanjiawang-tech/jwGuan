let currentLang = 'zh'; // 默认语言
let currentSection = 'home'; // 当前激活的section

// 设置页面文本内容
function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach(element => {
    const key = element.getAttribute("data-lang");
    if (langConfig[lang] && langConfig[lang][key]) {
    element.textContent = langConfig[lang][key];
    }
  });
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
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const project = projectData[projectId];
  
  if (!project) return;
  
  // 更新弹出层内容
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('demoImage').src = project.demoImage;
  document.getElementById('demoDescription').textContent = project.demoDescription;
  document.getElementById('codePreview').textContent = project.code;
  document.getElementById('projectLink').href = project.projectLink;
  
  // 显示弹出层
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // 默认显示演示标签
  switchModalTab('demo');
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
  // 这里可以添加实际的下载逻辑
  // 例如：创建一个临时的下载链接
  const link = document.createElement('a');
  link.href = `./downloads/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // 显示下载提示
  showDownloadNotification(filename);
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