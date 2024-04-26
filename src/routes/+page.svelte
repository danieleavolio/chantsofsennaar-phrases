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
</script>

<main>
    <h2>Devotee</h2>
    <div class="container devotee">
        {#each devotee as image}
            <div class="image-container">
                <img src={image} alt="Devotee" />
            </div>
        {/each}
    </div>


    <h2>Warriors</h2>
    <div class="container warriors">
        {#each warriors as image}
            <div class="image-container">
                <img src={image} alt="Warrior" />
            </div>
        {/each}
    </div>

    <h2>Bards</h2>
    <div class="container bards">
        {#each bards as image}
            <div class="image-container">
                <img src={image} alt="Bard" />
            </div>
        {/each}
    </div>

    
    <h2>Alchemists</h2>
    <div class="container alchemists">
        {#each alchemists as image}
            <div class="image-container">
                <img src={image} alt="Alchemist" />
            </div>
        {/each}
    </div>

    <h2>Anchorites</h2>
    <div class="container anchorites">
        {#each anchorites as image}
            <div class="image-container">
                <img src={image} alt="Anchorite" />
            </div>
        {/each}
    </div>

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

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 1em;
        padding: 1em;
    }

    .image-container {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border: 1px solid black;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .devotee{
        background-color: var(--devotee-yellow);
    }

    .warriors{
        background-color: var(--warriors-blue);
    }

    .bards{
        background-color: var(--bards-blue);
    }

    .alchemists{
        background-color: var(--alchemists-orange);
    }

    .anchorites{
        background-color: var(--anchorites-red);
    }

    .devotee .image-container{
        background-color: var(--devotee-red);
    }

    .warriors .image-container{
        background-color: var(--warriors-red);
    }

    .bards .image-container{
        background-color: var(--bards-purple);
    }

    .alchemists .image-container{
        background-color: var(--alchemists-purple);
    }

    .anchorites .image-container{
        background-color: var(--anchorites-purple);
    }
</style>
