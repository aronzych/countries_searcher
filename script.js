const endpoint = 'https://restcountries.eu/rest/v2/all';

const countries = [];

fetch(endpoint)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        countries.push(...response)
    })

function findCountries(search, countries) {
    return countries.filter(country => {
        const regex = new RegExp(search, 'gi');
        return country.name.match(regex);
    })
}

function displayCountries() {
    console.log(this.value);
    const filtered = findCountries(this.value, countries);
    const filteredNames = filtered.map(item => {
        const regex = new RegExp(this.value, 'gi');
        // const countryName = item.name.replace(regex, `<span class='bold'>${this.value}</span>`)
        const countryName = item.name.replace(regex, function (x) {
            return `<span class="bold">${x}</span>`;
        });
        return `<li><span class="name">${countryName}</span></li>`;
    });
    results.innerHTML = filteredNames.join('');
}

const input = document.querySelector("input");
const results = document.querySelector(".results");

input.addEventListener("change", displayCountries);
input.addEventListener("keyup", displayCountries);