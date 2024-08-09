/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {produce} from 'immer';
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

type UploadWallpaperState = {
  title: string;
  orignialAuthor?: string;
  originalPostLink?: string;
  imagePath: string;
  wallpaperSize?: number;
  isMatureContent: boolean;
  imageTags: string[];
};

export const enum UploadWallpaperActionTypes {
  UPDATE_TITLE,
  UPDATE_ORIGINAL_AUTHOR,
  UPDATE_ORIGINAL_POST_LINK,
  UPDATE_IMAGE_PATH,
  UPDATE_WALLPAPER_SIZE,
  UPDATE_IMAGE_TAGS,
  TOGGLE_MATURE_CONTENT,
}

type UploadWallpaperAction = {
  type: UploadWallpaperActionTypes;
  payload: any;
};

function reducerFunc(
  state: UploadWallpaperState,
  action: UploadWallpaperAction,
) {
  switch (action.type) {
    case UploadWallpaperActionTypes.UPDATE_TITLE:
      return produce(state, draft => {
        draft.title = action.payload;
      });
    case UploadWallpaperActionTypes.UPDATE_ORIGINAL_AUTHOR:
      return produce(state, draft => {
        draft.orignialAuthor = action.payload;
      });
    case UploadWallpaperActionTypes.UPDATE_ORIGINAL_POST_LINK:
      return produce(state, draft => {
        draft.originalPostLink = action.payload;
      });
    case UploadWallpaperActionTypes.UPDATE_IMAGE_PATH:
      return produce(state, draft => {
        draft.imagePath = action.payload;
      });
    case UploadWallpaperActionTypes.UPDATE_WALLPAPER_SIZE:
      return produce(state, draft => {
        draft.wallpaperSize = action.payload;
      });
    case UploadWallpaperActionTypes.UPDATE_IMAGE_TAGS:
      return produce(state, draft => {
        draft.imageTags = [...action.payload];
      });
    case UploadWallpaperActionTypes.TOGGLE_MATURE_CONTENT:
      return produce(state, draft => {
        draft.isMatureContent = !draft.isMatureContent;
        draft.imageTags = [];
      });
    default:
      return state;
  }
}

const UploadWallpaperContext = createContext<
  UploadWallpaperState & {dispatch: Dispatch<UploadWallpaperAction>}
>({} as UploadWallpaperState & {dispatch: Dispatch<UploadWallpaperAction>});

const initialState: UploadWallpaperState = {
  title: '',
  imagePath: '',
  wallpaperSize: undefined,
  isMatureContent: false,
  imageTags: [],
};

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
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <UploadWallpaperContext.Provider value={{...state, dispatch}}>
      {children}
    </UploadWallpaperContext.Provider>
  );
}

export default UploadWallpaperContextProvider;
