exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Confirmation</title>
        <style>
            body {
                background-color: #f9f9f9;
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
            <div class="message">Payment Confirmation</div>
            <div class="body">
                <p>Dear ${name},</p>
                <p>Thank you for your payment. We have successfully processed a payment of <span class="highlight">₹${amount}</span>.</p>
                <p>Your Payment ID is <span class="highlight">${paymentId}</span>.</p>
                <p>Your Order ID is <span class="highlight">${orderId}</span>.</p>
                <p>If you have any questions or need further assistance, please don’t hesitate to contact us.</p>
            </div>
            <a class="cta" href="mailto:info@studynotion.com">Contact Support</a>
            <div class="support">For any inquiries, reach us at <a href="mailto:info@studynotion.com">info@studynotion.com</a>. We're here to help!</div>
        </div>
    </body>
    
    </html>`;
  }