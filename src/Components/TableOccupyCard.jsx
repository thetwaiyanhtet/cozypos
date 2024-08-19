import React from 'react'
import { FaTable} from 'react-icons/fa6'

const TableOccupyCard = () => {
  return (
    <div>
      <div className=" border border-none p-3 rounded-md bg-bgPrimary w-72 space-y-10">
        <div>
          <div className="flex justify-between space-y-2 items-center">
            <p>table occupacy</p>
            <div className=" bg-cSecondary p-2 rounded-full">
              <FaTable />
            </div>
          </div>
          <p className=" text-xl font-bold">25 tables</p>
        </div>
        <div className=" flex justify-between">
          <p>{""}</p>
          <p>//////////</p>
        </div>
      </div>
    </div>
  )
}

export default TableOccupyCard
