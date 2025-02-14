<template>
    <div class="loved-videos-container p-4 md:p-8">
        <!-- 页面标题 -->
        <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-pink-200 mb-4">我喜欢的视频</h1>
            <p class="text-pink-200/70">收藏了一些我觉得有趣的视频</p>
        </div>

        <!-- 视频网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="video in videos" :key="video.id"
                class="video-card bg-black/30 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-200/20 transition-all duration-300 transform hover:-translate-y-1">
                <!-- 视频容器 -->
                <div class="relative aspect-video">
                    <iframe :src="video.embedUrl" class="absolute inset-0 w-full h-full" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>

                <!-- 视频信息 -->
                <div class="p-4">
                    <h3 class="text-lg font-bold text-pink-200 mb-2">{{ video.title }}</h3>
                    <p class="text-pink-200/70 text-sm mb-4">{{ video.description }}</p>

                    <!-- 标签 -->
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in video.tags" :key="tag"
                            class="px-2 py-1 text-xs bg-pink-200/10 text-pink-200 rounded-full">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Video {
    id: number;
    title: string;
    description: string;
    embedUrl: string;
    tags: string[];
}

const videos: Video[] = [
    {
        id: 1,
        title: "【MMD】妄想感傷代償連盟 / Sour式初音ミク【4K】",
        description: "初音未来",
        embedUrl: "https://www.youtube.com/embed/O3EzczzLc34",
        tags: ["初音未来"]
    },
    {
        id: 2,
        title: "【MMD】パラレリズム恋心 / Sour式初音ミク【4K60fps】",
        description: "初音未来",
        embedUrl: "https://www.youtube.com/embed/LmUtf-mBsGQ",
        tags: ["初音未来"]
    },
    {
        id: 3,
        title: "【MMD】YYB式初音ミク - うちゅうだいばくはつ【4K60fps】",
        description: "初音未来",
        embedUrl: "https://www.youtube.com/embed/UXDQdJ2399A",
        tags: ["初音未来"]
    },
    {
        id: 4,
        title: "【MMD】スイートマジック / Sour式鏡音リン【4K】",
        description: "初音未来",
        embedUrl: "https://www.youtube.com/embed/7ZIiogVSh8A",
        tags: ["初音未来"]
    },
    {
        id: 5,
        title: "双语字幕【MMD】メランコリック / Sour式鏡音リン【4K】",
        description: "镜音铃",
        embedUrl: "https://www.youtube.com/embed/leHNI2MKsj8",
        tags: ["镜音铃"]
    },
    {
        id: 6,
        title: "【初音ミク】METEOR【MMD(ミク14th & fyucha 5th Anniversary)】",
        description: "初音未来",
        embedUrl: "https://www.youtube.com/embed/hF90lo2IkbA",
        tags: ["初音未来"]
    }
];
</script>

<style scoped>
.loved-videos-container {
    min-height: calc(100vh - 64px);
    /* 减去导航栏高度 */
    background-color: black;
}

.video-card {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 192, 203, 0.1);
}

/* 添加视频卡片的悬停效果 */
.video-card:hover {
    border-color: rgba(255, 192, 203, 0.3);
}

/* 确保 iframe 在移动设备上也能正常显示 */
@media (max-width: 640px) {
    .video-card {
        margin-bottom: 1.5rem;
    }
}
</style>
