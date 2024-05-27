    import Course  from "../Models/courseModel.js";

    // export const createCourse = async(req,res)=>{
    //     console.log(req.body)
    //     try {
    //         const {title,description,price,imgSrc,category} = req.body
    
    //         const course = await Course.create({
    //             title,
    //             description,
    //             price,
    //             imgSrc,
    //             category,
    //         })
    //         console.log(course);
    //         res.status(201).json({success:true,msg:'Course Added',data:course})
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({success:false,msg:error.message})
    //     }
    // }

    // export const createCourse = async (req, res) => {
    //     try {
    //     const { title, description, price, imgSrc, category } = req.body;
    
    //     // Validate the input data
    //     if (!title || !description || !price || !imgSrc || !category) {
    //         return res.status(400).json({ success: false, msg: "All fields are required" });
    //     }
    
    //     // Check for duplicate title
    //     const existingCourse = await Course.findOne({ title });
    //     if (existingCourse) {
    //         return res.status(409).json({ success: false, msg: "Course with this title already exists" });
    //     }
    
    //     // Create the course
    //     const course = await Course.create({
    //         title,
    //         description,
    //         price,
    //         imgSrc,
    //         category,
    //     });
    
    //     res.status(201).json({ success: true, msg: "Course Added", data: course });
    //     } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ success: false, msg: `Course creation error: ${error.message}` });
    //     }
    // };

    // export const createCourse = async (req, res) => {
    //     try {
    //         const { title, description, price, imgSrc, category, video } = req.body;
    
    //         // Validate the input data
    //         if (!title || !description || !price || !imgSrc || !category || !video || !video.title || !video.description || !video.videoUrl) {
    //             return res.status(400).json({ success: false, msg: "All fields are required" });
    //         }
    
    //         // Check for duplicate title
    //         const existingCourse = await Course.findOne({ title });
    //         if (existingCourse) {
    //             return res.status(409).json({ success: false, msg: "Course with this title already exists" });
    //         }
    
    //         // Create the course
    //         const course = await Course.create({
    //             title,
    //             description,
    //             price,
    //             imgSrc,
    //             category,
    //             videos: [video]
    //         });
    
    //         res.status(201).json({ success: true, msg: "Course Added", data: course });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ success: false, msg: `Course creation error: ${error.message}` });
    //     }
    // };
    export const createCourse = async (req, res) => {
        try {
            const { title, description, price, imgSrc, category, video } = req.body;
    
            // Validate the input data
            if (!title || !description || !price || !imgSrc || !category || !video || !video.title || !video.description || !video.videoUrl) {
                return res.status(400).json({ success: false, msg: "All fields are required" });
            }
    
            // Check for duplicate title
            const existingCourse = await Course.findOne({ title });
            if (existingCourse) {
                return res.status(409).json({ success: false, msg: "Course with this title already exists" });
            }
    
            // Convert videos array to string
            const videosString = JSON.stringify([video]);
    
            // Create the course
            const course = await Course.create({
                title,
                description,
                price,
                imgSrc,
                category,
                videos: videosString
            });
    
            res.status(201).json({ success: true, msg: "Course Added", data: course });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, msg: `Course creation error: ${error.message}` });
        }
    };
    
    
    

    export const getallcourses = async(req,res)=>{
    try {
        const courses = await Course.find({})
        // console.log(courses)
        res.status(201).json({success:true,data:courses})
    } catch (error) {
        res.status(500).json({success:false,msg:"courses not present"})
    }

    }

    export const getcoursesByID = async(req,res)=>{
        try {
            const courseDetails = await Course.findById(req.params.id)
            if(!courseDetails){
                return res.status(404).json({success:true,msg:"Course not found"})
            }
            res.status(200).json({
                success:true,
                courseDetails
            })
        } catch (error) {
            
        }
    }

    // export const deleteCourse = async(req,res)=>{
    //     const course = await User.findbyIdAndDelete(req.params.id)
    //     console.log(course);
    //     req.status(201).json({success:true,msg:"Course deleted Successfully"})
    // }


export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ success: false, msg: "Course not found" });
    }

    res.status(200).json({ success: true, msg: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, msg: `Error deleting course: ${error.message}` });
  }
};


export const updateCourse = async(req,res) =>{
    const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedCourse,
      message: 'Course updated successfully',
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }

}

