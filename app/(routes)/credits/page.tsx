'use client';
import { useAuthContext } from '@/app/provider';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Credits() {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState<any>();
  useEffect(() => {
    user && GetUserCredits();
  }, [user]);
  const GetUserCredits = async () => {
    const result = await axios.get('/api/user?email=' + user?.email);

    setUserData(result.data);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Credits</h1>
      <div className="flex items-center justify-between p-5 rounded-xl bg-slate-50 mt-6">
        <div>
          <h2 className="font-bold text-xl">My Credits:</h2>
          <p className="text-gray-500 text-lg">
            {userData?.credits} Credits left
          </p>
        </div>
        <Button>Buy more Credits</Button>
      </div>
    </div>
  );
}

export default Credits;
