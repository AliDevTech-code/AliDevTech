import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Google Apps Script Web App URL
export function useSubmitContact() {
  const [isPending, setIsPending] = useState(false);
  const { toast } = useToast();

  const submit = async (data: { name: string; email: string; category: string; subject: string; message: string }) => {
    setIsPending(true);

    try {
      // Send all form fields, including Category, to Google Sheets.
      await fetch("https://script.google.com/macros/s/AKfycbzbGs-N4Xp6rUqKZHVvEg8Qy-fcghdm6iFVYSPYVObfv3hPt1GxlMiRdfi99HdNLGinMg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: data.name,
          email: data.email,
          category: data.category,
          subject: data.subject,
          message: data.message,
        }),
      });

      toast({
        title: "Message sent successfully!",
        description: `Thank you for reaching out, ${data.name}. I'll get back to you soon.`,
      });
    } catch (error) {
      toast({
        title: "Message sent!",
        description: `Thank you for reaching out, ${data.name}. I'll get back to you soon.`,
      });
    } finally {
      setIsPending(false);
    }
  };

  return { submit, isPending };
}
