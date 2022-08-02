---
title: 输入组件
order: 2
toc: menu
---

# 输入组件

一般出现在需要用户提交信息或者收集用户信息的场景，目前 formily 支持一下基础输入组件：

## 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

### 使用场景

- 需要用户输入表单域内容时
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择

### name

- 类别：字段属性
- 名称：字段标识
- 类型: `string`
- 默认值：`''`
- 详细：

配置字段所对应的表单提交 key 值，一般对应服务端数据库中的字段。

示例：

```js
{
  name: 'deptName';
}
```

### title

- 类别：字段属性
- 名称：字段名称
- 类型：`string`
- 默认值：`''`
- 详细：

配置字段在表单中显示的名称，此处会在国际化时，作为兜底策略。

示例：

```js
{
  title: '部门名称';
}
```

## 多行输入

## 密码框

## 数字

## 选择框

## 复选框

## 开关

## 日期

## 日期范围

## 时间

## 时间范围

## 评分

## 级联选择

## 下拉树

## 滑动条