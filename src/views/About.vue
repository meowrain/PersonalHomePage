<template>
    <div class="about-container">
        <!-- 大头像 -->
        <div class="avatar-container">
            <img class="avatar" src="https://avatars.githubusercontent.com/u/107172084?v=4" alt="My Avatar">
        </div>

        <!-- 昵称 -->
        <div class="nickname">MeowRain</div>

        <!-- 个人社交平台 -->
        <div class="social-platforms">
            <a href="https://github.com/meowrain" target="_blank" class="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="social-icon">
                GitHub
            </a>
            <a href="https://twitter.com/meowrain" target="_blank" class="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25347.png" alt="Twitter" class="social-icon">
                Twitter
            </a>
            <a href="https://weibo.com/meowrain" target="_blank" class="social-link">
                <img src="https://cdn-icons-png.flaticon.com/512/23/23931.png" alt="Weibo" class="social-icon">
                Weibo
            </a>
        </div>

        <!-- 所在学校 -->
        <div class="school">山西农业大学 - 计算机科学与技术专业</div>

        <!-- 经历 -->
        <div class="experience">
            <h3>经历</h3>
            <ul>
                <li>2021年 - 加入某实验室，参与前端开发项目</li>
                <li>2022年 - 获得校级优秀学生奖</li>
                <li>2023年 - 实习于某互联网公司，负责前端开发</li>
            </ul>
        </div>

        <!-- 欢迎语 -->
        <div class="welcome-message">欢迎来到我的个人页面！</div>

    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="css" scoped>
.about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
}

/* 大头像 */
.avatar-container {
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
}

.avatar-container::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: conic-gradient(from 0deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #9400d3,
            #ff0000);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: scale(0.9);
}

.avatar-container:hover::before {
    opacity: 1;
    transform: scale(1);
    animation: rotateRainbow 1.5s linear infinite;
}

.avatar-container:hover .avatar {
    transform: scale(1.1);
}

@keyframes rotateRainbow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* 昵称 */
.nickname {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
}

/* 个人社交平台 */
.social-platforms {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.2s ease;
}

.social-link:hover {
    color: #007bff;
}

.social-icon {
    width: 24px;
    height: 24px;
    filter: invert(1);
}

/* 所在学校 */
.school {
    font-size: 18px;
    color: #ccc;
    margin-bottom: 20px;
}

/* 经历 */
.experience {
    background-color: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    max-width: 400px;
    width: 100%;
    margin-bottom: 20px;
}

.experience h3 {
    font-size: 22px;
    color: #fff;
    margin-bottom: 10px;
}

.experience ul {
    list-style-type: disc;
    padding-left: 20px;
    text-align: left;
}

.experience li {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 8px;
}

/* 欢迎语 */
.welcome-message {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 40px;
}
</style>