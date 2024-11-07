exports.passwordUpdated = (email, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Update Confirmation</title>
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
                color: #000000;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
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
                margin-top: 20px;
            }
    
            .cta:hover {
                background-color: #e6c200;
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
            <div class="message">Password Update Confirmation</div>
            <div class="body">
                <p>Hey ${name},</p>
                <p>Your password has been successfully updated for the email <span class="highlight">${email}</span>.</p>
                <p>If you did not request this password change, please <a class="highlight" href="mailto:info@studynotion.com">contact us immediately</a> to secure your account.</p>
            </div>
            <a class="cta" href="mailto:info@studynotion.com">Contact Support</a>
            <div class="support">
                If you have any questions, feel free to reach us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
            </div>
        </div>
    </body>
    
    </html>`;
  };