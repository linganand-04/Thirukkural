let limit = 0;
let posts = [];

fetch("./couplets.json")
  .then((res) => res.json())
  .then((data) => {
    const athikaram = data[0].couplets;
    const couplets = document.querySelector(".couplets-sets");
    // Insert all couplets
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
      posts.push(post.id);
    });

    // Select elements AFTER insertion
    const coupletsShow = document.querySelectorAll(".couplets-set-format");

    // Attach event listeners
    coupletsShow.forEach((element, i) => {
      element.addEventListener("click", () => {
        coupletsShow.forEach((value) => value.classList.remove("active"));
        element.classList.add("active");

        if (posts[i] === 1) {
          limit = 0;
          kuralfun();
        }
        if (posts[i] === 2) {
          limit = 10;
          kuralfun();
        }
        if (posts[i] === 3) {
          limit = 20;
          kuralfun();
        }
        if (posts[i] === 4) {
          limit = 30;
          kuralfun();
        }
      });
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// <-- END --> //

// <--********** SHOW KURAL **********--> //

let kural = document.querySelector(".kural-def");
let kurMean = document.querySelector(".kural-meaning");

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

        // <!-- ************ SHOW KURAL MEANING ************ --> //

        const kuralset = document.querySelectorAll(".kural-sets");
        kuralset[i].addEventListener("click", () => {
          console.log(thirukkural[i].tamil_1);

          kurMean.remove();

          let newDiv = document.createElement("div");
          newDiv.setAttribute("class", "kural-meaning");

          document.querySelector(".kural-container-inner").append(newDiv);
          kurMean = newDiv;

          kurMean.insertAdjacentHTML(
            "beforeend",
            `<div class="kural-tamil">
                <p class="kural-heading tamil-large">தமிழ்</p>
                <div class="quote-tam">
                  <p class="kural-line-1 tamil-medium">
                    ${thirukkural[i + limit].tamil_1}
                  </p>
                  <p class="kural-line-2 tamil-medium">${
                    thirukkural[i + limit].tamil_2
                  }
                  .</p>
                </div>

                <div class="meaning">
                  <p class="tamil-medium">
                    ${thirukkural[i + limit].tam_meaning}.
                  </p>
                </div>
              </div>

              <div class="kural-english">
                <p class="kural-heading">English</p>
                <div class="quote-eng">
                  <p>
                  ${thirukkural[i + limit].english}
                  </p>
                </div>

                <div class="meaning">
                  <p class="meaning-eng">
                  ${thirukkural[i + limit].eng_meaning}
                  </p>
                </div>
              </div>`
          );
          console.log(newDiv);
        });
      }
    })
    .catch((err) => console.log(err));
}

kuralfun();
