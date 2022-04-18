async function FindData() {
    let res = await fetch(
      "https://api.imgur.com/3/gallery/top/?showViral=true&mature=true&album_previews=true",
      {
        method: "GET",
        headers: {
          Authorization: "Client-ID 43c585b4a860c38"
        }
      }
    );
    let { data } = await res.json();
    //console.log(data);
    showContent(data);
  }
  FindData();
  
  function showContent(data) {
    data.map((post, index) => {
      let MainChild = document.createElement("div");
      MainChild.setAttribute("class", "item");
      MainChild.onclick = () => {
        NextPage(post);
      };
  
      let poster;
  
      if (post.images) {
        poster = document.createElement("img");
        poster.setAttribute("class", "Divposter");
        poster.setAttribute("src", post.images[0].link);
        if (post.images[0].type === "video/mp4") {
          poster = document.createElement("video");
          let source = document.createElement("source");
          poster.setAttribute("class", "Divposter");
          source.src = post.images[0].link;
          poster.autoplay = "autoplay";
          poster.muted = "muted";
          poster.width = "250";
          poster.height = "400";
          poster.append(source);
        } else if (post.images[0].type === "image/jpeg") {
          poster = document.createElement("img");
          poster.setAttribute("class", "Divposter");
          poster.setAttribute("src", post.images[0].link);
        }
      } else {
        poster = document.createElement("img");
        poster.setAttribute("class", "Divposter");
        poster.setAttribute("src", post.link);
        if (post.type === "video/mp4") {
          poster = document.createElement("video");
          let source = document.createElement("source");
          poster.setAttribute("class", "Divposter");
          source.src = post.link;
          poster.autoplay = "autoplay";
          poster.muted = "muted";
          poster.width = "200";
          poster.height = "400";
          poster.append(source);
        } else if (post.type === "image/jpeg") {
          poster = document.createElement("img");
          poster.setAttribute("class", "Divposter");
          poster.setAttribute("src", post.link);
        }
      }
  
      let innerDiv = document.createElement("div");
      innerDiv.setAttribute("class", "innerDiv");
  
      let h4tag = document.createElement("h4");
      h4tag.setAttribute("class", "title");
      h4tag.innerHTML = post.title;
  
      let social = document.createElement("div");
      social.setAttribute("class", "social");
  
      let upvote = document.createElement("p");
      upvote.setAttribute("class", "voteup");
      upvote.innerHTML = `<i class="fas fa-arrow-alt-up"></i>`;
  
      let countvote = document.createElement("p");
      countvote.setAttribute("class", "votecount");
      countvote.innerHTML = post.ups;
  
      let downvote = document.createElement("p");
      downvote.setAttribute("class", "votedown");
      downvote.innerHTML = `<i class="fas fa-arrow-alt-down"></i>`;
  
      let chats = document.createElement("p");
      chats.setAttribute("class", "chats");
      chats.innerHTML = `<i class="fa-solid fa-message"></i> ${post.comment_count}`;
  
      let vc = post.views;
      if (post.views >= 1000) {
        let r = post.views % 1000;
        let q = post.views / 1000 - 0.001 * r;
        vc = q;
        vc = `${vc}K`;
      }
  
      let views = document.createElement("p");
      views.setAttribute("class", "views");
      views.innerHTML = `<i class="fa-solid fa-eye"></i> ${vc}`;
  
      let votes = document.createElement("div");
      votes.setAttribute("class", "votes");
  
      votes.append(upvote, countvote, downvote);
  
      social.append(votes, chats, views);
  
      innerDiv.append(h4tag, social);
      MainChild.append(poster, innerDiv);
      //  MainChild.append(image,innerDiv);
      return document.querySelector(".Home-Content-Container").append(MainChild);
    });
  }
  
  function NextPage(post) {
    localStorage.setItem("singlePost", JSON.stringify(post));
    window.location.href = "./post.html";
  }
  