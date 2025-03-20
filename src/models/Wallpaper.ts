import { TWallpaperCategory, TWallpaperType } from "~/api";

export class Wallpaper {
  constructor(
    public readonly wallpaperId: string,
    public readonly wallpaperUri: string,
    public readonly type: TWallpaperType,
    public readonly category: TWallpaperCategory,
    public readonly extension: string,
    public readonly mimeType: string,
    public readonly wallpaperBase64: string | undefined = undefined,
  ) {}
}
