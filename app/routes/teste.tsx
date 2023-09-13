import type {
    ActionArgs,
    LoaderArgs,
  } from "@remix-run/node"; // or cloudflare/deno
  import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
  import {
    useLoaderData,
    Link,
    Form,
  } from "@remix-run/react";
  
  import { userPrefs } from "~/routes/cookie.server";
  
  export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie =
      (await userPrefs.parse(cookieHeader)) || {};
    return json({ showBanner: cookie.showBanner });
  }
  
  export async function action({ request }: ActionArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie =
      (await userPrefs.parse(cookieHeader)) || {};
    const bodyParams = await request.formData();
  
    if (bodyParams.get("bannerVisibility") === "hidden") {
      cookie.showBanner = false;
    }
  
    return redirect("/", {
      headers: {
        "Set-Cookie": await userPrefs.serialize(cookie),
      },
    });
  }
  
  export default function Home() {
    const { showBanner } = useLoaderData<typeof loader>();
  
    return (
      <div>
        {showBanner ? (
          <div>
            <Link to="/sale">Don't miss our sale!</Link>
            <Form method="post">
              <input
                type="hidden"
                name="bannerVisibility"
                value="hidden"
              />
              <button type="submit">Hide</button>
            </Form>
          </div>
        ) : null}
        <h1>Welcome!</h1>
      </div>
    );
  }