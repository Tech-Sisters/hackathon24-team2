import React, { useState } from "react";

export default function Home(){
  return (<Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Maia Header */}
      <Box sx={{
        backgroundColor: '#6200ea',
        padding: '16px',
        textAlign: 'center',
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        flexShrink: 0
      }}>
        Maia Chatbot
      </Box>
      {/* Chat Area */}
      <Box sx={{
        flexGrow: 1,
        overflowY: 'auto',
        padding: '16px',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        flexDirection: 'column',
      }}></Box>
);
}