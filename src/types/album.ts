// 照片相关类型
export interface Photo {
  id: number;
  title: string;
  url: string;
  description?: string;
  category: string;
  tags: string[];
}

export interface PhotoCategory {
  name: string;
  count: number;
}
