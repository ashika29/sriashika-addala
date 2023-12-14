import { VariantType, SharedProps } from "notistack";
import { ElementType, ReactNode } from "react";

export interface UseSnackbarProps extends SharedProps {
  message: string | ReactNode | ElementType;
  variant?: VariantType;
}
