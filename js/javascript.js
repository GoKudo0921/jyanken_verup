// トップここから


// ふわっと表示
const targets = document.getElementsByClassName('wrap-top');
for(let i = targets.length; i--;){
 let observer = new IntersectionObserver((entries, observer) => {
  for(let j = entries.length; j--;){
   if (entries[j].isIntersecting) {
    entries[j].target.classList.add('active');
    observer.unobserve(entries[j].target);
   }
  }
 });
 observer.observe(targets[i]);
}

// トップここまで 

// Meetここから

let w = Math.ceil(Math.random()*5);
console.log(w)


$(".start").on("click",function(){
      w = Math.ceil(Math.random()*5);
      $(".content-title1").html("名前：")
      $(".content-title2").html("住まい：")
      $(".content-title3").html("職業：")
      $(".content-title4").html("趣味：")
      $(".content-title5").html("一言：")

      if(w === 1){
            $(".woman").html('<img src="./img/woman1.jpeg" alt="woman">');
            $(".name").html("佐々木 直人（霜降り明星）");
            $(".address").html("東京都港区");
            $(".work").html("お笑い芸人、YouTuber、歌手");
            $(".hobby").html("ツッコミ、ギャンブル、作詞作曲");
            $(".comment").html("お前のこと誰が好きなん？");
      }else if(w === 2){
            $(".woman").html('<img src="./img/woman2.jpeg" alt="woman">');
            $(".name").html("橋本環奈");
            $(".address").html("非公開");
            $(".work").html("女優、タレント");
            $(".hobby").html("麻雀、日本酒");
            $(".comment").html("お酒好きです〜！");
      }else if(w === 3){
            $(".woman").html('<img src="./img/woman3.jpeg" alt="woman">');
            $(".name").html("山本大悟（千鳥）");
            $(".address").html("岡山県");
            $(".work").html("漫才師");
            $(".hobby").html("酒、タバコ、ギャンブル");
            $(".comment").html("ワシについてこい");
      }else if(w === 4){
            $(".woman").html('<img src="./img/woman4.jpeg" alt="woman">');     
            $(".name").html("早川信行（千鳥）");
            $(".address").html("東京都目黒区");
            $(".work").html("漫才師");
            $(".hobby").html("競馬、AbemaTV");
            $(".comment").html("クセがすごい〜");
      }else if(w === 5){
            $(".woman").html('<img src="./img/woman5.jpeg" alt="woman">');
            $(".name").html("せいや（霜降り明星）");
            $(".address").html("東京都目黒区");
            $(".work").html("お笑い芸人、YouTuber");
            $(".hobby").html("zoom");
            $(".comment").html("最近結婚しました〜！！");
      }
})

$(".nope").on("click",function(){
      w = Math.ceil(Math.random()*5);

      if(w === 1){
            $(".woman").html('<img src="./img/woman1.jpeg" alt="woman">');
            $(".name").html("佐々木 直人（霜降り明星）");
            $(".address").html("東京都港区");
            $(".work").html("お笑い芸人、YouTuber、歌手");
            $(".hobby").html("ツッコミ、ギャンブル、作詞作曲");
            $(".comment").html("お前のこと誰が好きなん？");
      }else if(w === 2){
            $(".woman").html('<img src="./img/woman2.jpeg" alt="woman">');
            $(".name").html("橋本環奈");
            $(".address").html("非公開");
            $(".work").html("女優、タレント");
            $(".hobby").html("麻雀、日本酒");
            $(".comment").html("お酒好きです〜！");
      }else if(w === 3){
            $(".woman").html('<img src="./img/woman3.jpeg" alt="woman">');
            $(".name").html("山本大悟（千鳥）");
            $(".address").html("岡山県");
            $(".work").html("漫才師");
            $(".hobby").html("酒、タバコ、ギャンブル");
            $(".comment").html("ワシについてこい");
      }else if(w === 4){
            $(".woman").html('<img src="./img/woman4.jpeg" alt="woman">');     
            $(".name").html("早川信行（千鳥）");
            $(".address").html("東京都目黒区");
            $(".work").html("漫才師");
            $(".hobby").html("競馬、AbemaTV");
            $(".comment").html("クセがすごい〜");
      }else if(w === 5){
            $(".woman").html('<img src="./img/woman5.jpeg" alt="woman">');
            $(".name").html("せいや（霜降り明星）");
            $(".address").html("東京都目黒区");
            $(".work").html("お笑い芸人、YouTuber");
            $(".hobby").html("zoom");
            $(".comment").html("最近結婚しました〜！！");
      }
})


$(".like").on("click",function(){
      let match = Math.ceil(Math.random()*2);

      $(".match-wait").html('相手からの反応を待っています');  

      if(match === 1){

      setTimeout(function () {

            $(".match-wait").html('残念ながらあなたとは会いたくないらしいです。別の方を選んでください');
      
      }, 5000);


      }else {
            setTimeout(function () {

            $(".match-wait").html('マッチしました。チャットに移動します。');

            }, 5000);

            setTimeout(function () {

                  $(".woman").html('<img src="./img/woman' + w + '.jpeg" alt="woman">');
                  $(".like").html("");
                  $(".nope").html("");
                  $(".wrap-profile").css("margin" ,"0");
                  $(".start").html("芸能人を再度選ぶ");
                  $(".meet").css("display","flex").css("justify-content","space-around");
                  $(".woman").css("width", "300px");

                  if(w === 1){
                        setTimeout(function () {
                              $(".question1").html("は〜い、こんにちは");
                              $(".question1").css("background-color", "#DDDDDD");
                        }, 2000);

                        $(".first-choice1").html('<button class="test" style="width: 250px;">チンチロ大好きです！</button>');
                        $(".first-choice2").html('<button class="test" style="width: 250px;">YouTubeいつも見てます！！</button>');
                        $(".first-choice3").html('<button class="test" style="width: 250px;">お前のこと誰が好きなん？</button>');
                  }else if(w === 2){
                        setTimeout(function () {
                              $(".question1").html("あの橋本環奈ですよ！");
                              $(".question1").css("background-color", "#DDDDDD");
                        }, 2000);

                        $(".first-choice1").html('<button class="test" style="width: 250px;">いつも応援してます！！</button>');
                        $(".first-choice2").html('<button class="test" style="width: 250px;">ドラマ見てますよ！！</button>');
                        $(".first-choice3").html('<button class="test" style="width: 250px;">インスタフォローしてます！</button>');
                  }else if(w === 3){
                        setTimeout(function () {
                              $(".question1").html("どこ見とんじゃボケ！");
                              $(".question1").css("background-color", "#DDDDDD");
                        }, 2000);

                        $(".first-choice1").html('<button class="test" style="width: 250px;">本物の山本大悟さんですか？？</button>');
                        $(".first-choice2").html('<button class="test" style="width: 250px;">嬉しい！！マッチあざっす！</button>');
                        $(".first-choice3").html('<button class="test" style="width: 250px;">いつも、いろはに千鳥見てます！</button>');
                  }else if(w === 4){
                        setTimeout(function () {
                              $(".question1").html("クセがすごい！！！");
                              $(".question1").css("background-color", "#DDDDDD");
                        }, 2000);

                        $(".first-choice1").html('<button class="test" style="width: 250px;">うわ〜！！！本物のノブだ！！</button>');
                        $(".first-choice2").html('<button class="test" style="width: 250px;">本物のノブさんですか？</button>');
                        $(".first-choice3").html('<button class="test" style="width: 250px;">お会いできて光栄です！！</button>');
                  }else if(w === 5){
                        setTimeout(function () {
                              $(".question1").html("せいやです〜！酒袋歓迎！！");
                              $(".question1").css("background-color", "#DDDDDD");
                        }, 2000);

                        $(".first-choice1").html('<button class="test" style="width: 250px;">いつもYouTube見てます！</button>');
                        $(".first-choice2").html('<button class="test" style="width: 250px;">結婚おめでとうございます！</button>');
                        $(".first-choice3").html('<button class="test" style="width: 250px;">まじでせいやさんのファンです！！！</button>');
                  }

                  $(".match-wait").html('');
            }, 8000);
      }
})

