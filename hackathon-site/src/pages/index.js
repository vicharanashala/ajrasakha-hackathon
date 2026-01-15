
import CipherThon from "../components/Shared/Landing1"
import HackathonSchedule from '../components/Shared/Landing2'
import PrizeCards from '../components/Shared/Landing3'
import CipherNavbar from '../components/Shared/Navbar'
import CipherLayout from '../components/Layout'

export default function Page() {
  return(
    <>
     <CipherLayout>
      <CipherThon />
      <HackathonSchedule />
      <PrizeCards/>
     </CipherLayout>
     </>
  )
}