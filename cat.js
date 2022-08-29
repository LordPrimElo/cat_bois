let timeLapsed = 0

const getCats = async () => {
    const hehe = "https://api.giphy.com/v1/gifs/search?api_key=tqmcrWoXD2roOq2AAHF0hSWLB1NaezVi&q=bodybuilding&limit=5&offset=" + timeLapsed
    const cats = await fetch(hehe).then(res => res.json())
    cats.data.forEach(cat => {
        let cat_div = document.createElement("img")
        cat_div.src = cat.images.fixed_width.url

        document.body.appendChild(cat_div)
    });
    timeLapsed = timeLapsed+=5
}

const btn = document.getElementById("cat-butt")
btn.onclick = getCats


