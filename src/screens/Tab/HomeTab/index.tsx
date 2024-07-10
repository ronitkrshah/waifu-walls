import {authService} from '@app/appwrite/AuthService';
import UploadImageFAB from '@app/components/common/UploadImageFAB';
import ShowWallpapers from '@app/components/screens/Tab/HomeTab/ShowWallpapers';
import AppHeader from '@app/components/shared/AppHeader';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';
import {IDatabaseUser} from '@app/types/wallpaper';
import {useEffect} from 'react';
import {Query} from 'react-native-appwrite';
import {useDispatch} from 'react-redux';

function HomeTab() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser([Query.select(['userId', 'role', 'name', 'email'])])
      .then(
        (user: Pick<IDatabaseUser, 'name' | 'role' | 'email' | 'userId'>) => {
          dispatch(
            setUserGlobalStore({
              userId: user.userId,
              role: user.role,
              name: user.name,
              email: user.email,
            }),
          );
        },
      )
      .catch(() => {});
  }, [dispatch]);
  return (
    <>
      <AppHeader title="Home" mode="medium" showVerticalDotsMenu />
      <ShowWallpapers />
      <UploadImageFAB />
    </>
  );
}

export default HomeTab;
