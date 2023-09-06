import { gql } from '__generated__';
import { Comment } from '__generated__/graphql';
import { SaveOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { Button, Form, Input, Typography } from 'antd';
import { useCallback, useEffect } from 'react';

const { Title } = Typography;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};

type Props = {
  postId: string;
};

const CREATE_COMMENT = gql(/* GraphQL */ `
  mutation createComment($postId: ID!, $createComment: CreateCommentInput!) {
    createComment(postId: $postId, createCommentInput: $createComment) {
      id
      name
      email
      body
    }
  }
`);

export default function AddCommentForm({ postId }: Props) {
  const [createComment, { data: createResponse }] = useMutation(CREATE_COMMENT, {
    refetchQueries: ['post', 'postsComments'],
  });
  const [form] = Form.useForm();

  const clearForm = useCallback(() => {
    form.resetFields();
  }, [form]);
  const submitComment = (comment: Comment) => {
    createComment({ variables: { postId, createComment: comment } });
    clearForm();
  };
  useEffect(() => {
    if (createResponse?.createComment) {
      clearForm();
    }
  }, [createResponse, clearForm]);

  return (
    <>
      <Title level={4}>Add Comment</Title>
      <Form {...layout} form={form} onFinish={submitComment}>
        <Form.Item name="email" label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="body" label="Body" rules={[{ required: true }]}>
          <TextArea rows={4} />
        </Form.Item>

        <div className="flex flex-row justify-end gap-4">
          <Button htmlType="button" onClick={clearForm}>
            Clear
          </Button>
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
            Add Comment
          </Button>
        </div>
      </Form>
    </>
  );
}
