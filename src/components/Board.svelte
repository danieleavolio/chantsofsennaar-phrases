<script>
// @ts-nocheck

    import { onMount } from 'svelte';

    /**
     * @type {string[]}
     */
     export let phrases = [];

     /**
      * @param {string} symbol
      */
     $: phrase = phrases.map((phrase) => phrase.split("/").pop().split(".")[0].replaceAll("'", " ").replace(/_/g, " ")).join(" ");
</script>

<div class="board">
    <h1>Board</h1>
    <div class="container">
        {#each phrases as image}
            <div class="image-container">
                <img src={image} alt="{image.split("/").pop().split(".")[0].replaceAll("'", " ").replace(/_/g, " ")}" />    
            </div>
        {/each}    
    </div>
    <h3>Your phrase is:</h3>
    <p class="phrase">{phrase}</p>
</div>


<style>

    .board{
        border-radius: 0.1rem;
        padding: 1rem;
    }

    .container{
        min-height: 40vh;
        border-radius: 0.1rem;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .phrase{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }

</style>