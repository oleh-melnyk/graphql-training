import { Comment } from '__generated__/graphql';
import { Typography } from 'antd';

const { Title } = Typography;

type Props = {
  comments: Partial<Comment>[];
};

export default function CommentsList({ comments }: Props) {
  return (
    <>
      <Title level={4}>Comments</Title>
      {comments?.map(({ email, name, body }, index) => (
        <dl key={index}>
          <dt>Email</dt>
          <dd>{email}</dd>
          <dt>Name</dt>
          <dd>{name}</dd>
          <dt>Body</dt>
          <dd>{body}</dd>
        </dl>
      ))}
    </>
  );
}
