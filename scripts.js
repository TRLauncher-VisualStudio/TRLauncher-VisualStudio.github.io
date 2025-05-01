// Bu dosya, web sitesinin etkileşimli özelliklerini sağlayan JavaScript kodunu içerir. Kullanıcı etkileşimleri, form doğrulamaları ve diğer dinamik işlevler burada yer alır.

document.addEventListener('DOMContentLoaded', function() {
    // Örnek bir etkileşim: Butona tıklama olayı
    const button = document.getElementById('exampleButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Butona tıkladınız!');
        });
    }

    // Form doğrulama örneği
    const form = document.getElementById('exampleForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputField = document.getElementById('exampleInput');
            if (inputField.value === '') {
                event.preventDefault();
                alert('Lütfen bir değer girin.');
            }
        });
    }
});