import { cva, VariantProps } from "class-variance-authority"; // To be able to add and stylize buttons when hovering over them (i.e. background fades to black while icon is hovered). Variantprops will take the type of our style we created and give us all we need.
import { ComponentProps } from "react"; // Can add all normal button props to the Button function export
import { twMerge } from "tailwind-merge"; // To prevent class conflicts and only the most specific class is applied

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    // The variance property will determine what keys will be set
    variant: {
      default: ["bg-fade", "hover:bg-fade-hover"], // normal gray button with background
      ghost: ["hover:bg-gray-100"], // for no background until the pointer is hovering it
      dark: [
        "bg-fade-dark",
        "text-fade",
        "hover:bg-fade-dark-hover",
        "hover:text-fade",
      ], // For when a category tag is hovered or clicked on
    },
    size: {
      default: ["rounded", "p-2"], // default for buttons below the header
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ], // for buttons that have icons that you can hover and click
      sideIcon: [
        "rounded-full",
        "w-12",
        "h-12",
        "flex",
        "items-center",
        "justify-center",
        "p-4",
      ],
    },
  },
  defaultVariants: {
    // used when a variant or size is not passed to a created button
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)} //apply classname last so variatn takes top priority
    />
  ); //twMerge will make sure buttonStyles and className works perfectly
}
