# React Steelseries

Steelseries Gauges v2 web components wrapped up for react + ts.

[View the Storybook](https://64d2ac6d1aca82d3fc496b0f-xwpdiukkph.chromatic.com/)

## Get Started

Install the dependency using the package manager of your choice

```bash
npm i react-steelseries
```

```bash
yarn add react-steelseries
```

```
pnpn add react-steelseries
```

Import the library

```ts
// es6/TS
import Steelseries from "react-steelseries";
```

```js
// umd
const Steelseries = require("react-steelseries");
```

Example usage:

```tsx
import Steelseries, { ColorDef } from "react-steelseries";

function App() {
  return <Steelseries.Altimeter value={75} pointerColor={ColorDef.Blue} />;
}
```

## TODO

| Web Component |       Types        |     Component      |      Stories       |
| :------------ | :----------------: | :----------------: | :----------------: |
| Altimeter     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Battery       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Compass       | :heavy_check_mark: | :heavy_check_mark: |   :construction:   |
| Horizon       | :heavy_check_mark: | :heavy_check_mark: |   :construction:   |
| Level         | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
| LightBulb     | :heavy_check_mark: | :heavy_check_mark: |   :construction:   |
| LightLed      | :heavy_check_mark: | :heavy_check_mark: |   :construction:   |
| Odometer      | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
| StopWatch     | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
| TrafficLight  | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
| WindDirection | :heavy_check_mark: | :heavy_check_mark: |        :x:         |
