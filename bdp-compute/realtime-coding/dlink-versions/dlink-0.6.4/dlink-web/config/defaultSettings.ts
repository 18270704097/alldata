import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '批流一体平台',
  pwa: false,
  logo: 'dinky.svg',
  iconfontUrl: '',
  menu: {
    locale: true
  },
  headerHeight: 48,
  splitMenus: true
};

export default Settings;
