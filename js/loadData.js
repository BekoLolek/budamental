document.addEventListener("DOMContentLoaded", function () {
    fetch('/json/people.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('team-container');
            var count = 1;
            data.forEach((person, index) => {

                
                var order_name = 1;
                var order_img = 2;
                if(count%2 == 1){
                    order_name= 1;
                    order_img = 2;
                }else{
                    order_name= 2;
                    order_img = 1;
                }

                const memberHTML = `
                    <div class="team-member row">

    <!-- NAME -->
    <div class="col-lg-12 order-lg-1 member-name">
        <h2>${person.name}</h2>
    </div>

    <!-- IMAGE -->
    <div class="col-lg-6 order-lg-2 text-center member-image">
        <img src="${person.image}" class="img-fluid" alt="${person.name}">
    </div>

    <!-- DESCRIPTION -->
    <div id="${person.contact.email}_desc_id" style="display:none;" class="col-lg-12 order-lg-3 team-text member-desc">
        <p>${person.description}</p>
    </div>

    <!-- BUTTON -->
    <div class="col-lg-12 order-lg-4 member-spec">
        <ul>
            ${person.specializations.map(spec => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="button-container">
            <img src="/img/site/buttonbuborek.png" alt="bubi">
            <button class="member-button" onclick='
                var x = document.getElementById("${person.contact.email}_desc_id");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            '>${person.buttonText}</button>
        </div>
    </div>

    <!-- AVAILABILITY -->
    <div class="col-lg-6 order-lg-5 member-time">
        <p class="member-set-text">Rendelési idő:<br> 
            <span class="member-unset-text">${person.availability}</span>
        </p>
    </div>

    <!-- CONTACT -->
    <div class="col-lg-6 order-lg-6 member-contact">
        <p class="member-set-text">Elérhetőségek:</p>
        <p class="member-unset-text">${person.contact.phone}<br>${person.contact.email}</p>
    </div>

</div>
                    
                `;
                count++;
                // Append the created HTML to the container
                container.innerHTML += memberHTML;
            });
        })
        .catch(error => console.error('Error fetching JSON data:', error));
});
