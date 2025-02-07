'use client';
import Constants from '@/data/Constants';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface RECORD {
  id: number,
  description: string,
  code: any,
  imageUrl: string,
  model: string,
  createdBy: string
}
function ViewCode() {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [codeResp, setCodeResp]= useState('')

  useEffect(() => {
    uid && GetRecordInfo();
  }, [uid]);

  const GetRecordInfo = async () => {
    setLoading(true);
    const result = await axios.get('/api/wireframe-to-code?uid=' + uid);
    const resp = result?.data;
    
    if(resp?.code == null) {
        await GenerateCode(resp)

    } 
    if (resp?.error) {
        console.log('No Record Found')
    }

    setLoading(false);
  };
  const GenerateCode = async (record: RECORD) => {
    setLoading(true);
    return 
    const res = await fetch('/api/ai-model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: record?.description + ":" + Constants.PROMPT,
        model: record?.model,
        imageUrl: record?.imageUrl
      })
    })

    if(!res.body) return
    const reader = res.body?.getReader() as any;
    const decoder = new TextDecoder();

    while(true){
      const {done, value} = await reader?.read();
      if(done) break;
      const text = (decoder.decode(value)).replace('```typescript', '').replace('```', '');
      setCodeResp(prev => prev + text);
      console.log(text);
      
    }
    setLoading(false);


  }
  return (<div>ViewCode
    {loading && <LoaderCircle className='animate-spin' />}
    <p>{codeResp}</p>
  </div>);
}

export default ViewCode;
