const result = [];

const ul_0 = document.querySelector(".opener");
const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");
const ul_4 = document.querySelector(".option4");
const ul_5 = document.querySelector(".option5");
const ul_6 = document.querySelector(".option6");
const ul_7 = document.querySelector(".option7");
const ul_8 = document.querySelector(".option8");
const ul_9 = document.querySelector(".option9");
const ul_10 = document.querySelector(".option10");
const ul_11 = document.querySelector(".option11");

const q0 = document.querySelector(".q0");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const q6 = document.querySelector(".q6");
const q7 = document.querySelector(".q7");
const q8 = document.querySelector(".q8");
const q9 = document.querySelector(".q9");
const q10 = document.querySelector(".q10");
const q11 = document.querySelector(".q11");


const c1 = document.querySelectorAll(".c1");
const c2 = document.querySelectorAll(".c2");
const c3 = document.querySelectorAll(".c3");
const c4 = document.querySelectorAll(".c4");
const c5 = document.querySelectorAll(".c5");
const c6 = document.querySelectorAll(".c6");
const c7 = document.querySelectorAll(".c7");
const c8 = document.querySelectorAll(".c8");

const survey = document.querySelector(".survey");
const end = document.querySelector(".end");

// When choose option1
c1.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(0);
})
})

c2.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(1);
})
})

c3.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(2);
})
})

c4.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(3);
})
})

c5.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(4);
})
})

c6.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(5);
})
})

c7.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(6);
})
})

c8.forEach( choice => {
    choice.addEventListener("click", function () {
    result.push(7);
})
})


// Question 0
ul_0.addEventListener("click",function () {
    q0.style.display = "none";
    q1.style.display = "block";
});
// Question 1
ul_1.addEventListener("click",function () {
    q1.style.display = "none";
    q2.style.display = "block";
});

// Question 2
ul_2.addEventListener("click",function () {
    q2.style.display = "none" ;
    q3.style.display = "block" ;
});

// Question 3
ul_3.addEventListener("click",function () {
    q3.style.display = "none" ;
    q4.style.display = "block" ;
});

// Question 4
ul_4.addEventListener("click",function () {
    q4.style.display = "none";
    q5.style.display = "block";
});

// Question 5
ul_5.addEventListener("click",function () {
    q5.style.display = "none" ;
    q6.style.display = "block" ;
});

// Question 6
ul_6.addEventListener("click",function () {
    q6.style.display = "none" ;
    q7.style.display = "block" ;
});

// Question 7
ul_7.addEventListener("click",function () {
    q7.style.display = "none";
    q8.style.display = "block";
});

// Question 8
ul_8.addEventListener("click",function () {
    q8.style.display = "none" ;
    q9.style.display = "block" ;
});

// Question 9
ul_9.addEventListener("click",function () {
    q9.style.display = "none" ;
    q10.style.display = "block" ;
});

// Question 10
ul_10.addEventListener("click",function () {
    q10.style.display = "none" ;
    q11.style.display = "block" ;
});
// Question 11
ul_11.addEventListener("click",function () {
    q11.style.display = "none" ;
    survey.style.display = "none";
    end.style.display = "block";
    //console.log(result);
});


