import SpotifyPlayer from "@/components/shared/SpotifyPlayer";
import YoutubePlayer from "@/components/shared/YoutubePlayer";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SpotifyPlayer code={`'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Rr6wXmEx6w6dsBuqqKJa3?utm_source=generator" width="100%" ${process.env.SPOTIFY_STYLE} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'`} />
      <YoutubePlayer code={`'<iframe ${process.env.YOUTUBE_STYLE} src="https://www.youtube.com/embed/iEH4eqtK8SU?si=COgDrdeXF1vIYmnO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'`}/>
    </main>
  );
}
