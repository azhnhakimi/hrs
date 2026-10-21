import { Lock, Mail, Eye, MoveRight } from "lucide-react";
import { useState } from "react";

type Form = {
  email: string;
  password: string;
};

const SigninForm = () => {
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);
  }

  const toggleVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex flex-col gap-6 p-10"
    >
      <div className="flex flex-col">
        <p className="text-foreground text-4xl font-bold">Welcome back!</p>
        <p className="text-muted-foreground text-medium font-medium">
          Sign in to your HRS account
        </p>
      </div>

      <div className="form-field-container">
        <label htmlFor="email" className="form-field-label">
          Email
        </label>
        <div className="form-field-wrapper">
          <Mail />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-field-input"
            placeholder="you@company.com"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="form-field-container">
        <label htmlFor="password" className="form-field-label">
          Password
        </label>
        <div className="form-field-wrapper">
          <Lock />
          <input
            id="password"
            name="password"
            type={passwordVisibility ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            required
            className="form-field-input"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
          <button
            type="button"
            className="hover:cursor-pointer"
            onClick={toggleVisibility}
          >
            <Eye />
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="bg-foreground text-background p-4 rounded-lg mt-8 flex flex-row justify-center items-center gap-2 hover:cursor-pointer font-semibold"
      >
        Sign in
        <MoveRight />
      </button>
    </form>
  );
};

export default SigninForm;
