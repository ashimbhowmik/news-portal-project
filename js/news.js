

{/* <div class="card lg:card-side bg-base-200 shadow-xl mb-7">
<figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
<div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam in nostrum earum
        voluptate ipsum suscipit laborum nemo quos consectetur! Aut voluptatibus id neque nam nemo
        aliquam iure? Maiores inventore enim accusantium quidem odio? Nulla, aliquid. Doloremque est
        quod accusantium suscipit natus ipsa labore nesciunt officiis maxime, animi voluptates iure
        adipisci eaque aliquam consequuntur explicabo nostrum vel placeat temporibus aspernatur
        deserunt. Autem quis molestias atque minima dolorem! Officia facere a quisquam voluptates
        nesciunt perspiciatis vitae, magni esse aspernatur quos tempore vero omnis fugiat laboriosam non

    </p>

    <div class="card-actions justify-between items-center mt-8 lg:mt-0">
        <div class="flex mb-10 lg:mb-0">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <div class="ml-2 lg:ml-5">
                <p>Jone Coper</p>
                <p>Jan 10,2022</p>
            </div>
        </div>

        <div class="flex mb-10 lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

            <p>1.5M</p>
        </div>
        <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" checked />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
            <input type="radio" name="rating-1" class="mask mask-star" />
        </div>
        <label for="my-modal-3" class="btn modal-button"><i class="fa-solid fa-arrow-right"></i></label>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use
                    Wikipedia for free!</p>
            </div>
        </div>
    </div>


</div>
</div> */}

// https://openapi.programming-hero.com/api/news/categories

const loadNews = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data.news_category);
    }
    catch {

    }
}

const displayNews = (allNews) => {
    // console.log(allNews);

    const newsContainer = document.getElementById('news-btn');

    // newsContainer.innerHTML = '';
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
                    <li><button>Breaking News</button></li>
                    <li><button>Regular news</button></li>
                    <li><button>International News</button></li>
                    <li><button>Sports</button></li>
                    <li><button>Entertainment</button></li>
                    <li><button>Culture</button></li>
                    <li><button>Arts</button></li>
                    <li><button>All News</button></li>
                </ul>
            </div>
        </div>
        <div class="w-full hidden lg:flex">
            <ul class="menu menu-horizontal p-0 lg:container lg:mx-auto">
                <li class="lg:mr-16"><button ">Home</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[0].category_id}')">${allNews[0].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[1].category_id}')">${allNews[1].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[2].category_id}')">${allNews[2].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[3].category_id}')">${allNews[3].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[4].category_id}')">${allNews[4].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[5].category_id}')">${allNews[5].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[6].category_id}')">${allNews[6].category_name}</button></li>
                <li class="lg:mr-16"><button onclick="loadNewsDetails('${allNews[7].category_id}')">${allNews[7].category_name}</button></li>
                
            </ul>
        </div>
    </nav>
    `;

    newsContainer.appendChild(navberDiv);
    // console.log(news);

}


const loadNewsDetails = async category_id => {
    toggleSpinner(true);
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsAll(data.data);
}

const displayNewsAll = idNumber => {

    // console.log(idNumber);
    const newsShows = document.getElementById('news-container');
    newsShows.innerHTML = '';
    idNumber.forEach(news => {
        // console.log(news); 
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card lg:card-side bg-base-200 shadow-xl mb-7">
            <figure><img class="w-96" src="${news.thumbnail_url}" alt="Album"></figure>
            <div class="card-body">
                    <h2 class="card-title">${news.title}</h2>
                    <p>${news.details} </p>
                    <div class="card-actions justify-between items-center mt-8 lg:mt-0">
                        <div class="flex mb-10 lg:mb-0">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src="${news.author.img}" />
                                </div>
                            </label>
                            <div class="ml-2 lg:ml-5">
                                <p>${news.author.name}</p>
                                <p>${news.author.published_date}</p>
                            </div>
                        </div>

                        <div class="flex mb-10 lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            <p class="ml-3"> ${news.total_view}M</p>
                        </div>
                        <div class="rating">
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" checked />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                            <input type="radio" name="rating-1" class="mask mask-star" />
                        </div>
                        <label onclick="newsDetail('${news._id}')" for="my-modal-3" class="btn modal-button"><i class="fa-solid fa-arrow-right"></i></label>
                    </div>
            </div>
        </div>

    `;
        newsShows.appendChild(newsDiv);

    });
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
newsDetail();
loadNewsDetails();
loadNews();