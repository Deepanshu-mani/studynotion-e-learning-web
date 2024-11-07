const otpTemplate = (otp) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OTP Verification Email</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
    
            .logo {
                max-width: 150px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 22px;
                font-weight: bold;
                color: #333333;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                color: #555555;
                margin-bottom: 20px;
                text-align: left;
            }
    
            .highlight {
                font-weight: bold;
                font-size: 24px;
                color: #000000;
                margin: 10px 0;
            }
    
            .cta {
                display: inline-block;
                padding: 12px 24px;
                background-color: #ffd60a;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                transition: background-color 0.3s ease;
            }
    
            .cta:hover {
                background-color: #e6c200;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            /* Responsive design */
            @media (max-width: 600px) {
                .container {
                    width: 100%;
                    padding: 10px;
                }
    
                .cta {
                    width: 100%;
                    padding: 12px;
                    font-size: 18px;
                }
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://studynotion-edtech-project.vercel.app">
                <img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo">
            </a>
            <div class="message">OTP Verification Email</div>
            <div class="body">
                <p>Dear User,</p>
                <p>Thank you for registering with StudyNotion. To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
                <h2 class="highlight">${otp}</h2>
                <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.</p>
                <p>Once your account is verified, you will have access to our platform and all its features.</p>
            </div>
            <div class="support">
                If you have any questions or need assistance, please reach out to us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>. We're happy to help!
            </div>
        </div>
    </body>
    
    </html>`;
  };
  
  module.exports = otpTemplate;