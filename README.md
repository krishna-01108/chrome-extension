# 🧠 AI Webpage Summarizer (Chrome Extension)
A Chrome Extension that summarizes selected text from any webpage using the Hugging Face Inference API and a Node.js backend.  

# 🚀 Features
* Summarizes only selected text (not full page  
* Clean and interactive popup UI  
* Copy summary to clipboard  
* Error handling for empty selection   
* Input length protection for API stability   
* Uses latest Hugging Face router API endpoint  

## ⚙️ Backend Setup (Node.js + Express)
### 1️⃣ Initialize Project   
Inside your backend folder:   
   npm init -y  
   
### 2️⃣ Install Dependencies   
npm install express node-fetch cors  

### 4️⃣ Add Hugging Face Token  
Replace:  
YOUR_HF_TOKEN  
With your actual Hugging Face API token.  
IN .env file   

### 5️⃣ Start Backend Server  
node server.js   
Server runs at:  
http://localhost:5000   

## 🧩 Chrome Extension Setup  
### 1️⃣ Open Chrome Extensions  
Go to:  
chrome://extensions/   
Enable:   
Developer Mode (top right)   

### 2️⃣ Load Extension  
Click:  
Load unpacked   
Select your extension folder.   

## 🖥️ How It Works  
1. User selects text on any webpage.    
2. Opens extension popup.  
3. Clicks "Summarize Selected Text"   
4. Extension sends selected text to backend.  
5. Backend calls Hugging Face API.   
6. Summary is returned and displayed in popup.   

## 🎨 UI Features   
* Dark themed popup  
* Hover effects  
* Loading indicator   
* Copy button functionality  
* Interactive user experience   
 
## 📦 Future Improvements  
* Add summary length options  
* Add AI model selection  
* Highlight summary on webpage  
* Deploy backend to cloud (Render/Railway)  
* Add summary history  

## 🧑‍💻 Technologies Used
1. JavaScript  
2. Node.js  
3. Express.js  
4. Hugging Face Inference API  
5. Chrome Extension  

## 📄 License  
This project is for educational and learning purposes.  

