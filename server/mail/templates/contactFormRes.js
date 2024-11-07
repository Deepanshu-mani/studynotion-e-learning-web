exports.contactUsEmail = (
    email,
    firstname,
    lastname,
    message,
    phoneNo,
    countrycode
  ) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Confirmation</title>
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
    
            .details {
                background-color: #f9f9f9;
                padding: 15px;
                border-radius: 6px;
                text-align: left;
                margin-bottom: 20px;
            }
    
            .details p {
                margin: 5px 0;
                font-size: 15px;
                color: #333333;
            }
    
            .highlight {
                font-weight: bold;
                color: #000000;
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
            <div class="message">Thank you for contacting us, ${firstname} ${lastname}!</div>
            <div class="body">
                <p>We have received your message and will respond to you as soon as possible. Here are the details you provided:</p>
            </div>
            <div class="details">
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${countrycode} ${phoneNo}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
            <p>We appreciate your interest and will get back to you shortly.</p>
            <a class="cta" href="mailto:info@studynotion.com">Contact Support</a>
            <div class="support">If you have any further questions or need immediate assistance, feel free to reach out to us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>.</div>
        </div>
    </body>
    
    </html>`;
  };