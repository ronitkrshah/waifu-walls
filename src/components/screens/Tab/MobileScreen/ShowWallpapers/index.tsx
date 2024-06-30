import {databaseService} from '@app/appwrite/DatabaseService';
import ImageList from '@app/components/common/ImageList';
import {TListWallpaper} from '@app/types/wallpaper';
import {useEffect, useState} from 'react';

function ShowWallpapers() {
  const [images, setImages] = useState<TListWallpaper[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await databaseService.getHomeScreenWallpapers();
      if (data) {
        setImages(data);
      }
    };

    getImages();
  }, []);

  return <ImageList data={images} />;
}
export default ShowWallpapers;
