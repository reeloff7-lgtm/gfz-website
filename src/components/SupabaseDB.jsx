import React , { useEffect, useState } from 'react'

import { supabase } from "../supabaseClient";

function SupabaseDB() {
   useEffect(() => {
    async function test() {
      const { data, error } = await supabase.from("comments").select("*");
      console.log("data:", data, "error:", error);
    }
    test();
  }, []);

  return (
    <>
    <div className=''>
      {/* <h1>Supabase is connected ✅</h1> */}

    </div>
    </>
  )
}

export default SupabaseDB
