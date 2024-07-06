<script>
    // @ts-nocheck

    import Board from "../components/Board.svelte";
    import Diary from "../components/Diary.svelte";
    import Disclaimer from "../components/Disclaimer.svelte";
    import Footer from "../components/Footer.svelte";
    import Seo from "../components/SEO.svelte";

    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";

    inject({ mode: dev ? "development" : "production" });

    export let data;

    let phrase = [];
</script>

<main>
    <Seo />

    <Disclaimer />

    <Board bind:phrases={phrase} />

    <Diary images={data.images} bind:phrase></Diary>

    <Footer />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        padding: 1em;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        min-height: 100vh;
    }
</style>
