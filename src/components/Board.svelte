<script>
    // @ts-n ocheck

    // @ts-ignore
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    import { fade } from "svelte/transition";
    // @ts-ignore
    /**
     * @type {any[]}
     */
    export let phrases = [];
    // @ts-ignore
    $: phrase = phrases;


    const removePhrase = (/** @type {number} */ index) => {
        console.log(index);
        phrases = phrases.filter((_, i) => i !== index);
    };
</script>

<div class="board">
    <h1>CHANTS OF SENNAAR: PHRASES</h1>
    <div class="container">
        {#each phrases as image, i(i)}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div transition:fade animate:flip
             on:click={() => removePhrase(i)} class="image-container">
                <img src={image.path} />
            </div>
        {/each}
    </div>
    <p 
     class="phrase">
        <!-- Take all the text from image -->
         {#each phrase as symbol, i(i)}
         <div transition:fade animate:flip
         class="symbol">
             {symbol.text}
        </div>
         {/each}
    </p>

    {#if phrase.length}
        <button transition:fade={{
            delay: 200,
            duration: 500
        }}
         on:click={() => phrases = []}>Clear</button>
    {/if}

</div>

<style>

    h1{
        color: var(--devotee-yellow);
        text-align: center;
        /* make font size big but responsive */
        font-size: 3rem;
    }

    button{
        background-color: var(--devotee-yellow);
        color: var(--devotee-red);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.1rem;
        cursor: pointer;
        transition: background-color 0.5s;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1em;
        /* capitalize */
        text-transform: uppercase;
    }

    button:hover{
        background-color: var(--devotee-red);
        color: var(--devotee-yellow);
    }
    .board {
        border-radius: 0.1rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        overflow-y: hidden;
        height: 100%;
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

    .phrase{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>
