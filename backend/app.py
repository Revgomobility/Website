from flask import Flask, render_template, request, jsonify
import smtplib
from email.message import EmailMessage

app = Flask(__name__)

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_ADDRESS = "your-email@gmail.com"
EMAIL_PASSWORD = "your-email-password"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/submit-form", methods=["POST"])
def submit_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    contact = data.get('contact')
    company = data.get('company')
    vehicle_type = data.get('vehicleType')

    if not all([name, email, contact, company, vehicle_type]):
        return jsonify({"error": "All fields are required"}), 400

    msg = EmailMessage()
    msg['Subject'] = f"New Quote Request from {name}"
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = ["info@revgo.org", "kalyaan@revgo.org"]
    msg.set_content(f"""
        Name: {name}
        Email: {email}
        Contact: {contact}
        Company: {company}
        Vehicle Type: {vehicle_type}
    """)

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)

    return jsonify({"message": "Form submitted successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)
