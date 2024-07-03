import { theme } from "@/components/theme";
import { TitleBar } from "@/components/ui/title-bar";
import { routes } from "@generouted/react-router";
import { ThemeProvider } from "@mui/material";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter(routes);

export function Layout() {
  return (
      <ThemeProvider theme={theme}>
        <div className='root-layout'>
          <TitleBar />
          <div className='content'>
            <RouterProvider router={router} />
          </div>
        </div>
    </ThemeProvider>
  );
}
