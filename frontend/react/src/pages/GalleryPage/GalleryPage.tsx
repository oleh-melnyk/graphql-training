import { LeftOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Image, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

type Gallery = {
  id: number;
  title: string;
  url: string;
};

const gallery: Gallery[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    url: 'https://via.placeholder.com/500/f4a6dd',
  },
  {
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
    url: 'https://via.placeholder.com/500/a7b9f4',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam incidunt quod unde.',
    url: 'https://via.placeholder.com/500/baa7f4',
  },
  {
    id: 4,
    title: 'oLorem ipsum dolor sit amet.',
    url: 'https://via.placeholder.com/500/f4d4a7',
  },
  {
    id: 5,
    title: 'omnis laborum odio',
    url: 'https://via.placeholder.com/500/f4b2a7',
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, inventore!',
    url: 'https://via.placeholder.com/500/92c952',
  },
];

export default function GalleryPage() {
  return (
    <Content className="mx-3 flex flex-col items-center">
      <Title className="text-center">Gallery</Title>
      <section className="w-800-px">
        <Button className="mb-5 mr-4" type="primary" size="large" icon={<LeftOutlined />}>
          Back
        </Button>
        <Button className="mb-5" type="primary" size="large" icon={<PlusOutlined />}>
          Add Photo
        </Button>
      </section>
      <section className="w-800-px flex flex-wrap gap-7">
        {gallery.map(({ id, title, url }) => (
          <div key={id} style={{ width: 250 }}>
            <Card title={title}>
              <Image src={url} />
            </Card>
          </div>
        ))}
      </section>
    </Content>
  );
}
