// Current date in Footer.. //
// const year = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// year.textContent = currentYear;

// End //

// BATCH ONCLICK //

let coupletsFilter = "english";

let coupletLimit = 0;
let coupletPost = [];

const batch = document.querySelector(".batch");
const batchYear = document.querySelector(".batch-year");
const body = document.querySelector("body");

batch.addEventListener("click", () => {
  batchYear.classList.toggle("batch-child");
});

body.addEventListener(
  "click",
  () => {
    batchYear.classList.remove("batch-child");
  },
  true
);

// ************************ //

//change navbar stcccle//

window.addEventListener("scroll", () => {
  document
    .querySelector(".main-nav")
    .classList.toggle("window_scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".list-items").forEach((item) => {
    item.classList.toggle("list-items-scroll", window.scrollY > 0);
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".list-items-icon").forEach((item) => {
    item.classList.toggle("list-items-icon-scroll", window.scrollY > 0);
  });
});

// *********************************

//show /hide faq answer//

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//===========show /hide nav menu==========//
const menu = document.querySelector(".nav__menu ");
const menubtn = document.querySelector("#open-menu-btn ");
const closebtn = document.querySelector("#close-menu-btn ");

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

//=============close nav menu===========//

const closenav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
};
closebtn.addEventListener("click", closenav);

/////////// ***** END ***** ////////////

window.addEventListener("scroll", () => {
  document
    .querySelector(".couplets-set-format-heading")
    .classList.toggle("sticky-heading", window.scrollY > 0);
});

/////////// ***** END ***** ////////////

//  <!-- SEARCH BAR FOR COUPLETS --> //

// const coupletsSearch = document.querySelector("#couplets-search-bar");

const resultBox = document.querySelector(".couplets-result-box");

const coupletSearch = document.querySelector("#couplets-search-bar");
const coupletSearchBox = document.querySelector(".couplets-result-box");
const coupletBoxDiv = document.querySelector(".couplets-result-box");
const coupletBoxClick = document.querySelector(".couplets-result-box ul li");

const coupDownArr = document.querySelector(".couplets-down-arrow");

const searchDownArr = document.querySelector(".couplets-search-type");

const coupFilterNo = document.querySelector(".filter-no");
const coupFilterTam = document.querySelector(".filter-tam");
const coupFilterEng = document.querySelector(".filter-eng");
const tickEng = document.querySelector(".tick-eng");
const tickTam = document.querySelector(".tick-tam");
const tickNo = document.querySelector(".tick-no");
const tickAct = document.querySelector(".active-tick");
const span = document.querySelectorAll("span");

coupDownArr.addEventListener("click", () => {
  searchDownArr.classList.toggle("couplets-search-type-show");
});

coupFilterEng.addEventListener("click", () => {
  coupletsFilter = "english";
  searchDownArr.classList.remove("couplets-search-type-show");
  tickEng.classList.add("show");
  tickTam.classList.remove("show");
  tickNo.classList.remove("show");
  console.log(coupletsFilter);
});

coupFilterTam.addEventListener("click", () => {
  coupletsFilter = "tamil";
  searchDownArr.classList.remove("couplets-search-type-show");
  tickTam.classList.add("show");
  tickEng.classList.remove("show");
  tickNo.classList.remove("show");
  console.log(coupletsFilter);
});

