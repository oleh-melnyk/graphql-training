import { gql } from '__generated__';
import { useQuery } from '@apollo/client';
import { Layout, Space, Tag } from 'antd';

import { TopNavigation } from './TopNavigation';

const { Header } = Layout;
const { CheckableTag } = Tag;

const QUERY_POSTS_COMMENTS = gql(/* GraphQL */ `
  query postsComments {
    posts {
      id
    }
    comments {
      id
    }
  }
`);

export function MainHeader() {
  const { data } = useQuery(QUERY_POSTS_COMMENTS);
  const { posts, comments } = data || {};

  return (
    <Header className="flex items-center rounded-lg">
      <img src="/assets/images/cat.png" height="40" className="rounded-lg mr-10" alt="cat" />
      <TopNavigation />
      <Space size={[0, 8]} wrap className="ml-auto">
        <CheckableTag checked={true}>Posts: {posts?.length || 0}</CheckableTag>
        <CheckableTag checked={true}>Comments: {comments?.length || 0}</CheckableTag>
      </Space>
    </Header>
  );
}
