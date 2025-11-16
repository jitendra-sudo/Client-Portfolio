import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  try {
    const response = await emailjs.send(
      "service_x3a2i6m",
      "template_7eau2ve",
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      "gYBZNlFsdDCwi81la"
    );

    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};
