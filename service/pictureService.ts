import { Picture } from "../types/Picture";
import { asyncStorageService } from "./async-storage-service";

const IP = "192.168.1.102";

// 172.16.98.164

const getAllPictures = async () => {
  const response = await fetch("http://" + IP + ":5000/images/get-all");

  const json = await response.json();

  if (response.status == 409) {
    return null;
  }

  return json;
};

const savePicture = async (
  height: number,
  width: number,
  encodedData: string | undefined
) => {
  const response = await fetch("http://" + IP + ":5000/images/save", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${asyncStorageService.KEYS.userToken}`,
    },
    body: JSON.stringify({
      height: height,
      width: width,
      encodedData: encodedData,
    }),
  });

  if (response.status == 409) {
    return null;
  }

  return response.json();
};

const PictureService = {
  getAllPictures,
  savePicture,
};
export default PictureService;
