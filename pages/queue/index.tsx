import {useQuery} from 'react-query';
import {getQueueCount, getQueueData} from 'utils';
import {Button, Paper, Typography} from "@mui/material";
import {useRecoilState} from "recoil";
import {modalOpen, modalState} from "../../states";

const Queues = () => {
  const [isModalOpen, setModalOpen] = useRecoilState(modalOpen);
  const [getModalState, setModalState] = useRecoilState(modalState);

  const queueCount = useQuery<number>('fetchCount', getQueueCount, {
    refetchInterval: 1000 * 2,
  });

  const {data, isLoading, error} = useQuery<{
    name: string,
    createdAt: string,
    reservationTime: string,
  }[]>('fetchData', getQueueData, {
    refetchInterval: 1000 * 2,
  });


  if (queueCount.error || error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <Button variant='contained' sx={{width: '100%', my: 3, py:1}} onClick={() => {
        setModalOpen(true);
        setModalState('AddQueue');
      }}>
        <Typography variant="body1">
          예약
        </Typography>
      </Button>
      <h2>{JSON.stringify(queueCount.data)}명 대기중 </h2>
      {data?.length === 0 ? <>대기자가 아무도 없습니다.</> : data?.map((reservation, i) => {
        const createdAt = new Date(reservation.createdAt);
        const reservationTime = new Date(reservation.reservationTime);
        return <Paper elevation={2} sx={{p: 1, mb: 2}} key={i}>
          <Typography variant="h6" sx={{fontWeight: 'bold'}} gutterBottom>
            {reservation.name} 고객님
          </Typography>
          <Typography variant="body1">
            {createdAt.toLocaleString().slice(0, -3)} 접수
          </Typography>
          <Typography variant="body1">
            {reservationTime.toLocaleString().slice(0, -3)} 예약
          </Typography>
        </Paper>;
      })}
    </div>
  );
};

export default Queues;
