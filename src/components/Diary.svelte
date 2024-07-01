<script>
    export let images;
    import { onMount } from "svelte";

    // @ts-nocheck

    /**
     * @type {any[]}
     */
    let devotee = [];

    /**
     * @type {any[]}
     */
    let warriors = [];

    /**
     * @type {any[]}
     */
    let bards = [];

    /**
     * @type {any[]}
     */
    let anchorites = [];

    /**
     * @type {any[]}
     */
    let alchemists = [];

    onMount(async () => {
        // Suddividi le immagini in base al tipo
        images.forEach((image) => {
            switch (image.type) {
                case "Devotee":
                    devotee = [...devotee, image];
                    break;
                case "Warriors":
                    warriors = [...warriors, image];
                    break;
                case "Bards":
                    bards = [...bards, image];
                    break;
                case "Anchorites":
                    anchorites = [...anchorites, image];
                    break;
                case "Alchemists":
                    alchemists = [...alchemists, image];
                    break;
                default:
                    console.log("No type found");
                    break;
            }
        });
    });

    let isOpened = false;

    // @ts-ignore
    let diary = null;

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

    /**
     * @type {any[]}
     */
    export let phrase;
    

    // @ts-ignore
    const addSymbol = (symbol) => {
        // @ts-ignore
        phrase = [...phrase, symbol];
    };
</script>

<div bind:this={diary} class="diary">
    <div class="scrollings">
        <span
            on:click={changeVisibility}
            class="material-symbols-outlined open"
        >
            apps
        </span>
        <h2 class="Devotee">Devotee</h2>
        <div class="container devotee">
            {#each devotee as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image.path} alt="Devotee" />
                    <p class="name">{image.text}</p>
                </div>
            {/each}
        </div>

        <h2 class="Warriors">Warriors</h2>
        <div class="container warriors">
            {#each warriors as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image.path} alt="Warrior" />
                    <p class="name">{image.text}</p>
                </div>
            {/each}
        </div>

        <h2 class="Bards">Bards</h2>
        <div class="container bards">
            {#each bards as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image.path} alt="Bard" />
                    <p class="name">{image.text}</p>
                </div>
            {/each}
        </div>

        <h2 class="Alchemists">Alchemists</h2>
        <div class="container alchemists">
            {#each alchemists as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image.path} alt="Alchemist" />
                    <p class="name">{image.text}</p>
                </div>
            {/each}
        </div>

        <h2 class="Anchorites">Anchorites</h2>
        <div class="container anchorites">
            {#each anchorites as image}
                <div on:click={() => addSymbol(image)} class="image-container">
                    <img src={image.path} alt="Anchorite" />
                    <p class="name">{image.text}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .diary {
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        width: 0;
        transition: all 0.5s ease-in-out;
    }

    .scrollings {
        height: 100vh;
        overflow: scroll;
        scrollbar-width: none;
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
        color: var(--secondary-color);
        font-size: 2em;
        background-color: var(--primary-color);
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

    .Devotee {
        color: var(--devotee-yellow);
    }

    .Warriors {
        color: var(--warriors-blue);
    }

    .Bards {
        color: var(--bards-blue);
    }

    .Alchemists {
        color: var(--alchemists-orange);
    }

    .Anchorites {
        color: var(--anchorites-red);
    }


</style>
