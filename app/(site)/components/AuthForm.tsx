"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useState, useCallback } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // AXIOS REGISTER
    }

    if (variant === "LOGIN") {
      // NEXTAUTH SIGN IN
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // NEXTAUTH SOCIAL SIGN IN
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input errors={errors} id="name" label="Name" register={register} />
          )}
          <Input
            errors={errors}
            id="email"
            type="email"
            label="Email address"
            register={register}
          />
          <Input
            errors={errors}
            id="password"
            type="password"
            label="Password"
            register={register}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">{variant === "LOGIN" ? "Sign In" : "Register"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
