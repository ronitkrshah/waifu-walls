import {Appbar} from 'react-native-paper';

type Props = {
  title: string;
  mode?: 'small' | 'medium' | 'large' | 'center-aligned';
};

function AppHeader({title, mode}: Props) {
  return (
    <Appbar.Header mode={mode}>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default AppHeader;
