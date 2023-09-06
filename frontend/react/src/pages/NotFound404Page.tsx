import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function NotFound404Page() {
  const navigate = useNavigate();
  return (
    <Content style={{ textAlign: 'center' }}>
      <Title>Page 404</Title>
      <Paragraph>There's nothing here!</Paragraph>
      <Paragraph>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Go to Home page
        </Button>
      </Paragraph>
    </Content>
  );
}
