import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  const isPresented = router.canGoBack();
  return (
    <View style={styles.container}>
      <Text>ModalScreen</Text>
      {/* 모달 닫기 버튼 */}
       {isPresented && <Link href="../">Dismiss modal</Link>}
       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});