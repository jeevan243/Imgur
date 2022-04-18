let data = JSON.parse(localStorage.getItem("singlePost"))

console.log(data);

document.querySelector("#votesCount").innerHTML = data.ups;

showContent(data);

function showContent(post) {
    let divMain = document.querySelector(".Single-Content");


    let poster;

    if (post.images) {
        poster = document.createElement("img");
        poster.setAttribute("class", "singlePoster");
        poster.setAttribute("src", post.images[0].link);
        if (post.images[0].type === "video/mp4") {
            poster = document.createElement("video");
            let source = document.createElement("source");
            poster.setAttribute("class", "singlePoster");
            source.src = post.images[0].link;
            poster.autoplay = "autoplay";
            poster.muted = "muted";
            poster.width = "700";
            poster.height = "700";
            poster.append(source);
        } else if (post.images[0].type === "image/jpeg") {
            poster = document.createElement("img");
            poster.setAttribute("class", "singlePoster");
            poster.setAttribute("src", post.images[0].link);
            //poster.src = post.images[0].link;
            //console.log("Hey 1",post.images[0].link)
        }
    } else {
        poster = document.createElement("img");
        poster.setAttribute("class", "singlePoster");
        poster.setAttribute("src", post.link);
        if (post.type === "video/mp4") {
            poster = document.createElement("video");
            let source = document.createElement("source");
            poster.setAttribute("class", "singlePoster");
            source.src = post.link;
            poster.autoplay = "autoplay";
            poster.muted = "muted";
            poster.width = "700";
            poster.height = "700";
            poster.append(source);
        } else if (post.type === "image/jpeg") {
            poster = document.createElement("img");
            poster.setAttribute("class", "singlePoster");
            poster.setAttribute("src", post.link);

            //poster.src = post.link;
            //console.log(post.link)
        }
    }
    // let ConImg = document.createElement("img");
    // ConImg.setAttribute("class","singleimg");

    return divMain.append(poster)
}