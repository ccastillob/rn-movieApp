import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({route}: Props) => {

  const { movieId } = route.params;

  console.log({movieId})

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}