import '@components/Header.css';

const Header = ({ title = '' }) => {
  const header = document.createElement('header');

  header.classList.add('gnb');

  header.innerHTML = `
  <h1 class="gnb__title text-title">${title}</h1>
  <button type="button" class="gnb__button" aria-label="음식점 추가">
    <img src="/assets/add-button.png" alt="음식점 추가" />
  </button>`;

  return header;
};

export default Header;
