import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Tabs } from 'antd';
import './users-home.styles.scss';

import PreviewTabs from '../preview-tabs/preview-tabs.component';
import { useEffect } from 'react';
const Usershome = ({ text }) => {
  const idForComponent = useSelector((state) => state.user.componentusers);
  const [menurights, SetMenurights] = useState([
    {
      value: 1,
      key: 1,
      title: 'Live Veiw',
    },
    {
      value: 1,
      key: 2,
      title: 'PlayBack',
    },
    {
      value: 1,
      key: 3,
      title: 'Devices',
    },
    {
      value: 1,
      key: 4,
      title: 'User',
    },
  ]);
  const [tabPosition, setTabPosition] = useState('left');
  const [isAdmin, setIsAdmin] = useState(false);
  const onChange = (key) => {
    console.log(key);
  };
  useEffect(() => {
    console.log('hiiiii   ' + idForComponent);
    {
      idForComponent == 1 ? setIsAdmin(true) : setIsAdmin(false);
    }
  }, [idForComponent]);

  return (
    <>
      <span className='role-info'>Role Info</span>

      <Row className='parent'>
        <Col span={24} style={{height:"100%"}}>
        <Row>
          <Col
          span={24}
          onClick={() => {
            console.log('isadmin  ' + isAdmin);
            console.log('id home   ' + idForComponent);
          }}
        >
          {isAdmin ? (
            <Row>
              <Col
                span={3}
                style={{
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'right',

                  marginRight: '16px',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                  }}
                >
                  {text} :
                </span>
              </Col>
              <Col span={3}>
                <span
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  Email@example.com
                </span>
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                <Col
                  span={3}
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    marginRight: '16px',
                  }}
                >
                  <span
                    style={{
                      color: '#fff',

                      textAlign: 'right',
                    }}
                  >
                    {text} :
                  </span>
                </Col>
                <Col span={3}>
                  <span>Email@example.com</span>
                </Col>
                <Col span={6}></Col>
                <Col
                  span={3}
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    marginRight: '16px',
                  }}
                >
                  <span>Role : </span>
                </Col>
                <Col span={5}>
                  <span
                    style={{
                      color: '#fff',

                      textAlign: 'right',
                    }}
                  >
                    Admin
                  </span>
                </Col>
              </Row>
            </>
          )}
          </Col>
        </Row>
        <Row>
        {isAdmin ? (
          <>
            <Col span={24}>
              <Row style={{ marginTop: '20px' }}>
                <Col
                  span={3}
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    marginRight: '16px',
                  }}
                >
                  <span>First Name :</span>
                </Col>
                <Col span={5}>
                  <span>Alireza</span>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row style={{ marginTop: '20px' }}>
                <Col
                  span={3}
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    marginRight: '16px',
                  }}
                >
                  <span>Last Name :</span>
                </Col>
                <Col span={5}>
                  <span>Ahmadi</span>
                </Col>
              </Row>
            </Col>
          </>
        ) : null}
        </Row>
        <Row>
        <Col span={24}>
          <Row style={{ marginTop: '20px' }}>
            <Col
              span={3}
              style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                marginRight: '16px',
              }}
            >
              <span
                style={{
                  color: '#fff',

                  textAlign: 'right',
                }}
              >
                Remark :
              </span>
            </Col>
            <Col span={3}>
              <span
                style={{
                  color: '#fff',

                  textAlign: 'right',
                }}
              >
                Admin Role
              </span>
            </Col>
          </Row>
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <Row style={{ marginTop: '20px' }}>
            <Col
              span={3}
              style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                marginRight: '16px',
              }}
            >
              <span
                style={{
                  color: '#fff',

                  textAlign: 'right',
                }}
              >
                Menu Rights :
              </span>
            </Col>
            <Col span={20}>
              <Row>
                {menurights.map((menuright) =>
                  menuright.value === 1 ? (
                    <Col
                      span={3}
                      key={menuright.key}
                      style={{ display: 'inline' }}
                      // style={{ marginLeft: "15px" }}
                    >
                      {menuright.title}
                    </Col>
                  ) : null
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <Row style={{ marginTop: '20px' }}>
            <Col span={3} style={{ textAlign: 'right', marginRight: '16px' }}>
              <span
                style={{
                  color: '#fff',

                  textAlign: 'right',
                }}
              >
                Channel Rights :
              </span>
            </Col>
            <Col span={15}>
              <Row>
                <Col span={3}>
                  <Row gutter={[0, 0]}>
                    <Tabs
                      className='sidebar-info'
                      tabPosition={'left'}
                      defaultActiveKey='1'
                      onChange={onChange}
                      items={[
                        {
                          label: `Preview`,
                          key: '1',
                          children: <PreviewTabs />,
                        },
                        {
                          label: `Playback`,
                          key: '2',
                          children: <PreviewTabs />,
                        },
                        {
                          label: `Export`,
                          key: '3',
                          children: <PreviewTabs />,
                        },
                      ]}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        </Row>
        </Col>
      </Row>
    </>
  );
};

export default Usershome;
