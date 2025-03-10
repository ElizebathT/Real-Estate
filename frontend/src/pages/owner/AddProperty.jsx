import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import OwnerFooter from "../../components/OwnerFooter";

const AddProperty = () => {
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
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    propertyFor: Yup.string().oneOf(["buy", "rent"], "Invalid option").required(),
    bedrooms: Yup.number()
      .min(0, "Minimum 0")
      .max(20, "Maximum 20")
      .required("Number of Bedrooms is required"),
    bathrooms: Yup.number()
      .min(0, "Minimum 0")
      .max(20, "Maximum 20")
      .required("Number of Bathrooms is required"),
    kitchens: Yup.number()
      .min(0, "Minimum 0")
      .max(10, "Maximum 10")
      .required("Number of Kitchens is required"),
    parkingSpot: Yup.string().oneOf(["yes", "no"], "Invalid selection").required(),
    landArea: Yup.number().required("Land area is required"),
    latitude: Yup.number().required("Latitude is required"),
    longitude: Yup.number().required("Longitude is required"),
    
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
      console.log("Form Submitted:", values);
    },
  });

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Add a New Property</h2>
        <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded-lg shadow-md">

          {/* Property Type */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Property Type</label>
            <select
              {...formik.getFieldProps("propertyType")}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
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
            <input
              type="text"
              {...formik.getFieldProps("price")}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter price"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500">{formik.errors.price}</p>
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Description</label>
            <textarea
              {...formik.getFieldProps("description")}
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Enter property description"
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500">{formik.errors.description}</p>
            )}
          </div>

          {/* Land Area */}
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Land Area (sqft)</label>
            <input
              type="number"
              {...formik.getFieldProps("landArea")}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Enter land area in square feet"
            />
            {formik.touched.landArea && formik.errors.landArea && (
              <p className="text-red-500">{formik.errors.landArea}</p>
            )}
          </div>

          {/* Latitude & Longitude */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-lg font-semibold mb-2">Latitude</label>
              <input
                type="number"
                {...formik.getFieldProps("latitude")}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter latitude"
              />
              {formik.touched.latitude && formik.errors.latitude && (
                <p className="text-red-500">{formik.errors.latitude}</p>
              )}
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2">Longitude</label>
              <input
                type="number"
                {...formik.getFieldProps("longitude")}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter longitude"
              />
              {formik.touched.longitude && formik.errors.longitude && (
                <p className="text-red-500">{formik.errors.longitude}</p>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
  <label className="block text-lg font-semibold mb-2">Features</label>
  <textarea
    {...formik.getFieldProps("features")}
    className="w-full p-3 border border-gray-300 rounded-lg"
    placeholder="Enter property features (comma-separated)"
    rows="3"
  />
</div>


        {/* Media Upload (Images & Videos) */}
<div className="mb-4 flex flex-col gap-4">
  {/* Image Upload */}
  <div>
    <label className="block text-lg font-semibold mb-2">Upload Property Images</label>
    <input 
      type="file" 
      accept="image/*" 
      multiple 
      onChange={handleImageUpload} 
      className="w-full p-3 border border-gray-300 rounded-lg"
    />
    {images.length > 0 && (
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={URL.createObjectURL(image)} 
              alt={`Property Image ${index + 1}`} 
              className="w-full h-32 object-cover rounded-md" 
            />
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Video Upload */}
  <div>
    <label className="block text-lg font-semibold mb-2">Upload Property Videos</label>
    <input 
      type="file" 
      accept="video/*" 
      multiple 
      onChange={handleVideoUpload} 
      className="w-full p-3 border border-gray-300 rounded-lg"
    />
    {videos.length > 0 && (
      <div className="mt-4 grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div key={index}>
            <video 
              src={URL.createObjectURL(video)} 
              controls 
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    )}
  </div>
</div>



          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-white p-4 rounded-lg w-45 hover:bg-teal-700"
          >
            Submit Property
          </button>
        </form>
      </div>
      <OwnerFooter />
    </>
  );
};

export default AddProperty;
