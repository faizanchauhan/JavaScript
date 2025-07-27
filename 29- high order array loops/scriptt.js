// for in(perhaps for objects and more)

const myObj = {
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    console.log(programming[key]);
}