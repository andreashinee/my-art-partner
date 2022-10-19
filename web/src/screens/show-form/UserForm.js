import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as userService from "../../services/user-service";
import Select from "react-select";
import categories from "../../inmemory/Categories";
import { ColorRing } from "react-loader-spinner";
import "./Form.css";

function UserForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });
  console.log("categories", watch("categories"));

  const handleCreateUserSubmit = (data) => {
    console.log(data);
    setLoading(true);
    userService
      .createUser(data)
      .then((user) => console.log("Everything is ok!", user))
      .catch((error) => {
        if (error.response?.data?.errors) {
          const { errors } = error.response.data;
          Object.keys(error.response.data.errors).forEach((error) => {
            setError(error, { type: "custom", message: errors[error].message });
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        <form className="form" onSubmit={handleSubmit(handleCreateUserSubmit)}>
          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="name"
              {...register("name", {
                required: "The name is required",
                maxLength: {
                  value: 20,
                  message: "The name must be less than 20 characters",
                },
              })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              placeholder="city"
              {...register("city", {
                required: "The city is required",
                maxLength: {
                  value: 20,
                  message:
                    "The name of your city must be less than 20 characters",
                },
              })}
            />
            {errors.city && (
              <div className="invalid-feedback">{errors.city.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
              placeholder="age"
              {...register("age", {
                required: "The age is required",
                maxLength: {
                  value: 2,
                  message: "his website is only for humans :)",
                },
              })}
            />
            {errors.age && (
              <div className="invalid-feedback">{errors.age.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <textarea
              type="text"
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
              placeholder="description"
              {...register("description", {
                maxLength: {
                  value: 1000,
                  message:
                    "A little description please, we don't want to reed the bible :P",
                },
              })}
            />
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.alterego ? "is-invalid" : ""}`}
              placeholder="alterego"
              {...register("alterego", {
                required: "The alterego is required",
                maxLength: {
                  value: 20,
                  message:
                    "The name of your alterego must be less than 20 characters",
                },
              })}
            />
            {errors.alterego && (
              <div className="invalid-feedback">{errors.alterego.message}</div>
            )}
          </div>

          <Controller
            name="categories"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <div className="input-group mb-1">
                <span className="input-group-text">
                  <i className="fa fa-tag fa-fw"></i>
                </span>
                <Select
                  className="form-control p-0"
                  value={categories.find(
                    (category) => category.value === value
                  )}
                  onChange={(categories) =>
                    onChange(categories.map((category) => category.value))
                  }
                  onBlur={onBlur}
                  isMulti
                  options={categories}
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: 0,
                    }),
                  }}
                />
                {errors.category && (
                  <div className="invalid-feedback">
                    {errors.category.message}
                  </div>
                )}
              </div>
            )}
          />

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.band ? "is-invalid" : ""}`}
              placeholder="band"
              {...register("band", {
                required:
                  "The name of your favourite band or singuer is required",
                maxLength: { value: 20, message: "only one!" },
              })}
            />
            {errors.band && (
              <div className="invalid-feedback">{errors.band.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.song ? "is-invalid" : ""}`}
              placeholder="song"
              {...register("song", {
                required: "The name of your favourite song is required",
                maxLength: { value: 20, message: "only one!" },
              })}
            />
            {errors.song && (
              <div className="invalid-feedback">{errors.song.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.book ? "is-invalid" : ""}`}
              placeholder="book"
              {...register("book", {
                required: "The name of your favourite book is required",
                maxLength: { value: 20, message: "only one!" },
              })}
            />
            {errors.book && (
              <div className="invalid-feedback">{errors.book.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${
                errors.ilustrator ? "is-invalid" : ""
              }`}
              placeholder="ilustrator"
              {...register("ilustrator", {
                required: "The name of your favourite ilustrator is required",
                maxLength: { value: 20, message: "only one!" },
              })}
            />
            {errors.ilustrator && (
              <div className="invalid-feedback">
                {errors.ilustrator.message}
              </div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.picture ? "is-invalid" : ""}`}
              placeholder="picture"
              {...register("picture")}
            />
            {errors.picture && (
              <div className="invalid-feedback">{errors.picture.message}</div>
            )}
          </div>

          <div className="d-grid mt-2">
            <button className="btn-success" type="submit" disabled={!isValid}>
              {" "}
              Register{" "}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
export default UserForm;
