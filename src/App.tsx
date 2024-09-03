import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormFields = z.infer<typeof schema>;

export default function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "testing@gmail.com",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", { type: "server", message: "Server error" });
    }
  };

  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center">
      <div className="flex justify-center">
        <form
          className="bg-slate-700 mx-auto p-10 max-w-5xl rounded-lg shadow-xl shadow-purple-500/15 hover:shadow-purple-500/25 ring-2 ring-purple-500/25"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("email")}
            className="form-input"
            type="email"
            placeholder="emailtest.com"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            {...register("password")}
            className="form-input"
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button disabled={isSubmitting} className="login-button">
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </form>
      </div>
    </div>
  );
}
