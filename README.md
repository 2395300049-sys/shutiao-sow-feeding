# 薯条出海制作 · 母猪定量饲喂系统三维说明书

V2 完整静态网页源码。包括公司 Logo、三维设备及猪模型、安装教程 5 步、保养教程 5 步、使用运行 4 步，以及自由探索、透视、容积调节、动作进度和猪显示开关。

## 本地打开

在此 README 所在目录启动静态 HTTP 服务。例如，已安装 Python 3 时运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

然后在浏览器打开 `http://127.0.0.1:8000`。项目使用 JavaScript ES 模块，请通过 HTTP 访问，不直接双击 HTML。没有 Node 依赖，也不需要构建。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `dist/index.html` | 页面与公司标识 |
| `dist/app.js` | 界面交互、教程切换、参数及可选 WebMCP |
| `dist/viewer.js` | WebGL 渲染、相机、选取及动画 |
| `dist/model.js` | 饲喂设备三维结构与饲喂循环 |
| `dist/geometry.js` | 三维数学及网格工具 |
| `dist/pig.js` | 猪模型网格 |
| `dist/tutorials.js` | 安装、保养、运行步骤及参考链接 |
| `dist/style.css`、`dist/tutorial-style.css` | 响应式样式 |
| `dist/assets/shutiao-logo.jpg` | 用户提供的公司 Logo |

## 内容范围

这是根据公开资料重建的教学示意，不是厂家原始 CAD 或制造图纸。模型布局、尺寸、动作时序和显示容积均为演示设定。真实设备的安装、保养、控制与日粮应按对应型号说明和现场方案执行。

资料链接已集成在页面和每个教程步骤中：

- [Big Dutchman DryRapid 产品手册](https://cdn.bigdutchman.com/fileadmin/content/pig/products/en/Pig-production-Dry-feeding-DryRapid-Big-Dutchman-en.pdf)
- [厂家 DR1500 运行装配手册，经销商存档](https://palsusa.com/wp-content/uploads/sites/6/2015/11/Dry-Rapid-DR-1500_GB-Operation.pdf)

当前导出保留 V2 网页的全部功能和原始 Logo，未附带平台专用部署身份或任何登录凭证。上传此代码不会自动开启 GitHub Pages，也不会改变原网页的访问设置。公开分发前由项目所有者决定授权方式；本包没有擅自指定开源许可证。

导出基准：`ddcc67de9b88b084d380f12b6c028857fdd04ac8`。
