"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "../app/contact/actions";
import { Mail, MessageSquare, User } from "lucide-react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await submitContactForm(formData);
    if (result.success) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
      setErrorMessage(result.error || "An unexpected error occurred");
    }
  }

  return (
    <form
      action={handleSubmit}
      className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700"
    >
      <div className="space-y-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="text-sm font-medium text-cyan-400 mb-1 block"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            className="bg-gray-700 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500 pl-10"
            placeholder="Your Name"
          />
          <User className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className="text-sm font-medium text-cyan-400 mb-1 block"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            className="bg-gray-700 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500 pl-10"
            placeholder="your.email@example.com"
          />
          <Mail className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
        </div>
        <div className="relative">
          <label
            htmlFor="message"
            className="text-sm font-medium text-cyan-400 mb-1 block"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="bg-gray-700 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500 pl-10 pt-2"
            rows={4}
            placeholder="Your message here..."
          />
          <MessageSquare className="absolute left-3 top-9 h-5 w-5 text-gray-400" />
        </div>
        <SubmitButton />
      </div>
      {formStatus === "success" && (
        <p className="mt-4 text-green-400 text-center">
          Thank you for your message. We&apos;ll get back to you soon!
        </p>
      )}
      {formStatus === "error" && (
        <p className="mt-4 text-red-400 text-center">{errorMessage}</p>
      )}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}
