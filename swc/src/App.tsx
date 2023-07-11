import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Home } from './containers/Home'
import { Users } from './containers/Users'
import { About } from './containers/About'
import { Add } from './containers/Add';
import { Contacts } from './containers/Contacts';
import { Links } from './containers/Links';
import { Reminders } from './containers/Reminders';
import { Social } from './containers/Social';
import { Todo } from './containers/Todo';
import { User } from './containers/User';
import { ConfigProvider } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '/'),
  getItem('Users', 'Users'),
  getItem('About', 'About'),
  getItem('Add', 'Add'),
  getItem('Contacts', 'Contacts'),
  getItem('Links', 'Links'),
  getItem('Reminders', 'Reminders'),
  getItem('Social', 'Social'),
  getItem('Todo', 'Todo'),
  getItem('User', 'User'),
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/links",
    element: <Links />,
  },
  {
    path: "/reminders",
    element: <Reminders />,
  },
  {
    path: "/social",
    element: <Social />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);



export function App() {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  const handleClick = (e: { key: string }) => {
    void router.navigate(`/${e.key}`);
  };

  return (
    <React.StrictMode>
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <img src={''} style={{ height: 100, width: 100, background: '#fff', margin: '2rem auto', display: 'block' }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleClick} />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <RouterProvider router={router} fallbackElement={<>loading</>} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </React.StrictMode>
  )
}

export default App
