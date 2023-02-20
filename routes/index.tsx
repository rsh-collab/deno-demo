import { Head } from "$fresh/runtime.ts";
import { Layout } from "../components/Layout/Layout.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <Layout>
                <img
                    src="/logo.svg"
                    width="128"
                    height="128"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <p>
                    Welcome toooo `fresh`. Try updating this message in the
                    ./routes/index.tsx file, and refresh.
                </p>
                <ul>
                    <li>
                        <a href="/islands">/islands</a>
                    </li>
                    <li>
                        <a href="/handlers">/handlers</a>
                    </li>
                    <li>
                        <a href="/api/joke">/api/joke</a>
                    </li>
                    <li>
                        <a href="/fetching/rsh-collab">/fetching/rsh-collab</a>
                    </li>
                </ul>
                <Counter start={3} />
            </Layout>
        </>
    );
}
