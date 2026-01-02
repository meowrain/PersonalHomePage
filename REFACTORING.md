# 项目结构重构说明

## 📁 新的项目结构

```
src/
├── assets/              # 静态资源
│   ├── css/            # 样式文件
│   └── data/           # 数据文件
├── components/          # 组件目录（按功能模块划分）
│   ├── common/         # 通用组件
│   │   ├── ErrorMessage.vue
│   │   ├── LoadingSpinner.vue
│   │   ├── PageHeader.vue
│   │   └── Pagination.vue
│   ├── home/           # 首页专用组件
│   │   ├── HeroSection.vue
│   │   ├── NavigationCards.vue
│   │   └── SkillsSection.vue
│   ├── about/          # 关于页面组件
│   │   ├── ProfileCard.vue
│   │   ├── SkillTags.vue
│   │   ├── SocialLinks.vue
│   │   └── Education.vue
│   ├── album/          # 相册页面组件
│   │   ├── CategoryFilter.vue
│   │   └── PhotoGrid.vue
│   ├── videos/         # 视频页面组件
│   │   └── VideoCard.vue
│   ├── projects/       # 项目页面组件
│   │   └── ProjectCard.vue
│   ├── NavBar.vue      # 导航栏
│   └── Footer.vue      # 页脚
├── composables/        # 组合式函数（可复用逻辑）
│   ├── useDataFetch.ts
│   ├── useMouseGlow.ts
│   ├── usePagination.ts
│   └── index.ts
├── router/             # 路由配置
├── types/              # TypeScript 类型定义
│   ├── common.ts
│   ├── album.ts
│   ├── video.ts
│   ├── project.ts
│   └── index.ts
├── utils/              # 工具函数和常量
│   ├── constants.ts
│   ├── videoData.ts
│   └── projectData.ts
├── views/              # 页面视图（简化后）
│   ├── Home.vue
│   ├── About.vue
│   ├── Album.vue
│   ├── LovedVideos.vue
│   └── MyProjects.vue
├── App.vue
└── main.ts
```

## 🎯 重构亮点

### 1. **按功能模块划分组件**
- **common/**: 存放可跨页面复用的通用组件
- **home/**, **about/**, **album/** 等：按页面划分的专用组件
- 每个组件职责单一，易于维护和测试

### 2. **类型定义集中管理**
```typescript
// types/index.ts - 统一导出
export * from './common';
export * from './album';
export * from './video';
export * from './project';
```

### 3. **组合式函数（Composables）**
提取可复用的逻辑：
- **usePagination**: 分页功能
- **useDataFetch**: 数据获取和加载状态管理
- **useMouseGlow**: 鼠标悬停光晕效果

### 4. **数据与组件分离**
- 将静态数据移到 `utils/` 目录
- 组件只关注展示逻辑，数据通过 props 传入

### 5. **视图简化**
视图文件现在更简洁，主要负责：
- 组合子组件
- 管理页面级状态
- 处理页面级事件

## 📝 使用示例

### 使用组合式函数
```typescript
// 在组件中使用分页功能
import { usePagination } from '@/composables';

const { currentPage, paginatedItems, nextPage, prevPage } = usePagination(12);
```

### 导入类型
```typescript
import type { Photo, Video, Project } from '@/types';
```

### 使用通用组件
```vue
<template>
  <PageHeader title="标题" subtitle="副标题" />
  <LoadingSpinner v-if="loading" />
  <ErrorMessage v-if="error" :message="error" />
</template>
```

## 🚀 优势

1. **更好的可维护性**: 代码模块化，职责清晰
2. **提高复用性**: 组件和逻辑可在多处使用
3. **类型安全**: TypeScript 类型定义集中管理
4. **易于扩展**: 添加新功能时只需关注对应模块
5. **便于测试**: 小组件更容易编写单元测试
6. **团队协作**: 清晰的目录结构便于多人协作

## 📋 组件列表

### 通用组件 (common/)
- `PageHeader.vue` - 页面标题组件
- `LoadingSpinner.vue` - 加载动画
- `ErrorMessage.vue` - 错误提示
- `Pagination.vue` - 分页组件

### 首页组件 (home/)
- `HeroSection.vue` - 视频背景横幅
- `NavigationCards.vue` - 导航卡片
- `SkillsSection.vue` - 技能展示

### 关于页面组件 (about/)
- `ProfileCard.vue` - 个人信息卡片
- `SkillTags.vue` - 技能标签
- `SocialLinks.vue` - 社交链接
- `Education.vue` - 教育经历

### 相册组件 (album/)
- `CategoryFilter.vue` - 分类过滤器
- `PhotoGrid.vue` - 照片网格

### 视频组件 (videos/)
- `VideoCard.vue` - 视频卡片

### 项目组件 (projects/)
- `ProjectCard.vue` - 项目卡片

## 🔧 下一步建议

1. **添加单元测试**: 为组件和组合式函数编写测试
2. **状态管理**: 如果应用变复杂，可考虑使用 Pinia
3. **性能优化**: 
   - 使用 `defineAsyncComponent` 进行代码分割
   - 图片懒加载优化
4. **文档完善**: 为每个组件添加 JSDoc 注释
5. **样式优化**: 考虑提取共用样式到独立文件

## 📖 开发规范

### 组件命名
- 使用 PascalCase
- 名称要有描述性
- 文件名与组件名一致

### 类型定义
- 所有接口和类型放在 `types/` 目录
- 使用 `interface` 定义对象类型
- 导出类型使用 `export type` 或 `export interface`

### 组合式函数
- 以 `use` 开头命名
- 返回响应式引用和方法
- 添加 JSDoc 注释说明用途

### 导入顺序
```typescript
// 1. Vue 相关
import { ref, computed } from 'vue';

// 2. 第三方库
import axios from 'axios';

// 3. 组件
import MyComponent from '@/components/MyComponent.vue';

// 4. 类型
import type { MyType } from '@/types';

// 5. 工具函数和常量
import { MY_CONSTANT } from '@/utils/constants';
```

## 🎨 样式规范

- 优先使用 TailwindCSS 工具类
- 自定义样式使用 `scoped`
- 动画和过渡效果保持一致（duration-300, ease-in-out）
- 颜色使用项目主题色系（pink-200, pink-500 等）

---

**重构完成时间**: 2026-01-02
**维护者**: MeowRain
