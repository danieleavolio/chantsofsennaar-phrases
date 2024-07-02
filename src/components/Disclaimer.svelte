<!-- Svelte component for a modal disclaimer that shows up only on the first visit of the website -->

<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { fade } from "svelte/transition";

    let disclaimerAccepted = true;

    onMount(() => {
        disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
        if (!disclaimerAccepted) {
            disclaimerAccepted = false;
        }
    });

    function acceptDisclaimer() {
        localStorage.setItem("disclaimerAccepted", true);
        disclaimerAccepted = true;
    }
</script>

{#if !disclaimerAccepted}
    <div transition:fade={{
        duration: 500,
        delay: 200
    }} class="disclaimer">
    <h1 align:center>
        CHANTS OF SENNAAR - PHRASES    </h1>
        <p>
            This website is intended for people who have <b>already finished the game</b>. 
            If you haven't, please close this page and come back later. There is no need to 
            <b>ruin the experience of the game</b> by using this tool. Enjoy the game!
            If you have already finished the game, just close this message and have fun! You will not 
            be prompted again this message.
        </p>

        <p>
            Thanks to <a href="https://www.rundisc.io/" target="_blank">RunDisc</a> for letting me 
            create and share this tool. (And for remembering me to put this disclaimer lol)
        </p>
        <button on:click={acceptDisclaimer}>I have already finished the game</button>
    </div>
{/if}

<style>

    a{
        font-weight: 600;
        transition: color 0.5s;
        color: var(--devotee-red);
    }

    a:hover{
        color: var(--alchemists-purple);

    }
    .disclaimer {
        position: absolute;

        /* center */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--devotee-yellow);
        color: var(--devotee-red);
        padding: 1rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        z-index: 10000;
    }

    p{
        font-size: 1.3em;
        text-align: center;
    }

    button {
        background-color: var(--devotee-red);
        color: var(--devotee-yellow);
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
        font-size: 1.3em;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: var(--devotee-yellow);
        color: var(--devotee-red);
        border: 1px solid var(--devotee-red);
        border-radius: 5px;
    }
</style>
