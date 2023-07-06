import { memo, useEffect, useRef } from "react";
import * as THREE from "three";

const UseRefMemo = memo(function Test() {
  const renderTarget = useRef();

  useEffect(() => {

    return () => {};
  });

  return (
    <div className="use-ref page">
      <div ref={renderTarget} className="scene"></div>
    </div>
  );
});

export default UseRefMemo;
