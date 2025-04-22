let limit = 0;
let posts = [];

const kurActive = document.querySelectorAll(".kural-sets");
let kural = document.querySelector(".kural-def");

function kuralfun01() {
  fetch("./kural.json")
    .then((res) => res.json())
    .then((data) => {
      const thirukkural = data[0].thirukkural;
      kural.remove();

      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "kural-def");
      document.querySelector(".kural-container-inner").prepend(newDiv);
      // document.querySelector(".format").prepend(newDiv);
      kural = newDiv;

      for (let i = 0; i < 10; i++) {
        kural.insertAdjacentHTML(
          "beforeend",
          `
          <div>
          <div class="kural-sets">
            <span class="kural-no">${thirukkural[i + limit].kural}.</span>
            <div class="kural-pack">
              <div>
                <p class="kural-line-1 tamil-small">${
                  thirukkural[i + limit].tamil_1
                }</p>
                <p class="kural-line-2 tamil-small">${
                  thirukkural[i + limit].tamil_2
                }.</p>
              </div>
              <p class="kural-eng">${thirukkural[i + limit].english_1}</p>
              <p class="kural-eng">${thirukkural[i + limit].english_2}</p>
            </div>
          </div>
        </div>
        `
        );
      }

      // Select new kural elements and add event listeners
      const kuralset = document.querySelectorAll(".kural-sets");

      kuralset.forEach((element, index) => {
        element.addEventListener("click", () => {
          // Remove active class from all kural items first
          kuralset.forEach((value) => value.classList.remove("activeKural"));

          // Add active class to the clicked one
          element.classList.add("activeKural");
          let kurMean = document.querySelector(".kural-meaning");
          // kurMean.remove();

          let newDiv = document.createElement("div");
          newDiv.setAttribute("class", "kural-meaning");

          document.querySelector(".kural-container-inner").append(newDiv);

          // When clicked kural create newDiv in the bottom of the Format Container..
          // document.querySelector(".format").append(newDiv);

          kurMean = newDiv;
          kurMean.style.height = "500px";

          kurMean.insertAdjacentHTML(
            "beforeend",
            `<div class="kural-tamil">
              <box-icon title="close" class="kural-cancel" name='x' ></box-icon>
              <p class="kural-heading tamil-large">தமிழ்</p>
              <div class="kural-tam-box">
              <div class="quote-tam">
             <div>
                  <p class="kural-line-1 tamil-small">${
                    thirukkural[index + limit].tamil_1
                  }</p>
                  <p class="kural-line-2 tamil-small">${
                    thirukkural[index + limit].tamil_2
                  }.</p>
                </div>
                </div>
                <div class="meaning">
                  <p class="tamil-small"> பொருள் : ${
                    thirukkural[index + limit].tam_meaning
                  }.</p>
                </div>
              </div>
              </div>

              <div class="kural-english">
                <p class="kural-heading">English</p>
                <div class="kural-eng-box">
                <div class="quote-eng">
                <div>
                  <p>${thirukkural[index + limit].english_1}</p>
                  <p>${thirukkural[index + limit].english_2}</p>
                </div>  
                </div>
                <div class="meaning">
                  <p class="meaning-eng">Meaning : ${
                    thirukkural[index + limit].eng_meaning
                  }</p>
                  </div>
                </div>
              </div>`
          );
          let kuralCancel = document.querySelector(".kural-cancel");

          kuralCancel.addEventListener("click", () => {
            kurMean.remove();
          });
        });
      });
    })
    .catch((err) => console.log(err));
}

