# 按钮

### 基本使用
```html
<g-button>默认按钮</g-button>
<g-button type="primary">primary按钮</g-button>
<g-button type="danger">danger按钮</g-button>
<g-button type="info">info按钮</g-button>
<g-button type="success">success按钮</g-button>
<g-button type="warning">warning按钮</g-button>
```

### 朴素的线框
```html
<g-button plain>2224444</g-button>
<g-button type="primary" plain>111</g-button>
<g-button type="success" plain>222</g-button>
<g-button type="info" hairline>0.5px边框</g-button>
<g-button type="warning" hairline>0.5px边框</g-button>
```
### 禁用
```html
<g-button disabled>禁用</g-button>
<g-button type="primary" disabled>一个</g-button>
<g-button type="success" plain disabled>还</g-button>
<g-button type="info" hairline disabled>不够</g-button>
<g-button type="warning" hairline disabled>啊？</g-button>
```



## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `color` | 按钮颜色 | _string_ | `default` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |