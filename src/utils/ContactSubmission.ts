export const contactFormSubmission = async (
  name: string,
  surname: string,
  email: string,
  message: string
) => {
  try {
    console.log("aditi");
    console.log(process.env.BACKEND, "backend");
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/contact-form/v1/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, surname, email, message }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();

    return {
      ok: true,
      status: 200,
      message: "Contact form submitted successfully",
      data: result,
    };
  } catch (error) {
    const errMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return {
      ok: false,
      status: 500,
      message: "Internal Server Error",
      error: errMessage,
    };
  }
};
