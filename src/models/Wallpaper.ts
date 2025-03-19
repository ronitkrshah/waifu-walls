export class Wallpaper {
  constructor(
    public readonly wallpaperId: string,
    public readonly wallpaperUri: string,
    public readonly wallpaperBase64: string | undefined = undefined,
  ) {}
}
