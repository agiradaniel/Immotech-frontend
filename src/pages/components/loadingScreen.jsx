import React from 'react';
import { InfinitySpin } from  'react-loader-spinner'

const LoadingScreen = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <InfinitySpin 
                width='200'
                color="#EF6332"
                
            />
            <p>We are processing your request</p>
        </div>
    </>
  )
}

export default LoadingScreen