import React from 'react';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export interface ExtButtonProps extends ButtonProps {
  /**
   * @description 简单测试
   * @default false
   */
  isMy?: boolean;
}

const ExtButton: React.FC<ExtButtonProps> = (props) => {
  const { children, ...restProps } = props;

  return <Button {...restProps}>{children}</Button>;
};

export default ExtButton;
