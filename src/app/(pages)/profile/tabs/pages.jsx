import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './tabs.module.css'
import Account from './account/page';
import Bookings from './bookings/page';
import Payment from './payment/page';
import GetBooking from '../api/getBooking';
export default function TabsComponent({ Data }) {

  return (
    <div className={`${styles.Tabs}`} >
      <Tabs defaultActiveKey="Account" fill >
        <Tab className='w-100 h-100' eventKey="Account" title="Account" >
          <h4 className='py-4 tab-title'>Account</h4>
          <Account Data={Data} />
        </Tab>
        <Tab className='w-100' eventKey="Bookings" title="Bookings" >
          <h4 className='py-4 tab-title'>Bookings</h4>
          <Bookings />
        </Tab>
        {/* <Tab className='w-100' eventKey="Payment methods" title="Payment methods">
          <h4 className='py-4 tab-title'>Payment methods</h4>

          <Payment />
        </Tab> */}

      </Tabs>
    </div>
  )
}
