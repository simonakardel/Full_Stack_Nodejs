<script>
    import { refrigeratorMessages } from "../../store/refrigeratorMessages.js";

    function eraseFridgeMessages() {
        refrigeratorMessages.set([]);
    }
</script>

<h5>{$refrigeratorMessages}</h5>


<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>


<slot></slot>