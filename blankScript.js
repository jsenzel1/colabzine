function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}

var mySounds = [];

function setup() {
    for (let i = 0; i < 10; i++) {

        mySounds.push(new sound("/colabzine/sounds/" + i + ".mp3"));

    }
    console.log(mySounds);
}


function buttonSound() {
    index = Math.floor(Math.random() * 10);

    mySounds[index].play();
}



class Zine {
    constructor(folderName, title, author) {
        // this.images = imgarr;

        this.pageNames = [" ", "Cover", "Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6", "Back",]
        this.container = document.createElement("div");

        this.name = folderName;

        this.displayImg = document.createElement("img");

        this.displayText = document.createElement("p");
        this.displayText.innerHTML = "Cover";

        this.titleText = document.createElement("H3");
        this.titleText.innerHTML = title;

        this.authorText = document.createElement("H4");
        this.authorText.innerHTML = "by " + author;

        this.curPage = 1;
        this.displayImg.src = '/colabzine/zines/' + folderName + "/" + this.curPage + ".jpg";

        this.leftButton = document.createElement("img")
        this.leftButton.src = "/colabzine/pics/left.png";
        this.leftButton.style.height = "10%";


        this.rightButton = document.createElement("img")
        this.rightButton.src = "/colabzine/pics/right.png";
        this.rightButton.style.height = "10%";



        var self = this




        this.container.appendChild(this.titleText);
        this.container.appendChild(this.authorText);
        this.container.appendChild(this.leftButton);
        this.container.appendChild(this.displayImg);
        this.container.appendChild(this.rightButton);
        this.container.appendChild(this.displayText);

        let rH = Math.floor(Math.random() * 60) + 180
        let rS = Math.floor(Math.random() * 30) + 40
        let rL = Math.floor(Math.random() * 13) + 85

        this.container.style.background = "hsl(" + rH + "," + rS + "%," + rL + "%)"
        /* background: #fff8bd; */



    }

    onRight() {

        // this.curPage++;
        // console.log(this.curPage);

        // console.log("hello" + this.displayImg)
        // console.log("PAGETURN")
        // console.log(this.displayImg);
        // img.src = '/zines/' + folderName + "/" + curPage + ".jpg";
    }



    initialize() {
        // document.body.append(this.displayText);
        // document.body.append(this.displayImg);
        document.body.append(this.container);


        document.body.append(document.createElement("br"));
        document.body.append(document.createElement("hr"));
        document.body.append(document.createElement("br"));

        // document.body.append(this.leftButton);
        // document.body.append(this.rightButton);



        var self = this;
        this.rightButton.onclick = function () {

            buttonSound();


            self.curPage++;

            if (self.curPage > 8) {
                self.curPage = 1;
            }

            self.displayImg.src = '/colabzine/zines/' + self.name + "/" + self.curPage + ".jpg";
            self.displayText.innerHTML = self.pageNames[self.curPage]
        };

        this.leftButton.onclick = function () {
            buttonSound();

            self.curPage--;

            if (self.curPage < 1) {
                self.curPage = 8;
            }

            self.displayImg.src = '/colabzine/zines/' + self.name + "/" + self.curPage + ".jpg";
            self.displayText.innerHTML = self.pageNames[self.curPage]
        };
        // this.rightButton.onclick = this.onRight();

    }

}

setup();



const strangersZine = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine.initialize();

const strangersZine2 = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine2.initialize();

const strangersZine3 = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine3.initialize();

const strangersZine4 = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine4.initialize();

const strangersZine5 = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine.initialize();

const strangersZine5 = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine5.initialize();

// strangersZine.rightButton.onclick = strangersZine.onRight;