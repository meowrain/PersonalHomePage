<template>
    <div id="app-sticky-header">
        <div class="action-bar" style="padding: 2px 0px;">
            <div class="action-bar-content">
                <div class="action-bar-logo-container">
                    <a class="action-bar-logo">
                        <img src="https://cdn.junipercreates.com/neurosama/images/colored_1733948181981.png" alt="Vedal"
                            width="auto" height="35px">
                    </a>
                </div>
                <!-- 汉堡菜单按钮 -->
                <div class="hamburger-menu" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <!-- 导航链接 -->
                <div class="action-bar-nav-row" :class="{ 'active': isMenuOpen }">
                    <a style="margin: 15px; font-size: 13px; color: rgba(254, 236, 244, 0.8); font-weight: 700;"
                        target="" href="/">Home</a>
                    <a style="margin: 15px; font-size: 13px; color: rgba(254, 236, 244, 0.8); font-weight: 700;"
                        target="" href="/projects">Projects</a>
                    <a style="margin: 15px; font-size: 13px; color: rgba(254, 236, 244, 0.8); font-weight: 700;"
                        target="" href="/album">Album</a>
                    <a style="margin: 15px; font-size: 13px; color: rgba(254, 236, 244, 0.8); font-weight: 700;"
                        target="" href="/about">About</a>
                </div>
                <!-- 右侧头像和用户名 -->
                <div class="action-bar-right-container">
                    <a href="https://github.com/meowrain" class="profile-link">
                        <img class="avatar" src="https://avatars.githubusercontent.com/u/107172084?v=4"
                            alt="User Avatar">
                        <p class="username">MeowRain</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="css" scoped>
#app-sticky-header {
    top: 0;
    width: 100%;
    z-index: 1000;
    position: sticky;
    position: -webkit-sticky;
}

.action-bar {
    width: auto;
    height: 80px;
    background-color: var(--color-theme-body);
    max-width: 100%;
}

.action-bar-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 var(--site-content-padding);
    padding: 0 20px;
}

.action-bar-logo {
    display: flex;
    cursor: pointer;
}

.action-bar-nav-row {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.action-bar-nav-row a {
    display: inline-box;
    padding: 0;
    font-family: var(--font-family-body), var(--font-family-body-fallback);
    font-weight: 700;
    transition: color 0.2s ease;
}

.action-bar-nav-row a:hover {
    color: rgba(254, 236, 244, 1);
}

/* 右侧容器样式 */
.action-bar-right-container {
    display: flex;
    align-items: center;
}

/* 头像和用户名的链接容器 */
.profile-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
}

/* 头像样式 */
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid rgba(254, 236, 244, 0.8);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
}

.avatar:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(254, 236, 244, 0.8);
}

/* 用户名样式 */
.username {
    font-size: 14px;
    font-weight: 700;
    color: rgba(254, 236, 244, 0.8);
    font-family: var(--font-family-body), var(--font-family-body-fallback);
    cursor: pointer;
    transition: color 0.2s ease;
    margin: 0;
}

.username:hover {
    color: rgba(254, 236, 244, 1);
}

/* 汉堡菜单样式 */
.hamburger-menu {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
}

.hamburger-menu .bar {
    width: 25px;
    height: 3px;
    background-color: rgba(254, 236, 244, 0.8);
    margin: 4px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

/* 汉堡菜单动画 */
.hamburger-menu.active .bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger-menu.active .bar:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.active .bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .action-bar {
        height: 50px;
    }

    .action-bar-logo-container {
        display: none;
    }

    .username {
        display: none;
    }

    .hamburger-menu {
        display: flex;
    }

    .action-bar-nav-row {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 50px);
        background-color: var(--color-theme-body);
        padding: 10px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: left 0.3s ease;
        z-index: 999;
        /* 确保菜单在顶层 */
    }

    .action-bar-nav-row.active {
        left: 0;
    }

    .action-bar-nav-row a {
        margin: 10px 0;
        padding: 10px 20px;
    }

    .avatar {
        width: 35px;
        height: 35px;
    }

    .username {
        font-size: 12px;
    }

    .profile-link {
        gap: 7px;
    }
}
</style>