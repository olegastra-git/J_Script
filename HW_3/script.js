function addReview() {
    let productName = document.getElementById('productName').value;
    let reviewText = document.getElementById('reviewText').value;
    if (!productName || !reviewText) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }
    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push(reviewText);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    // Очистка полей ввода
    document.getElementById('productName').value = '';
    document.getElementById('reviewText').value = '';
    alert('Отзыв добавлен');
}

// Показ отзывов
function showReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    let reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = '';
    Object.keys(reviews).forEach(product => {
        let div = document.createElement('div');
        div.innerHTML = `<h3>${product}</h3>`;
        reviews[product].forEach((review, index) => {
            div.innerHTML += `<p>${review} <button onclick="deleteReview('${product}', ${index})">Удалить</button></p>`;
        });
        reviewsList.appendChild(div);
    });
}

// Удаление отзыва
function deleteReview(productName, reviewIndex) {
    let reviews = JSON.parse(localStorage.getItem('reviews'));
    reviews[productName].splice(reviewIndex, 1);
    if (!reviews[productName].length) {
        delete reviews[productName];
    }
    localStorage.setItem('reviews', JSON.stringify(reviews));
    showReviews(); // Обновляем список отзывов
}

// Проверяем, находимся ли мы на странице просмотра отзывов, и если да, то отображаем отзывы
if (window.location.pathname.includes('reviews.html')) {
    document.addEventListener('DOMContentLoaded', showReviews);
}