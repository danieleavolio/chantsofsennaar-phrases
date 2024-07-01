<script>
    // @ts-n ocheck

    // @ts-ignore
    import { onMount } from "svelte";
    // @ts-ignore
    /**
     * @type {any[]}
     */
    export let phrases = [];
    // @ts-ignore
    $: phrase = phrases;

    const removePhrase = (index) => {
        console.log(index);
        phrases = phrases.filter((_, i) => i !== index);
    };
</script>

<div class="board">
    <h1>CHANTS OF SENNAAR: THE BOARD</h1>
    <div class="container">
        {#each phrases as image, i}
            <div on:click={() => removePhrase(i)} class="image-container">
                <img src={image.path} />
            </div>
        {/each}
    </div>
    <p class="phrase">
        <!-- Take all the text from image -->
        {phrase.map((image) => image.text).join(" ")}
    </p>
</div>

<style>

    h1{
        color: var(--devotee-yellow);
        text-align: center;
        /* make font size big but responsive */
        font-size: 3rem;
    }
    .board {
        border-radius: 0.1rem;
        padding: 1rem;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;

    }

    .container {
        border-radius: 0.1rem;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .phrase {
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
        text-align: center;
    }

    .image-container {
        position: relative;
        width: 60px;
        height: 60px;
        border: 1px solid black;
        background-color: rgb(241, 237, 228);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.5s;
    }

    .image-container:hover{
        background-color: rgb(255, 93, 93);
    }
</style>
