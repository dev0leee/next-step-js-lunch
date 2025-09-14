import { HEADER_TITLE } from '@/constants/common.js';
import Header from '@components/Header.js';

const Layout = (child) => {
  const div = document.createElement('div');
  const main = document.createElement('main');

  div.append(Header({ title: HEADER_TITLE }));
  div.append(main);

  if (child) {
    main.append(child);
  }

  return div;
};

export default Layout;
