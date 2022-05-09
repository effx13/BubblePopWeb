import { useQuery } from 'react-query';
import { getQueueCount } from 'utils';

const Queues = () => {
  const { isLoading, error, data } = useQuery('fetchCount', getQueueCount, {
    refetchInterval: 1000 * 2,
  });

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h2>{JSON.stringify(data)}명 대기중 </h2>
    </div>
  );
};

export default Queues;
