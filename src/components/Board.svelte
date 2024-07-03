<script>
    // @ts-ignore
    // @ts-ignore
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";
    import { fade } from "svelte/transition";
    import html2canvas from "html2canvas";
    // @ts-ignore
    /**
     * @type {any[]}
     */
    export let phrases = [];
    let exportText = true;
    let exportBackground = true;
    let showSettings = false;

    // @ts-ignore
    $: phrase = phrases;

    const removePhrase = (/** @type {number} */ index) => {
        console.log(index);
        phrases = phrases.filter((_, i) => i !== index);
    };

    const downloadImage = () => {
        const element = document.querySelector(".board");
        // @ts-ignore
        // get the phrase 
        const phrase = document.querySelector(".phrase");

        // @ts-ignore
        phrase.style.display = exportText ? "block" : "none";
        // @ts-ignore
        html2canvas(element, {
            backgroundColor: exportBackground ? "#191919" : 'none',
            scale: 2,
        },
    ).then((canvas) => {
            const link = document.createElement("a");
            link.download = "chant.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    };
</script>

<h1>CHANTS OF SENNAAR: PHRASES</h1>

<div class="board">
    <div class="container">
        {#each phrases as image, i (i)}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                transition:fade
                animate:flip
                on:click={() => removePhrase(i)}
                class="image-container"
            >
                <img src={image.path} />
            </div>
        {/each}
    </div>
    <p class="phrase">
        <!-- Take all the text from image -->
        {#each phrase as symbol, i (i)}
            <div transition:fade animate:flip class="symbol">
                {symbol.text}
            </div>
        {/each}
    </p>
</div>

{#if phrase.length}
    <div class="buttons">
        <button
            transition:fade={{
                delay: 200,
                duration: 500,
            }}
            on:click={() => (phrases = [])}>Clear</button
        >
        <button
            on:click={() => downloadImage()}
            class="download"
            transition:fade={{
                delay: 200,
                duration: 500,
            }}>Download Image</button
        >
    </div>

    <button class="settings-button"
        on:click={() => (showSettings = !showSettings)}
        transition:fade={{
            delay: 200,
            duration: 500,
        }}>{showSettings ? 'Close' : 'Show' } Export Settings</button
    >
    {#if showSettings}
        <div transition:fade class="settings">
            <h3>Export Settings</h3>
            <div class="export-settings">
                <input type="checkbox" bind:checked={exportText} />
                <label class="{exportText ? 'active' : ''}" for="exportText">Export Text</label>
                <input type="checkbox" bind:checked={exportBackground} />
                <label class="{exportBackground ? 'active' : ''}" for="exportBackground">Export Background</label>
            </div>
        </div>
    {/if}
{/if}

<style>
    h1 {
        color: var(--devotee-yellow);
        text-align: center;
        /* make font size big but responsive */
        font-size: 3rem;
    }

    h3 {
        color: var(--devotee-yellow);
        text-align: center;
        /* make font size big but responsive */
        font-size: 2rem;
    }

    label{
        transition: all 0.5s ease;
    }

    .active{
        color: var(--devotee-yellow);
    }

    .settings-button {
        background-color: var(--primary-color);
        color: var(--devotee-yellow);
        border: 1px solid var(--devotee-yellow);
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

    .settings {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--devotee-red);
        gap: 2em;
        padding: 1em;
    }

    .export-settings {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: var(--primary-color);
        font-weight: 600;
    }
    input[type="checkbox"] {
        transform: scale(1.5);
        flex-direction: row;
        margin: 0 0.5rem;
        border: 1px solid var(--primary-color);
        appearance: none;
        width: 1rem;
        height: 1rem;
        transition: all 0.5s;
        cursor: pointer;
        border-radius: 0.2em;
    }

    input[type="checkbox"]:checked {
        background-color: var(--devotee-yellow);
    }


    input[type="checkbox"]:focus {
        outline: none;
    }

    button {
        background-color: var(--primary-color);
        color: var(--devotee-red);
        border: 1px solid var(--devotee-red);
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

    button:hover {
        background-color: var(--devotee-red);
        color: var(--devotee-yellow);
    }

    .download {
        background-color: var(--primary-color);
        color: var(--devotee-yellow);
        border: 1px solid var(--devotee-yellow);
    }

    .download:hover {
        background-color: var(--devotee-red);
    }

    .buttons {
        display: flex;
        gap: 1em;
        justify-content: center;
        align-items: center;
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
        justify-content: start;
        gap: 1rem;
    }

    .phrase {
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
        text-align: start;
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

    .image-container:hover {
        background-color: rgb(255, 93, 93);
    }

    .phrase {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 1rem;
    }

    .symbol {
        /* uppercase */
        text-transform: uppercase;
    }
</style>
