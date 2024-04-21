import React, { useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const Bắt_đầu = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    inputRef.current.value && setName(inputRef.current.value);
  };

  return (
    <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", marginTop: "300px" }}>
      <input
        type="text"
        placeholder="Nhập Tên"
        ref={inputRef}
        className="form-control"
      />
      <MDBBtn color="primary" style={{ width: "100%", marginTop: "2rem" }} onClick={handleClick}>
        Bắt Đầu Trò Chơi
      </MDBBtn>
    </div>
  );
};

export default Bắt_đầu;
