import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface HProps {
  navigation:any
}

export default function Header({ navigation }:HProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.openDrawer()}
      >
        <MaterialIcons name="menu" size={40} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#79be53',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  menuIcon: {
    // display: 'flex',
  },
});
