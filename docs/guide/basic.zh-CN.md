---
title: 基础使用
order: 2
toc: menu
---

## 目录结构

### 普通项目

一个普通的、使用 dumi 做研发的组件库目录结构大致如下：

<Tree>
  <ul>
    <li>
      docs
      <small>组件库文档目录</small>
      <ul>
        <li>
          index.md
          <small>组件库文档首页（如果不存在，会 fallback 到 README.md）</small>
        </li>
        <li>
          guide
          <small>组件库文档其他路由（示意）</small>
          <ul>
            <li>index.md</li>
            <li>sample.md</li>
            <li>help.md</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      src
      <small>组件库源码目录</small>
      <ul>
        <li>
          Button
          <small>单个组件</small>
          <ul>
            <li>
              index.tsx
              <small>组件源码</small>
            </li>
            <li>
              index.less
              <small>组件样式</small>
            </li>
            <li>
              index.md
              <small>组件文档</small>
            </li>
          </ul>
        </li>
        <li>
          index.ts
          <small>组件库入口文件</small>
        </li>
      </ul>
    </li>
    <li>
      .umirc.ts
      <small>dumi 配置文件（也可以是 config/config.ts）</small>
    </li>
    <li>
      .fatherrc.ts
      <small>father-build 的配置文件，用于组件库打包</small>
    </li>
  </ul>
</Tree>

如果是单纯的文档站点、不包含组件源码，忽略上面的 `src` 目录结构即可。

注意，此处仅对目录结构做说明，如果要初始化一个 dumi 项目，建议直接使用 `@umijs/create-dumi-lib` 或 `@umijs/create-dumi-app` 的脚手架进行创建。

### lerna 项目

大多数情况下，我们会将所有 lerna 子包的文档集中在同一个文档站点中，目录结构通常是这样的：

<Tree>
  <ul>
    <li>
      docs
      <small>仓库公共文档</small>
      <ul>
        <li>
          index.md
          <small>组件库文档首页（如果不存在，会 fallback 到 README.md）</small>
        </li>
        <li>
          guide
          <small>组件库文档其他路由（示意）</small>
          <ul>
            <li>index.md</li>
            <li>sample.md</li>
            <li>help.md</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      packages
      <ul>
        <li>
          a
          <small>子包 a</small>
          <ul>
            <li>
              src
              <small>子包 a 的源码目录</small>
              <ul>
                <li>
                  Button
                  <small>单个组件</small>
                  <ul>
                    <li>
                      index.tsx
                      <small>组件源码</small>
                    </li>
                    <li>
                      index.less
                      <small>组件样式</small>
                    </li>
                    <li>
                      index.md
                      <small>组件文档</small>
                    </li>
                  </ul>
                </li>
                <li>
                  index.ts
                  <small>组件库入口文件</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          b
          <small>子包 b</small>
          <ul>
            <li>
              src
              <small>子包 b 的源码目录</small>
              <ul>
                <li>
                  Table
                  <small>单个组件</small>
                  <ul>
                    <li>
                      index.tsx
                      <small>组件源码</small>
                    </li>
                    <li>
                      index.less
                      <small>组件样式</small>
                    </li>
                    <li>
                      index.md
                      <small>组件文档</small>
                    </li>
                  </ul>
                </li>
                <li>
                  index.ts
                  <small>组件库入口文件</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      .umirc.ts
      <small>dumi 配置文件（也可以是 config/config.ts）</small>
    </li>
    <li>
      .fatherrc.ts
      <small>father-build 的配置文件，用于组件库打包</small>
    </li>
  </ul>
</Tree>

dumi 默认会以 `packages/[包名]/src` 为基础路径搜寻所有子包的 Markdown 文档并生成路由，目前没有 lerna 项目的脚手架，可以查看 [ahooks](https://github.com/alibaba/hooks) 项目作为参考。
