import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as showService from "../../services/show-service";
import Select from "react-select";
import categories from "../../inmemory/Categories";
import { ColorRing } from "react-loader-spinner";
import "./Form.css";
//si al final cal fer una funció URL mirar video de DISS num2 min 12

function ShowForm() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });
  console.log("categories", watch("categories"));

  const handleCreateShowSubmit = (data) => {
    console.log(data);
    setLoading(true);
    showService
      .createShow(data)
      .then((show) => navigation("/Shows"))
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
        <form className="form" onSubmit={handleSubmit(handleCreateShowSubmit)}>
          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-microphone fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              placeholder="Artist"
              {...register("title", {
                required: "The name of the show is required",
                maxLength: {
                  value: 40,
                  message:
                    "The name of the show must be less than 40 characters",
                },
              })}
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          <Controller
            name="categories"
            control={control}
            render={({ field: { onBlur, onChange, value } }) => (
              <div className="input-group mb-1">
                <span className="input-group-text">
                  <i className="fa fa-music fa-fw"></i>
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
              <i className="fa fa-map fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              placeholder="city"
              {...register("city", {
                required: "The city is required",
                maxLength: {
                  value: 30,
                  message: "The city name must be less than 30 characters",
                },
              })}
            />
            {errors.city && (
              <div className="invalid-feedback">{errors.city.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-map fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.location ? "is-invalid" : ""}`}
              placeholder="location"
              {...register("location", {
                required: "The location is required",
                maxLength: {
                  value: 30,
                  message: "The location must be less than 30 characters",
                },
              })}
            />
            {errors.location && (
              <div className="invalid-feedback">{errors.location.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-calendar fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.date ? "is-invalid" : ""}`}
              placeholder="date"
              {...register("date", {
                required: "The date is required",
              })}
            />
            {errors.date && (
              <div className="invalid-feedback">{errors.date.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.duration ? "is-invalid" : ""}`}
              placeholder="duration"
              {...register("duration")}
            />
            {errors.duration && (
              <div className="invalid-feedback">{errors.duration.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-image fa-fw"></i>
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

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-pencil fa-fw"></i>
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
              <i className="fa fa-money fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.price ? "is-invalid" : ""}`}
              placeholder="price"
              {...register("price", {
                required: "The price is required",
                maxLength: 8,
              })}
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price.message}</div>
            )}
          </div>

          <div className="input-group mb-1">
            <span className="input-group-text">
              <i className="fa fa-tag fa-fw"></i>
            </span>
            <input
              type="text"
              className={`form-control ${errors.url ? "is-invalid" : ""}`}
              placeholder="url"
              {...register("url", {
                required: "The url is required",
                validate: (value) => {
                  try {
                    new URL(value);
                    return true;
                  } catch (error) {
                    return "Url is not valid";
                  }
                },
              })}
            />
            {errors.url && (
              <div className="invalid-feedback">{errors.url.message}</div>
            )}
          </div>

          <div className="d-grid mt-2">
            <button className="btn-success" type="submit" disabled={!isValid}>
              {" "}
              Add a Show!
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ShowForm;
