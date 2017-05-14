[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![Version](https://img.shields.io/npm/v/react-native-progress-circle.svg)](https://www.npmjs.com/package/react-native-progress-circle)
[![npm](https://img.shields.io/npm/dt/react-native-progress-circle.svg)](https://www.npmjs.com/package/react-native-progress-circle)
[![Twitter Follow](https://img.shields.io/twitter/follow/cmichelio.svg?style=social&label=Follow)](https://twitter.com/cmichelio)

# React Native Progress Circle

![React Native Progress Circles](/README/featured.png?raw=true "React Native Progress Circles")

## Features

* Custom colors
* Custom size and border radius
* Light-weight: No other dependencies besides `react-native`

## Installation

`yarn add react-native-progress-circle`

or

`npm install --save react-native-progress-circle`

## Usage

```javascript
import ProgressCircle from 'react-native-progress-circle'

render() {
    return (
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
    )
}
```

## Props
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| percent | The percentage used for displaying the progress | Number | ✓ |  |
| radius | The radius in `px` of the component (including border) | Number | ✓ |  |
| borderWidth | The border width in `px` | Number | ✓ |  |
| color | The border color | String |  | ![#f00](https://placehold.it/15/f00/000000?text=+) `'#f00'` |
| shadowColor | The background color of the border | String |  | ![#999](https://placehold.it/15/999/000000?text=+) `'#999'` |
| bgColor | The inner background color of the component  | String |  | ![#e9e9ef](https://placehold.it/15/e9e9ef/000000?text=+) `'#e9e9ef'` |
| children | The children to render inside this component | Node |  | `null` |
| containerStyle | The custom styling which will be applied to the container of the `children` | Style |  | `null` |

## Author

[Christoph Michel](http://cmichel.io)

## Implementation Details

[React Native Progress Circle](http://cmichel.io/react-native-progress-circle)

## License

MIT
