import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as Services from "../../services/show-service";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function LoginScreen() {
  const navigation = useNavigate();
 const value = useContext(AuthContext);

  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({ mode: "onTouched" });

  const handleLogin = (data) => {
    Services
      .authenticate(data)
      .then((data) => {
       value.setRegisterUser(data);
        navigation("/");
      })

      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          console.log(errors);
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { message: errors[error].message });
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
            type="email"
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
            type="password"
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
