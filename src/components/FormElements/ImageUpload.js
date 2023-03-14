import { useRef, useState, useEffect } from "react";
import Button from "./Button";

function ImageUpload(props) {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (e) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (e.target.files) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  return (
    <div className="my-4 block">
      <input
        ref={filePickerRef}
        className="hidden"
        id={props.id}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={pickImageHandler}
          className="w-52 h-52 border border-[#333] flex justify-center items-center text-center mb-4 cursor-pointer"
        >
          {previewUrl ? (
            <img
              className="w-full h-full object-cover"
              src={previewUrl}
              alt="Preview"
            />
          ) : (
            <p>Please pick and image.</p>
          )}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {isValid && <p>{props.errorText}</p>}
    </div>
  );
}

export default ImageUpload;
