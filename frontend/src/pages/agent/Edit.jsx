import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AgentFooter from "../../components/AgentFooter";

const Edit = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle Video Upload
  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    setVideos(files);
  };

  // Validation Schema
  const validationSchema = Yup.object({
    propertyType: Yup.string().required("Property Type is required"),
    price: Yup.number().typeError("Price must be a number").positive("Price must be positive").required("Price is required"),
    description: Yup.string().min(10, "Description must be at least 10 characters").required("Description is required"),
    propertyFor: Yup.string().oneOf(["buy", "rent"], "Invalid option").required(),
    bedrooms: Yup.number().min(0).max(20).required("Number of Bedrooms is required"),
    bathrooms: Yup.number().min(0).max(20).required("Number of Bathrooms is required"),
    kitchens: Yup.number().min(0).max(10).required("Number of Kitchens is required"),
    parkingSpot: Yup.string().oneOf(["yes", "no"], "Invalid selection").required(),
    landArea: Yup.number().required("Land area is required"),
    latitude: Yup.number().required("Latitude is required"),
    longitude: Yup.number().required("Longitude is required"),
    features: Yup.string().required("Features are required"),
  });

  const formik = useFormik({
    initialValues: {
      propertyType: "home",
      price: "",
      description: "",
      propertyFor: "buy",
      bedrooms: "",
      bathrooms: "",
      kitchens: "",
      parkingSpot: "yes",
      landArea: "",
      latitude: "",
      longitude: "",
      features: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Updated:", values);
    },
  });

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Edit Property</h2>
        <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg shadow-md">

          {/* Property Type */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Property Type</label>
            <select {...formik.getFieldProps("propertyType")} className="w-full p-3 border border-gray-300 rounded-lg">
              <option value="home">Home</option>
              <option value="land">Land</option>
              <option value="both">Home & Land</option>
              <option value="flat">Flat</option>
              <option value="cp">Commercial Property</option>
            </select>
            {formik.touched.propertyType && formik.errors.propertyType && (
              <p className="text-red-500">{formik.errors.propertyType}</p>
            )}
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Price</label>
            <input type="text" {...formik.getFieldProps("price")} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter price" />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500">{formik.errors.price}</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Description</label>
            <textarea {...formik.getFieldProps("description")} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter property description"></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500">{formik.errors.description}</p>
            )}
          </div>

          {/* Features */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Features</label>
            <input type="text" {...formik.getFieldProps("features")} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter property features" />
            {formik.touched.features && formik.errors.features && (
              <p className="text-red-500">{formik.errors.features}</p>
            )}
          </div>

          {/* Latitude & Longitude */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Latitude</label>
            <input type="text" {...formik.getFieldProps("latitude")} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter latitude" />
            {formik.touched.latitude && formik.errors.latitude && (
              <p className="text-red-500">{formik.errors.latitude}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Longitude</label>
            <input type="text" {...formik.getFieldProps("longitude")} className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter longitude" />
            {formik.touched.longitude && formik.errors.longitude && (
              <p className="text-red-500">{formik.errors.longitude}</p>
            )}
          </div>

          {/* Media Upload (Images & Videos) */}
          <div className="mb-4 flex flex-col gap-4">
            <div>
              <label className="block text-lg font-semibold mb-2">Upload Property Images</label>
              <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Upload Property Videos</label>
              <input type="file" accept="video/*" multiple onChange={handleVideoUpload} className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-gray-600 text-white p-4 rounded-lg w-45 hover:bg-teal-700">Update Property</button>
        </form>
      </div>
      <AgentFooter />
    </>
  );
};

export default Edit;
