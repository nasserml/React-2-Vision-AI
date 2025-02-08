'use client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CloudUpload, Loader2Icon, WandSparkles, X } from 'lucide-react';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/firebaseConfig';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useAuthContext } from '@/app/provider';
import { useRouter } from 'next/navigation';
import Constants from '@/data/Constants';
import { toast } from 'sonner';

function ImageUpload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<any>();
  const [model, setModel] = useState<string>();
  const [description, setDescription] = useState<string>();
  const { user } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(files[0]);
      const imageUrl = URL.createObjectURL(files[0]);
      setFile(files[0]);
      setPreviewUrl(imageUrl);
    }
  };

  const OnConvertToCodeButtonClick = async () => {
    if (!file || !description || !model) {
      console.log('select all field');
      return;
    }
    setLoading(true);
    // Save image to Firebase
    const fileName = Date.now() + '.png';
    const imageRef = ref(storage, 'vision-to-react-ai/' + fileName);
    await uploadBytes(imageRef, file).then((resp) => {
      console.log('Image uploaded...');
    });
    const imageUrl = await getDownloadURL(imageRef);
    console.log(imageUrl);

    const uid = uuidv4();
    // Save Info to Database
    const result = await axios.post('/api/wireframe-to-code', {
      uid: uid,
      description: description,
      imageUrl: imageUrl,
      model: model,
      email: user?.email,
    });
    console.log(result.data);
    if (result?.data?.error) {
      console.log('Not enough credits');
      setLoading(false);
      toast.error('Not enough credits');
      return;
    }

    setLoading(false);
    router.push('/view-code/' + uid);
  };
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {!previewUrl ? (
          <div className="p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center">
            <CloudUpload className="w-10 h-10 text-primary" />
            <h2 className="font-bold text-lg">Upload Image</h2>
            <p className="text-gray-400 mt-3">
              Click Button to Select Wireframe Image
            </p>
            <div className="p-5 mt-7 border border-dashed w-full flex justify-center rounded-md">
              <label htmlFor="imageSelect">
                <h2 className=" px-5 bg-blue-100 font-medium text-primary rounded-md cursor-pointer  p-2">
                  Select Image
                </h2>
              </label>
            </div>
            <input
              type="file"
              className="hidden"
              id="imageSelect"
              multiple={false}
              onChange={OnImageSelect}
            />
          </div>
        ) : (
          <div className="p-5 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center">
            <Image
              src={previewUrl}
              width={500}
              height={500}
              alt="preview"
              className="w-full h-[300px] object-contain"
            />
            <X
              className="flex items-end justify-end w-full cursor-pointer"
              onClick={() => setPreviewUrl(null)}
            />
          </div>
        )}
        <div className="p-7 border shadow-md rounded-lg ">
          <h2 className="font-bold text-lg">Select AI Model</h2>
          <Select onValueChange={(value) => setModel(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select AI Model" />
            </SelectTrigger>
            <SelectContent>
              {Constants.AiModelList.map((model, index) => (
                <SelectItem value={model.name} key={index}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={model.icon}
                      width={25}
                      height={25}
                      alt={model.name}
                    />
                    <h2>{model.name}</h2>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <h2 className="font-bold text-lg mt-7">
            Enter Description about your webpage
          </h2>

          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            className="mt-3 h-[200px]"
            placeholder="Write something about your webpage"
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Button onClick={OnConvertToCodeButtonClick} disabled={loading}>
          {loading ? (
            <Loader2Icon className=" animate-spin" />
          ) : (
            <WandSparkles />
          )}
          Convert to Code
        </Button>
      </div>
    </div>
  );
}

export default ImageUpload;
