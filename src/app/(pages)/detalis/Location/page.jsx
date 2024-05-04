import React from 'react'

import styles from './Location.module.css'
import { ReactBingmaps } from 'react-bingmaps'

export default function Location({ Data }) {
  console.log("🚀 ~ Location ~ data:", Data)
  return (
    <div style={{ height: 450 }}>

      <ReactBingmaps
        bingmapKey="Al7JYQOwHtTN6dPvmuohYVVUnQV616aNg_dZ3dwpTt9a3PSdC8Sxp1DiP6Y6L3CD"
        center={[47.60357, -122.3295]} // Seattle Coordinates
        zoom={30}
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  )
}
