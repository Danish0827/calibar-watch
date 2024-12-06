export const generateEmailTemplate = ({
  name,
  surname,
  email,
  message,
}: {
  name: string;
  surname: string;
  email: string;
  message: string;
}) => {
  return `
      <div style="font-family: Arial, sans-serif; padding: 30px; background-color: #000000; color: #ffffff;">
        <div style="padding-bottom: 20px;">
          <img src="https://i.ibb.co/6W51hH8/main-logo1.png" alt="Caliber Star Logo" style="max-width: 150px;">
        </div>
        <h2 style="color: #ee7737;">New Enquiry Details</h2>
        <p style="text-transform: capitalize;"><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ffffff;">${email}</a></p>
        <p><strong>Message:</strong> ${message}</p>
        <hr style="border: 1px solid #555555;" />
        <p style="color: #999999; font-size: 12px;">
          This email was generated from the  Caliber Star website. Please contact us if you have any questions.
        </p>
      </div>
    `;
};
