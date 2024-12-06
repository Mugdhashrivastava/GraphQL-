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

   
    function createFields(dealerData) {
        //clear existing data
        helloWorldComponent.innerHTML = "";

        
        dealerData.forEach(({ fieldLabel, regex, type, errorMessage }) => {
            const fieldWrapper = document.createElement("div");

         
            fieldWrapper.innerHTML = `
                <label>${fieldLabel}</label>
                <input type="${type}" name="${fieldLabel}" pattern="${regex.slice(1, -1)}"/>
                <span style="display:none; color:red;">${errorMessage}</span>
            `;

            helloWorldComponent.appendChild(fieldWrapper);

            
            const input = fieldWrapper.querySelector("input");
            const errorSpan = fieldWrapper.querySelector("span");

            
            input.addEventListener("input", () => {
                const pattern = new RegExp(regex.slice(1, -1)); 
                const isValid = pattern.test(input.value);

               
                errorSpan.style.display = isValid ? "none" : "block";
            });
        });
    }


    //fetch api 
    async function fetchData() {
        try {
            const response = await fetch("http://192.168.29.217:4502/graphql/execute.json/aashiyana-redesign/testQuery");
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
          
            //storing api 
            const dealerData = data.data.dealerjourneycfmodalList.items[0].dealerfieldlist;

            //calling fn
            createFields(dealerData);
        } catch (error) {
            console.error("Error fetching API data:", error);
        }
    }

    // dropdown change
    dropdown.addEventListener("change", (event) => {
        const selectedValue = event.target.value;

    
        if (selectedValue === "Dealer") {
            fetchData(); 
        } else {
            helloWorldComponent.innerHTML = ""; // Clear content for other selections
        }
    });
});
