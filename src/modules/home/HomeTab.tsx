import { Fragment, useEffect, useState } from "react";
import { AppHeader } from "~/components";
import { Wallpaper } from "~/models";
import { WallpaperService } from "~/services";
import { CompositeScreenProps } from "@react-navigation/native";
import { MaterialBottomTabScreenProps } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TStackNavigationRoutes, TBottomTabNavigationRoutes } from "~/navigation";
import { Image } from "expo-image";
import { WallpaperList } from "../wallpaper";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "HomeTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

const dummyData = [
  {
    category: "waifu",
    extension: "jpeg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "_5bfS9Z",
    wallpaperUri: "https://i.waifu.pics/_5bfS9Z.jpeg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "vd4XAVZ",
    wallpaperUri: "https://i.waifu.pics/vd4XAVZ.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "CoHIzDo",
    wallpaperUri: "https://i.waifu.pics/CoHIzDo.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "5CG-VN6",
    wallpaperUri: "https://i.waifu.pics/5CG-VN6.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "Fiw2pVa",
    wallpaperUri: "https://i.waifu.pics/Fiw2pVa.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "-zk792B",
    wallpaperUri: "https://i.waifu.pics/-zk792B.jpg",
  },
  {
    category: "waifu",
    extension: "jpeg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "VxoRcT4",
    wallpaperUri: "https://i.waifu.pics/VxoRcT4.jpeg",
  },
  {
    category: "waifu",
    extension: "png",
    isFavourite: false,
    mimeType: "image/png",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "n6U5SHh",
    wallpaperUri: "https://i.waifu.pics/n6U5SHh.png",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "aGY3-X6",
    wallpaperUri: "https://i.waifu.pics/aGY3-X6.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "DmrSW~9",
    wallpaperUri: "https://i.waifu.pics/DmrSW~9.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "CwK185b",
    wallpaperUri: "https://i.waifu.pics/CwK185b.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "xJuOKC8",
    wallpaperUri: "https://i.waifu.pics/xJuOKC8.jpg",
  },
  {
    category: "waifu",
    extension: "png",
    isFavourite: false,
    mimeType: "image/png",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "R5n5P7f",
    wallpaperUri: "https://i.waifu.pics/R5n5P7f.png",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "1y5O6HN",
    wallpaperUri: "https://i.waifu.pics/1y5O6HN.jpg",
  },
  {
    category: "waifu",
    extension: "jpeg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "gnpc_Lr",
    wallpaperUri: "https://i.waifu.pics/gnpc_Lr.jpeg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "V8hvqfK",
    wallpaperUri: "https://i.waifu.pics/V8hvqfK.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "f13ZjEw",
    wallpaperUri: "https://i.waifu.pics/f13ZjEw.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "aGgUm80",
    wallpaperUri: "https://i.waifu.pics/aGgUm80.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "MGCFWn1",
    wallpaperUri: "https://i.waifu.pics/MGCFWn1.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "I15h0iO",
    wallpaperUri: "https://i.waifu.pics/I15h0iO.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "LOR7MBO",
    wallpaperUri: "https://i.waifu.pics/LOR7MBO.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "vwRNvPe",
    wallpaperUri: "https://i.waifu.pics/vwRNvPe.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "POqiwlb",
    wallpaperUri: "https://i.waifu.pics/POqiwlb.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "07eNAFm",
    wallpaperUri: "https://i.waifu.pics/07eNAFm.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "ueqBS0o",
    wallpaperUri: "https://i.waifu.pics/ueqBS0o.jpg",
  },
  {
    category: "waifu",
    extension: "jpeg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "01zHsDn",
    wallpaperUri: "https://i.waifu.pics/01zHsDn.jpeg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "cKe~bpZ",
    wallpaperUri: "https://i.waifu.pics/cKe~bpZ.jpg",
  },
  {
    category: "waifu",
    extension: "jpeg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "S0v1yqP",
    wallpaperUri: "https://i.waifu.pics/S0v1yqP.jpeg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "pgLtw5E",
    wallpaperUri: "https://i.waifu.pics/pgLtw5E.jpg",
  },
  {
    category: "waifu",
    extension: "jpg",
    isFavourite: false,
    mimeType: "image/jpeg",
    type: "sfw",
    wallpaperBase64: undefined,
    wallpaperId: "ysB8wtC",
    wallpaperUri: "https://i.waifu.pics/ysB8wtC.jpg",
  },
];

export default function HomeTab({ navigation }: TProps) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>(dummyData as Wallpaper[]);

  useEffect(() => {
    fetchWallpapers();
  }, []);

  function fetchWallpapers() {
    return;
    WallpaperService.getWallpapers("sfw", WallpaperService.getRandomCategory("sfw")).then(
      (walls) => {
        if (walls.length > 0) {
          Image.prefetch(
            walls.map((item) => item.wallpaperUri),
            { cachePolicy: "disk" },
          );
          console.log(walls);

          //setWallpapers((p) => [...p, ...walls]);
        }
      },
    );
  }

  function handleWallpaperItemPress(wallpaper: Wallpaper) {
    navigation.push("WallpaperPreviewScreen", { wallpaper });
  }

  function refreshWallpapers() {
    setWallpapers([]);
    fetchWallpapers();
  }

  return (
    <Fragment>
      <AppHeader title="Waifus" />
      <WallpaperList wallpapers={wallpapers} onItemPress={handleWallpaperItemPress} />
    </Fragment>
  );
}
