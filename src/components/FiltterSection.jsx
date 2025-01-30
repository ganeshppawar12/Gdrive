import React, { useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import ArticleIcon from "@mui/icons-material/Article";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import Image from "../img/image.png";

const FiltterSection = () => {
  const [filtters, setFillter] = useState([
    {
      id: "1",
      image: <InsertPhotoIcon></InsertPhotoIcon>,
      titel: "Image Files",
      count: "0",
      color: "red",
    },
    {
      id: "2",
      image: <VideoChatIcon></VideoChatIcon>,
      titel: "Video Files",
      count: "0",
      color: "green",
    },
    {
      id: "3",
      image: <ArticleIcon></ArticleIcon>,
      titel: "Document Files",
      count: "0",
      color: "gold",
    },
    {
      id: "4",
      image: <BackupTableIcon></BackupTableIcon>,
      titel: "Other Files",
      count: "0",
      color: "blue",
    },
  ]);
  return (
    <div>
      <div className="flex items-center justify-between bg-blue-50 p-2 flex-wrap ">
        {filtters.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className=" flex flex-col bg-white p-3 border border-gray-300 rounded-lg w-64 gap-2"
              >
                <div className="flex gap-1">
                  <div className="border border-gray-300 p-1 rounded-md flex items-center">
                    <p className="" style={{ color: item.color }}>
                      {item.image}
                    </p>
                  </div>
                  <div>
                    <p className=" font-semibold text-gray-700 " >{item.titel}</p>
                    <span className=" text-gray-400 ">{item.count}</span>
                  </div>
                </div>
                <div className=" h-1 bg-gray-200 rounded-2xl ">
                  <div
                    className="h-1 w-50 rounded-2xl"
                    style={{ background: item.color }}
                  ></div>
                </div>
                <div>
                    <p className=" text-xs text-gray-400 ">20 GB of 120 GB</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FiltterSection;
