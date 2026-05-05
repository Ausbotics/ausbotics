"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/auth-context";
import { Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Navigation } from "./navigation";

const appointmentSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  preferredDate: z
    .string()
    .refine(
      (date) => new Date(date) >= new Date(new Date().toDateString()),
      "Please select a future date"
    ),
  preferredTime: z.string().min(1, "Preferred time is required"),
  purpose: z.string().min(1, "Purpose is required"),
  description: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

export function AppointmentBooking() {
  const { bookAppointment } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  const purposeOptions = [
    "Product Demo",
    "Consultation",
    "Integration Discussion",
    "Pricing Information",
    "Technical Support",
    "Partnership Inquiry",
    "Other",
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setError("");
    try {
      //@ts-ignore
      const success = await bookAppointment(data);
      if (success) {
        setIsSubmitted(true);
        reset();
      } else setError("Failed to book appointment. Please try again.");
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <section className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10">
            <Card className="text-center shadow-md rounded-2xl">
              <CardContent className="p-10">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  Appointment Booked!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  Thank you for booking an appointment. We'll contact you soon
                  to confirm the details.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full rounded-2xl"
                >
                  Book Another Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </>
    );
  }

  const selectedTime = watch("preferredTime");
  const selectedPurpose = watch("purpose");

  const inputClasses =
    "p-4 rounded-xl shadow-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500";

  return (
    <>
      <Navigation />
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Book an Appointment
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Schedule a personalized meeting to see how our AI calling agents
              can transform your customer communications.
            </p>
          </div>

          <Card className="shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-neutral-900 dark:text-neutral-100">
                <Calendar className="h-5 w-5" />
                <span>Schedule Your Appointment</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {error && (
                  <div className="flex items-center space-x-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-destructive">{error}</span>
                  </div>
                )}

                {/* Name + Email */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <Label
                      htmlFor="name"
                      className="text-neutral-900 dark:text-neutral-100"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className={inputClasses}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Label
                      htmlFor="email"
                      className="text-neutral-900 dark:text-neutral-100"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className={inputClasses}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <Label
                      htmlFor="preferredDate"
                      className="text-neutral-900 dark:text-neutral-100"
                    >
                      Preferred Date *
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClasses}
                      {...register("preferredDate")}
                    />
                    {errors.preferredDate && (
                      <p className="text-sm text-destructive">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Label
                      htmlFor="preferredTime"
                      className="text-neutral-900 dark:text-neutral-100"
                    >
                      Preferred Time *
                    </Label>
                    <Select
                      value={selectedTime}
                      onValueChange={(value) =>
                        setValue("preferredTime", value)
                      }
                    >
                      <SelectTrigger className={inputClasses}>
                        <SelectValue placeholder="Select a time">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{selectedTime || "Select a time"}</span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.preferredTime && (
                      <p className="text-sm text-destructive">
                        {errors.preferredTime.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Purpose */}
                <div className="space-y-4">
                  <Label
                    htmlFor="purpose"
                    className="text-neutral-900 dark:text-neutral-100"
                  >
                    Purpose of Meeting *
                  </Label>
                  <Select
                    value={selectedPurpose}
                    onValueChange={(value) => setValue("purpose", value)}
                  >
                    <SelectTrigger className={inputClasses}>
                      <SelectValue placeholder="Select the purpose of your meeting" />
                    </SelectTrigger>
                    <SelectContent>
                      {purposeOptions.map((purpose) => (
                        <SelectItem key={purpose} value={purpose}>
                          {purpose}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.purpose && (
                    <p className="text-sm text-destructive">
                      {errors.purpose.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <Label
                    htmlFor="description"
                    className="text-neutral-900 dark:text-neutral-100"
                  >
                    Description (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Additional details..."
                    rows={4}
                    className={inputClasses + " resize-none"}
                    {...register("description")}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full rounded-2xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                      <span>Booking...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Book Appointment</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
