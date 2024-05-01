<script>
    import { onMount } from "svelte";

    /**
     * @type {never[]}
     */
    let devotee = [];
    /**
     * @type {never[]}
     */
    let warriors = [];
    /**
     * @type {never[]}
     */
    let bards = [];
    /**
     * @type {never[]}
     */
    let anchorites = [];
    /**
     * @type {never[]}
     */
    let alchemists = [];

    onMount(async () => {
        let Devotee = import.meta.glob("$lib/Devotee/*.png");
        let Warriors = import.meta.glob("$lib/Warriors/*.png");
        let Bards = import.meta.glob("$lib/Bards/*.png");
        let Anchorites = import.meta.glob("$lib/Anchorites/*.png");
        let Alchemists = import.meta.glob("$lib/Alchemists/*.png");

        devotee = await load_images(Devotee);
        warriors = await load_images(Warriors);
        bards = await load_images(Bards);
        anchorites = await load_images(Anchorites);
        alchemists = await load_images(Alchemists);
    });

    /**
     * @param {Record<string, () => Promise<unknown>>} Elements
     * @returns {Promise<never[]>}
     */
    let load_images = async (Elements) => {
        /**
         * @type {never[]}
         */
        let els = [];
        const promises = [];
        for (const key in Elements) {
            // @ts-ignore
            const promise = Elements[key]().then((mod) => {
                // get the image
                // @ts-ignore
                els = [...els, mod.default];
            });
            promises.push(promise);
        }
        await Promise.all(promises);
        return els;
    };

    let isOpened = false;

    /**
     * @type {HTMLDivElement | null}
     */
    let diary = null;   

    // @ts-ignore
    // @ts-ignore
    const changeVisibility = () => {
        isOpened = !isOpened;
        if (isOpened) {
            // @ts-ignore
            diary.style.width = "40vw";
        } else {
            // @ts-ignore
            diary.style.width = "0";
        }
    };

  

</script>

<div bind:this={diary} class="diary">
    <div class="scrollings">
        <span on:click={
            changeVisibility
        } class="material-symbols-outlined open"> apps </span>
        <h2>Devotee</h2>
        <div class="container devotee">
            {#each devotee as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image} alt="Devotee" />
                    <p class="name">
                        {image
                            .split("/")
                            .pop()
                            .split(".")[0]
                            .replaceAll("'", " ")}
                    </p>
                </div>
            {/each}
        </div>

        <h2>Warriors</h2>
        <div class="container warriors">
            {#each warriors as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image} alt="Warrior" />
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <p class="name">
                        {image
                            .split("/")
                            .pop()
                            .split(".")[0]
                            .replaceAll("'", " ")}
                    </p>
                </div>
            {/each}
        </div>

        <h2>Bards</h2>
        <div class="container bards">
            {#each bards as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image} alt="Bard" />
                    <p class="name">
                        {image
                            .split("/")
                            .pop()
                            .split(".")[0]
                            .replaceAll("'", " ")}
                    </p>
                </div>
            {/each}
        </div>

        <h2>Alchemists</h2>
        <div class="container alchemists">
            {#each alchemists as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image} alt="Alchemist" />
                    <p class="name">
                        {image
                            .split("/")
                            .pop()
                            .split(".")[0]
                            .replaceAll("'", " ")}
                    </p>
                </div>
            {/each}
        </div>

        <h2>Anchorites</h2>
        <div class="container anchorites">
            {#each anchorites as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image} alt="Anchorite" />
                    <p class="name">
                        {image
                            .split("/")
                            .pop()
                            .split(".")[0]
                            .replaceAll("'", " ")}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    /* Make a side bar for main content that is scrollable */

    .diary {
        position: absolute; /* Fixed Sidebar (stay in place on scroll) */
        top: 0;
        left: 0;
        width: 40vw;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        width: 0;
        transition: all 0.5s ease-in-out;
    }

    .scrollings {
        height: 100vh;
        overflow: scroll;
        /* remove scrollbar */
        scrollbar-width: none;
        /* remove scrollbar */
        -ms-overflow-style: none;
        text-align: center;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
        padding: 2em 0;
        margin: 1em 0;
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
    }

    /* Hover on image affects name */
    .image-container:hover .name {
        display: block;
        opacity: 1;
    }

    .name {
        position: absolute;
        background-color: var(--primary-color);
        padding: 0.5em;
        border-radius: 0.3em;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        z-index: 1;
    }

    .open {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateX(50%);
        color: var(--secondary-color) ;
        font-size: 2em;
        background-color:var(--primary-color);
        border-radius: 100%;
        padding: 0.1em;
        z-index: 2;
        opacity: 0.2;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    .open:hover {
        opacity: 1;
    }
</style>
