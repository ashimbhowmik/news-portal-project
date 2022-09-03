// navber design with js

const clickNewsCatagaroy = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data.news_category);
    }
    catch {

    }
}

const displayNews = (catagoryByNews) => {

    const newsContainer = document.getElementById('news-btn');

    const navberDiv = document.createElement('div');
    toggleSpinner(true);
    navberDiv.innerHTML = `
    <nav class="navbar bg-base-100">
        <div class="">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><button>Home</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[0].category_id}')">${catagoryByNews[0].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[1].category_id}')">${catagoryByNews[1].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[2].category_id}')">${catagoryByNews[2].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[3].category_id}')">${catagoryByNews[3].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[4].category_id}')">${catagoryByNews[4].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[5].category_id}')">${catagoryByNews[5].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[6].category_id}')">${catagoryByNews[6].category_name}</button></li>
                    <li><button onclick="showNewsCatagory('${catagoryByNews[7].category_id}')">${catagoryByNews[7].category_name}</button></li>
                </ul>
            </div>
        </div>
        <div class="w-full hidden lg:flex">
            <ul class="menu menu-horizontal p-0 lg:container lg:mx-auto">
                <li class="lg:mr-16"><button ">Home</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[0].category_id}')">${catagoryByNews[0].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[1].category_id}')">${catagoryByNews[1].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[2].category_id}')">${catagoryByNews[2].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[3].category_id}')">${catagoryByNews[3].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[4].category_id}')">${catagoryByNews[4].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[5].category_id}')">${catagoryByNews[5].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[6].category_id}')">${catagoryByNews[6].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="showNewsCatagory('${catagoryByNews[7].category_id}')">${catagoryByNews[7].category_name}</button></li>
                
            </ul>
        </div>
    </nav>
    `;
    newsContainer.appendChild(navberDiv);

}


const showNewsCatagory = async category_id => {
    toggleSpinner(true);
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    const sortByView = await data.data.sort((a, b) => b.total_view - a.total_view);
    displayNewsAll(sortByView);
}

const displayNewsAll = idNumber => {

    console.log(idNumber);

    const totalNewsFounded = document.getElementById('news-found');
    totalNewsFounded.innerText = idNumber.length;

    const newsShows = document.getElementById('news-container');
    newsShows.innerHTML = '';

    const noPhone = document.getElementById('no-found-message');
    if (idNumber.length > 0) {
        idNumber.forEach(news => {
            // console.log(news); 
            const newsDiv = document.createElement('div');
            newsDiv.innerHTML = `
            <div class="lg:flex py-4 px-4 mb-5 drop-shadow-xl">
                <div class="lg:w-3/12 w-full mb-4 lg:mb-0">
                    <figure><img class="w-full h-96" src="${news.thumbnail_url}" alt="Album"></figure>
                </div>
                <div class="lg:w-9/12 w-full lg:ml-4">
                    <h1 class="mb-4">${news.title}</h1>
                    <p class="h-48 mb-4 text-ellipsis overflow-hidden hidden lg:block">${news.details}</p>
                    <p class="mb-6 truncate  ">${news.details}</p>
                    <div class="card-actions lg:justify-between items-center mt-8 lg:mt-0 w-full">
                        <div class="flex mb-10 lg:mb-0 ">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="${news.author.img}" />
                                </div>
                            </label>
                            <div class="ml-2 lg:ml-5 ">
                                <p>${news.author.name}</p>
                                <p>${news.author.published_date}</p>
                            </div>
                        </div>
    
                        <div class="flex mb-10 lg:mb-0 ml-10 lg:ml-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
    
                            <p class="ml-3"> ${news.total_view}M</p>
                        </div>
                        <div class="rating mr-16 lg:mr-0">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                        </div>
                        <label onclick="newsDetail('${news._id}')" for="my-modal-3" class="btn modal-button ml-24 lg:ml-0"><i
                                class="fa-solid fa-arrow-right"></i></label>
                    </div>
                </div>
            </div>
    
        `;
            newsShows.appendChild(newsDiv);
        });
        noPhone.classList.add('hidden');
    }
    else {
        noPhone.classList.remove('hidden');

    }

    toggleSpinner(false);
}

const newsDetail = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    newsModalDetails(data.data[0]);
}

const newsModalDetails = newsModal => {
    console.log(newsModal);
    const imageDisplay = document.getElementById('modal-div');
    imageDisplay.innerHTML = `
    <img class="w-full" src="${newsModal.thumbnail_url}" alt="Album">
    `;
    const modalTitle = document.getElementById('newsDetails');
    modalTitle.innerText = newsModal.title;

    const authorName = document.getElementById('author-name');
    authorName.innerText = newsModal.author.name;

    const datePublised = document.getElementById('data-publised');
    datePublised.innerText = newsModal.author?.published_date;

}

// loder js start here

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('spinner');
    if (isLoading) {
        loaderSection.classList.remove('hidden');
    }
    else {
        loaderSection.classList.add('hidden');
    }
}
// newsDetail();
// showNewsCatagory();
clickNewsCatagaroy();