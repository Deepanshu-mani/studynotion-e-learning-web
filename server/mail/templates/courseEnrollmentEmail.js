exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Course Registration Confirmation</title>
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
                font-size: 20px;
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
    
            .highlight {
                font-weight: bold;
                color: #333333;
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
            <div class="message">Course Registration Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Thank you for registering for the course <span class="highlight">"${courseName}"</span>. We're thrilled to have you on board!</p>
                <p>To get started, log in to your learning dashboard and begin exploring the course materials.</p>
                <a class="cta" href="https://studynotion-edtech-project.vercel.app/dashboard">Go to Dashboard</a>
            </div>
            <div class="support">
                If you need assistance, feel free to reach out at <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
                We're here to help!
            </div>
        </div>
    </body>
    
    </html>`;
  };