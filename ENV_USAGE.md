# 环境变量使用说明

这个项目使用了多层环境变量配置：

## 配置文件加载顺序（优先级从高到低）：
1. `.env.local` - 本地开发配置（不会被提交到 git）
2. `.env.development` / `.env.production` - 环境特定配置
3. `.env` - 通用配置

## 可用的环境变量：

### 应用配置
- `VITE_APP_TITLE` - 应用标题
- `VITE_APP_DESCRIPTION` - 应用描述
- `VITE_APP_KEYWORDS` - SEO关键词
- `VITE_APP_VERSION` - 应用版本
- `VITE_APP_EMAIL` - 联系邮箱

### 构建配置
- `VITE_APP_BASE_URL` - 应用基础路径
- `VITE_APP_API_URL` - API接口地址
- `VITE_APP_MODE` - 运行模式

### 开发配置
- `VITE_APP_LOCAL_PORT` - 本地开发端口
- `VITE_APP_DEBUG` - 调试模式

## 在代码中使用环境变量：

```javascript
// 在 Vue 组件中使用
const apiUrl = import.meta.env.VITE_APP_API_URL
const isDebug = import.meta.env.VITE_APP_DEBUG === 'true'

// 检查是否为开发环境
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

## 注意事项：
- 只有以 `VITE_` 开头的变量才会暴露给客户端代码
- `.env.local` 文件不应该提交到版本控制
- 敏感信息应该放在 `.env.local` 中
