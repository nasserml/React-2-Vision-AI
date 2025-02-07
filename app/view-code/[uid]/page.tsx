'use client';
import AppHeader from '@/app/_components/AppHeader';
import Constants from '@/data/Constants';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import SelectionDetails from '../_components/SelectionDetails';
import CodeEditor from '../_components/CodeEditor';

export interface RECORD {
  id: number;
  description: string;
  code: any;
  imageUrl: string;
  model: string;
  createdBy: string;
}
function ViewCode() {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [codeResp, setCodeResp] = useState('');
  const [record, setRecord] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    uid && GetRecordInfo();
  }, [uid]);

  const GetRecordInfo = async () => {
    setLoading(true);
    setIsReady(false);
    const result = await axios.get('/api/wireframe-to-code?uid=' + uid);
    const resp = result?.data;

    setRecord(result?.data);

    if (resp?.code == null) {
      await GenerateCode(resp);
    }
    if (resp?.error) {
      console.log('No Record Found');
    }

    setLoading(false);
  };
  const GenerateCode = async (record: RECORD) => {
    setIsReady(false);
    setLoading(true);
    // return;
    const res = await fetch('/api/ai-model', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: record?.description + ':' + Constants.PROMPT,
        model: record?.model,
        imageUrl: record?.imageUrl,
      }),
    });

    if (!res.body) return;
    const reader = res.body?.getReader() as any;
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader?.read();
      if (done) break;
      const text = decoder
        .decode(value)
        .replace('```typescript', '')
        .replace('```', '')
        .replace('jsx', '');
      setCodeResp((prev) => prev + text);
      console.log(text);
    }
    setIsReady(true);
    setLoading(false);
  };
  return (
    <div>
      <AppHeader hideSideBar={true} />

      <div className="grid grid-cols-1 md:grid-cols-5 p-5 gap-10">
        <div>
          {/* Selection Details */}
          <SelectionDetails record={record} />
        </div>

        <div className="col-span-4">
          {/* Code Editor */}
          <CodeEditor codeResp={codeResp} isReady={isReady} />
        </div>
      </div>
    </div>
  );
}

export default ViewCode;