// チャットここから
      // リセット
      $(".start").on("click",function(){
            $(".like").html('<img src="./img/like.png" alt="like">');
            $(".nope").html('<img src="./img/nope.png" alt="nope">');
            $(".wrap-profile").css("margin" ,"auto");
            $(".start").html("芸能人を選ぶ");
            $(".first-choice1").html("");
            $(".first-choice2").html("");
            $(".first-choice3").html("");
            $(".second-choice1").html("");
            $(".second-choice2").html("");
            $(".second-choice3").html("");
            $(".third-choice1").html("");
            $(".third-choice2").html("");
            $(".third-choice3").html("");
            $(".answer1").html("");
            $(".answer2").html("");
            $(".answer3").html("");
            $(".answer1").css("background-color", "");
            $(".answer2").css("background-color", "");
            $(".answer3").css("background-color", "");
            $(".question1").html("");
            $(".question1").css("background-color", "");
            $(".question2").html("");
            $(".question2").css("background-color", "");
            $(".question3").html("");
            $(".question3").css("background-color", "");
            $(".question4").html("");
            $(".question4").css("background-color", "");
            $(".meet").css("display","").css("justify-content","")
            $(".match-wait").html("");
            $(".woman").css("width", "600px");
            $(".result-img1").html("");
            $(".result-img2").html("");
            $(".result-img3").html("");
            $(".result-img4").html("");
      })

      // チャットの選択肢への回答


      
      // 粗品
      $(".first-choice1").on("click",function(){
            if(w === 1){
                   let soshina_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("チンチロ大好きです！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);

                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                        if(soshina_q === 1){
                              $(".question2").html("お！いいね！　俺もめっちゃ好きやで！12月に武道館でライブやるから来てな！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else if(soshina_q === 2){
                              $(".question2").html("ロクでもねーな、、、")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else {
                              $(".question2").html("金かけたらあかんで！！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }

                        $(".second-choice1").html('<button class="test" style="width: 250px;">12月の武道館のライブ行きます！</button>');
                        $(".second-choice2").html('<button class="test" style="width: 250px;">サイコロ買って家でも遊んでます！</button>');
                        $(".second-choice3").html('<button class="test" style="width: 250px;">最高におもろいです！</button>');
      
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");
            }
      $(".second-choice1").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("12月の武道館のライブ行きます！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(soshina_q2 === 1){
                        $(".question3").html("嬉しいわぁ、、待ってるぜ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(soshina_q2 === 2){
                        $(".question3").html("ちゃんとスパチャもしてな！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("金貸して〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">連絡先教えてください！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度ご飯奢ってください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">金貸すんで遊び行きましょう！</button>');

                  }, 7500);


                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("連絡先教えてください！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度ご飯奢ってください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');


                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 1){
                  soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("金貸すんで遊び行きましょう！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');


                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("サイコロ買って家でも遊んでます！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
      
                  if(soshina_q2 === 1){
                        $(".question3").html("きしょいのぁ！！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(soshina_q2 === 2){
                        $(".question3").html("好きすぎやろ、引くわ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("つまらんなぁ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">今度飲み連れって！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">串カツ田中でチンチロしよう</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">粗品と飲み行きたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度飲み連れって！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })

      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("串カツ田中でチンチロしよう");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                   $(".answer3").html("粗品と飲み行きたい");
                   $(".answer3").css("background-color", "#00FF00");

                   setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("最高におもろいです！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(soshina_q2 === 1){
                        $(".question3").html("せやろ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(soshina_q2 === 2){
                        $(".question3").html("金かけたらほんまあかんで！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("騒ぎすぎるなよ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">そんなことより会いたいです！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">ご飯行きましょう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ボケェ！飲み連れてけ！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }

      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("そんなことより会いたいです！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ご飯行きましょう！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ボケェ！飲み連れてけ！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("ええで！飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("んー、無理やな、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ボケえ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice2").on("click",function(){
            if(w === 1){
                   let soshina_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("YouTubeいつも見てます！！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(soshina_q === 1){
                        $(".question2").html("ありがとう！！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else if(soshina_q === 2){
                        $(".question2").html("嘘つけ！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else {
                        $(".question2").html("スパチャもしてな")
                        $(".question2").css("background-color", "#DDDDDD");
                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">「粗品のロケ」見てます！</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">新しいカギ見てますよ！</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">太客になる予定です！</button>');
            
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");


            }
      $(".second-choice1").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("「粗品のロケ」見てます！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(soshina_q2 === 1){
                        $(".question3").html("ロケ見てくれてありがとうな！これからも見ろよ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(soshina_q2 === 2){
                        $(".question3").html("そんなことよりお金かして〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("スパチャして〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ギャンブルやめなね！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度一緒にパチンコ行こう！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("競馬やりたい");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })           
 })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("新しいカギ見てますよ！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {      
                  if(soshina_q2 === 1){
                        $(".question3").html("ありがとう！また見ろよ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(soshina_q2 === 2){
                        $(".question3").html("チョコプラよりおもろいだろ？")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("子供か")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ギャンブルやめなね！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
            
                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度一緒にパチンコ行こう！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
              
                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("1黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("競馬やりたい");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
             
                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("太客になる予定です！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
               
                  setTimeout(function () {
                  if(soshina_q2 === 1){
                        $(".question3").html("早くなれい！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(soshina_q2 === 2){
                        $(".question3").html("さっさとスパチャして！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("お金貸して〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
            $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ギャンブルやめなね！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
          
                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度一緒にパチンコ行こう！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("競馬やりたい");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("黙れぼけえ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("どっか行け")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また連絡してこいや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice3").on("click",function(){
            if(w === 1){
                   let soshina_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("お前のこと誰が好きなん？");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q === 1){
                        $(".question2").html("おまだれやなぁ")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else if(soshina_q === 2){
                        $(".question2").html("めっちゃ俺のファンやん")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else {
                        $(".question2").html("お前のこと俺が好きやん")
                        $(".question2").css("background-color", "#DDDDDD");

                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">好きなアーティストは？</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">友達いる？</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">You Tubeの企画最高</button>');

                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");

            }
      $(".second-choice1").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("好きなアーティストは？");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(soshina_q2 === 1){
                        $(".question3").html("俺よりすごいアーティストいないか")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(soshina_q2 === 2){
                        $(".question3").html("おらんあぁ")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("皆、しょーもないやろ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">お前がな</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前もな</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ひどい！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前がな");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前もな");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ひどい！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("友達いる？");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q2 === 1){
                        $(".question3").html("おるわ！カス！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(soshina_q2 === 2){
                        $(".question3").html("前田龍ニくらいかな")
                        $(".question4").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("あのちゃんと仲良いで")
                        $(".question4").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">離婚した？</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">あのちゃんと結婚しないの？</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ギャンブル４兄弟だけが友達でしょ？</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("離婚した？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')


                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("あのちゃんと結婚しないの？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
         
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ギャンブル４兄弟だけが友達でしょ？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 1){
                   soshina_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("You Tubeの企画最高");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(soshina_q2 === 1){
                        $(".question3").html("良いこと言うやん")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(soshina_q2 === 2){
                        $(".question3").html("せやろ")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("いつも見てくれてありがとう！！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">調子乗んな</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">ボケェ</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ハゲタコ</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
      $(".third-choice1").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("調子乗んな");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ボケェ");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 1){
                   soshina_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ハゲタコ");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(soshina_q3 === 1){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else if(soshina_q3 === 2){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("うるせぇ、あっち行っとけ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/soshina/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/soshina/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/soshina/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/soshina/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/soshina/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      // 粗品ここまで

      // 橋本環奈　ここから
      $(".first-choice1").on("click",function(){
            if(w === 2){
                   let kanna_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("いつも応援してます！！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);

                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                        if(kanna_q === 1){
                              $(".question2").html("ええ！嬉しい、ありがとうね！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else if(kanna_q === 2){
                              $(".question2").html("ありがとうね〜！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else {
                              $(".question2").html("本当〜？")
                              $(".question2").css("background-color", "#DDDDDD");
                        }

                        $(".second-choice1").html('<button class="test" style="width: 250px;">千と千尋の神隠し見ましたよ！</button>');
                        $(".second-choice2").html('<button class="test" style="width: 250px;">キングダム見ました！</button>');
                        $(".second-choice3").html('<button class="test" style="width: 250px;">今日から俺は、めっちゃ面白かった！！</button>');
      
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");
            }
      $(".second-choice1").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("千と千尋の神隠し見ましたよ！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(kanna_q2 === 1){
                        $(".question3").html("他の作品も是非見てね！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(kanna_q2 === 2){
                        $(".question3").html("銀魂も見てね！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("来年、秋から連続テレビ小説出るよ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">もちろん見ます！今度ご飯行きましょう！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">連続テレビ小説見ます！今度、お話聞かせてください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">銀魂も見ます！</button>');

                  }, 7500);


                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("もちろん見ます！今度ご飯行きましょう！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("ご飯はごめんなさい、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("マネージャも一緒だったら良いよ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("絶対無理・・・！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("連続テレビ小説見ます！今度、お話聞かせてください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("はーい！また連絡してね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');


                  }else if(kanna_q3 === 2){
                        $(".question4").html("良いよ！ご飯食べに行こっか！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("お手紙お待ちしています〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 2){
                  kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("銀魂も見ます！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("よろしくね！また連絡してね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');


                  }else if(kanna_q3 === 2){
                        $(".question4").html("はーい！感想待ってるね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("絶対見てね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("キングダム見ました！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
      
                  if(kanna_q2 === 1){
                        $(".question3").html("ありがとう！面白かった？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(kanna_q2 === 2){
                        $(".question3").html("あれあんま面白くないよね笑")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("すごい楽しい現場だったよ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">すごい面白い作品でした！今度、感想お伝えしますね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">そこまで面白くなかったなぁ、、、</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">続編期待！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("すごい面白い作品でした！今度、感想お伝えしますね！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("はーい！また連絡してね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("聞かせて！！ご飯食べに行こっか！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("お手紙お待ちしています〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })

      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("そこまで面白くなかったなぁ、、、");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("お前のこと誰が好きなん？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("それな。さよなら〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("嫌い！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                   $(".answer3").html("続編期待！！");
                   $(".answer3").css("background-color", "#00FF00");

                   setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("私も期待してる！また連絡してね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("はーい！またね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("今日から俺は、めっちゃ面白かった！！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(kanna_q2 === 1){
                        $(".question3").html("あれはまじギャグ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(kanna_q2 === 2){
                        $(".question3").html("ね！！やってる方も楽しかったよ〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("嬉しい！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">今度ご飯行きましょうよ！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">良かったら、連絡先教えてください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">他の作品もチェックしますね！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }

      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度ご飯行きましょうよ！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("ごめん！無理！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("マネージャも一緒だったら良いよ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("絶対無理・・・！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("良かったら、連絡先教えてください！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("ごめん！無理！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("んー、、、無理。笑")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("他の作品もチェックしますね！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("はーい！また連絡してね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("これからも応援よろしくね！またね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("お手紙お待ちしています〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice2").on("click",function(){
            if(w === 2){
                   let kanna_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("ドラマ見てますよ！！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(kanna_q === 1){
                        $(".question2").html("ありがとう！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else if(kanna_q === 2){
                        $(".question2").html("何見てくれた〜？")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else {
                        $(".question2").html("本当〜？")
                        $(".question2").css("background-color", "#DDDDDD");
                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">今日から俺は、めっちゃ面白かった！！</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">何見たか忘れた笑</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">本当ですよ！！全部見てます！</button>');
            
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");


            }
      $(".second-choice1").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("今日から俺は、めっちゃ面白かった！！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(kanna_q2 === 1){
                        $(".question3").html("あれはまじギャグ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(kanna_q2 === 2){
                        $(".question3").html("ね！！やってる方も楽しかったよ〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("嬉しい！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">今度ご飯行きましょうよ！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">良かったら、連絡先教えてください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">他の作品もチェックしますね！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度ご飯行きましょうよ！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("ごめん！無理！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("マネージャも一緒だったら良いよ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("絶対無理・・・！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("良かったら、連絡先教えてください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("ごめん！無理！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("んー、、、無理。笑")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("他の作品もチェックしますね！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("はーい！また連絡してね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("これからも応援よろしくね！またね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("お手紙お待ちしています〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })           
 })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("何見たか忘れた笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {      
                  if(kanna_q2 === 1){
                        $(".question3").html("最低、、！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(kanna_q2 === 2){
                        $(".question3").html("悲しい、、")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("そんなぁ、、、")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("嘘です！！笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
            
                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("嘘つく人嫌いです、、またね、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("ショックです。")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("またね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("作品が多すぎるんよ笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
              
                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("1忙しいからまたね！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("そうですかね〜。")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("はははは。。")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("思い出したら伝えるね笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
             
                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("は〜い！またね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("ほ〜い")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("またね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("本当ですよ！！全部見てます！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
               
                  setTimeout(function () {
                  if(kanna_q2 === 1){
                        $(".question3").html("全部！？嬉しい〜！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(kanna_q2 === 2){
                        $(".question3").html("全部はさすがに嘘でしょ笑")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("適当言ってる笑")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">是非今度、感想伝えさせてください！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">良ければご飯行きましょう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">これからも頑張ってください！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
            $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("是非今度、感想伝えさせてください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
          
                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("は〜い！またね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("お手紙お待ちしております！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("聞かせて！！ご飯食べに行こっか！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("良ければご飯行きましょう！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("ごめん！無理！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("んー、、、無理。笑")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("元気でね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも頑張ってください！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("は〜い！またね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("ほ〜い")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("またね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice3").on("click",function(){
            if(w === 2){
                   let kanna_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("インスタフォローしてます！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q === 1){
                        $(".question2").html("ありがとう！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else if(kanna_q === 2){
                        $(".question2").html("コメントしてね！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else {
                        $(".question2").html("さんきゅー！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">いつも元気もらってます！</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">いつもイイねしてますよ！</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">偽アカウント多いよね笑</button>');

                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");

            }
      $(".second-choice1").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("いつも元気もらってます！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(kanna_q2 === 1){
                        $(".question3").html("うちも、みんなから元気もらってるよ！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(kanna_q2 === 2){
                        $(".question3").html("嬉しい！！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("元気いっぱい！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">お前がな</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前もな</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ひどい！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度良かったら、ご飯行きませんか？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("ごめん！無理！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("んー、、、無理。笑")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お友達からよろしくお願いします！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("はーい！よろしくね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else if(kanna_q3 === 2){
                        $(".question4").html("是非！マネージャも入れてご飯でも行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("考えとく、、！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも頑張ってください！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("がんばります！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("応援してね！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ありがとう〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("いつもイイねしてますよ！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q2 === 1){
                        $(".question3").html("コメントもしてね！	")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(kanna_q2 === 2){
                        $(".question3").html("ありがとう！励みになります！")
                        $(".question4").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("これからもしてね！")
                        $(".question4").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">離婚した？</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度コメントしてみます！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">これからも頑張ってください！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("はい！！これからもイイねとコメントしまくる！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("よろしくね！また連絡してね〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("はーい！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("頑張る〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')


                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度コメントしてみます！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
         
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("絶対だぞー！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("許さないかんな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("怒ったかんな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも頑張ってください！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("がんばります！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("応援してね！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ありがとう〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 2){
                   kanna_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("偽アカウント多いよね笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(kanna_q2 === 1){
                        $(".question3").html("それな笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(kanna_q2 === 2){
                        $(".question3").html("そうなの！？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("騙されないでね！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">気づかずフォローしてました笑</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">是非仲良くしてください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">これからも応援してます！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
      $(".third-choice1").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("気づかずフォローしてました笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("気をつけて！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("だめだよ！気をつけてね〜")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("フォロー外しておきな笑")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("是非仲良くしてください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(kanna_q3 === 1){
                        $(".question4").html("ね！また連絡してね！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("今度、飲み行こう！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("三軒茶屋によくいるから連絡ちょうだい〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 2){
                   kanna_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも応援してます！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(kanna_q3 === 1){
                        $(".question4").html("がんばります！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else if(kanna_q3 === 2){
                        $(".question4").html("応援してね！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ありがとう〜！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/kanna/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/kanna/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/kanna/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/kanna/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/kanna/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      // 橋本環奈ここまで


      // 大悟ここから
      $(".first-choice1").on("click",function(){
            if(w === 3){
                   let daigo_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("本物の山本大悟さんですか？？");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);

                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                        if(daigo_q === 1){
                              $(".question2").html("なんでフルネームやねん笑")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else if(daigo_q === 2){
                              $(".question2").html("誰がフルで覚えてんねん笑")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else {
                              $(".question2").html("ファンだね〜笑")
                              $(".question2").css("background-color", "#DDDDDD");
                        }

                        $(".second-choice1").html('<button class="test" style="width: 250px;">わー！ツッコミ嬉しい！</button>');
                        $(".second-choice2").html('<button class="test" style="width: 250px;">ちゃんと、確認したくて、フルネームで確認しました笑</button>');
                        $(".second-choice3").html('<button class="test" style="width: 250px;">北木島の山本大悟ですか？</button>');
      
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");
            }
      $(".second-choice1").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("わー！ツッコミ嬉しい！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(daigo_q2 === 1){
                        $(".question3").html("きもいのお笑笑")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(daigo_q2 === 2){
                        $(".question3").html("一般人すぎる！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("何がそんな嬉しいん笑")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">俺も飲み行きたい！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">これからもファンとして応援し続けます！！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">酒とタバコやめなよ！！</button>');

                  }, 7500);


                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("俺も飲み行きたい！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからもファンとして応援し続けます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("おう！！よろしくな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');


                  }else if(daigo_q3 === 2){
                        $(".question4").html("そう言っていなくなったやつばかり")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("かかってこい")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 3){
                  daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("酒とタバコやめなよ！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');


                  }else if(daigo_q3 === 2){
                        $(".question4").html("絶対ワシはやめん！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("死ねっちゅうんか！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("ちゃんと、確認したくて、フルネームで確認しました笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
      
                  if(daigo_q2 === 1){
                        $(".question3").html("確認せんでも分かるやろ笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(daigo_q2 === 2){
                        $(".question3").html("どう？本物のだろ？")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("偽物やったらどうすんねん笑")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">極悪人の顔してるんですぐ覚えました！笑</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">本物か怪しいけど、一回会ってみたい</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">飲み行きませんか？？</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("極悪人の顔してるんですぐ覚えました！笑");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("ワシのどこが極悪やねん！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("やっちゃろうってか！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("かかってこいや！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })

      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("本物か怪しいけど、一回会ってみたい");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                   $(".answer3").html("飲み行きませんか？？");
                   $(".answer3").css("background-color", "#00FF00");

                   setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("北木島の山本大悟ですか？");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(daigo_q2 === 1){
                        $(".question3").html("ワシの島のことは言うな！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(daigo_q2 === 2){
                        $(".question3").html("ワシの島をバカにするな！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("北木島からの有名人、ワシだけやぞ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">いつか遊びに行きます！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お父様、お母様によろしくお伝えください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">元気でね！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }

      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("いつか遊びに行きます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("絶対くんな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("そっとしてやれい")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("そんなやつばっかだな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お父様、お母様によろしくお伝えください！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("誰の親に言うとんねん！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ありがとうな！伝えておくわ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("元気でね！！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("お前もな！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("おう！元気でな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice2").on("click",function(){
            if(w === 3){
                   let daigo_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("嬉しい！！マッチあざっす！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(daigo_q === 1){
                        $(".question2").html("今、解除しようか迷いどころ")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else if(daigo_q === 2){
                        $(".question2").html("誰だっけお前？")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else {
                        $(".question2").html("ワシ、女にしか興味ないんだわ")
                        $(".question2").css("background-color", "#DDDDDD");
                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">なんでそんなこと言うん。。</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">もちろん俺もです！！</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">悲しいです、そんなこと言わないで</button>');
            
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");


            }
      $(".second-choice1").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("なんでそんなこと言うん。。");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(daigo_q2 === 1){
                        $(".question3").html("まあ男にしか興味ないから")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(daigo_q2 === 2){
                        $(".question3").html("また連絡してこいよ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("元気でな、間違えてイイねしちまった")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">悲しいです、そんなこと言わないで</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">また連絡しますね！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">今度ご飯行きましょうよ！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("悲しいです、そんなこと言わないで");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("嘘だぞ、いつでも相談乗ってやるよ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("元気出せよ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("イカ 2貫")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("また連絡しますね！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("いつでも連絡してこい！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("飲みに行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("今度ご飯行きましょうよ！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })           
 })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("もちろん俺もです！！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {      
                  if(daigo_q2 === 1){
                        $(".question3").html("んだと！？！？！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(daigo_q2 === 2){
                        $(".question3").html("んだと！？！？！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("んだと！？！？！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("もう連絡しません！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
            
                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("まあ男にしか興味ないから")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("また連絡してこいよ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でな、間違えてイイねしちまった")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("また連絡して良いですか？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
              
                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("1まあ男にしか興味ないから")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("また連絡してこいよ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でな、間違えてイイねしちまった")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲み行きましょうや！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
             
                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("まあ男にしか興味ないから無理やね")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("また連絡してこいよ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("元気でな、間違えてイイねしちまった")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("悲しいです、そんなこと言わないで");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
               
                  setTimeout(function () {
                  if(daigo_q2 === 1){
                        $(".question3").html("まあ男にしか興味ないから")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(daigo_q2 === 2){
                        $(".question3").html("また連絡してこいよ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("元気でな、間違えてイイねしちまった")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">いつか遊びに行きます！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お父様、お母様によろしくお伝えください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">元気でね！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
            $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("いつか遊びに行きます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
          
                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("絶対くんな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("そっとしてやれい")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("そんなやつばっかだな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お父様、お母様によろしくお伝えください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("誰の親に言うとんねん！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ありがとうな！伝えておくわ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("元気でね！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("お前もな！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("おう！元気でな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice3").on("click",function(){
            if(w === 3){
                   let daigo_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("いつも、いろはに千鳥見てます！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q === 1){
                        $(".question2").html("ローカルすぎる笑")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else if(daigo_q === 2){
                        $(".question2").html("普通、鬼連チャンだろ笑笑")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else {
                        $(".question2").html("普通、千鳥のクセスゴだろ笑笑")
                        $(".question2").css("background-color", "#DDDDDD");

                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">あのローカルさがマジで面白い笑</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">のんびりしててちょうどいい</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">他の番組知らないわ</button>');

                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");

            }
      $(".second-choice1").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("あのローカルさがマジで面白い笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(daigo_q2 === 1){
                        $(".question3").html("あんあローカル番組誰がみんねん笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(daigo_q2 === 2){
                        $(".question3").html("俺らの初めてレビュラーだからな")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("今でもゆるくやってるなぁ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">お前がな</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前もな</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ひどい！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("俺も飲み行きたい！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからもファンとして応援し続けます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("おう！！よろしくな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else if(daigo_q3 === 2){
                        $(".question4").html("そう言っていなくなったやつばかり")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("かかってこい")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("酒とタバコやめなよ！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("絶対ワシはやめん！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("死ねっちゅうんか！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("のんびりしててちょうどいい");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q2 === 1){
                        $(".question3").html("あんあローカル番組誰がみんねん笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(daigo_q2 === 2){
                        $(".question3").html("俺らの初めてレビュラーだからな")
                        $(".question4").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("今でもゆるくやってるなぁ")
                        $(".question4").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">離婚した？</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">本物か怪しいけど、一回会ってみたい</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">飲み行きませんか？？</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("極悪人の顔だけど好きです！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("ワシのどこが極悪やねん！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("やっちゃろうってか！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("かかってこいや！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')


                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("本物か怪しいけど、一回会ってみたい");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
         
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲み行きませんか？？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("良いよ行こう！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("行ってやってもいいぜ！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 3){
                   daigo_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("他の番組知らないわ");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(daigo_q2 === 1){
                        $(".question3").html("あんあローカル番組誰がみんねん笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(daigo_q2 === 2){
                        $(".question3").html("俺らの初めてレビュラーだからな")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("今でもゆるくやってるなぁ")
                        $(".question3").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">いつか北木島にも遊びに行きます！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お父様、お母様によろしくお伝えください！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">元気でね！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
      $(".third-choice1").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("いつか北木島にも遊びに行きます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("絶対くんな！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("そっとしてやれい")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("そんなやつばっかだな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お父様、お母様によろしくお伝えください！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(daigo_q3 === 1){
                        $(".question4").html("うるせぇ、ボケ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("誰の親に言うとんねん！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ありがとうな！伝えておくわ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 3){
                   daigo_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("元気でね！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(daigo_q3 === 1){
                        $(".question4").html("お前もな！！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else if(daigo_q3 === 2){
                        $(".question4").html("おう！元気でな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/daigo/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/daigo/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/daigo/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/daigo/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/daigo/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      // 大悟ここまで


      // ノブここから
      $(".first-choice1").on("click",function(){
            if(w === 4){
                   let nobu_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("うわ〜！！！本物のノブだ！！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);

                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                        if(nobu_q === 1){
                              $(".question2").html("あの芸能人のノブですよ〜！！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else if(nobu_q === 2){
                              $(".question2").html("ははは、本物ですよ〜！！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else {
                              $(".question2").html("嬉しいだろ？？芸能人だぞ？")
                              $(".question2").css("background-color", "#DDDDDD");
                        }

                        $(".second-choice1").html('<button class="test" style="width: 250px;">調子乗んな笑</button>');
                        $(".second-choice2").html('<button class="test" style="width: 250px;">お前のことなんか知らん！</button>');
                        $(".second-choice3").html('<button class="test" style="width: 250px;">好きだわそのくだり笑</button>');
      
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");
            }
      $(".second-choice1").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("調子乗んな笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(nobu_q2 === 1){
                        $(".question3").html("うっせぇ！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(nobu_q2 === 2){
                        $(".question3").html("お前、フォロワー何人？")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("フォロワーの数で勝負しようぜ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">誰がそんなやつ好きなん笑</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">ちなみに、私はフォロワー１００人くらいです。。</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">どうして好感度高いの？</button>');

                  }, 7500);


                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("誰がそんなやつ好きなん笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("お前もな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("俺はお前のことちょっと好きだよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("0")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ちなみに、私はフォロワー１００人くらいです。。");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("すくなwwww　一生連絡してくんな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');


                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 4){
                  nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("どうして好感度高いの？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("スター性があるからな。また会おう")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');


                  }else if(nobu_q3 === 2){
                        $(".question4").html("俺が俺だから？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("芸能人だからかな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("お前のことなんか知らん！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
      
                  if(nobu_q2 === 1){
                        $(".question3").html("俺もお前のこと知らん！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(nobu_q2 === 2){
                        $(".question3").html("どっか行け！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("お前はマジでどっか行け！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">飲みに行こうぜ〜おいノブ〜</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前のこと誰が好きなん？</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">お前もな！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })

      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前のこと誰が好きなん？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                   $(".answer3").html("お前もな！！");
                   $(".answer3").css("background-color", "#00FF00");

                   setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("好きだわそのくだり笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(nobu_q2 === 1){
                        $(".question3").html("嬉しいわぁ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(nobu_q2 === 2){
                        $(".question3").html("いつまでも応援しろよ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("ロレックスの時計つけてるよ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">飲みに行こうぜ〜おいノブ〜</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">ロレックスの時計ちょうだい！！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">これからも一生ついていきます！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }

      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ロレックスの時計ちょうだい！！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも一生ついていきます！！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("かかってこい！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice2").on("click",function(){
            if(w === 4){
                   let nobu_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("本物のノブさんですか？");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(nobu_q === 1){
                        $(".question2").html("あの芸能人のノブですよ〜！！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else if(nobu_q === 2){
                        $(".question2").html("ははは、本物ですよ〜！！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else {
                        $(".question2").html("嬉しいだろ？？芸能人だぞ？")
                        $(".question2").css("background-color", "#DDDDDD");
                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">信じません！笑</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">嫌いだわ〜笑</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">面白い面白い</button>');
            
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");


            }
      $(".second-choice1").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("信じません！笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(nobu_q2 === 1){
                        $(".question3").html("うっせぇ！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(nobu_q2 === 2){
                        $(".question3").html("お前、フォロワー何人？")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("フォロワーの数で勝負しようぜ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">飲みに行こうぜ〜おいノブ〜</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前のこと誰が好きなん？</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">お前もな！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前のこと誰が好きなん？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前もな！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })           
 })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("嫌いだわ〜笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {      
                  if(nobu_q2 === 1){
                        $(".question3").html("うっせぇ！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(nobu_q2 === 2){
                        $(".question3").html("お前、フォロワー何人？")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("フォロワーの数で勝負しようぜ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
            
                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ロレックスの時計ちょうだい！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
              
                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("1だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも一生ついていきます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
             
                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("かかってこい！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("面白い面白い");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
               
                  setTimeout(function () {
                  if(nobu_q2 === 1){
                        $(".question3").html("うっせぇ！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(nobu_q2 === 2){
                        $(".question3").html("お前、フォロワー何人？")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("フォロワーの数で勝負しようぜ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">飲みに行こうぜ〜おいノブ〜</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">ちなみに、私はフォロワー１００人くらいです。。</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">どうして好感度高いの？</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
            $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
          
                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ちなみに、私はフォロワー１００人くらいです。。");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("すくなwwww　一生連絡してくんな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("どうして好感度高いの？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("スター性があるからな。また会おう")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("俺が俺だから？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("芸能人だからかな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice3").on("click",function(){
            if(w === 4){
                   let nobu_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("お会いできて光栄です！！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q === 1){
                        $(".question2").html("あの芸能人のノブですよ〜！！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else if(nobu_q === 2){
                        $(".question2").html("ははは、本物ですよ〜！！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else {
                        $(".question2").html("嬉しいだろ？？芸能人だぞ？")
                        $(".question2").css("background-color", "#DDDDDD");

                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">好きだわそのくだり笑</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">お前のことなんか知らん！</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">面白い面白い</button>');

                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");

            }
      $(".second-choice1").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("好きだわそのくだり笑");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(nobu_q2 === 1){
                        $(".question3").html("嬉しいわぁ")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(nobu_q2 === 2){
                        $(".question3").html("いつまでも応援しろよ")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("ロレックスの時計つけてるよ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">お前がな</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前もな</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ひどい！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ロレックスの時計ちょうだい！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも一生ついていきます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("かかってこい！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("お前のことなんか知らん！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q2 === 1){
                        $(".question3").html("俺もお前のこと知らん！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(nobu_q2 === 2){
                        $(".question3").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("お前はマジでどっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">離婚した？</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前のこと誰が好きなん？</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">お前もな！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')


                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前のこと誰が好きなん？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
         
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("お前もな！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("だまれ！！！ぼけ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 4){
                   nobu_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("面白い面白い");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(nobu_q2 === 1){
                        $(".question3").html("うっせぇ！！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(nobu_q2 === 2){
                        $(".question3").html("お前、フォロワー何人？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("フォロワーの数で勝負しようぜ")
                        $(".question3").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">飲みに行こうぜ〜おいノブ〜</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">ちなみに、私はフォロワー１００人くらいです。。</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">どうして好感度高いの？</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
      $(".third-choice1").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲みに行こうぜ〜おいノブ〜");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("絶対無理！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("いいよ！！女連れてきてね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("いつでも行こう〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("ちなみに、私はフォロワー１００人くらいです。。");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(nobu_q3 === 1){
                        $(".question4").html("すくなwwww　一生連絡してくんな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("どっか行け！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("また来世で会おうな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 4){
                   nobu_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("どうして好感度高いの？");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(nobu_q3 === 1){
                        $(".question4").html("スター性があるからな。また会おう")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else if(nobu_q3 === 2){
                        $(".question4").html("俺が俺だから？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("芸能人だからかな")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/nobu/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/nobu/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/nobu/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/nobu/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/nobu/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      // ノブここまで

      // せいやここから
      $(".first-choice1").on("click",function(){
            if(w === 5){
                   let seiya_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("いつもYouTube見てます！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);

                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);

                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                        if(seiya_q === 1){
                              $(".question2").html("ありがとう！応援よろしくね！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else if(seiya_q === 2){
                              $(".question2").html("18時に上がるからな！")
                              $(".question2").css("background-color", "#DDDDDD");
                        }else {
                              $(".question2").html("毎日アップロードってえぐいよな、、")
                              $(".question2").css("background-color", "#DDDDDD");
                        }

                        $(".second-choice1").html('<button class="test" style="width: 250px;">もちろん個人チャンネルも応援してます！</button>');
                        $(".second-choice2").html('<button class="test" style="width: 250px;">監査が見てるだけで楽しいですよ！</button>');
                        $(".second-choice3").html('<button class="test" style="width: 250px;">監査の企画面白い！</button>');
      
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");
            }
      $(".second-choice1").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("もちろん個人チャンネルも応援してます！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(seiya_q2 === 1){
                        $(".question3").html("ちゃんと酒袋やん")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(seiya_q2 === 2){
                        $(".question3").html("イニミニ！？ありがとう！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("ちゃんとファンやん！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">はい！ちゃんと酒袋です！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">粗品の個人チャンネルも登録してる！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">もちろんじゃないですか！笑</button>');

                  }, 7500);


                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("はい！ちゃんと酒袋です！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("酒飲みすぎ注意！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("イベントも参加してね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("粗品の個人チャンネルも登録してる！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("コンビどっちも応援してくれてありがとうね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');


                  }else if(seiya_q3 === 2){
                        $(".question4").html("粗品よりも俺を見ろ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("今度、ご飯連れてってやるから粗品は切れ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 5){
                  seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("もちろんじゃないですか！笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');


                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("監査が見てるだけで楽しいですよ！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
      
                  if(seiya_q2 === 1){
                        $(".question3").html("うまいんかーーーーい！")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(seiya_q2 === 2){
                        $(".question3").html("いつも厳しく監査してます！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("緩んでないか今後も監査してくわ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }


                  $(".third-choice1").html('<button class="test" style="width: 250px;">飲み連れってください！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">これからも面白い投稿を期待している！！！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">きっと応援し続ける！！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("飲み連れってください！！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("酒飲みすぎ注意！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("イベントも参加してね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("また連絡してね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })

      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("これからも面白い投稿を期待している！！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                   $(".answer3").html("きっと応援し続ける！！");
                   $(".answer3").css("background-color", "#00FF00");

                   setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("きっと！？！？")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("確定情報にしてくれ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')


                  }, 7500);


                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("監査の企画面白い！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(seiya_q2 === 1){
                        $(".question3").html("まじで！？嬉しいわぁ、、、")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(seiya_q2 === 2){
                        $(".question3").html("ただの飯だけだけどな！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("俺は厳しく見ていくぜ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">見てるだけで楽しいですよ！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">いつも同じご飯食べちゃいます！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">うまいんかいが、聞きたくて笑</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }

      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("見てるだけで楽しいですよ！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("いつも同じご飯食べちゃいます！");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("うまいんかいが、聞きたくて笑");
                  $(".answer3").css("background-color", "#00FF00");
      
                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice2").on("click",function(){
            if(w === 5){
                   let seiya_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("結婚おめでとうございます！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(seiya_q === 1){
                        $(".question2").html("ありがとうー！よく知ってるね！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else if(seiya_q === 2){
                        $(".question2").html("暖かく見守ってくださいな！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }else {
                        $(".question2").html("やっと結婚できたわ！")
                        $(".question2").css("background-color", "#DDDDDD");
                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">お子さんもできるんですよね！</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">粗品みたいになるなよ</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">まさか結婚できるとは、、</button>');
            
                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");


            }
      $(".second-choice1").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("お子さんもできるんですよね！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);      

                  setTimeout(function () {
                  if(seiya_q2 === 1){
                        $(".question3").html("そうそう！ちゃんと産まれるといいよなあ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(seiya_q2 === 2){
                        $(".question3").html("元気に産まれるといいなあ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("暖かく見守ってね〜")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">こればっかしはボケなしですね</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">願ってます！！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">どんな子に育つか楽しみ！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("こればっかしはボケなしですね");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("願ってます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("どんな子に育つか楽しみ！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })           
 })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("粗品みたいになるなよ");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {      
                  if(seiya_q2 === 1){
                        $(".question3").html("離婚せんわ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(seiya_q2 === 2){
                        $(".question3").html("相方バカにするなよボケ！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("あのちゃんと仲良いから平気よあいつは")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">ギャンブルやめなね！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">今度一緒にパチンコ行こう！</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">競馬やりたい</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("きっと2人とも幸せになりますよね！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
            
                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("粗品さん応援してます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
              
                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("1これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("どんな子に育つか楽しみ！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
             
                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("まさか結婚できるとは、、");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
               
                  setTimeout(function () {
                  if(seiya_q2 === 1){
                        $(".question3").html("やかましいわ！俺でもできるわー")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else if(seiya_q2 === 2){
                        $(".question3").html("お前俺の何知っとんねん！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }else {
                        $(".question3").html("任せとけ")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">おめでたいすぎるっ！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">粗品は、、、</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">相手一般人だもんね！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
            $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("おめでたいすぎるっ！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
          
                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("粗品は、、、");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("相手一般人だもんね！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("嬉しい！！みんなで飲み行くぞ〜！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/success.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      $(".first-choice3").on("click",function(){
            if(w === 5){
                   let seiya_q = Math.ceil(Math.random()*3);

                  $(".answer1").html("まじでせいやさんのファンです！！！");
                  $(".answer1").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question2").text("入力中");
                        $(".question2").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question2").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q === 1){
                        $(".question2").html("ありがとう！応援よろしくね！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else if(seiya_q === 2){
                        $(".question2").html("YouTubeも見てな！！")
                        $(".question2").css("background-color", "#DDDDDD");

                  }else {
                        $(".question2").html("本当か？？")
                        $(".question2").css("background-color", "#DDDDDD");

                  }

                  $(".second-choice1").html('<button class="test" style="width: 250px;">まじでファンで、YouTubeもいつも見てる！！</button>');
                  $(".second-choice2").html('<button class="test" style="width: 250px;">霜降り明星のあてみなげも見てる</button>');
                  $(".second-choice3").html('<button class="test" style="width: 250px;">霜降りバラエティXも見てる！！</button>');

                  }, 7500);

                  $(".first-choice1").html("");
                  $(".first-choice2").html("");
                  $(".first-choice3").html("");

            }
      $(".second-choice1").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("まじでファンで、YouTubeもいつも見てる！！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
      
                  setTimeout(function () {
                  if(seiya_q2 === 1){
                        $(".question3").html("最近どれがおもろっかった？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(seiya_q2 === 2){
                        $(".question3").html("粗品と俺どっちが面白い？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("応援ありがとうな！！ちゃんと登録してね！！")
                        $(".question3").css("background-color", "#DDDDDD");
                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">お前がな</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">お前もな</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">ひどい！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }


      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("企画にもよるからなぁぁぁ");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("パッとせんなぁ、、、また連絡してや")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("いつでも連絡してこいよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })


      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("監査が面白かった！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("最高！！飲み連れてってやるよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else if(seiya_q3 === 2){
                        $(".question4").html("まじで！？嬉しいわぁ、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("これからも厳しく監査していくわ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("粗品さんの方が好きです笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("コンビどっちも応援してくれてありがとうね！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("粗品よりも俺を見ろ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("今度、ご飯連れてってやるから粗品は切れ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            })            
      
      
      $(".second-choice2").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("霜降り明星のあてみなげも見てる");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q2 === 1){
                        $(".question3").html("めっちゃファンやん笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(seiya_q2 === 2){
                        $(".question3").html("Tverで？？")
                        $(".question4").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("どうやって見てんの？？")
                        $(".question4").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">離婚した？</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">めっちゃファンなんで笑</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">すごい面白い企画ですよね笑　Tverで見てます！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }            
            
      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("Tverでいつも見てます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("最高！！飲み連れてってやるよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("まじで！？嬉しいわぁ、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }else {
                        $(".question4").html("ローカルまで見てくれるやつはガチファン")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');
                  }


                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')


                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("めっちゃファンなんで笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
         
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("酒好きなら飲み連れってやる！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ローカルも頑張り続けるわ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("すごい面白い企画ですよね笑　Tverで見てます！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("Tverで見れるよな！俺も見てる！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("テレビもYouTuvbeも頑張り続けるわ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("これからもファンでいてな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }


                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')

                 }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })            
      
      $(".second-choice3").on("click",function(){
            if(w === 5){
                   seiya_q2 = Math.ceil(Math.random()*3);

                  $(".answer2").html("霜降りバラエティXも見てる！！");
                  $(".answer2").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question3").text("入力中");
                        $(".question3").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question3").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {

                  if(seiya_q2 === 1){
                        $(".question3").html("めっちゃファンやん笑")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else if(seiya_q2 === 2){
                        $(".question3").html("Tverで？？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }else {
                        $(".question3").html("どうやって見てんの？？")
                        $(".question3").css("background-color", "#DDDDDD");

                  }

                  $(".third-choice1").html('<button class="test" style="width: 250px;">Tverでいつも見てます！！</button>');
                  $(".third-choice2").html('<button class="test" style="width: 250px;">めっちゃファンなんで笑</button>');
                  $(".third-choice3").html('<button class="test" style="width: 250px;">すごい面白い企画ですよね笑　Tverで見てます！</button>');

                  }, 7500);

                  $(".second-choice1").html("");
                  $(".second-choice2").html("");
                  $(".second-choice3").html("");

            }
      $(".third-choice1").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("Tverでいつも見てます！！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("最高！！飲み連れてってやるよ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("まじで！？嬉しいわぁ、、、")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ローカルまで見てくれるやつはガチファン")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice2").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("めっちゃファンなんで笑");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);
                  setTimeout(function () {

                  if(seiya_q3 === 1){
                        $(".question4").html("酒好きなら飲み連れってやる！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("これからも応援してくれよな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("ローカルも頑張り続けるわ")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })            
      
      $(".third-choice3").on("click",function(){
            if(w === 5){
                   seiya_q3 = Math.ceil(Math.random()*3);

                  $(".answer3").html("すごい面白い企画ですよね笑　Tverで見てます！");
                  $(".answer3").css("background-color", "#00FF00");

                  setTimeout(function () {
                        $(".question4").text("入力中");
                        $(".question4").css("background-color", "white");
                        }, 3000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。");
                        }, 4000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。");
                        }, 5000);
      
                  setTimeout(function () {
                        $(".question4").text("入力中。。。");
                        }, 6000);

                  setTimeout(function () {
                  if(seiya_q3 === 1){
                        $(".question4").html("Tverで見れるよな！俺も見てる！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else if(seiya_q3 === 2){
                        $(".question4").html("テレビもYouTuvbeも頑張り続けるわ！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }else {
                        $(".question4").html("これからもファンでいてな！！")
                        $(".question4").css("background-color", "#DDDDDD");
                        $(".woman").html('<img src="./img/seiya/lose.jpeg" alt="success">');

                  }

                  $(".result-img1").html('<img src="./img/seiya/result-img1.jpeg" alt="">')
                  $(".result-img2").html('<img src="./img/seiya/result-img2.jpeg" alt="">')
                  $(".result-img3").html('<img src="./img/seiya/result-img3.jpeg" alt="">')
                  $(".result-img4").html('<img src="./img/seiya/result-img4.jpeg" alt="">')
                  }, 7500);

                  $(".third-choice1").html("");
                  $(".third-choice2").html("");
                  $(".third-choice3").html("");
            }
      })
      })
      })

      // せいやここまで