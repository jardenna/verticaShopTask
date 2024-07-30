import { LeftNavPath, MainPath, Title } from '../../../types/enums';
import { NavListItem } from '../Nav';

const topNavItemsList: NavListItem[] = [
  {
    path: MainPath.Root,
    title: Title.Home,
  },
  {
    path: LeftNavPath.AllProducts,
    title: Title.AllProducts,
  },
];

export default topNavItemsList;
