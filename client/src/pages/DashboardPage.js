import React, {useEffect} from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './../components/sections/AdminCardSection1';
import AdminCardSection2 from './../components/sections/AdminCardSection2';
import TableSection from './../components/sections/TableSection';
import BreadcrumSection from './../components/sections/BreadcrumSection';
import ChartSection1 from './../components/sections/ChartSection1';
import ChartSection2 from './../components/sections/ChartSection2';
import MapSection from './../components/sections/MapSection';
import ModalSection from './../components/sections/ModalSection';

const DashboardPage =  () => {

  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
          <MapSection />
          <ModalSection />
      </MDBRow>
      <AdminCardSection2 />
    </React.Fragment>
  )
}

export default DashboardPage;
