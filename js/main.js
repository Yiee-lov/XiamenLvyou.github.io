document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // 初始化第一张幻灯片
    slides[0].classList.add('active');
    
    function nextSlide() {
        // 移除当前幻灯片的active类并添加prev类使其向左滑出
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        
        // 更新当前幻灯片索引
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 移除新幻灯片的prev类并添加active类使其从右侧滑入
        slides[currentSlide].classList.remove('prev');
        slides[currentSlide].classList.add('active');
        
        // 清理其他幻灯片的类
        slides.forEach((slide, index) => {
            if (index !== currentSlide) {
                setTimeout(() => {
                    slide.classList.remove('prev');
                }, 600); // 与过渡时间相匹配
            }
        });
    }
    
    // 每5秒自动切换幻灯片
    setInterval(nextSlide, 5000);
    
    // 点击按钮跳转到详情页
    document.querySelectorAll('.slide-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            window.location.href = this.getAttribute('data-href');
        });
    });
    
    // 点击图片也可以跳转
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            const btn = this.querySelector('.slide-btn');
            window.location.href = btn.getAttribute('data-href');
        });
    });
}); 