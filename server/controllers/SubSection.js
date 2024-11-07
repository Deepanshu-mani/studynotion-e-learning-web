const Section = require("../models/Section");
const SubSection = require("../models/SubSection");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

// Create a new sub-section for a given section
exports.createSubSection = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { sectionId, title, description } = req.body;
    const video = req.files?.video; // Optional chaining for safety

    // Check if all necessary fields are provided
    if (!sectionId || !title || !description || !video) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Upload the video file to Cloudinary
    const uploadDetails = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_NAME
    );

    // Create a new sub-section with the necessary information
    const subSectionDetails = await SubSection.create({
      title,
      timeDuration: `${uploadDetails.duration}`,
      description,
      videoUrl: uploadDetails.secure_url,
    });

    // Update the corresponding section with the newly created sub-section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      { $push: { subSection: subSectionDetails._id } },
      { new: true }
    ).populate("subSection");

    // Return the updated section in the response
    return res.status(200).json({ success: true, data: updatedSection });
  } catch (error) {
    console.error("Error creating new sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Update a sub-section
exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId, title, description } = req.body;

    // Find the sub-section by ID
    const subSection = await SubSection.findById(subSectionId);
    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "Sub-section not found",
      });
    }

    // Update title and description if provided
    if (title) subSection.title = title;
    if (description) subSection.description = description;

    // Update video if a new one is provided
    if (req.files?.video) {
      const video = req.files.video;
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      );
      subSection.videoUrl = uploadDetails.secure_url;
      subSection.timeDuration = `${uploadDetails.duration}`;
    }

    // Save the updated sub-section
    await subSection.save();

    // Retrieve and return the updated section
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    );

    return res.status(200).json({
      success: true,
      message: "Sub-section updated successfully",
      data: updatedSection,
    });
  } catch (error) {
    console.error("Error updating sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the sub-section",
      error: error.message,
    });
  }
};

// Delete a sub-section
exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body;

    // Remove sub-section from section
    await Section.findByIdAndUpdate(
      sectionId,
      { $pull: { subSection: subSectionId } },
      { new: true }
    );

    // Delete the sub-section itself
    const subSection = await SubSection.findByIdAndDelete(subSectionId);
    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "Sub-section not found",
      });
    }

    // Retrieve and return the updated section
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    );

    return res.status(200).json({
      success: true,
      message: "Sub-section deleted successfully",
      data: updatedSection,
    });
  } catch (error) {
    console.error("Error deleting sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the sub-section",
      error: error.message,
    });
  }
};