import { RootProvider } from "fumadocs-ui/provider/next";
import { DefaultSearchDialog } from "./components/ui/search";
import { ThemeProvider } from "./components/ui/theme-provider";

export function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <RootProvider
        search={{
          SearchDialog: DefaultSearchDialog,
        }}
      >
        {children}
      </RootProvider>
    </ThemeProvider>
  );
}
