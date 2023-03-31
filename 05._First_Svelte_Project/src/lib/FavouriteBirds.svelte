<script>
  import Bird from "./Bird.svelte";


    const birds = ["Pigeon", "Eagle", "Chicken", "Turkey", "Owl"];
    const birdEmoji = ["🐦", "🦅", "🐣", "🦃","🦉"]

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex];
    let favoriteBirdEmoji = birdEmoji[birdIndex];

    function changeFavoriteBird(){ 
       
        birdIndex = (birdIndex + 1) % birds.length;
    }
</script>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
    <Bird name={favoriteBird} emoji={favoriteBirdEmoji} />
</div>


<style>

</style>