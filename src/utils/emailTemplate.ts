export const generateEmailTemplate = ({
  name,
  phone,
  email,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) => {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; background-color: #1a1a1a; color: #f4f4f4; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img 
          src="https://calibarstarbck.demo-web.live/wp-content/uploads/2024/12/mainlogo.png" 
          alt="Caliber Star Logo" 
          style="max-width: 180px; border-radius: 10px;filter: brightness(100);">
      </div>
      <div style="background-color: #2a2a2a; border-radius: 8px; padding: 20px;">
        <h2 style="color: #ee7737; margin-bottom: 20px; text-align: center;">New Enquiry Details</h2>
        <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-bottom: 10px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #ee7737; text-decoration: none;">${phone}</a></p>
        <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #ee7737; text-decoration: none;">${email}</a></p>
        <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
        <div style="background-color: #333333; border-radius: 5px; padding: 15px; color: #cccccc;">
          ${message}
        </div>
      </div>
      <hr style="border: 1px solid #444444; margin: 30px 0;">
      <p style="color: #bbbbbb; font-size: 14px; text-align: center;">
        This email was generated from the <strong>Caliber Star</strong> website. For any questions, feel free to <a href="mailto:support@caliberstar.com" style="color: #ee7737; text-decoration: none;">contact us</a>.
      </p>
    </div>
  `;
};
