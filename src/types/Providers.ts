import { EmotionCache } from "@emotion/cache";
import { AppProps } from "next/app";
import React from "react";

export interface ProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
