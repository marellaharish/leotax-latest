import Plan from "../models/planModel";


const isCheckInValid = asyncHandler(async (datetime, plan) => {
    const plan = await Plan.findById(plan);
    if (plan) {
      res.json({
        _id: plan._id,
        name: plan.name,
        validity: plan.numberofdays,
        validtype: plan.validityflag,
        days: plan.pdays,
        slots: plan.pslots,
        type: plan.ptype,
        discount: plan.discount,
        price: plan.price,
      });
    } else {
      res.status(404);
      throw new Error("Member not found");
    }

})
 
export default isCheckInValid
