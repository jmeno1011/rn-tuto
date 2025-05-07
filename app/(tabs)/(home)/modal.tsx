import { Link, router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function ModalScreen() {
  const isPresented = router.canGoBack();
  return (
    <View>
      <Text>ModalScreen</Text>
      {/* 모달 닫기 버튼 */}
       {isPresented && <Link href="../">Dismiss modal</Link>}
    </View>
  )
}