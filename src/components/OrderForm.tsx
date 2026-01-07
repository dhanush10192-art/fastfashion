import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const orderSchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  designSize: z.string().min(1, "Please select a design size"),
  quantity: z.number().min(1, "Minimum quantity is 1"),
  notes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

const sizeOptions = [
  { value: "small", label: 'Small (up to 4"×4")', price: 200 },
  { value: "medium", label: 'Medium (up to 8"×10")', price: 350 },
  { value: "large", label: 'Large (up to 12"×16")', price: 550 },
  { value: "custom", label: "Custom Size (Contact for quote)", price: 0 },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(price);
};

const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  const designSize = watch("designSize");
  const quantity = watch("quantity") || 1;

  const selectedSize = sizeOptions.find((s) => s.value === designSize);
  const unitPrice = selectedSize?.price || 0;
  const totalPrice = unitPrice * quantity;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 50MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: OrderFormData) => {
    if (!selectedFile) {
      toast({
        title: "Design Required",
        description: "Please upload your design file",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `designs/${fileName}`;

      setUploadProgress(30);

      const { error: uploadError } = await supabase.storage
        .from("dtf-designs")
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      setUploadProgress(60);

      const { data: urlData } = supabase.storage
        .from("dtf-designs")
        .getPublicUrl(filePath);

      setUploadProgress(80);

      const { error: orderError } = await supabase.from("orders").insert({
        customer_name: data.customerName,
        email: data.email,
        phone: data.phone,
        design_size: data.designSize,
        quantity: data.quantity,
        notes: data.notes || null,
        design_url: urlData.publicUrl,
        unit_price: unitPrice,
        total_price: totalPrice,
        status: "pending",
      });

      if (orderError) throw orderError;

      setUploadProgress(100);
      setIsSuccess(true);

      toast({
        title: "Order Submitted! 🎉",
        description: "We'll review your design and get back to you soon.",
      });

      setTimeout(() => {
        reset();
        setSelectedFile(null);
        setIsSuccess(false);
        setUploadProgress(0);
      }, 3000);
    } catch (error: any) {
      console.error("Order submission error:", error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="order-form" className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Order Received!</h2>
            <p className="text-muted-foreground">
              Thank you for your order. We'll review your design and contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-form" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Place Your Order</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload your design and we'll get started on your custom DTF prints
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Customer Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="customerName">Full Name *</Label>
                <Input
                  id="customerName"
                  placeholder="Enter your name"
                  {...register("customerName")}
                  className="rounded-lg"
                />
                {errors.customerName && (
                  <p className="text-sm text-destructive">{errors.customerName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className="rounded-lg"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (WhatsApp) *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                {...register("phone")}
                className="rounded-lg"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            {/* Design Upload */}
            <div className="space-y-2">
              <Label>Upload Design *</Label>
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  selectedFile ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                }`}
              >
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.pdf,.ai,.eps,.svg"
                  onChange={handleFileChange}
                  className="hidden"
                  id="design-upload"
                />
                <label htmlFor="design-upload" className="cursor-pointer">
                  <Upload
                    className={`w-10 h-10 mx-auto mb-3 ${selectedFile ? "text-accent" : "text-muted-foreground"}`}
                  />
                  {selectedFile ? (
                    <p className="font-medium">{selectedFile.name}</p>
                  ) : (
                    <>
                      <p className="font-medium">Click to upload your design</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        PNG, JPG, PDF, AI, EPS, SVG (max 50MB)
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Size & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Design Size *</Label>
                <Select onValueChange={(value) => setValue("designSize", value)}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.designSize && (
                  <p className="text-sm text-destructive">{errors.designSize.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  {...register("quantity", { valueAsNumber: true })}
                  className="rounded-lg"
                />
                {errors.quantity && (
                  <p className="text-sm text-destructive">{errors.quantity.message}</p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any special requirements or notes for your order..."
                {...register("notes")}
                className="rounded-lg min-h-[100px]"
              />
            </div>

            {/* Price Summary */}
            {designSize && designSize !== "custom" && (
              <div className="bg-secondary/50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Unit Price:</span>
                  <span className="font-medium">{formatPrice(unitPrice)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="font-medium">{quantity}</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-accent">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {uploadProgress < 100 ? `Uploading... ${uploadProgress}%` : "Submitting..."}
                </>
              ) : (
                "Submit Order"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
