import { Svg, Circle } from 'react-native-svg';
import { Svg as PotionSvg, Circle as PotionCircle } from '@potion/element';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >

            <PotionSvg
              height={500}
              width={500}
              component={Svg}
            >
              <PotionCircle
                cx={0}
                cy={0}
                r={100}
                fill="black"
                component={Circle}
                transform={{ translate: [250, 250] }}
                env="react-native-svg"
              />


            </PotionSvg>
      </View>
    );
  }
}
