// ========================================
// 阿梓说 - 主逻辑
// ========================================

// 最新文章数据（后续可以从 JSON 文件加载）
const latestPosts = [
  {
    title: '《原神》5.0到底值不值得入坑？老玩家说实话',
    url: '#',
    date: '2026-04-18',
    category: '游戏',
    readtime: '8分钟'
  },
  {
    title: 'ChatGPT vs Claude vs Gemini，2026年谁更强？',
    url: '#',
    date: '2026-04-17',
    category: 'AI',
    readtime: '12分钟'
  },
  {
    title: '为什么我开始写博客了？',
    url: '#',
    date: '2026-04-16',
    category: '碎碎念',
    readtime: '3分钟'
  },
  {
    title: 'Claude 4发布了！这次真的能取代程序员？',
    url: '#',
    date: '2026-04-08',
    category: 'AI',
    readtime: '6分钟'
  }
];

// 加载最新文章
function loadLatestPosts() {
  const container = document.getElementById('posts-list');
  if (!container) return;

  container.innerHTML = latestPosts.map(post => `
    <article class="post-card">
      <div class="post-meta">
        <span class="post-tag ${getCategoryClass(post.category)}">${post.category}</span>
        <span class="post-date">${post.date}</span>
      </div>
      <h3 class="post-title">
        <a href="${post.url}">${post.title}</a>
      </h3>
      <div class="post-footer">
        <span class="post-readtime">⏱️ ${post.readtime}阅读</span>
        <a href="${post.url}" class="read-more">阅读全文 →</a>
      </div>
    </article>
  `).join('');
}

// 根据分类返回样式类
function getCategoryClass(category) {
  const map = {
    '游戏': 'review',
    'AI': 'tutorial',
    '碎碎念': 'life'
  };
  return map[category] || 'news';
}

// 初始化筛选功能
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const postCards = document.querySelectorAll('.post-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 更新按钮状态
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 筛选文章
      const filter = btn.dataset.filter;
      postCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 平滑滚动
document.addEventListener('DOMContentLoaded', () => {
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 页面加载动画
  document.body.classList.add('loaded');
});
