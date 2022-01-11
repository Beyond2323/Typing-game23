const quotes = [
    {name: "Reach out for me and hold me tight. Hold that memory. Let my machine talk to me, let my machine talk to me. This is my world and I am world leader pretend. This is my life and this is my time. I have been given the freedom to do as I see fit. It's high time I've raised the walls that I've constructed.", title:"You just typed a quote from the song:", header:"World Leader Pretend", by:"by R.E.M."},
    {name: "I mind how once we lay such a transparent summer morning, how you settled your head athwart my hips and gently turn'd over upon me, and parted the shirt from my bosom-bone, and plunged your tongue to my bare-stript heart, and reach'd till you felt my beard, and reach'd till you held my feet.", title:"You just typed a quote from the book:", header:"Leaves of Grass", by:"by Walt Whitman"},
    {name: "The thing under my bed waiting to grab my ankle isn't real. I know that, and I also know that if I'm careful to keep my foot under the covers, it will never be able to grab my ankle.", title:"You just typed a quote from the book:", header:"Gravey Shift and Other Stories From N.S", by:"by Stephen King(submitted by foggy)"},
    {name: "If the aliens came down today, what would they think, what would they say? Would they like what we've done with the place, would they tell us the secrets of the human race? What is a war, why does it start, why build a planet just to tear it apart?", title:"You just typed a quote from the song:", header:"Aliens", by:"by Alaska and Jeremy(submitted by lersrayce)"},
    {name: "The essential and defining characteristic of childhood is not the effortless merging of dream and reality, but only alienation. There are no words for childhood's dark turns and exhalations. A wise child recognizes it and submits to the necessary consequences. A child who counts the cost is a child no longer.", title:"You just typed a quote from the book:", header:"Salem'sLot", by:"by Stephen King(submitted by foggy)"},
    {name:"What you do as soon as you get up can underpin and affect your mood for the entire day. Therefore it is important to approach the day gently, without a sense of worry, tension or rush. Also, you need to start off by making sure your body is happy and comfortable, otherwise feel ill all day.", title:"You just typed a quote from the book:", header:"The Happiness Handbook", by:"by Ruth Vlydesdale(submitted by typer332)"},
    {name:"We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.", title:"You just typed a quote from the book:", header:"The Handmaid's Tale", by:"by Margaret Atwood(submitted by typeracerplays)"}
]

const splitTag = document.querySelector(".split")
const checkTag = document.querySelector(".check")
const activeTag = document.querySelector(".active")
const mistakeTag = document.querySelector(".mistakes")
const timeTag = document.querySelector(".time")
const botTag = document.querySelector(".bot")
const wpmTag = document.querySelector(".wpm")
const cpmTag = document.querySelector(".cpm")
const secondcontainerTag = document.querySelector(".secondcontainer")
const containerTag = document.querySelector(".container")
const scoreTag = document.querySelector(".score")
const aaTag = document.querySelector(".aa")
const bbTag = document.querySelector(".bb")
const ccTag = document.querySelector(".cc")
const toyTag = document.querySelector(".toy")
const wordTag = document.querySelector(".word")
const refrenceTag = document.querySelector(".refrence")
const refrence1Tag = document.querySelector(".refrence1")



const funs = () => {
    splitTag.innerHTML = "";
    const randomQuotes = Math.floor(Math.random() * quotes.length);
    let randomgg = quotes[randomQuotes]
    wordTag.textContent = randomgg.title;
    refrenceTag.textContent = randomgg.header;
    refrence1Tag.textContent = randomgg.by
    randomgg.name.split("").forEach((spans) => {
        const news = `<span id="1">${spans}</span>`
        splitTag.innerHTML += news;
    })
    splitTag.querySelectorAll("span")[0].classList.add("active")
}
document.addEventListener("keydown", () => checkTag.focus())
splitTag.addEventListener("click", () => checkTag.focus())

let index = 0;
let mistake = typing = 0;
let time = 00;
let minute = 5;
let second = 59;
let currnettime = 0;
let wpmresult = 0;
let minutes = 0
let seconds = 0
let wpms = 0;
let cpms = 0;
let maxtime = 359;
let timeLeft = maxtime;
let taketime = 0;
let fuck = 0;

const element = () => {
    minutes = minute < 10? "0" + minute.toString(): minute;
    seconds = second < 10? "0" + second.toString(): second;
    second -= 1;
    timeLeft--;
    if (second === 0) {
        second = 60;
        minute -= 1;
    }
    if (minute === -1 && second === 60) {
        minutes = 0 + "0";
        seconds = 0 + "0";
      clearInterval(classic)
     let  taketimes = "Fail"
      console.log(taketime)
      secondcontainerTag.style.transform = "scale(1)"
      secondcontainerTag.classList.add("animation")
      scoreTag.textContent = wpms;
      aaTag.textContent = taketimes;
      bbTag.textContent = cpms;
      ccTag.textContent = mistake;
    }
    timeTag.textContent = minutes + ":" + seconds
}
 let classic = 0;
const count = () => {
 classic = setInterval(element , 1000);
}
const funs2 = () => {
        const checkValue = checkTag.value.split("");
        let checkspan = splitTag.querySelectorAll("span");
        let spanlength = splitTag.querySelectorAll("span").length - 1;
        if (!typing) {
            count()
            typing = true;
        }
        checkspan[index].classList.remove("active")
        if(checkValue[index] == null) {
            index--;
            if(checkspan[index].classList.contains("incorrect")) {
                mistake--;
                mistakeTag.innerText = mistake;
            }
            checkspan[index].classList.remove("correct", "incorrect")
            checkspan[index].classList.add("active")
            cpmTag.textContent = index - mistake;
        } else {
            if(checkValue[index] == checkspan[index].innerText) {
                checkspan[index].classList.add("correct")
            } else {
                checkspan[index].classList.add("incorrect")
                mistake++;
                mistakeTag.innerText = mistake;
            }
            index++;
            wpms = Math.round((((index - mistake) / 5) / (maxtime - timeLeft)) * 60)
            wpms = wpms < 0 || wpms === Infinity || !wpms ? 0 : wpms;
           wpmTag.innerText = wpms
            cpms = index - mistake
            cpmTag.textContent = cpms;
            try {
                checkspan[index].classList.add("active")
            } catch (error) {
                clearInterval(classic);
                /*show time*/
                taketime = (5 - minute) + ":" + (60 - seconds)
                console.log(taketime)
                secondcontainerTag.style.transform = "scale(1)"
                secondcontainerTag.classList.add("animation")
                scoreTag.textContent = wpms;
                aaTag.textContent = taketime;
                bbTag.textContent = cpms;
                ccTag.textContent = mistake;
            }
        }
}
botTag.addEventListener("click", () => {
    console.log("hi")
    clearInterval(classic);
    minutes = minute < 10? "0" + minute.toString(): minute;
    seconds = second < 10? "0" + second.toString(): second;
    minute = 5;
    second = 59;
    minutes = "0" + 6;
    seconds = "0" + 0;
     currnettime = minutes + ":" + seconds
    timeTag.textContent = currnettime
    cpmTag.innerText = 0;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;  
    index = 0
    mistake = 0;
    wpms = 0;
    cpms = 0;
    timeLeft = 359;
    typing = false;
    checkTag.value = "";
    splitTag.querySelectorAll("span").forEach((del) => {
        del.classList.remove("correct", "incorrect", "active")
    })
    funs()
})

toyTag.addEventListener("click", () => {
    secondcontainerTag.style.transform = "scale(0)"
})


funs()
checkTag.addEventListener("input", funs2)


