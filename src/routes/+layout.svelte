<script>
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";

    inject();
</script>

<slot></slot>
