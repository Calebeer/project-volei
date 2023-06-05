import { LoaderArgs, json } from "@remix-run/node";
import { tosBannerCookie } from "./cookie.server";
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

export async function loader({request}: LoaderArgs){
    const cookierHeader = request.headers.get('Cookie');
    const cookie = await tosBannerCookie.parse(cookierHeader);

    return json({
        showTOSBanner: true,
    })
}

export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await tosBannerCookie.parse(cookieHeader);
  
    if (cookie) {
      return json({ showTOSBanner: cookie?.dateTOSRead < LAST_UPDATED_DATE });
    }
    return json(
      { showTOSBanner: true },
      {
        headers: {
          "Set-Cookie": await tosBannerCookie.serialize({
            dateTOSRead: 0,
          }),
        },
      }
    );
  }
  
  export default function App() {
    const { showTOSBanner } = useLoaderData<typeof loader>();
  
    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
  
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
            suppressHydrationWarning
          />
        </head>
        <body>
          {showTOSBanner ? <tosBannerCookie /> : null}
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }