/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {PropsWithChildren, createContext, useContext, useState} from 'react';

type UploadWallpaperContextState = {
  title: string;
  wallpaperUri: string;
  wallpaperSize?: number;
  isMatureContent: boolean;
  imageTags: string[];
  setTitle(title: string): void;
  setWallpaperUri(uri: string): void;
  setWallpaperSize(size: number): void;
  setIsMatureContent(value: boolean): void;
  setImageTags(tags: string[]): void;
};

const UploadWallpaperContext = createContext<UploadWallpaperContextState>(
  {} as UploadWallpaperContextState,
);

export function useUploadWallpaperContext() {
  const context = useContext(UploadWallpaperContext);
  if (context) {
    return context;
  }
  throw new Error(
    'useUploadWallpaperContext must be wrap withing UploadWallpaperContext',
  );
}

function UploadWallpaperContextProvider({children}: PropsWithChildren) {
  const [title, setTitle] = useState('');
  const [wallpaperUri, setWallpaperUri] = useState('');
  const [wallpaperSize, setWallpaperSize] = useState<number>();
  const [isMatureContent, setIsMatureContent] = useState(false);
  const [imageTags, setImageTags] = useState<string[]>([]);

  return (
    <UploadWallpaperContext.Provider
      value={{
        title,
        wallpaperSize,
        wallpaperUri,
        isMatureContent,
        imageTags,
        setTitle,
        setWallpaperSize,
        setWallpaperUri,
        setIsMatureContent,
        setImageTags,
      }}>
      {children}
    </UploadWallpaperContext.Provider>
  );
}

export default UploadWallpaperContextProvider;
