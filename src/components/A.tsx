import React, { createContext, useState } from 'react'
import B from './B'
export const context =createContext<any>("");
export default function A() {
    let fullName=" Lê Minh Thu";

  return (
    <div>
        A
     <context.Provider value={fullName}>   
        <B></B>
     </context.Provider>
    </div>
  )
}
