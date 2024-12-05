// dropped a hello world component in aem page (sites)
// created a js file in client lib (the code here is that file only)
// what is happening ? 1. used the class of hello world called "cmp-helloworld" to display things 

document.addEventListener("DOMContentLoaded", () => {
    
    const helloWorldComponent = document.querySelector(".cmp-helloworld");

 
    if (helloWorldComponent) {

        helloWorldComponent.textContent = "Hello from mugdha"; 
    } else {
        console.error("Hello World component (.cmp-helloworld) not found!");
    }
});
