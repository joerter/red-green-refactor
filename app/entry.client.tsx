/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.client
 */

import { CssBaseline, ThemeProvider } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import theme from "./theme";
import { hydrate } from "react-dom";

// Using hydrate for now to avoid the intial ui does not match
// rendered error
// https://github.com/remix-run/remix/issues/2570

startTransition(() => {
  hydrate(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RemixBrowser />
        <CssBaseline />
      </ThemeProvider>
    </StrictMode>,
    document
  );
});
