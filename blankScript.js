
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
        this.displayImg.src = '/zines/' + folderName + "/" + this.curPage + ".jpg";

        this.leftButton = document.createElement("img")
        this.leftButton.src = "/pics/left.png";
        this.leftButton.style.height = "10%";


        this.rightButton = document.createElement("img")
        this.rightButton.src = "/pics/right.png";
        this.rightButton.style.height = "10%";



        var self = this




        this.container.appendChild(this.titleText);
        this.container.appendChild(this.authorText);
        this.container.appendChild(this.leftButton);
        this.container.appendChild(this.displayImg);
        this.container.appendChild(this.rightButton);
        this.container.appendChild(this.displayText);



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


        // document.body.append(document.createElement("br"));
        // document.body.append(this.leftButton);
        // document.body.append(this.rightButton);



        var self = this;
        this.rightButton.onclick = function () {

            self.curPage++;

            if (self.curPage > 8) {
                self.curPage = 1;
            }

            self.displayImg.src = '/zines/' + self.name + "/" + self.curPage + ".jpg";
            self.displayText.innerHTML = self.pageNames[self.curPage]
        };

        this.leftButton.onclick = function () {
            self.curPage--;

            if (self.curPage < 1) {
                self.curPage = 8;
            }

            self.displayImg.src = '/zines/' + self.name + "/" + self.curPage + ".jpg";
            self.displayText.innerHTML = self.pageNames[self.curPage]
        };
        // this.rightButton.onclick = this.onRight();

    }

}

const strangersZine = new Zine("strangers", "Strangers At Home", "Jonah");
strangersZine.initialize();
// strangersZine.rightButton.onclick = strangersZine.onRight;