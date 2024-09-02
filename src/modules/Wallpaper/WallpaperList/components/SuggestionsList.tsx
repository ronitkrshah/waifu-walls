/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Pressable, ScrollView} from 'react-native';
import {Suggestions} from '../constants';
import {Avatar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useSuggestions} from '../hooks';

export function SuggestionsList() {
  const {handleSuggestionPress} = useSuggestions();

  function handlePress(name: string) {
    handleSuggestionPress(name);
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {Suggestions.map((item, index) => (
        <Pressable
          key={`${item.name}-${index}`}
          onPress={() => handlePress(item.name)}>
          <Avatar.Image source={item.url} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 8,
  },
});
