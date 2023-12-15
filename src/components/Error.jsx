import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const Error = ({message}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
    }
  }, [message]);

 
  if (!visible) {
    return null;
  }

  return (
    <div onClick={() => setVisible(false)}>
      <Card style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1000', background: 'white', padding: '100px', borderRadius:'20%', border:'4px solid #C55F12'}}>
        <Card.Body>
          <Card.Text style={{color:'#C55F12', fontSize:'50px'}}>
            Error!<br/>
            Message: {message}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Error
