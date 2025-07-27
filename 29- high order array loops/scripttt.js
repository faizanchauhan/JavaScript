// for each loop

const coding = ["Js", "ruby", "java", "python", "cpp"]

coding.forEach(function(ahahah) {
    // console.log(ahahah);
})

// arrow function

coding.forEach((oyai) => {
    // console.log(oyai);
})

//function whole
function PrintMe(itemm) {
    // console.log(itemm);
}

// coding.forEach(PrintMe)

coding.forEach((oyai, index, array) => {
    // console.log(oyai, index, array);
})

//object inside of array

const myCoding = [{
        languageName: "javaScript",
        languagefileName: "Js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);

})