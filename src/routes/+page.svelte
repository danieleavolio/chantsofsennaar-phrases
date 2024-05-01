<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import Board from "../components/Board.svelte";
    import Diary from "../components/Diary.svelte";


    let phrase = [];

    const addSymbol = (symbol) => {
        phrase = [...phrase, symbol];
    };

    
</script>

<main>

    <Board bind:phrases={phrase} />

    <Diary> </Diary>
    
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
    }

</style>