fetch("./couplets.json")
  .then((res) => res.json())
  .then((data) => {
    const athikaram = data[0].couplets;
    const couplets = document.querySelector("#coupletSets");

    // Insert all couplets
    athikaram.forEach((post) => {
      couplets.insertAdjacentHTML(
        "beforeend",
        `
        <div class="couplets-set-format ${post.active}">
          <span class="couplets-no">${post.id}.</span>
          <div class="couplets-name">
            <p class="couplets"><span class="tamil-small">${post.title_tam}</span>  / <span class="kural-eng"> ${post.title_eng}</span></p>
          </div>
        </div>
        `
      );
      posts.push(post.id);
    });

    // Select elements AFTER insertion
    const coupletsShow = document.querySelectorAll(".couplets-set-format");

    // Attach event listeners
    coupletsShow.forEach((element, i) => {
      element.addEventListener("click", () => {
        coupletsShow.forEach((value) => value.classList.remove("active"));
        element.classList.add("active");

        // console.log(posts[i]);

        // Using switch instead of multiple ifs
        switch (posts[i]) {
          case 1:
            limit = 0;
            break;
          case 2:
            limit = 10;
            break;
          case 3:
            limit = 20;
            break;
          case 4:
            limit = 30;
            break;
          case 5:
            limit = 40;
            break;
          case 6:
            limit = 50;
            break;
          case 7:
            limit = 60;
            break;
          case 8:
            limit = 70;
            break;
          case 9:
            limit = 80;
            break;
          case 10:
            limit = 90;
            break;
          case 11:
            limit = 100;
            break;
          case 12:
            limit = 110;
            break;
          case 13:
            limit = 120;
            break;
          case 14:
            limit = 130;
            break;
          case 15:
            limit = 140;
            break;
          case 16:
            limit = 150;
            break;
          case 17:
            limit = 160;
            break;
          case 18:
            limit = 170;
            break;
          case 19:
            limit = 180;
            break;
          case 20:
            limit = 190;
            break;
          case 21:
            limit = 200;
            break;
          case 22:
            limit = 210;
            break;
          case 23:
            limit = 220;
            break;
          case 24:
            limit = 230;
            break;
          case 25:
            limit = 240;
            break;
          case 26:
            limit = 250;
            break;
          case 27:
            limit = 260;
            break;
          case 28:
            limit = 270;
            break;
          case 29:
            limit = 280;
            break;
          case 30:
            limit = 290;
            break;
          case 31:
            limit = 300;
            break;
          case 32:
            limit = 310;
            break;
          case 33:
            limit = 320;
            break;
          case 34:
            limit = 330;
            break;
          case 35:
            limit = 340;
            break;
          case 36:
            limit = 350;
            break;
          case 37:
            limit = 360;
            break;
          case 38:
            limit = 370;
            break;
          case 39:
            limit = 380;
            break;
          case 40:
            limit = 390;
            break;
          case 41:
            limit = 400;
            break;
          case 42:
            limit = 410;
            break;
          case 43:
            limit = 420;
            break;
          case 44:
            limit = 430;
            break;
          case 45:
            limit = 440;
            break;
          case 46:
            limit = 450;
            break;
          case 47:
            limit = 460;
            break;
          case 48:
            limit = 470;
            break;
          case 49:
            limit = 480;
            break;
          case 50:
            limit = 490;
            break;
          case 51:
            limit = 500;
            break;
          case 52:
            limit = 510;
            break;
          case 53:
            limit = 520;
            break;
          case 54:
            limit = 530;
            break;
          case 55:
            limit = 540;
            break;
          case 56:
            limit = 550;
            break;
          case 57:
            limit = 560;
            break;
          case 58:
            limit = 570;
            break;
          case 59:
            limit = 580;
            break;
          case 60:
            limit = 590;
            break;
          case 61:
            limit = 600;
            break;
          case 62:
            limit = 610;
            break;
          case 63:
            limit = 620;
            break;
          case 64:
            limit = 630;
            break;
          case 65:
            limit = 640;
            break;
          case 66:
            limit = 650;
            break;
          case 67:
            limit = 660;
            break;
          case 68:
            limit = 670;
            break;
          case 69:
            limit = 680;
            break;
          case 70:
            limit = 690;
            break;
          case 71:
            limit = 700;
            break;
          case 72:
            limit = 710;
            break;
          case 73:
            limit = 720;
            break;
          case 74:
            limit = 730;
            break;
          case 75:
            limit = 740;
            break;
          case 76:
            limit = 750;
            break;
          case 77:
            limit = 760;
            break;
          case 78:
            limit = 770;
            break;
          case 79:
            limit = 780;
            break;
          case 80:
            limit = 790;
            break;
          case 81:
            limit = 800;
            break;
          case 82:
            limit = 810;
            break;
          case 83:
            limit = 820;
            break;
          case 84:
            limit = 830;
            break;
          case 85:
            limit = 840;
            break;
          case 86:
            limit = 850;
            break;
          case 87:
            limit = 860;
            break;
          case 88:
            limit = 870;
            break;
          case 89:
            limit = 880;
            break;
          case 90:
            limit = 890;
            break;
          case 91:
            limit = 900;
            break;
          case 92:
            limit = 910;
            break;
          case 93:
            limit = 920;
            break;
          case 94:
            limit = 930;
            break;
          case 95:
            limit = 940;
            break;
          case 96:
            limit = 950;
            break;
          case 97:
            limit = 960;
            break;
          case 98:
            limit = 970;
            break;
          case 99:
            limit = 980;
            break;
          case 100:
            limit = 990;
            break;
          case 101:
            limit = 1000;
            break;
          case 102:
            limit = 1010;
            break;
          case 103:
            limit = 1020;
            break;
          case 104:
            limit = 1030;
            break;
          case 105:
            limit = 1040;
            break;
          case 106:
            limit = 1050;
            break;
          case 107:
            limit = 1060;
            break;
          case 108:
            limit = 1070;
            break;
          case 109:
            limit = 1080;
            break;
          case 110:
            limit = 1090;
            break;
          case 111:
            limit = 1100;
            break;
          case 112:
            limit = 1110;
            break;
          case 113:
            limit = 1120;
            break;
          case 114:
            limit = 1130;
            break;
          case 115:
            limit = 1140;
            break;
          case 116:
            limit = 1150;
            break;
          case 117:
            limit = 1160;
            break;
          case 118:
            limit = 1170;
            break;
          case 119:
            limit = 1180;
            break;
          case 120:
            limit = 1190;
            break;
          case 121:
            limit = 1200;
            break;
          case 122:
            limit = 1210;
            break;
          case 123:
            limit = 1220;
            break;
          case 124:
            limit = 1230;
            break;
          case 125:
            limit = 1240;
            break;
          case 126:
            limit = 1250;
            break;
          case 127:
            limit = 1260;
            break;
          case 128:
            limit = 1270;
            break;
          case 129:
            limit = 1280;
            break;
          case 130:
            limit = 1290;
            break;
          case 131:
            limit = 1300;
            break;
          case 132:
            limit = 1310;
            break;
          case 133:
            limit = 1320;
            break;
        }
        kuralfun01();
        console.log(limit);
      });
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// <--********** SHOW KURAL **********--> //

kuralfun01();

function selectInput(details) {
  coupletSearch.value = details.innerHTML;
  kuralfun01();
}
