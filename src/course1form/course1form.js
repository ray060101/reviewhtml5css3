import React, { useState } from 'react';
import './course1form.css';


function Course1form() {
  /*定義再來會發生的事件，基本的資料結構*/ 
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [server, setServer] = useState('');
  const [gameLevel, setGameLevel] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleServerChange = (event) => {
    setServer(event.target.value);
  };

  const handleGameLevelChange = (event) => {
    setGameLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 在此處將表單數據提交到後端
  };

  /*HTML5的部分，詳細可以看course1form_explain*/
  return (  
  <form onSubmit={handleSubmit} className="registration-form">
    <h2>註冊</h2>
      <label >
         姓名:
        <input type="text" value={name} onChange={handleNameChange} required 
        placeholder = "請輸入姓名"/>
      </label>
    <br />
      <label>
        生日：
        <input type="date" value={birthday} onChange={handleBirthdayChange} required />
      </label>
    <br />
      <label>
        電話：
        <input type="tel" pattern="^09[0-9]{8}$" required value={phone} onChange={handlePhoneChange} 
        placeholder = "請輸入手機 (格式為09XXXXXXXX)"/>
      </label>
    <br />
      <label>
        email:
        <input type="email" value={email} onChange={handleEmailChange} required 
        placeholder = "請輸入email"/>
      </label>
    <br />
      <label>
        伺服器：
        <select value={server} onChange={handleServerChange} defaultValue="亞洲">
          <option value="歐洲">歐洲</option>
          <option value="亞洲">亞洲</option>
          <option value="美洲">美洲</option>
        </select>
      </label>
    <br />
      <label>
        遊戲水平：
        <input type="range" min="0" max="100" value={gameLevel} onChange={handleGameLevelChange} />
        {gameLevel}
      </label>
    <br />
      <input type="submit" value="提交" />
  </form>
);
};

export default Course1form;
