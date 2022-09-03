// navber design with js

const clickNewsCatagaroy = async () => {
    try {
        const url = `https://openapi.programming-hero.com/api/news/categories`
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data.news_category);
    }
    catch (error) {
        error.message;
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