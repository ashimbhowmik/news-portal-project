const loadNews = async (search, dataLimit) => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data.news_category, dataLimit);
    }
    catch {

    }
}

const displayNews = (allNews, dataLimit) => {

    // console.log(allNews);
    const newsShows = document.getElementById('news-container');
    allNews.forEach(news => {
        console.log(news);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${news.category_name} </h3>
        <button onclick="loadCountryDetail('${news.category_id}')">Details</button>
        `;
        newsShows.appendChild(countryDiv);
    });

}

const loadCountryDetail = (category_id) => {
    // https://restcountries.com/v3.1/alpha/{code}
    console.log('helo', category_id);

    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    console.log(url);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayCountryDetails(data.data[0]))
}

// const displayCountryDetails = country => {
//     console.log(country);
// const countryDetail = document.getElementById('country-detail');
// countryDetail.innerHTML = `
// <h2>Details: ${country.name.common}</h2>
// <img src="${country.flags.png}">
// `;
// countryDetail.appendChild()

// }
// loadCountryDetail();

// const loadNewsDetails = async category_id => {
//     const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhoneDetails(data.data);
// }

// const displayPhoneDetails = idNumber => {
//     console.log(idNumber);
//     const newsShows = document.getElementById('news-container');
//     const phoneDiv = document.createElement('div');
//     phoneDiv.innerHTML = `
//     <div class="col">
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${idNumber.total_view}</h5>
//             </div>
//         </div>
//     </div>
//     `;
//     newsShows.appendChild(phoneDiv);

// }
// loadNewsDetails();
loadNews();