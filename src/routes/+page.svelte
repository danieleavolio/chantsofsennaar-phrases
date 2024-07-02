<script>
    // @ts-nocheck

    import Board from "../components/Board.svelte";
    import Diary from "../components/Diary.svelte";

    export let data;

    let phrase = [];

    
</script>

<main>

    <Board bind:phrases={phrase} />

    <Diary images={data.images} bind:phrase={phrase}> </Diary>
    
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
