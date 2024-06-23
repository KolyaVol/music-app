import React from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  nleft?: string;
  nright?: string;
  onChange: (e: any) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  nleft,
  nright,
  onChange,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {nleft ? nleft : left} / {nright ? nright : right}
      </div>
    </div>
  );
};

export default TrackProgress;
