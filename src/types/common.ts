// 通用类型定义
export interface NavigationItem {
  name: string;
  description: string;
  icon: string;
  url: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string | string[]; // 支持 string 或 FontAwesome 图标格式 string[]
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string[] | string;
}
