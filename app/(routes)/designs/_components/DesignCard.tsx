import { Button } from '@/components/ui/button';
import Constants from '@/data/Constants';
import { Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function DesignCard({ item }: any) {
  const modelOnj = Constants.AiModelList.find((x) => x.name === item?.model);
  return (
    <div className="p-5 border rounded-lg">
      <Image
        src={item?.imageUrl}
        width={300}
        height={200}
        alt="image"
        className="w-full h-[200px] object-cover bg-white rounded-lg "
      />
      <div className="mt-2">
        <h2 className="line-clamp-2 text-gray-400 text-sm">
          {item?.description}
        </h2>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full p-2">
            {modelOnj && (
              <Image
                src={modelOnj?.icon}
                alt={modelOnj?.name}
                width={30}
                height={30}
              />
            )}
            <h2>{modelOnj?.name}</h2>
          </div>
          <Link href={'/view-code/' + item?.uid}>
            <Button>
              <Code /> View Code
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DesignCard;
