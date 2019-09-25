# ragam-ui
reactで作られたUIコンポーネント集

# install

```
# workspace内でlocalのpackageを参照する場合はバージョン指定`(@v.v.v)`が必要。
yarn add @puyan/ragam-ui@1.0.0
```

# import & using

```
# 一括インポート
import * as UI from '@puyan/ragam-ui'

# コンポーネントの利用
<UI.atoms.ComponentName.default >
<UI.molecules.ComponentName.default >

# 単一インポート
import * as ComponentName from '@puyan/ragam-ui/dist/atoms/ComponentName'

# コンポーネントの利用
<ComponentName.default />
```