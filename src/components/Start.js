import React, { useRef } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

const BatDau = ({ setName, setTimeOut }) => {
  const inputRef = useRef();

  const handleClick = () => {
    setTimeOut(false);
    if (inputRef.current.value) {
      setName(inputRef.current.value.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();  
    }
  };

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/\s+/g, '');  // Xóa bỏ khoảng trắng
    inputRef.current.value = newValue;  // Cập nhật giá trị của input
  };

  return (
    <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", marginTop: "300px" }}>
      <input
        type="text"
        placeholder="Nhập Tên"
        ref={inputRef}
        className="form-control"
        maxLength="15"  // Giới hạn số ký tự tối đa là 15
        onKeyPress={handleKeyPress}
        onChange={handleChange}  
      />
      <MDBBtn color="primary" style={{ width: "100%", marginTop: "2rem" }} onClick={handleClick}>
        Bắt Đầu Trò Chơi
      </MDBBtn>
    </div>
  );
};

export default BatDau;

