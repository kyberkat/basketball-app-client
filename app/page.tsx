import Client from '@/ui/client'
import Hero from "@/ui/hero";
import TestLayOut from '@/containers/TestLayOut';
import Spacer from '@/ui/spacer';
import NavBar from '@/ui/navbar';
import SelectContent from '@/ui/SelectContent';

const fetchData = async () => {
  return { message: "from server side"}
}

export default async function Home() {
  const data = await fetchData()

  if (process.env.LAYOUT === "true") {
    console.log(true)
  }

  return (
    <div>
      <main className="relative w-full z-0">
        <NavBar/>
        <Hero/>
        <Spacer/>
        {/* for fixed header or filter chips */}
        {/* <MiniBar/> */}
        <SelectContent/>
        {process.env.LAYOUT === 'true' ? <TestLayOut/> : ''}
      </main>
      {/* <div className="relative z-10">
        <Client message={data.message}/>
      </div> */}
      <footer></footer>
    </div>
  );
}
