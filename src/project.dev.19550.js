window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Game_2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61b2aFu9d9Mx7xKLiDrd+P1", "Game_2");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        time: 0
      },
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        if (this.time <= 53 && this.time >= 48) if ("C" == customEventData) {
          var tureNode = cc.find("Canvas/bg_2/truenode");
          tureNode.active = true;
          this.scoreNum++;
          var questionNode = cc.find("Canvas/bg_2/qusetion");
          questionNode.active = false;
          var N1Node = cc.find("Canvas/bg_2/NPC_1");
          N1Node.active = false;
        } else {
          var falseNode = cc.find("Canvas/bg_2/falsenode");
          falseNode.active = true;
          var _questionNode = cc.find("Canvas/bg_2/qusetion");
          _questionNode.active = false;
        }
        if (this.time <= 45 && this.time >= 40) if ("A" == customEventData) {
          var _tureNode = cc.find("Canvas/bg_2/truenode");
          _tureNode.active = true;
          this.scoreNum++;
          var _questionNode2 = cc.find("Canvas/bg_2/qusetion");
          _questionNode2.active = false;
          var N3Node = cc.find("Canvas/bg_2/NPC_3");
          N3Node.active = false;
        } else {
          var _falseNode = cc.find("Canvas/bg_2/falsenode");
          _falseNode.active = true;
          var _questionNode3 = cc.find("Canvas/bg_2/qusetion");
          _questionNode3.active = false;
        }
        if (this.time <= 37 && this.time >= 35) if ("C" == customEventData) {
          var _tureNode2 = cc.find("Canvas/bg_2/truenode");
          _tureNode2.active = true;
          this.scoreNum++;
          var _questionNode4 = cc.find("Canvas/bg_2/qusetion");
          _questionNode4.active = false;
          var N4Node = cc.find("Canvas/bg_2/NPC_4");
          N4Node.active = false;
        } else {
          var _falseNode2 = cc.find("Canvas/bg_2/falsenode");
          _falseNode2.active = true;
          var _questionNode5 = cc.find("Canvas/bg_2/qusetion");
          _questionNode5.active = false;
        }
        if (this.time <= 28 && this.time >= 23) if ("C" == customEventData) {
          var _tureNode3 = cc.find("Canvas/bg_2/truenode");
          _tureNode3.active = true;
          this.scoreNum++;
          var _questionNode6 = cc.find("Canvas/bg_2/qusetion");
          _questionNode6.active = false;
          var N2Node = cc.find("Canvas/bg_2/NPC_2");
          N2Node.active = false;
        } else {
          var _falseNode3 = cc.find("Canvas/bg_2/falsenode");
          _falseNode3.active = true;
          var _questionNode7 = cc.find("Canvas/bg_2/qusetion");
          _questionNode7.active = false;
        }
        if (this.time <= 20 && this.time >= 15) if ("A" == customEventData) {
          var _tureNode4 = cc.find("Canvas/bg_2/truenode");
          _tureNode4.active = true;
          this.scoreNum++;
          var _questionNode8 = cc.find("Canvas/bg_2/qusetion");
          _questionNode8.active = false;
        } else {
          var _falseNode4 = cc.find("Canvas/bg_2/falsenode");
          _falseNode4.active = true;
          var _questionNode9 = cc.find("Canvas/bg_2/qusetion");
          _questionNode9.active = false;
        }
      },
      onLoad: function onLoad() {
        this.scoreNum = 0;
      },
      start: function start() {
        var countDownLabel = cc.find("Canvas/Time").getComponent(cc.Label);
        var scoreLabel = cc.find("Canvas/bg_2/score").getComponent(cc.Label);
        var questionLabel = cc.find("Canvas/bg_2/qusetion/labelq").getComponent(cc.Label);
        var aLabel = cc.find("Canvas/bg_2/qusetion/labela").getComponent(cc.Label);
        var bLabel = cc.find("Canvas/bg_2/qusetion/labelb").getComponent(cc.Label);
        var cLabel = cc.find("Canvas/bg_2/qusetion/labelc").getComponent(cc.Label);
        var questionNode = cc.find("Canvas/bg_2/qusetion");
        var falseNode = cc.find("Canvas/bg_2/falsenode");
        var tureNode = cc.find("Canvas/bg_2/truenode");
        var playerNode = cc.find("Canvas/bg_2/player");
        questionLabel.string = "";
        aLabel.string = "";
        bLabel.string = "";
        cLabel.string = "";
        scoreLabel.string = "Score:" + this.scoreNum;
        countDownLabel.string = this.time + "s";
        this.schedule(function() {
          this.time--;
          countDownLabel.string = this.time + "s";
          scoreLabel.string = "Score:" + this.scoreNum;
          if (this.time <= 53 && this.time >= 48) {
            questionLabel.string = "1.Which of the following words has the same meaning as the word \u2018multiple\u2019 here?";
            aLabel.string = "A.14,21and28 are all multiples of 7";
            bLabel.string = "B.It made it almost impossible for the smaller retailer to compete against the multiples.";
            cLabel.string = "C.He suffered multiple injuries.";
            53 == this.time && (questionNode.active = true);
            48 == this.time && (questionNode.active = false);
          }
          if (this.time <= 45 && this.time >= 40) {
            questionLabel.string = "2.What does the word \u2018eventually\u2019 mean here?";
            aLabel.string = "A.after a long period of time or an especially long delay;";
            bLabel.string = "B.to an indefinite extent; for an indefinite time";
            cLabel.string = "C.for a limitless time;";
            if (45 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            40 == this.time && (questionNode.active = false);
          }
          if (this.time <= 37 && this.time >= 32) {
            questionLabel.string = "3.Which of the following words \u2018originated\u2019 has the same meaning as it here?";
            aLabel.string = "A.Locke originated this theory in the 17th century.";
            bLabel.string = "B.The foundation of western constitutionalism originates upon the classical liberalism.";
            cLabel.string = "C.The disease is thought to have originated in the tropics.";
            if (37 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            32 == this.time && (questionNode.active = false);
          }
          if (this.time <= 28 && this.time >= 23) {
            questionLabel.string = "4.Which of the following routes is true for the Silk Road?";
            aLabel.string = "A.Luoyang\u2014\u2014Tianshan\u2014\u2014Lanzhou\u2014\u2014Tarim Basin";
            bLabel.string = "B.Luoyang\u2014\u2014Tarim Basin\u2014\u2014Tianshan\u2014\u2014Dunhuang";
            cLabel.string = "C.Luoyang\u2014\u2014Lanzhou\u2014\u2014Dunhuang \u2014\u2014Tianshan";
            if (28 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            23 == this.time && (questionNode.active = false);
          }
          if (this.time <= 20 && this.time >= 15) {
            questionLabel.string = "5.Where was the route split into three ways?";
            aLabel.string = "A.Dunhuang";
            bLabel.string = "B.Lanzhou";
            cLabel.string = "C.Tianshan ;";
            if (20 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            15 == this.time && (questionNode.active = false);
          }
          if (12 == this.time) {
            playerNode.active = false;
            tureNode.active = false;
            falseNode.active = false;
            var finalNode = cc.find("Canvas/bg_2/final");
            finalNode.active = true;
            var endNode = finalNode.getChildByName("end");
            endNode.getComponent(cc.Label).string = "Score: " + this.scoreNum;
            var textNode = finalNode.getChildByName("text");
            var textLabel = textNode.getComponent(cc.Label);
            switch (true) {
             case this.scoreNum <= 3:
              textLabel.string = "TRY AGAIN";
              break;

             case this.scoreNum < 5:
              textLabel.string = "NOT BAD";
              break;

             case 5 == this.scoreNum:
              textLabel.string = "GOOD";
            }
          }
          8 == this.time && (this.scoreNum >= 4 ? cc.director.loadScene("main_2") : cc.director.loadScene("main_1"));
        }, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  Game_3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f460cxe2RI5LrsSYnQQUI2", "Game_3");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        time: 0
      },
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        if (this.time <= 53 && this.time >= 48) if ("A" == customEventData) {
          var tureNode = cc.find("Canvas/bg_2/truenode");
          tureNode.active = true;
          this.scoreNum++;
          var questionNode = cc.find("Canvas/bg_2/qusetion");
          questionNode.active = false;
          var N4Node = cc.find("Canvas/bg_2/NPC_4");
          N4Node.active = false;
        } else {
          var falseNode = cc.find("Canvas/bg_2/falsenode");
          falseNode.active = true;
          var _questionNode = cc.find("Canvas/bg_2/qusetion");
          _questionNode.active = false;
        }
        if (this.time <= 45 && this.time >= 40) if ("A" == customEventData) {
          var _tureNode = cc.find("Canvas/bg_2/truenode");
          _tureNode.active = true;
          this.scoreNum++;
          var _questionNode2 = cc.find("Canvas/bg_2/qusetion");
          _questionNode2.active = false;
          var N3Node = cc.find("Canvas/bg_2/NPC_3");
          N3Node.active = false;
        } else {
          var _falseNode = cc.find("Canvas/bg_2/falsenode");
          _falseNode.active = true;
          var _questionNode3 = cc.find("Canvas/bg_2/qusetion");
          _questionNode3.active = false;
        }
        if (this.time <= 37 && this.time >= 35) if ("C" == customEventData) {
          var _tureNode2 = cc.find("Canvas/bg_2/truenode");
          _tureNode2.active = true;
          this.scoreNum++;
          var _questionNode4 = cc.find("Canvas/bg_2/qusetion");
          _questionNode4.active = false;
          var N2Node = cc.find("Canvas/bg_2/NPC_2");
          N2Node.active = false;
        } else {
          var _falseNode2 = cc.find("Canvas/bg_2/falsenode");
          _falseNode2.active = true;
          var _questionNode5 = cc.find("Canvas/bg_2/qusetion");
          _questionNode5.active = false;
        }
        if (this.time <= 28 && this.time >= 23) if ("B" == customEventData) {
          var _tureNode3 = cc.find("Canvas/bg_2/truenode");
          _tureNode3.active = true;
          this.scoreNum++;
          var _questionNode6 = cc.find("Canvas/bg_2/qusetion");
          _questionNode6.active = false;
          var N1Node = cc.find("Canvas/bg_2/NPC_1");
          N1Node.active = false;
        } else {
          var _falseNode3 = cc.find("Canvas/bg_2/falsenode");
          _falseNode3.active = true;
          var _questionNode7 = cc.find("Canvas/bg_2/qusetion");
          _questionNode7.active = false;
        }
        if (this.time <= 20 && this.time >= 15) if ("A" == customEventData) {
          var _tureNode4 = cc.find("Canvas/bg_2/truenode");
          _tureNode4.active = true;
          this.scoreNum++;
          var _questionNode8 = cc.find("Canvas/bg_2/qusetion");
          _questionNode8.active = false;
        } else {
          var _falseNode4 = cc.find("Canvas/bg_2/falsenode");
          _falseNode4.active = true;
          var _questionNode9 = cc.find("Canvas/bg_2/qusetion");
          _questionNode9.active = false;
        }
      },
      onLoad: function onLoad() {
        this.scoreNum = 0;
      },
      start: function start() {
        var countDownLabel = cc.find("Canvas/Time").getComponent(cc.Label);
        var scoreLabel = cc.find("Canvas/bg_2/score").getComponent(cc.Label);
        var questionLabel = cc.find("Canvas/bg_2/qusetion/labelq").getComponent(cc.Label);
        var aLabel = cc.find("Canvas/bg_2/qusetion/labela").getComponent(cc.Label);
        var bLabel = cc.find("Canvas/bg_2/qusetion/labelb").getComponent(cc.Label);
        var cLabel = cc.find("Canvas/bg_2/qusetion/labelc").getComponent(cc.Label);
        var questionNode = cc.find("Canvas/bg_2/qusetion");
        var falseNode = cc.find("Canvas/bg_2/falsenode");
        var tureNode = cc.find("Canvas/bg_2/truenode");
        var playerNode = cc.find("Canvas/bg_2/player");
        questionLabel.string = "";
        aLabel.string = "";
        bLabel.string = "";
        cLabel.string = "";
        scoreLabel.string = "Score:" + this.scoreNum;
        countDownLabel.string = this.time + "s";
        this.schedule(function() {
          this.time--;
          countDownLabel.string = this.time + "s";
          scoreLabel.string = "Score:" + this.scoreNum;
          if (this.time <= 53 && this.time >= 48) {
            questionLabel.string = "1.What does the word oasis mean here in the video?";
            aLabel.string = "A.a fertile tract in a desert (where the water table approaches the surface";
            bLabel.string = "B.a shelter serving as a place of safety or sanctuary";
            cLabel.string = "C.an arid region with little or no vegetation";
            53 == this.time && (questionNode.active = true);
            48 == this.time && (questionNode.active = false);
          }
          if (this.time <= 45 && this.time >= 40) {
            questionLabel.string = "2.Which of the following words \u2018presence\u2019 has the same meaning as it here?";
            aLabel.string = "A.He hardly seemed to notice my presence.";
            bLabel.string = "B.He is a man of great presence.";
            cLabel.string = "C.He felt a presence behind him";
            if (45 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            40 == this.time && (questionNode.active = false);
          }
          if (this.time <= 37 && this.time >= 32) {
            questionLabel.string = "3. What is the English name for \u201c\u83ab\u9ad8\u7a9f\u201d";
            aLabel.string = "A.\tthe Mogao Caves";
            bLabel.string = "B.\tthe Mogao Tattoos";
            cLabel.string = "C.\tthe Mogao Grottoes";
            if (37 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            32 == this.time && (questionNode.active = false);
          }
          if (this.time <= 28 && this.time >= 23) {
            questionLabel.string = "4.How long did the work on the Mogao Grottoes last for?";
            aLabel.string = "A.\t1600 years";
            bLabel.string = "B.\t1500 years";
            cLabel.string = "C.\t492 years";
            if (28 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            23 == this.time && (questionNode.active = false);
          }
          if (this.time <= 20 && this.time >= 15) {
            questionLabel.string = "5.The Mogao Grottoes lasted for 1500 years and reflected ________ in China";
            aLabel.string = "A.\tthe development of Buddhism";
            bLabel.string = "B.\tthe development of Art";
            cLabel.string = "C.\tthe development of Sculpture;";
            if (20 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            15 == this.time && (questionNode.active = false);
          }
          if (12 == this.time) {
            playerNode.active = false;
            tureNode.active = false;
            falseNode.active = false;
            var finalNode = cc.find("Canvas/bg_2/final");
            finalNode.active = true;
            var endNode = finalNode.getChildByName("end");
            endNode.getComponent(cc.Label).string = "Score: " + this.scoreNum;
            var textNode = finalNode.getChildByName("text");
            var textLabel = textNode.getComponent(cc.Label);
            switch (true) {
             case this.scoreNum <= 3:
              textLabel.string = "TRY AGAIN";
              break;

             case this.scoreNum < 5:
              textLabel.string = "NOT BAD";
              break;

             case 5 == this.scoreNum:
              textLabel.string = "GOOD";
            }
          }
          8 == this.time && (this.scoreNum >= 4, cc.director.loadScene("main_3"));
        }, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1123ft72vZLzK6Pe7gIu9AH", "Game");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        time: 0
      },
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        if (this.time <= 53 && this.time >= 48) if ("A" == customEventData) {
          var tureNode = cc.find("Canvas/bg_2/truenode");
          tureNode.active = true;
          this.scoreNum++;
          var questionNode = cc.find("Canvas/bg_2/qusetion");
          questionNode.active = false;
          var N1Node = cc.find("Canvas/bg_2/NPC_1");
          N1Node.active = false;
        } else {
          var falseNode = cc.find("Canvas/bg_2/falsenode");
          falseNode.active = true;
          var _questionNode = cc.find("Canvas/bg_2/qusetion");
          _questionNode.active = false;
        }
        if (this.time <= 45 && this.time >= 40) if ("C" == customEventData) {
          var _tureNode = cc.find("Canvas/bg_2/truenode");
          _tureNode.active = true;
          this.scoreNum++;
          var _questionNode2 = cc.find("Canvas/bg_2/qusetion");
          _questionNode2.active = false;
          var N2Node = cc.find("Canvas/bg_2/NPC_2");
          N2Node.active = false;
        } else {
          var _falseNode = cc.find("Canvas/bg_2/falsenode");
          _falseNode.active = true;
          var _questionNode3 = cc.find("Canvas/bg_2/qusetion");
          _questionNode3.active = false;
        }
        if (this.time <= 37 && this.time >= 35) if ("C" == customEventData) {
          var _tureNode2 = cc.find("Canvas/bg_2/truenode");
          _tureNode2.active = true;
          this.scoreNum++;
          var _questionNode4 = cc.find("Canvas/bg_2/qusetion");
          _questionNode4.active = false;
          var N3Node = cc.find("Canvas/bg_2/NPC_3");
          N3Node.active = false;
        } else {
          var _falseNode2 = cc.find("Canvas/bg_2/falsenode");
          _falseNode2.active = true;
          var _questionNode5 = cc.find("Canvas/bg_2/qusetion");
          _questionNode5.active = false;
        }
        if (this.time <= 28 && this.time >= 23) if ("B" == customEventData) {
          var _tureNode3 = cc.find("Canvas/bg_2/truenode");
          _tureNode3.active = true;
          this.scoreNum++;
          var _questionNode6 = cc.find("Canvas/bg_2/qusetion");
          _questionNode6.active = false;
          var N4Node = cc.find("Canvas/bg_2/NPC_4");
          N4Node.active = false;
        } else {
          var _falseNode3 = cc.find("Canvas/bg_2/falsenode");
          _falseNode3.active = true;
          var _questionNode7 = cc.find("Canvas/bg_2/qusetion");
          _questionNode7.active = false;
        }
        if (this.time <= 20 && this.time >= 15) if ("B" == customEventData) {
          var _tureNode4 = cc.find("Canvas/bg_2/truenode");
          _tureNode4.active = true;
          this.scoreNum++;
          var _questionNode8 = cc.find("Canvas/bg_2/qusetion");
          _questionNode8.active = false;
        } else {
          var _falseNode4 = cc.find("Canvas/bg_2/falsenode");
          _falseNode4.active = true;
          var _questionNode9 = cc.find("Canvas/bg_2/qusetion");
          _questionNode9.active = false;
        }
      },
      onLoad: function onLoad() {
        this.scoreNum = 0;
      },
      start: function start() {
        var countDownLabel = cc.find("Canvas/Time").getComponent(cc.Label);
        var scoreLabel = cc.find("Canvas/bg_2/score").getComponent(cc.Label);
        var questionLabel = cc.find("Canvas/bg_2/qusetion/labelq").getComponent(cc.Label);
        var aLabel = cc.find("Canvas/bg_2/qusetion/labela").getComponent(cc.Label);
        var bLabel = cc.find("Canvas/bg_2/qusetion/labelb").getComponent(cc.Label);
        var cLabel = cc.find("Canvas/bg_2/qusetion/labelc").getComponent(cc.Label);
        var questionNode = cc.find("Canvas/bg_2/qusetion");
        var falseNode = cc.find("Canvas/bg_2/falsenode");
        var tureNode = cc.find("Canvas/bg_2/truenode");
        var playerNode = cc.find("Canvas/bg_2/player");
        questionLabel.string = "";
        aLabel.string = "";
        bLabel.string = "";
        cLabel.string = "";
        scoreLabel.string = "Score:" + this.scoreNum;
        countDownLabel.string = this.time + "s";
        this.schedule(function() {
          this.time--;
          countDownLabel.string = this.time + "s";
          scoreLabel.string = "Score:" + this.scoreNum;
          if (this.time <= 53 && this.time >= 48) {
            questionLabel.string = "1.What is the meaning of the word \u2018notable\u2019?";
            aLabel.string = "A.widely known and esteemed";
            bLabel.string = "B.having an exceedingly bad reputation";
            cLabel.string = "C.of major significance or importance";
            53 == this.time && (questionNode.active = true);
            48 == this.time && (questionNode.active = false);
          }
          if (this.time <= 45 && this.time >= 40) {
            questionLabel.string = "2.Xi\u2019an is the starting point of ________";
            aLabel.string = "A.\tMaritime Silk Road";
            bLabel.string = "B.\tDigital Silk Road";
            cLabel.string = "C.\tancient Silk Roade";
            if (45 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            40 == this.time && (questionNode.active = false);
          }
          if (this.time <= 37 && this.time >= 32) {
            questionLabel.string = "3.\tThe word \u2018prosperous\u2019 here means_______";
            aLabel.string = "A.tending to favor or bring good luck;";
            bLabel.string = "B.in fortunate circumstances";
            cLabel.string = "C.marked by peace and prosperity";
            if (37 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            32 == this.time && (questionNode.active = false);
          }
          if (this.time <= 28 && this.time >= 23) {
            questionLabel.string = "4.What is the correct expression of \u2018\u5175\u9a6c\u4fd1\u2019 in English?";
            aLabel.string = "A.\tStone soldiers and horses;";
            bLabel.string = "B.\tTerracotta Warriors";
            cLabel.string = "C.\tTerracotta Soldiers;";
            if (28 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            23 == this.time && (questionNode.active = false);
          }
          if (this.time <= 20 && this.time >= 15) {
            questionLabel.string = "5.Which of the following words can be used to replace the word \u2018undying\u2019 here?";
            aLabel.string = "A.\tcontinuous;";
            bLabel.string = "B.\teternal";
            cLabel.string = "C.\texpectable;";
            if (20 == this.time) {
              questionNode.active = true;
              tureNode.active = false;
              falseNode.active = false;
            }
            15 == this.time && (questionNode.active = false);
          }
          if (12 == this.time) {
            playerNode.active = false;
            tureNode.active = false;
            falseNode.active = false;
            var finalNode = cc.find("Canvas/bg_2/final");
            finalNode.active = true;
            var endNode = finalNode.getChildByName("end");
            endNode.getComponent(cc.Label).string = "Score: " + this.scoreNum;
            var textNode = finalNode.getChildByName("text");
            var textLabel = textNode.getComponent(cc.Label);
            switch (true) {
             case this.scoreNum <= 3:
              textLabel.string = "TRY AGAIN";
              break;

             case this.scoreNum < 5:
              textLabel.string = "NOT BAD";
              break;

             case 5 == this.scoreNum:
              textLabel.string = "GOOD";
            }
          }
          8 == this.time && (this.scoreNum >= 4 ? cc.director.loadScene("main_3") : cc.director.loadScene("main_2"));
        }, 1);
      }
    });
    cc._RF.pop();
  }, {} ],
  Vedio_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88746NETj9DVYZt6E/q+P4b", "Vedio_1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        videoplayer: cc.VideoPlayer
      },
      onLoad: function onLoad() {
        this.videoplayer.node.on("ready-to-play", this.callback, this);
      },
      callback: function callback(event) {
        var videoplayer = event.detail;
        if (this.videoplayer) {
          this.videoplayer._syncVolume();
          this.videoplayer.play();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Vedio_back: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "918f9ViccZHgL2EEvlAvJyY", "Vedio_back");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        "1" == customEventData && cc.director.loadScene("main_1");
        "2" == customEventData && cc.director.loadScene("main_2");
        "3" == customEventData && cc.director.loadScene("main_3");
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "button _2": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0050bwzHOlK15p6zA55CoE2", "button _2");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        "vedio_1" == customEventData && cc.director.loadScene("Vedio_1");
        "game_1" == customEventData && cc.director.loadScene("Game_1");
      },
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  "button _3": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16522fZlopKAoWq2KSba3bX", "button _3");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        "vedio_3" == customEventData && cc.director.loadScene("Vedio_3");
        "game_3" == customEventData && cc.director.loadScene("Game_3");
      },
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  button: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52d9893R8FIJo5H0RnLYgSS", "button");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      on_btn_onclick: function on_btn_onclick(event, customEventData) {
        "vedio_2" == customEventData && cc.director.loadScene("Vedio_2");
        "game_2" == customEventData && cc.director.loadScene("Game_2");
      },
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  npc_run: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4a8b6RTbhFI6j1cJsQPc4/", "npc_run");
    "use strict";
    var npc_skin = cc.Class({
      name: "npc_skin",
      properties: {
        npc: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      }
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        npc_sets: {
          default: [],
          type: [ npc_skin ]
        }
      },
      onLoad: function onLoad() {
        this.intervalTime = 0;
      },
      start: function start() {},
      update: function update(dt) {
        this.intervalTime += dt;
        var index = Math.floor(this.intervalTime / .2);
        index %= 3;
        var npcSet = this.npc_sets[0];
        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = npcSet.npc[index];
      }
    });
    cc._RF.pop();
  }, {} ],
  player_run: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db972bD30dNcqQGPYtPqmn4", "player_run");
    "use strict";
    var player_skin = cc.Class({
      name: "player_skin",
      properties: {
        player: {
          default: [],
          type: [ cc.SpriteFrame ]
        }
      }
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        player_sets: {
          default: [],
          type: [ player_skin ]
        }
      },
      onLoad: function onLoad() {
        this.intervalTime = 0;
      },
      start: function start() {},
      update: function update(dt) {
        this.intervalTime += dt;
        var index = Math.floor(this.intervalTime / .2);
        index %= 3;
        var playerSet = this.player_sets[0];
        var sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = playerSet.player[index];
      }
    });
    cc._RF.pop();
  }, {} ],
  use_reversed_rotateTo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a61bAEvJ5HPpoCTI0HCGiT", "use_reversed_rotateTo");
    "use strict";
    cc.RotateTo._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "use_reversed_rotateTo", "Game", "Game_2", "Game_3", "Vedio_1", "Vedio_back", "button _2", "button _3", "button", "npc_run", "player_run" ]);
//# sourceMappingURL=project.dev.js.map