coupFilterNo.addEventListener("click", () => {
  coupletsFilter = "number";
  searchDownArr.classList.remove("couplets-search-type-show");
  tickNo.classList.add("show");
  tickEng.classList.remove("show");
  tickTam.classList.remove("show");
  console.log(coupletsFilter);
});
function meaning(thirukkural, index) {
  let kuralMean = document.querySelector(".kural-meaning");
  console.log(kuralMean);
  kuralMean.remove();

  let tamil_1;
  let tamil_2;
  let tam_meaning;
  let english_1;
  let english_2;
  let eng_meaning;
  
  if (typeof index === 'number') {
    tamil_1 = thirukkural[index + coupletLimit].tamil_1;
    tamil_2 = thirukkural[index + coupletLimit].tamil_2;
    tam_meaning = thirukkural[index + coupletLimit].tam_meaning;
    english_1 = thirukkural[index + coupletLimit].english_1;
    english_2 = thirukkural[index + coupletLimit].english_2;
    eng_meaning = thirukkural[index + coupletLimit].eng_meaning;
  } else {
    tamil_1 = thirukkural.tamil_1;
    tamil_2 = thirukkural.tamil_2;
    tam_meaning = thirukkural.tam_meaning;
    english_1 = thirukkural.english_1;
    english_2 = thirukkural.english_2;
    eng_meaning = thirukkural.eng_meaning;
  }
  
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "kural-meaning");

  // document.querySelector(".kural-container-inner").append(newDiv);
  document.querySelector(".format").append(newDiv);
  kuralMean = newDiv;

  kuralMean.insertAdjacentHTML(
    "beforeend",
    `<div class="kural-tamil">
                <p class="kural-heading tamil-large">தமிழ்</p>
                <div class="quote-tam">
                <div>
                  <p class="kural-line-1 tamil-small">${tamil_1}</p>
                  <p class="kural-line-2 tamil-small">${tamil_2}.</p>
                </div>
                </div>
                <div class="meaning">
                  <p class="tamil-small">${tam_meaning}.</p>
                </div>
              </div>

              <div class="kural-english">
                <p class="kural-heading">English</p>
                <div class="quote-eng">
                <div>
                  <p>${english_1}</p>
                  <p>${english_2}</p>
                </div>  
                </div>
                <div class="meaning">
                  <p class="meaning-eng">${eng_meaning}</p>
                </div>
              </div>`
  );
}
function kuralfun() {
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

      // console.log(coupletLimit);
      for (let i = 0; i < 10; i++) {
        kural.insertAdjacentHTML(
          "beforeend",
          `
          <div>
          <div class="kural-sets">
            <span class="kural-no">${
              thirukkural[i + coupletLimit].kural
            }.</span>
            <div class="kural-pack">
              <div>
                <p class="kural-line-1 tamil-small">${
                  thirukkural[i + coupletLimit].tamil_1
                }</p>
                <p class="kural-line-2 tamil-small">${
                  thirukkural[i + coupletLimit].tamil_2
                }.</p>
              </div>
              <p class="kural-eng">${
                thirukkural[i + coupletLimit].english_1
              }</p>
              <p class="kural-eng">${
                thirukkural[i + coupletLimit].english_2
              }</p>
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
          console.log(index);
          meaning(thirukkural, index);
        });
      });
    })
    .catch((err) => console.log(err));
}

fetch("./couplets.json")
  .then((key) => key.json())
  .then((data) => {
    let searchData = data[0].couplets;
    const kuralCouplets = [...new Set(searchData.map((couplets) => couplets))];

    // console.log(kuralCouplets);

    document
      .querySelector("#couplets-search-bar")
      .addEventListener("keyup", (e) => {
        let inputData = e.target.value; // Convert input to lowercase

        let filterData = kuralCouplets.filter((couplets) => {
          if (coupletsFilter === "english") {
            console.log(couplets.title_eng);
            return couplets.title_eng
              .toLowerCase()
              .includes(inputData.toLowerCase());
          }

          if (coupletsFilter === "tamil") {
            return couplets.title_tam.includes(inputData);
          }
          if (coupletsFilter === "number") {
            return String(couplets.id).includes(inputData);
          }
        });

        console.log(filterData);

        coupletPost = [];
        displayItems(filterData); // Ensure displayItems() is defined
      });
  });

const displayItems = (items) => {
  document.querySelector("#coupletSets").innerHTML = items
    .map((items) => {
      let { id, title_tam, title_eng } = items;
      coupletPost.push(id);

      return `
    <div class="couplets-set-format">
          <span class="couplets-no">${id}.</span>
          <div class="couplets-name">
            <p class="couplets"><span class="tamil-small">${title_tam}</span>  /  ${title_eng}</p>
          </div>
        </div>
    `;
    })
    .join("");

  // Select elements AFTER insertion
  const coupletsShow = document.querySelectorAll(".couplets-set-format");

  // Attach event listeners
  coupletsShow.forEach((element, i) => {
    element.addEventListener("click", () => {
      coupletsShow.forEach((value) => {
        return value.classList.remove("active");
      });
      console.log(element.classList);
      element.classList.add("active");

      displayItems(items);

      switch (coupletPost[i]) {
        case 1:
          coupletLimit = 0;
          break;
        case 2:
          coupletLimit = 10;
          break;
        case 3:
          coupletLimit = 20;
          break;
        case 4:
          coupletLimit = 30;
          break;
        case 5:
          coupletLimit = 40;
          break;
        case 6:
          coupletLimit = 50;
          break;
        case 7:
          coupletLimit = 60;
          break;
        case 8:
          coupletLimit = 70;
          break;
        case 9:
          coupletLimit = 80;
          break;
        case 10:
          coupletLimit = 90;
          break;
        case 11:
          coupletLimit = 100;
          break;
        case 12:
          coupletLimit = 110;
          break;
        case 13:
          coupletLimit = 120;
          break;
        case 14:
          coupletLimit = 130;
          break;
        case 15:
          coupletLimit = 140;
          break;
        case 16:
          coupletLimit = 150;
          break;
        case 17:
          coupletLimit = 160;
          break;
        case 18:
          coupletLimit = 170;
          break;
        case 19:
          coupletLimit = 180;
          break;
        case 20:
          coupletLimit = 190;
          break;
        case 21:
          coupletLimit = 200;
          break;
        case 22:
          coupletLimit = 210;
          break;
        case 23:
          coupletLimit = 220;
          break;
        case 24:
          coupletLimit = 230;
          break;
        case 25:
          coupletLimit = 240;
          break;
        case 26:
          coupletLimit = 250;
          break;
        case 27:
          coupletLimit = 260;
          break;
        case 28:
          coupletLimit = 270;
          break;
        case 29:
          coupletLimit = 280;
          break;
        case 30:
          coupletLimit = 290;
          break;
        case 31:
          coupletLimit = 300;
          break;
        case 32:
          coupletLimit = 310;
          break;
        case 33:
          coupletLimit = 320;
          break;
        case 34:
          coupletLimit = 330;
          break;
        case 35:
          coupletLimit = 340;
          break;
        case 36:
          coupletLimit = 350;
          break;
        case 37:
          coupletLimit = 360;
          break;
        case 38:
          coupletLimit = 370;
          break;
        case 39:
          coupletLimit = 380;
          break;
        case 40:
          coupletLimit = 390;
          break;
        case 41:
          coupletLimit = 400;
          break;
        case 42:
          coupletLimit = 410;
          break;
        case 43:
          coupletLimit = 420;
          break;
        case 44:
          coupletLimit = 430;
          break;
        case 45:
          coupletLimit = 440;
          break;
        case 46:
          coupletLimit = 450;
          break;
        case 47:
          coupletLimit = 460;
          break;
        case 48:
          coupletLimit = 470;
          break;
        case 49:
          coupletLimit = 480;
          break;
        case 50:
          coupletLimit = 490;
          break;
        case 51:
          coupletLimit = 500;
          break;
        case 52:
          coupletLimit = 510;
          break;
        case 53:
          coupletLimit = 520;
          break;
        case 54:
          coupletLimit = 530;
          break;
        case 55:
          coupletLimit = 540;
          break;
        case 56:
          coupletLimit = 550;
          break;
        case 57:
          coupletLimit = 560;
          break;
        case 58:
          coupletLimit = 570;
          break;
        case 59:
          coupletLimit = 580;
          break;
        case 60:
          coupletLimit = 590;
          break;
        case 61:
          coupletLimit = 600;
          break;
        case 62:
          coupletLimit = 610;
          break;
        case 63:
          coupletLimit = 620;
          break;
        case 64:
          coupletLimit = 630;
          break;
        case 65:
          coupletLimit = 640;
          break;
        case 66:
          coupletLimit = 650;
          break;
        case 67:
          coupletLimit = 660;
          break;
        case 68:
          coupletLimit = 670;
          break;
        case 69:
          coupletLimit = 680;
          break;
        case 70:
          coupletLimit = 690;
          break;
        case 71:
          coupletLimit = 700;
          break;
        case 72:
          coupletLimit = 710;
          break;
        case 73:
          coupletLimit = 720;
          break;
        case 74:
          coupletLimit = 730;
          break;
        case 75:
          coupletLimit = 740;
          break;
        case 76:
          coupletLimit = 750;
          break;
        case 77:
          coupletLimit = 760;
          break;
        case 78:
          coupletLimit = 770;
          break;
        case 79:
          coupletLimit = 780;
          break;
        case 80:
          coupletLimit = 790;
          break;
        case 81:
          coupletLimit = 800;
          break;
        case 82:
          coupletLimit = 810;
          break;
        case 83:
          coupletLimit = 820;
          break;
        case 84:
          coupletLimit = 830;
          break;
        case 85:
          coupletLimit = 840;
          break;
        case 86:
          coupletLimit = 850;
          break;
        case 87:
          coupletLimit = 860;
          break;
        case 88:
          coupletLimit = 870;
          break;
        case 89:
          coupletLimit = 880;
          break;
        case 90:
          coupletLimit = 890;
          break;
        case 91:
          coupletLimit = 900;
          break;
        case 92:
          coupletLimit = 910;
          break;
        case 93:
          coupletLimit = 920;
          break;
        case 94:
          coupletLimit = 930;
          break;
        case 95:
          coupletLimit = 940;
          break;
        case 96:
          coupletLimit = 950;
          break;
        case 97:
          coupletLimit = 960;
          break;
        case 98:
          coupletLimit = 970;
          break;
        case 99:
          coupletLimit = 980;
          break;
        case 100:
          coupletLimit = 990;
          break;
        case 101:
          coupletLimit = 1000;
          break;
        case 102:
          coupletLimit = 1010;
          break;
        case 103:
          coupletLimit = 1020;
          break;
        case 104:
          coupletLimit = 1030;
          break;
        case 105:
          coupletLimit = 1040;
          break;
        case 106:
          coupletLimit = 1050;
          break;
        case 107:
          coupletLimit = 1060;
          break;
        case 108:
          coupletLimit = 1070;
          break;
        case 109:
          coupletLimit = 1080;
          break;
        case 110:
          coupletLimit = 1090;
          break;
        case 111:
          coupletLimit = 1100;
          break;
        case 112:
          coupletLimit = 1110;
          break;
        case 113:
          coupletLimit = 1120;
          break;
        case 114:
          coupletLimit = 1130;
          break;
        case 115:
          coupletLimit = 1140;
          break;
        case 116:
          coupletLimit = 1150;
          break;
        case 117:
          coupletLimit = 1160;
          break;
        case 118:
          coupletLimit = 1170;
          break;
        case 119:
          coupletLimit = 1180;
          break;
        case 120:
          coupletLimit = 1190;
          break;
        case 121:
          coupletLimit = 1200;
          break;
        case 122:
          coupletLimit = 1210;
          break;
        case 123:
          coupletLimit = 1220;
          break;
        case 124:
          coupletLimit = 1230;
          break;
        case 125:
          coupletLimit = 1240;
          break;
        case 126:
          coupletLimit = 1250;
          break;
        case 127:
          coupletLimit = 1260;
          break;
        case 128:
          coupletLimit = 1270;
          break;
        case 129:
          coupletLimit = 1280;
          break;
        case 130:
          coupletLimit = 1290;
          break;
        case 131:
          coupletLimit = 1300;
          break;
        case 132:
          coupletLimit = 1310;
          break;
        case 133:
          coupletLimit = 1320;
          break;
      }

      kuralfun();
    });
  });
};

// SEARCH BAR FOR KURAL CONTAINER //

const kuralInput = document.querySelector("#kural-search-bar");
const kuralResBox = document.querySelector(".kural-result-box");

kuralInput.addEventListener("keyup", (e) => {
  kuralResBox.classList.remove("hide");
  kuralResBox.classList.add("show");

  kuralResBox.classList.add("animate__fadeIn");
  kuralResBox.classList.remove("animate__fadeOut");

  // CANCEL
  body.addEventListener("click", () => {
    kuralResBox.classList.add("animate__fadeOut");
    kuralResBox.classList.remove("animate__fadeIn");
    // kuralResBox.classList.add("hide");
    kuralResBox.classList.remove("show");
    // searchDownArr.classList.add("couplets-search-type")
  });
  // END - CANCEL

  fetch("./kural.json")
    .then((res) => res.json())
    .then((data) => {
      const kural = data[0].thirukkural;
      const kuralData = [...new Set(kural.map((kuralMean) => kuralMean))];

      kuralInput.addEventListener("keyup", (e) => {
        let searchData = e.target.value;
        let filterData = kuralData.filter((couplets) => {
          if (coupletsFilter === "english") {
            return couplets.english_1
              .toLowerCase()
              .includes(searchData.toLowerCase());
          }

          if (coupletsFilter === "tamil") {
            return couplets.tamil_1.includes(searchData);
          }
          if (coupletsFilter === "number") {
            return String(couplets.id).includes(searchData);
          }
        });

        console.log(filterData);

        KuralPost = [];
        displayKural(filterData);
        const showKural = document.querySelectorAll(".result-format");

        showKural.forEach((element, index) => {
          element.addEventListener("click", () => {
            meaning(filterData[index]);
          });
        });
      });
    });
});

const displayKural = (kural) => {
  kuralResBox.innerHTML = kural
    .map((kural) => {
      let { id, english_1, english_2, tamil_1, tamil_2 } = kural;
      KuralPost.push(id);

      return `
          <div class="result-format">
              <span class="kural-no">${id}.</span>
              <div class="kural-pack">
                  <div>
                    <p class="kural-line-1 tamil-small">
                    ${tamil_1}
                    </p>
                    <p class="kural-line-2 tamil-small">
                    ${tamil_2}.
                    </p>
                  </div>

                  <div>
                    <p class="kural-eng">${english_1}</p>
                    <p class="kural-eng">${english_2}</p>
                  </div>
              </div>
          </div>
          `;
    })
    .join("");
};
