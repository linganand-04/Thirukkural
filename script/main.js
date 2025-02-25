// Current date in Footer.. //
// const year = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// year.textContent = currentYear;

// End //

// BATCH ONCLICK //

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
let limit = 0;
const couplets = document.querySelector(".couplets-sets");

fetch("./couplets.json")
  .then((res) => res.json())
  .then((data) => {
    const athikaram = data[0].couplets;

    athikaram.forEach((post, i) => {
      couplets.insertAdjacentHTML(
        "beforeend",
        `

        <div class="couplets-set-format">
      
        <span class="couplets-no">${post.id}.</span>
          <div class="couplets-name">
            <p class="couplets"><span class="tamil-small">${post.title_tam}</span> / ${post.title_eng}</p>
          </div>
       
        </div>
        `
      );
      const coupletsShow = document.querySelectorAll(".couplets-set-format");
      coupletsShow[i].addEventListener("click", () => {
        if (post.id === 1) {
          limit = 0;
          kuralfun();
        }

        if (post.id === 2) {
          limit = 10;
          console.log(limit);
          kuralfun();
        }
        if (post.id === 3) {
          limit = 20;
          console.log(limit);
          kuralfun();
        }
      });
    });
  });

// <-- END --> //

// <-- SHOW KURAL --> //

let kural = document.querySelector(".kural-def");

function kuralfun() {
  fetch("./kural.json")
    .then((res) => res.json())
    .then((data) => {
      const thirukkural = data[0].thirukkural;
      kural.remove();
      if (limit > 0) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "kural-def");

        document.querySelector(".kural-container-inner").prepend(newDiv);
        kural = newDiv;
      } else {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "kural-def");

        document.querySelector(".kural-container-inner").prepend(newDiv);
        kural = newDiv;
      }

      for (let i = 0; i < 10; i++) {
        kural.insertAdjacentHTML(
          "beforeend",
          `
        <div class="kural-sets">
          <span class="kural-no">${thirukkural[i + limit].kural}</span>
          <div class="kural-pack">
            <div>
              <p class="kural-line-1 tamil-small">${
                thirukkural[i + limit].tamil_1
              }</p>
              <p class="kural-line-2 tamil-small">${
                thirukkural[i + limit].tamil_2
              }.</p>
            </div>
            <p class="kural-eng">${thirukkural[i + limit].english}</p>
          </div>
        </div>
        `
        );

        // kural-meaning.insertAdjentHTML
      }
    })
    .catch((err) => console.log(err));
}

kuralfun();
