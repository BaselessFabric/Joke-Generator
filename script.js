async function getJoke() {
    const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
    );
    return await response.json();
}

const refreshJoke = () => {
    document.getElementById("joke-box").textContent = "...Loading";
    document.getElementById("setup").textContent = "";

    getJoke().then((jokeData) => {
        document.getElementById("joke-box").textContent = jokeData.punchline;
        document.getElementById("setup").textContent = jokeData.setup;
    });
};

refreshJoke();
