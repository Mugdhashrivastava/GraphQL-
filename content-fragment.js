// dropped a hello world component in aem page (sites)
// created a js file in client lib (the code here is that file only)
// what is happening ? 1. used the class of hello world called "cmp-helloworld" to display things 
// dropped a component called form-container to create dropdown in aem with options called customer and dealer (we are creating journey of dealer and customer of car selling management system)
// now I am printing the same data that I printed earlier but only when we select option dealer in dropdown

document.addEventListener("DOMContentLoaded", () => {
    
    const dropdown = document.getElementById("form-options-168105810");
    const helloWorldComponent = document.querySelector(".cmp-helloworld");

    if (!dropdown) {
        console.error("Dropdown with ID 'form-options-168105810' not found!");
        return;
    }

    if (!helloWorldComponent) {
        console.error("Hello World component (.cmp-helloworld) not found!");
        return;
    }


    dropdown.addEventListener("change", (event) => {
        const selectedValue = event.target.value;


        if (selectedValue === "Dealer") {
            helloWorldComponent.textContent = "Hello Dealer!";
        } else {
            helloWorldComponent.textContent = ""; 
        }
    });
});

