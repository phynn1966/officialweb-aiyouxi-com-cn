(function() {
    'use strict';

    var siteConfig = {
        url: 'https://officialweb-aiyouxiyouxi.com.cn',
        keyword: '爱游戏',
        siteName: '官方爱游戏平台',
        version: '1.0.3'
    };

    function createCard(title, content) {
        var card = document.createElement('div');
        card.className = 'si-card';
        var titleEl = document.createElement('h3');
        titleEl.textContent = title;
        var contentEl = document.createElement('p');
        contentEl.textContent = content;
        card.appendChild(titleEl);
        card.appendChild(contentEl);
        return card;
    }

    function createBadge(text) {
        var badge = document.createElement('span');
        badge.className = 'si-badge';
        badge.textContent = text;
        return badge;
    }

    function createAccessNotice() {
        var notice = document.createElement('div');
        notice.className = 'si-notice';
        notice.innerHTML = '<strong>访问说明：</strong> 当前页面为 <a href="' + siteConfig.url + '" target="_blank" rel="noopener noreferrer">' + siteConfig.siteName + '</a> 的辅助工具。';
        return notice;
    }

    function initHelper() {
        var container = document.getElementById('site-helper-container');
        if (!container) return;

        var header = document.createElement('div');
        header.className = 'si-header';
        header.appendChild(createAccessNotice());

        var badgeContainer = document.createElement('div');
        badgeContainer.className = 'si-badges';
        var keywords = [siteConfig.keyword, '官方', '安全', '辅助'];
        keywords.forEach(function(kw) {
            badgeContainer.appendChild(createBadge(kw));
        });

        var cardContainer = document.createElement('div');
        cardContainer.className = 'si-cards';
        cardContainer.appendChild(createCard('欢迎使用', '这里提供' + siteConfig.keyword + '相关提示与功能。'));
        cardContainer.appendChild(createCard('安全提示', '请认准官方地址：' + siteConfig.url));
        cardContainer.appendChild(createCard('快速导航', '使用上方链接直接访问' + siteConfig.keyword + '站点。'));

        container.appendChild(header);
        container.appendChild(badgeContainer);
        container.appendChild(cardContainer);
    }

    function addStyles() {
        var style = document.createElement('style');
        style.textContent = [
            '.si-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 8px 0; background: #f9f9f9; }',
            '.si-card h3 { margin: 0 0 8px; font-size: 1.1em; color: #333; }',
            '.si-card p { margin: 0; color: #555; }',
            '.si-badge { display: inline-block; background: #4a90d9; color: #fff; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; margin: 4px; }',
            '.si-notice { background: #fff3cd; border: 1px solid #ffeeba; padding: 8px 12px; border-radius: 6px; margin-bottom: 12px; }',
            '.si-notice a { color: #856404; text-decoration: underline; }',
            '.si-header, .si-badges, .si-cards { margin-bottom: 12px; }'
        ].join(' ');
        document.head.appendChild(style);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addStyles();
            initHelper();
        });
    } else {
        addStyles();
        initHelper();
    }
})();