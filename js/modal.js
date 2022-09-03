// Details news in modal

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