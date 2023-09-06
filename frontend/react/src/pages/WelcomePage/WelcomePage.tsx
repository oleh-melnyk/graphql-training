import { Layout } from 'antd';

const { Content } = Layout;

export default function WelcomePage() {
  return (
    <Content className="flex items-center justify-center h-screen">
      <h1 className="text-8xl">welcome!</h1>
    </Content>
  );
}
