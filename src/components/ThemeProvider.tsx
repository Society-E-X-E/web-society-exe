"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function MaterialThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
