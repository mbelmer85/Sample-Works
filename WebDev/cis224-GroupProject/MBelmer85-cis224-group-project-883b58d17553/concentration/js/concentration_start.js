var numberOfCards = 9;
var messageBox;

ConcentrationApp = function() {
    var self = this;
    
    this.numberMatch = 0;
    this.cards = [];
    this.card1 = null;
    this.card2 = null;
    this.whammyCount = 0;
    
    this.click = function(event) {
        //console.log("click called");
        //Grabbing the event target and checking to see
        //what card from our index it matches
        var target = (function(t) {
            for (var i=0; i<self.cards.length; i++) {
                if(t === self.cards[i].html) {
                    return self.cards[i];
                }
            }
        }(event.target));

        //Game logic
        //If the card click is selected
        if (this.classList.contains("selected") === true) {
            //If no card has been chosen yet
            if(self.card1 === null && self.card2 ===null) {
                self.card1 = target;
                if(self.card1.imgSrc.includes('nowhammy.png'))
                    {
                        self.cardMismatchW();
                        self.whammyCount++;
                        console.log(self.whammyCount);
                    }
            } else if (self.card1 !== null && self.card2 === null) {
                self.card2 = target;
                if(self.card2.imgSrc.includes('nowhammy.png'))
                    {
                        self.cardMismatch();
                        self.whammyCount++;
                        console.log(self.whammyCount);
                    }

                //Check for a match
                if(self.card1.value === self.card2.value) {
                    self.cardMatch();
                } else {
                    self.cardMismatch();
                }
            }

        }
        
        if (self.whammyCount === 3)
            {
                messageBox = document.getElementById("message");
                messageBox.innerHTML = 'WHAMMY!! You Lose!!';
            }
    };
    
    this.init();
};


ConcentrationApp.prototype.init = function() {
    for(var i=0; i<numberOfCards; i++) {
        this.cards.push(new Util.Card(i));
        this.cards.push(new Util.Card(i));
    }
    
    Util.shuffle(this.cards);
    
    for (var i=0; i<this.cards.length; i++) {
        document.body.appendChild(this.cards[i].html);
        this.cards[i].html.addEventListener('click',this.click);
    }
};

ConcentrationApp.prototype.cardMatch = function() {
    this.numberMatch += 1;
    var self = this;
    //console.log(self.card1);
    
    window.setTimeout(function(){
        self.card1.html.classList.add('matched');
        self.card2.html.classList.add('matched');
    },200);
    
    window.setTimeout(function() {
        self.card1.html.classList.remove('selected');
        self.card2.html.classList.remove('selected');
        self.card1 = null;
        self.card2 = null;
    }, 500);

    if(self.numberMatch === numberOfCards - 1) {
        messageBox = document.getElementById("message");
        messageBox.innerHTML = "Yay! You win!!";
    }
};

ConcentrationApp.prototype.cardMismatch = function() {
    var self = this;
    //Change the card state back to
    window.setTimeout(function() {
        self.card1.html.classList.remove('selected');
        self.card2.html.classList.remove('selected');
        self.card1 = null;
        self.card2 = null;
    }, 500);

};

ConcentrationApp.prototype.cardMismatchW = function() {
    var self = this;
    //Change the card state back to
    window.setTimeout(function() {
        self.card1.html.classList.remove('selected');
        self.card1 = null;
    }, 500);

};

var game = new ConcentrationApp();
