const list = document.querySelector("#app-list");
const submitBTN = document.querySelector("#submit");

async function getApps() {
    try {
    const apps = await axios.get('https://68a35b87c5a31eb7bb200569.mockapi.io/api/v1/APKMap')
    console.log(apps.data)  
    const myApps = apps.data;

    myApps.forEach(app => {
        const li = document.createElement("li");
        li.classList.add("app-item");
        li.innerHTML = `
            <img src="${app.cover}" alt="${app.name} icon" class="app-icon">
            <div class="app-info">
                <h3 class="app-name">${app.name}</h3>
                <p class="app-category">Category: ${app.category}</p>
                <p>Rating: ${app.stars}</p>
                <p>Downloads: ${app.download_count}</p>
            </div>
        `;
        list.appendChild(li);
    });


}
    catch (error) {
        console.error('Error fetching apps:', error);
}
}

async function addApp(event) {
    event.preventDefault();
    const newApp = {
        name: document.querySelector("#post-name").value,
        category: document.querySelector("#post-category").value,
        stars: document.querySelector("#post-stars").value,
        download_count: document.querySelector("#post-download_count").value,
        cover: document.querySelector("#post-cover").value
    };
    
    try {
        const response = await axios.post('https://68a35b87c5a31eb7bb200569.mockapi.io/api/v1/APKMap', newApp);
        getApps(); 
        // Reset form fields after successful submission
        document.getElementById('post-form').reset();
        Swal.fire({
            title: "New App Added!",
            icon: "success"
        });
    }
    catch (error) {
        console.error('Error adding app:', error);
    }
}


submitBTN.addEventListener("click", addApp);

getApps()

