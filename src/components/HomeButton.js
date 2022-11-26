import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Button from "@mui/material/Button";
import React, {useState} from 'react';

function HomeButton() {

    const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');
    
    const handleButtonVariantChange = () => {
      if (currentButtonVariant === 'outlined') {
        setCurrentButtonVariant('contained');
      }
      else {
        setCurrentButtonVariant('outlined');
      }
    }
  
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        try {
            handleButtonVariantChange();
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div style={{ flexDirection: "row", direction: "rtl" }}>
            <Button variant={currentButtonVariant} onClick={handleSubmit}>Home</Button>
        </div>
        
    );
}
export default HomeButton;
