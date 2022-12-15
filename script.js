const container = document.querySelector(".container");

class countries {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint, {
      method: "get",
    }).then((response) => response.json());
  }
}

const API = new countries("https://restcountries.com/v3.1");

const allCountries = () => {
  API.get("/all").then((data) =>
    data.forEach((name) => {
      const countryCard = `
      <div class="country-card">
        <div class="country-flag">
          <img id="flag" src=${name.flags.png} alt="" class="img-flag" />
        </div>
        <div class="country-desc">
          <h2 class="country-name">${name.name.common}</h2>
          <p><b>Population:</b> <span class="population">${name.population}</span></p>
          <p><b>Region:</b> <span class="region">${name.region}</span></p>
          <p><b>Capital:</b> <span class="capital">${name.capital?.[0]}</span></p>
        </div>
      </div>
      
      `;
      container.insertAdjacentHTML("afterbegin", countryCard);
    })
  );
};

allCountries();
