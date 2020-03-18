import React, { useState } from 'react';
import './styles.scss';
import { Collapse, Button } from 'antd';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
import { MainLayout } from 'components/layouts';
import { useGlobal } from 'providers';
import { withAuth } from 'hocs';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export const Home = () => {
  const [expandIconPosition] = useState<ExpandIconPosition>('right');
  const { fetchPosts, fetchPostsSuccess, isInProgress } = useGlobal();

  return (
    <MainLayout title="Home" description="This is the home page">
      <div className="home-page">
        <Button onClick={fetchPosts} type="primary" loading={isInProgress.fetchPosts}>
          Fetch Posts
        </Button>
        <Button onClick={fetchPostsSuccess} type="danger" disabled={!isInProgress.fetchPosts}>
          Cancel Fetch Posts Request
        </Button>
        <br />
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
          className="collapsible-sha-panel"
        >
          <Panel header="This is panel header 1" key="1">
            <div>
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
              welcome guest in many households across the world.
            </div>
          </Panel>
        </Collapse>
      </div>
    </MainLayout>
  );
};

export default withAuth(Home);
// export default Home;
