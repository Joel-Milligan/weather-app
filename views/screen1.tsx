import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DefaultStackScreenProps } from './nav-types';
import { SimpleButton } from '../components/SimpleButton';
import colors from '../theme/colors';
import metrics from '../theme/metrics';

type Props = DefaultStackScreenProps<'Screen1'>;

export function Screen1(props: Props): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1 Body</Text>
      <SimpleButton
        title="Go To Screen 2"
        onPress={() => {
          props.navigation.navigate('Screen2');
        }}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: metrics.doubleMargin,
  },
  button: { margin: metrics.baseMargin },
  title: {
    fontSize: metrics.titleFontSize,
    color: colors.title,
  },
});
