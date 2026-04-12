import { useState } from "react";

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendForm = async (datos: Object) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tizianoluziramos@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...datos,
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };

  return { sendForm, isLoading, error, isSuccess };
};
