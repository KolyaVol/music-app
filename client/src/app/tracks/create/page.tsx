/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import MainLayout from "../../../layouts/MainLayout";
import StepWrapper from "../../../components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "../../../components/FileUpload";
import { useInput } from "../../../hooks/useInput";
import axios from "axios";
import { useRouter } from "next/navigation";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");
  const router = useRouter();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(event.target.files || []));
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  // const handleLoadImg = () => {
  //   URL.revokeObjectURL(this.src);
  // };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("text", text.value);
      formData.append("artist", artist.value);
      if (picture) {
        formData.append("picture", picture);
      }
      if (audio) {
        formData.append("audio", audio);
      }

      axios
        .post("http://localhost:5000/tracks", formData)
        .then((resp) => router.push("/tracks"))
        .catch((e) => console.log(e));
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label={"Название трека"}
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label={"Имя исполнителя"}
            />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={"Слова к треку"}
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <div>
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button onClick={handleClick}>Select some files</button>
            <div>
              {selectedFiles.length === 0 ? (
                <p>No files selected!</p>
              ) : (
                <img
                  src={URL.createObjectURL(selectedFiles[0])}
                  alt={selectedFiles[0].name}
                  height={150}
                />
              )}
            </div>
          </div>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузить аудио</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
