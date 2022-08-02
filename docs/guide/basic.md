---
title: Basic
order: 2
toc: menu
---

## Directory Structure

### Common project

The directory structure of a common component library that based on dumi is roughly as follows:

<Tree>
  <ul>
    <li>
      docs
      <small>Component library document directory</small>
      <ul>
        <li>
          index.md
          <small>Documentation Home (If it does not exist, it will fallback to README.md)</small>
        </li>
        <li>
          guide
          <small>Component library document other routing (Signal)</small>
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
      <small>Source code directory</small>
      <ul>
        <li>
          Button
          <small>Single component</small>
          <ul>
            <li>
              index.tsx
              <small>Single component</small>
            </li>
            <li>
              index.less
              <small>Component style</small>
            </li>
            <li>
              index.md
              <small>Component documentation</small>
            </li>
          </ul>
        </li>
        <li>
          index.ts
          <small>Component library entry file</small>
        </li>
      </ul>
    </li>
    <li>
      .umirc.ts
      <small>dumi configuration file (Can also be config/config.ts)</small>
    </li>
    <li>
      .fatherrc.ts
      <small>father-build configuration file, used for component library packaging</small>
    </li>
  </ul>
</Tree>

If it is a pure document site without component source code, just ignore the `src` directory above.

Note that only the directory structure is explained here.

If you want to initialize a dumi project, it is recommended to directly use the scaffolding of `@umijs/create-dumi-lib` or `@umijs/create-dumi-app` to create it.

### lerna project

In most cases, we will gather the documentation of all lerna sub-packages in the same documentation site.

The directory structure is usually like this:

<Tree>
  <ul>
    <li>
      docs
      <small>Public documents</small>
      <ul>
        <li>
          index.md
          <small>Documentation Home (If it does not exist, it will fallback to README.md)</small>
        </li>
        <li>
          guide
          <small>Component library document other routing (Signal)</small>
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
          <small>Subpackage a</small>
          <ul>
            <li>
              src
              <small>Source directory of subpackage a</small>
              <ul>
                <li>
                  Button
                  <small>Single component</small>
                  <ul>
                    <li>
                      index.tsx
                      <small>Source code</small>
                    </li>
                    <li>
                      index.less
                      <small>Component style</small>
                    </li>
                    <li>
                      index.md
                      <small>Component documentation</small>
                    </li>
                  </ul>
                </li>
                <li>
                  index.ts
                  <small>Component library entry file</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          b
          <small>Subpackage b</small>
          <ul>
            <li>
              src
              <small>Source directory of subpackage b</small>
              <ul>
                <li>
                  Table
                  <small>Single component</small>
                  <ul>
                    <li>
                      index.tsx
                      <small>Source code</small>
                    </li>
                    <li>
                      index.less
                      <small>Component style</small>
                    </li>
                    <li>
                      index.md
                      <small>Component documentation</small>
                    </li>
                  </ul>
                </li>
                <li>
                  index.ts
                  <small>Component library entry file</small>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      .umirc.ts
      <small>dumi configuration file (Can also be config/config.ts)</small>
    </li>
    <li>
      .fatherrc.ts
      <small>father-build configuration file, used for component library packaging</small>
    </li>
  </ul>
</Tree>

By default, dumi will search for the Markdown documents of all sub-packages and generate routes based on the path `packages/[package name]/src`.

There is currently no scaffolding for the lerna project. You can check [ahooks](https://github.com/alibaba/hooks) project as a reference.
