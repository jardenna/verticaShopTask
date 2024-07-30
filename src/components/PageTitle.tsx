import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from '../types/enums';

interface PageTitleProps {
  title: Title;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${title} | Fashion Fusion`;
  }, [location, title]);

  return null;
};

export default PageTitle;
