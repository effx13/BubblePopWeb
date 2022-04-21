import { useQuery } from 'react-query';
import { getQueueCount } from 'utils';

const Queues = () => {
  const { isLoading, error, data } = useQuery('fetchCount', getQueueCount, {
    staleTime: 1000 * 2,
  });
  return (
    <div>
      {error && <div>Error</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <h2>{JSON.stringify(data)}명 대기중 </h2>
      )}
    </div>
  );
};

export default Queues;
