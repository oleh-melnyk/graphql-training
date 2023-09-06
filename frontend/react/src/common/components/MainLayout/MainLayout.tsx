import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { MainHeader } from './MainHeader';

const { Content } = Layout;

export function MainLayout() {
  return (
    <Layout className="flex flex-col min-h-screen p-3">
      <MainHeader />
      <Content className="flex-1 overflow-auto">
        <Outlet />
      </Content>
    </Layout>
  );
}
