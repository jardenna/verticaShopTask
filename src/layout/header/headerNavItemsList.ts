import { MainPath, Title } from '../../types/enums';

import { NavListItem } from '../nav/Nav';

const navItemsList: NavListItem[] = [
  {
    path: MainPath.Root,
    title: Title.Home,
  },
  {
    path: MainPath.Contact,
    title: Title.Contact,
  },
];

export default navItemsList;
