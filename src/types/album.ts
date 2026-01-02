// 照片相关类型
export interface Photo {
  id?: number;
  title?: string;
  url: string;
  description?: string;
  category?: string;
  tags?: string[];
  // 新字段: 从 API 获取的数据结构
  filename?: string;
  year?: string;
  month?: string;
  day?: string;
  date?: string;
}

export interface PhotoCategory {
  name: string;
  count: number;
}
