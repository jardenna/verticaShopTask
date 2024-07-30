import { LeftNavPath, Title } from '../../../types/enums';
import { NavListItem } from '../Nav';

const leftNavItemsList: NavListItem[] = [
  {
    path: LeftNavPath.AllProducts,
    title: Title.AllProducts,
  },
  {
    path: LeftNavPath.Men,
    title: Title.MensClothing,
  },
  {
    path: LeftNavPath.Women,
    title: Title.WomensClothing,
  },
  {
    path: LeftNavPath.Jewelery,
    title: Title.Jewelery,
  },
  {
    path: LeftNavPath.Electronics,
    title: Title.Electronics,
  },
];

export default leftNavItemsList;
