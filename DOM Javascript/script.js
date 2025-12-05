function getContentById() {
    var element = document.getElementById('c1');
    console.log("By ID:", element.innerText);
    return element;
}

function getContentByClassName() {
    var elements = document.getElementsByClassName("content");
    console.log("By Class:");

    // Loop all elements
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].innerText);
    }

    return elements;
}

function getContentByTagName() {
    var elements = document.getElementsByTagName("div");
    console.log("By Tag Name:");

    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].innerText);
    }

    return elements;
}
getContentByTagName()