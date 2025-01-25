<template>
    <div class="about-container flex flex-col items-center justify-center min-h-screen  text-white text-center p-5">
        <!-- 大头像 -->
        <div class="avatar-container mb-5 relative inline-block">
            <div
                class="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-full bg-gradient-conic from-red-500 via-orange-500 to-red-500 opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 animate-rotateRainbow">
            </div>
            <img class="avatar w-36 h-36 rounded-full border-4 border-white shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110"
                src="https://avatars.githubusercontent.com/u/107172084?v=4" alt="My Avatar">
        </div>

        <!-- 昵称 -->
        <div class="nickname text-2xl font-bold mb-2">MeowRain</div>

        <!-- 个人社交平台 -->
        <div class="social-platforms flex gap-5 mb-5">
            <a href="https://github.com/meowrain" target="_blank"
                class="social-link flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-200">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"
                    class="social-icon w-6 h-6 invert">
                GitHub
            </a>
            <a href="https://twitter.com/meowrain" target="_blank"
                class="social-link flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-200">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25347.png" alt="Twitter"
                    class="social-icon w-6 h-6 invert">
                Twitter
            </a>
            <a href="https://weibo.com/meowrain" target="_blank"
                class="social-link flex items-center gap-2 text-white hover:text-blue-500 transition-colors duration-200">
                <img src="https://cdn-icons-png.flaticon.com/512/23/23931.png" alt="Weibo"
                    class="social-icon w-6 h-6 invert">
                Weibo
            </a>
        </div>

        <!-- 所在学校 -->
        <div class="school text-lg text-gray-300 mb-5">山西农业大学 - 计算机科学与技术专业</div>

        <!-- 经历 -->
        <div class="experience bg-gray-800 p-5 rounded-lg shadow-lg max-w-md w-full mb-5">
            <h3 class="text-xl font-bold mb-2">经历</h3>
            <ul class="list-disc pl-5 text-left text-gray-300">
                <li>2021年 - 加入某实验室，参与前端开发项目</li>
                <li>2022年 - 获得校级优秀学生奖</li>
                <li>2023年 - 实习于某互联网公司，负责前端开发</li>
            </ul>
        </div>

        <!-- 欢迎语 -->
        <div class="welcome-message text-2xl font-bold mt-5 mb-10">欢迎来到我的个人页面！</div>
    </div>
</template>

<script lang="ts" setup>
// 这里可以添加逻辑代码
</script>

<style scoped>
/* 自定义动画 */
@keyframes rotateRainbow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.animate-rotateRainbow {
    animation: rotateRainbow 1.5s linear infinite;
}
</style>