import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { authenticate } from "../../services/show-service";

function LoginScreen() {
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const handleLogin = (data) => {
    authenticate(data)
      .then((registerUser) => {
        navigation("/");
      })

      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { type: "custom", message: errors[error].message });
          });
        }
      });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-user fa-fw"></i>
          </span>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="email"
            {...register("email", {
              required: "The email is required",
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-key fa-fw"></i>
          </span>
          <input
            type="text"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            placeholder="password"
            {...register("password", {
              required: "The password is required",
            })}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <div className="d-grid mt-2">
          <button className="btn-success" type="submit" disabled={!isValid}>
            {" "}
            Login!
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginScreen;
