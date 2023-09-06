import { CheckCircleOutlined, HomeOutlined, PictureOutlined, RestOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: 'Welcome',
    key: '/welcome',
    icon: <HomeOutlined />,
  },
  {
    label: 'Posts',
    key: '/posts',
    icon: <CheckCircleOutlined />,
  },
  {
    label: 'Albums',
    key: '/albums',
    icon: <PictureOutlined />,
  },
  {
    label: 'About',
    key: '/about',
    icon: <RestOutlined />,
  },
];

export function TopNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeRoute = (location.pathname || '').split('/')?.[1] || 'welcome';

  const [current, setCurrent] = useState(`/${activeRoute}`);

  const onClick: MenuProps['onClick'] = (event) => {
    setCurrent(event.key);
    navigate(event.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} items={items} theme="dark" mode="horizontal" />;
}
