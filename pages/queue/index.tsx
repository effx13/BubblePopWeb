import { useQuery } from 'react-query';
import {getQueueCount, getQueueData} from 'utils';

const Queues = () => {
  const queueCount = useQuery('fetchCount', getQueueCount, {
    refetchInterval: 1000 * 2,
  });

  const queueData = useQuery('fetchData', getQueueData, {
    refetchInterval: 1000 * 2,
  });

  if (queueCount.error) return <div>Error</div>;
  if (queueCount.isLoading) return <div>Loading</div>;
  return (
    <div>
      <h2>{JSON.stringify(queueCount.data)}명 대기중 </h2>
      <h2>{queueData.data.map((i) => <div>{JSON.stringify(i)}</div>)}</h2>
    </div>
  );
};

export default Queues;
