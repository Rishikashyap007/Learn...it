
import User from "../Models/UserModel.js";
import Course from "../Models/courseModel.js";

export const addToCart = async (req, res) => {
  try {
    const { courseID, userid } = req.body;
    
    // Parse the JSON string to get user ID
    const { id } = JSON.parse(userid);
    
    // Retrieve user and course objects
    const user = await User.findById(id);
    const course = await Course.findById(courseID);
    
    if (!user || !course) {
      return res.status(404).json({ message: "User or Course not found" });
    }
    
    // Add course to user's cart
    user.cart.push(courseID);
    
    // Save the updated user object
    await user.save();
    
    res.status(200).json({ message: "Course added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export const cartItems = async(req,res)=>{
  
    try {
       const user = await User.findById(req.params.id).populate('cart')

       if(!user){
         return res.status(400).json({msg:"user Not found"})
       }
       res.status(201).json({data:user.cart})
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
}

export const removeFromCart = async(req,res)=>{
  const { userId } = req.body;
  const courseID  = req.params.id 
  console.log(courseID,userId)

  try {
    const user = await User.findByIdAndUpdate(userId,{ 
      $pull: {cart :courseID}
    },{
      new:true
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming user's cart is an array of course IDs
    // user.cart = user.cart.filter(course => course.toString() !== courseID);
    // user.cart =  user.cart.findByIdAndDelete({courseID},)
    
    await user.save();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
}