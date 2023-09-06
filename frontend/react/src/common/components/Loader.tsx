import { Spin } from 'antd';
import { ReactElement } from 'react';

type Props = {
  isLoading?: boolean;
};

export function Loader({ isLoading = false }: Props): ReactElement | null {
  return isLoading ? (
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  ) : null;
}
