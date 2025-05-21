document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const mainButton = document.getElementById('mainButton');
  const menu = document.getElementById('menu');
  const supportButton = document.getElementById('supportButton');
  const supportForm = document.getElementById('supportForm');
  const sendButton = document.getElementById('sendButton');
  const messageInput = document.getElementById('message');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');

  // Переключение вкладок
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');

      tabContents.forEach(tab => {
        if (tab.id === tabId && !tab.classList.contains('active')) {
          tab.classList.add('active');
        } else if (tab.id === tabId) {
          tab.classList.remove('active');
        } else {
          tab.classList.remove('active');
        }
      });
    });
  });

  // Кнопка "Главное"
  mainButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Кнопка "Поддержка"
  supportButton.addEventListener('click', () => {
    supportForm.classList.toggle('hidden');
  });

  // Отправка жалобы (через почтовый клиент пользователя)
  sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
      const subject = encodeURIComponent('Жалоба/вопрос с сайта');
      const body = encodeURIComponent(message);
      window.location.href = `mailto:kamma2994@gmail.com?subject=${subject}&body=${body}`;
      messageInput.value = '';
    } else {
      alert('Пожалуйста, введите сообщение.');
    }
  });

  // Поиск
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    let found = false;

    tabContents.forEach(tab => {
      tab.querySelectorAll('td').forEach(cell => {
        cell.classList.remove('highlight');
        if (cell.textContent.toLowerCase().includes(query) && query.length > 0) {
          tab.classList.add('active');
          cell.classList.add('highlight');
          found = true;
        }
      });
    });
  });

  // Сброс поиска
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    tabContents.forEach(tab => {
      tab.querySelectorAll('td').forEach(cell => {
        cell.classList.remove('highlight');
      });
    });
  });
});
