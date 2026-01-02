import type { Project } from '@/types';

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "个人博客系统",
        description: "使用 Vue3 + TypeScript 开发的个人博客系统，支持 Markdown 写作",
        image: "/images/projects/blog.png",
        category: "Web 全栈开发",
        technologies: ["Vue3", "TypeScript", "Node.js", "MongoDB"],
        demoUrl: "https://blog.meowrain.cn",
        codeUrl: "https://github.com/meowrain/blog"
    },
    {
        id: 2,
        title: "Notebook",
        description: "一个简洁的在线笔记本应用，支持实时保存和 Markdown 格式",
        image: "/images/projects/notebook.png",
        category: "前端开发",
        technologies: ["Vue3", "Vite", "TailwindCSS"],
        demoUrl: "https://notebook.meowrain.cn",
        codeUrl: "https://github.com/meowrain/notebook"
    },
    {
        id: 3,
        title: "TodoList",
        description: "基于 Vue3 的待办事项管理应用，支持任务分类和提醒",
        image: "/images/projects/todo.png",
        category: "前端开发",
        technologies: ["Vue3", "Pinia", "TailwindCSS"],
        codeUrl: "https://github.com/meowrain/TodoList"
    }
];
