<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #0f172a;
            font-family: 'SF Mono', 'Fira Code', monospace;
            color: #e2e8f0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #1e293b;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #334155;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
        }
        /* New Hero Image Style */
        .hero-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            display: block;
        }
        .hero-gradient {
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            padding: 40px;
            text-align: center;
        }
        .content {
            padding: 40px;
        }
        .code-block {
            background-color: #000000;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #10b981;
            margin: 25px 0;
            font-size: 14px;
            color: #34d399;
        }
        h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -1px;
            color: #ffffff;
        }
        p {
            line-height: 1.8;
            color: #94a3b8;
        }
        .highlight {
            color: #818cf8;
            font-weight: bold;
        }
        .button {
            display: inline-block;
            background-color: #6366f1;
            color: #ffffff !important;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
            box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39);
        }
        .footer {
            padding: 30px;
            text-align: center;
            font-size: 12px;
            color: #64748b;
            background-color: #0f172a;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" 
             alt="Programming Setup" 
             class="hero-image">

        <div class="hero-gradient">
            <h1>&lt;Closing Ceremony /&gt;</h1>
            <p style="color: #e0e7ff; margin-top: 10px; font-size: 18px; opacity: 0.9;">
                Class of 2024: Mission Accomplished.
            </p>
        </div>

        <div class="content">
            <p>Hello <span class="highlight">Developer</span>,</p>
            
            <p>You’ve spent countless hours debugging, refactoring, and pushing code. Now, it's time to merge your final branch and celebrate the journey.</p>

            <div class="code-block">
                <span style="color: #94a3b8;">// Ceremony Details</span><br>
                const event = {<br>
                &nbsp;&nbsp;date: "Friday, Nov 15th",<br>
                &nbsp;&nbsp;time: "18:00 UTC",<br>
                &nbsp;&nbsp;location: "The Grand Terminal Hub",<br>
                &nbsp;&nbsp;status: "Deployment Ready"<br>
                };
            </div>

            <p>Join us for an evening of networking, project showcases, and the official graduation ceremony. Drinks and snacks are on the house!</p>

            <div style="text-align: center;">
                <a href="#" class="button">Confirm Attendance</a>
            </div>
        </div>

        <div class="footer">
            <p>Sent with &lt;3 by the Dev Team</p>
            <p>
                <strong>Programming Institute</strong><br>
                123 Syntax Lane, Silicon Valley, CA
            </p>
        </div>
    </div>
</body>
</html>