<template>
    <div id="app-sticky-header" class="sticky top-0 w-full z-50">
        <div class="action-bar bg-black/80 bg-black backdrop-blur-sm h-20 max-w-full shadow-sm">
            <div class="action-bar-content flex flex-row justify-between items-center h-full mx-4 px-5">
                <!-- Logo 容器 -->
                <div class="action-bar-logo-container">
                    <a class="action-bar-logo flex cursor-pointer">
                        <img src="/images/logo.png" alt="MeowRain" class="h-[70px] w-auto">
                    </a>
                </div>
                <!-- 汉堡菜单按钮 -->
                <div class="hamburger-menu md:hidden flex flex-col cursor-pointer p-2.5" @click="toggleMenu"
                    :class="{ 'active': isMenuOpen }">
                    <div class="bar w-6 h-0.5 bg-pink-200 my-1 transition-all duration-300"></div>
                    <div class="bar w-6 h-0.5 bg-pink-200 my-1 transition-all duration-300"></div>
                    <div class="bar w-6 h-0.5 bg-pink-200 my-1 transition-all duration-300"></div>
                </div>
                <!-- 导航链接 -->
                <div class="action-bar-nav-row md:flex hidden md:flex-row items-center flex-grow"
                    :class="{ 'active': isMenuOpen }">
                    <a class="mx-6 text-sm text-pink-200 font-bold hover:text-pink-100 transition-colors duration-200"
                        href="/">Home</a>
                    <a class="mx-6 text-sm text-pink-200 font-bold hover:text-pink-100 transition-colors duration-200"
                        href="/projects">Projects</a>
                    <a class="mx-6 text-sm text-pink-200 font-bold hover:text-pink-100 transition-colors duration-200"
                        href="/album">Album</a>
                    <a class="mx-6 text-sm text-pink-200 font-bold hover:text-pink-100 transition-colors duration-200"
                        href="/about">About</a>
                </div>
                <!-- 右侧头像和用户名 -->
                <div class="action-bar-right-container flex items-center">
                    <a href="https://github.com/meowrain" class="profile-link flex items-center gap-2.5 no-underline">
                        <img class="avatar w-10 h-10 rounded-full border-2 border-pink-200 hover:scale-110 hover:shadow-pink-200 transition-all duration-200"
                            src="https://avatars.githubusercontent.com/u/107172084?v=4" alt="User Avatar">
                        <p
                            class="username text-sm font-bold text-pink-200 hover:text-pink-100 transition-colors duration-200">
                            MeowRain</p>
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

<style scoped>
/* 自定义 CSS 用于汉堡菜单动画 */
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