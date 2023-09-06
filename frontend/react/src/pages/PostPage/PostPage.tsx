import { gql } from '__generated__';
import { LeftOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Card, Layout, Typography } from 'antd';
import { EmptyImageUrl } from 'common/EmptyImage';
import { useNavigate, useParams } from 'react-router-dom';

import AddCommentForm from './AddCommentForm';
import CommentsList from './CommentsList';

const { Content } = Layout;
const { Title } = Typography;

export const QUERY_POST = gql(/* GraphQL */ `
  query post($id: Int!) {
    post(id: $id) {
      id
      title
      body
      comments {
        name
        email
        body
      }
    }
  }
`);

export default function PostPage() {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(QUERY_POST, { variables: { id: +postId! } });
  const { post } = data || {};

  const navigateToPosts = () => {
    navigate(`/posts`);
  };

  return (
    <Content className="my-auto mx-3 flex flex-col items-center">
      <Title className="text-center">Post</Title>

      <section className="w-800-px">
        <Button className="mb-5" type="primary" size="large" icon={<LeftOutlined />} onClick={() => navigateToPosts()}>
          Back
        </Button>

        {post ? (
          <Card title={post.title} className="w-full mb-10">
            <div className="mb-4 flex">
              <img
                className="shadow-xl border-solid border-gray-200 rounded-lg"
                width={200}
                src={EmptyImageUrl}
                alt={post.title}
              />
              <div className="ml-6">
                <span>{post.body}</span>
              </div>
            </div>

            <AddCommentForm postId={postId!} />
            <CommentsList comments={post.comments} />
          </Card>
        ) : (
          <Title level={4} className="text-center">
            Post ID is invalid
          </Title>
        )}
      </section>
    </Content>
  );
}
