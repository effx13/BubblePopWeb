import type { NextPage } from 'next';
import Image from "next/image";

const Home: NextPage = () => (<div>
  <h2>추억의 오락실 게임 펌프를 직접 밟으며 즐겨보자!</h2>
  <Image src="/pump.jpg" alt="pump" width={500} height={500} />
</div>);

export default Home;

