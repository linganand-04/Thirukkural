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
    .querySelector(".heading")
    .classList.toggle("sticky-heading", window.scrollY > 0);
});

/////////// ***** END ***** ////////////

const couplets = document.querySelector(".couplets-sets");

fetch("./couplets.json")
  .then((res) => res.json())
  .then((data) => {
    const athikaram = data[0].couplets;

    athikaram.forEach((post) => {
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
    });
  });

// <-- END --> //

// <-- SHOW KURAL --> //

const coupletsShow = document.querySelectorAll(".couplets-set-format");

coupletsShow.forEach(() => {
  addEventListener("click", () => {
    showKural();
  });
});

function showKural() {
  console.log("Hii");
}

const kural = document.querySelector(".kural-def");

fetch("./kural.json")
  .then((res) => res.json())
  .then((data) => {
    const thirukkural = data[0].thirukkural;

    thirukkural.forEach((post) => {
      kural.insertAdjacentHTML(
        "beforeend",
        `
        <div class="kural-sets">
          <span class="kural-no">${post.kural}</span>
          <div class="kural-pack">
            <div>
              <p class="kural-line-1 tamil-small">${post.tamil_1}</p>
              <p class="kural-line-2 tamil-small">${post.tamil_2}.</p>
            </div>
            <p class="kural-eng">${post.english}</p>
          </div>
        </div>
        `
      );
    });
  });
