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
        html2canvas(element, {
            backgroundColor: exportBackground ? "#191919" : "none",
            scale: 2,
        }).then((canvas) => {
            const link = document.createElement("a");
            link.download = "chant.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    let selectedGlyphType = "none";
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
                class="image-container {selectedGlyphType}"
            >
                <img src={image.path} />
            </div>
        {/each}
    </div>
    {#if exportText}
        <p transition:fade class="phrase">
            <!-- Take all the text from image -->
            {#each phrase as symbol, i (i)}
                <div transition:fade animate:flip class="symbol">
                    {symbol.text}
                </div>
            {/each}
        </p>
    {/if}
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
            }}>Export Image</button
        >
    </div>

    <button
        class="settings-button"
        on:click={() => (showSettings = !showSettings)}
        transition:fade={{
            delay: 200,
            duration: 500,
        }}>{showSettings ? "Close" : "Show"} Export Settings</button
    >
    {#if showSettings}
        <div transition:fade class="settings">
            <h3>Export Settings</h3>
            <div class="export-settings">
                <div>
                    <input type="checkbox" bind:checked={exportText} />
                    <label class={exportText ? "active" : ""} for="exportText"
                        >Export Text</label
                    >
                </div>
                <div>
                    <input type="checkbox" bind:checked={exportBackground} />
                    <label
                        class={exportBackground ? "active" : ""}
                        for="exportBackground">Export Background</label
                    >
                </div>
                <div class="dropdown">
                    <label class="glyphtype" for="glyphtype">Glyph type</label>
                    <select
                        bind:value={selectedGlyphType}
                        name="glyphtype"
                        id="glyphtype"
                        class={selectedGlyphType}
                    >
                        <option class="none" value="none">None</option>
                        <option class="devotee" value="devotee">Devotee</option>
                        <option class="warriors" value="warriors"
                            >Warriors</option
                        >
                        <option class="bards" value="bards">Bards</option>
                        <option class="alchemists" value="alchemists"
                            >Alchemists</option
                        >
                        <option class="anchorites" value="anchorites"
                            >Anchorites</option
                        >
                    </select>
                </div>
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

    .image-container {
        position: relative;
        width: 60px;
        height: 60px;
        border: 1px solid black;
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

    label {
        transition: all 0.5s ease;
    }

    option {
        font-weight: 600;
    }

    select {
        background-color: var(--devotee-yellow);
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        padding: 0.5rem 1rem;
        border-radius: 0.1rem;
        cursor: pointer;
        transition: background-color 0.5s;
        font-weight: 600;
        margin: auto;
        /* capitalize */
        text-transform: uppercase;
        width: fit-content;
    }
    select:focus {
        outline: none;
    }

    select:active,
    select:hover {
        outline: none;
    }

    option:hover {
        background-color: var(--devotee-red);
    }

    .none{
        background-color: var(--secondary-color);
    }

    .alchemists {
        background-color: var(--alchemists-orange);
        filter: none;
    }

    .anchorites {
        background-color: var(--anchorites-red);
        filter: none;
    }

    .glyphtype {
        color: var(--devotee-yellow);
    }

    .active {
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
        margin: auto;
        /* capitalize */
        text-transform: uppercase;
        width: fit-content;
    }

    .settings {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--devotee-red);
        gap: 2em;
        padding: 1em;
        margin: auto;
        width: fit-content;
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

    @media (max-width: 600px) {
        .export-settings {
            flex-direction: column;
            align-items: start;
        }
    }
</style>
