// Current date in Footer.. //
// const year = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// year.textContent = currentYear;

// End //

// BATCH ONCLICK //

let coupletsFilter = "english"


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

// console.log(coupletsSearch, resultBox);

// coupletsSearch.onkeyup = function () {
//   let result = [];
//   let input = input.value.toLowerCase();
// };

const coupletSearch = document.querySelector('#couplets-search-bar');
const coupletSearchBox = document.querySelector('.couplets-result-box')
const coupletBoxDiv = document.querySelector('.couplets-result-box')
const coupletBoxClick = document.querySelector('.couplets-result-box ul li')

coupletSearch.onkeyup = function(){

fetch('./couplets.json')
.then((key)=>key.json())
.then((data)=>{
  let searchData = data[0].couplets;
  console.log(searchData);


let input = coupletSearch.value;
let result = []

if(input.length){
  result = searchData.filter((keyword)=>{

  if(coupletsFilter === "number"){

  return String(keyword.id).includes(input)
  }else if(coupletsFilter === "english"){
  return keyword.title_eng.toLowerCase().includes(input.toLowerCase())
  }
  else if(coupletsFilter === "tamil"){
    return keyword.title_tam.includes(input) 
  }
  })

  console.log(result);

  // console.log(`${result[0].title_eng} / ${result.title_tam}`);

let content = result.map((details)=>{
    return `
    <li onclick="selectInput(this)+kuralfun()"> ${details.id}. ${details.title_eng} / ${details.title_tam} </li>`
  })

  coupletBoxDiv.innerHTML = `<ul> ${content.join('')} </ul>`

}

 
console.log(input);

coupletSearchBox.classList.add("couplets-result-box-show")

document.body.addEventListener('click', () => {
  const coupletBoxClick = document.querySelector(".couplets-result-box-show");
  const coupDownArr = document.querySelector(".couplets-down-arrow") 
  if (coupletBoxClick) {
    coupletBoxClick.classList.remove("couplets-result-box-show");
  }
  else if(coupDownArr){
    searchDownArr.classList.remove("couplets-search-type-show")
  }
});

})
}

function selectInput(details){
  coupletSearch.value = details.innerHTML;
  
}

const coupDownArr = document.querySelector(".couplets-down-arrow") 

const searchDownArr = document.querySelector(".couplets-search-type") 

const coupFilterNo = document.querySelector(".filter-no") 
const coupFilterTam = document.querySelector(".filter-tam") 
const coupFilterEng = document.querySelector(".filter-eng") 

coupDownArr.addEventListener('click',()=>{
     searchDownArr.classList.toggle("couplets-search-type-show")
})

coupFilterNo.addEventListener('click',()=>{
  coupletsFilter = "number"
  searchDownArr.classList.remove("couplets-search-type-show")
})

coupFilterTam.addEventListener('click',()=>{
  coupletsFilter = "tamil"
  searchDownArr.classList.remove("couplets-search-type-show")
})

coupFilterEng.addEventListener('click',()=>{
  coupletsFilter = "english"
  searchDownArr.classList.remove("couplets-search-type-show")
})