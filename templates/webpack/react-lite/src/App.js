import { ReactComponent as TDesignLogo } from './logo.svg';
import { Button, ConfigProvider, Space } from 'tdesign-react';
import { AddIcon, CloudUploadIcon, DiscountIcon, CloudDownloadIcon } from 'tdesign-icons-react';
import 'tdesign-react/es/style/index.css';

function App() {
  return (
    <ConfigProvider globalConfig={{ classPrefix: 't' }}>
    <Space direction='vertical' style={{ width: '100%', textAlign: 'center' }}>
      <TDesignLogo /> 
      <h3> Welcome to use TDesign! </h3>
      <Space>
        <Button theme='primary' icon={<AddIcon />}>
          新建
        </Button>
        <Button variant='outline' icon={<CloudUploadIcon />}>
          上传文件
        </Button>
        <Button shape='circle' theme='primary' icon={<DiscountIcon />}></Button>
        <Button shape='circle' theme='primary' icon={<CloudDownloadIcon />}></Button>
        <Button variant='outline'> 搜索 </Button>
      </Space>
    </Space>
  </ConfigProvider>
  );
}

export default App;
