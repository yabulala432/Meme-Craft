import { Dispatch, SetStateAction } from "react";

interface UploadEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & EventTarget;
}

interface Props {
  setImage: Dispatch<SetStateAction<string | null>>;
}

function MemeUploader({ setImage }: Props) {
  // const [, setImage] = useState<string | null>(null);

  const handleUpload = (event: UploadEvent): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return <input type="file" accept="image/*" onChange={handleUpload} />;
}

export default MemeUploader;
