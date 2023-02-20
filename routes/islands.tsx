import { PageProps } from "$fresh/server.ts";
// import Countdown from '../islands/Countdown';

export default function Islands(props: PageProps) {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
      <p>
        The big event is happening.
      </p>
    );
}
