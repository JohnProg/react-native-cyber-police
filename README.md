![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/rnsk-logo.jpg "React Native Starter Kit")

# React Native Cyber Police

演示项目-不提供后台服务(感谢[React Native Starter Kit](https://github.com/mcnamee/react-native-starter-app))

![alt text](https://dl.dropboxusercontent.com/u/46690444/GITHUB/rnsk-v2-screens.jpg "React Native Starter App")

---
## 更新日志

    2017年01月25日
        1.克隆React Native Starter Kit重新命名项目
        2.修改图标(IOS & Android)
## 说明

1. [项目特色](#features)
1. **项目开始前**
  1. [Getting Started with React Native](/docs/react-native.md)
  1. [React Native 快速使用建议](/docs/quick-tips.md)
  1. [项目文件结构](#understanding-the-file-structure)
  1. [该项目可选的手册](/docs/opinions.md)
1. **使用该项目**
  1. [获取项目运行项目](#getting-started)
  1. [重命名项目](/docs/renaming.md)
  1. [导航器](/src/navigation/README.md)
  1. [谷歌分析组件](/docs/google-analytics.md)
  1. [Interacting with a REST API](/docs/api.md)
  1. [测试](/docs/testing.md)
---

## 项目特色

| Feature | Summary |
| --- | --- |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) | Router for React Native based on new React Native Navigation API. <br><br>['How to' Guide &rarr;](/src/navigation/README.md)|
| [API Example](/docs/api.md) | A basic example showing how you can interact with a RESTful API with user authentication (JWT). |
| [Sidebar / Hamburger Menu](https://github.com/react-native-community/react-native-side-menu) | ... |
| [React Native Elements](https://github.com/react-native-community/react-native-elements) | Cross Platform React Native UI Toolkit. |
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). <br><br>[Setup Guide &rarr;](/docs/google-analytics.md) |
| [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) | Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Tcomb Form Validation](https://github.com/gcanti/tcomb-form-native) | An example on how to create forms with validation. |
| Component Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| Code Linting / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. <br><br>[Get started with linting for React Native &rarr;](https://medium.com/pvtl/linting-for-react-native-bdbb586ff694) |
| Boilerplate | An example directory/file structure I've found useful for scaling apps <br><br>[Learn more &rarr;](#understanding-the-file-structure) |

---

## 项目使用

1. 确保按照该 [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) 项目开始选择自己的平台
1. 克隆到本地 `git clone https://github.com/LancCJ/react-native-cyber-police.git`
1. 在项目根目录下运行 `npm install` 命令
1. 在 [模拟器](/docs/quick-tips.md#running-in-an-emulator)中运行项目

---

## 文档项目结构

- `/android` - 安卓原生代码
- `/ios` - 苹果原生代码
- `/src` - 包含所有React Native代码
  - `/components` - 'Dumb-components' / presentational. [更多 &rarr;](/src/components/README.md)
  - `/constants` - App-wide variables and config
  - `/containers` - 'Smart-components' / the business logic. [更多 &rarr;](/src/containers/README.md)
  - `/images` - 图片
  - `/lib` - 工具类,通用函数
  - `/navigation`- 导航器组件 [更多 &rarr;](/src/navigation/README.md)
  - `/redux` - 状态管理组件 [更多 &rarr;](/src/redux/README.md)
  - `/theme` - 主题和一些自定义字符串



