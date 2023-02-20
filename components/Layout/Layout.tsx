import type { ComponentChildren } from "preact";

type Props = {
    children: ComponentChildren;
};

export function Layout(props: Props) {
    return (
        <div
            class="container"
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            {props.children}
        </div>
    );
}
