import {Avatar} from 'react-native-paper';

type Props = {
  name?: string;
};

function UserAvatar({name}: Props) {
  const firstCharacter = name?.charAt(0);

  return <Avatar.Text label={firstCharacter || 'W'} />;
}

export default UserAvatar;
