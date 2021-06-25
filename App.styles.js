import {StyleSheet} from 'react-native';

export const AppStyles = StyleSheet.create({
  boxItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxItemYellow: {
    backgroundColor: 'yellow',
  },
  boxItemRed: {
    backgroundColor: 'red',
  },
  boxItemColor: color => {
    return {
      backgroundColor: color,
    };
  },
});
