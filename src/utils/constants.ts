import type { NavigationItem, Skill } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        name: '我的博客',
        description: '分享技术文章和学习心得',
        icon: 'i-mdi-book-open-page-variant',
        url: 'https://blog.meowrain.cn'
    },
    {
        name: '项目展示',
        description: '我的开源项目集合',
        icon: 'i-mdi-source-repository',
        url: '/projects'
    },
    {
        name: '照片墙',
        description: '记录生活的美好瞬间',
        icon: 'i-mdi-image-multiple',
        url: '/album'
    },
    {
        name: '关于我',
        description: '了解更多关于我的信息',
        icon: 'i-mdi-account',
        url: '/about'
    }
];

export const SKILLS: Skill[] = [
    { name: 'Golang', level: 85, icon: 'i-logos-go' },
    { name: 'Vue.js', level: 80, icon: 'i-logos-vue' },
    { name: 'Docker', level: 75, icon: 'i-logos-docker-icon' },
    { name: 'TypeScript', level: 70, icon: 'i-logos-typescript-icon' },
    { name: 'Kubernetes', level: 65, icon: 'i-mdi-kubernetes' },
    { name: 'PostgreSQL', level: 70, icon: 'i-simple-icons-postgresql' },
    { name: 'Linux', level: 80, icon: 'i-mdi-linux' },
    { name: 'Git', level: 85, icon: 'i-logos-git-icon' }
];
