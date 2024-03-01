const { TransactionModel } = require("../Models/All_Transaction");

//SEARCH API ACCORDING TO DESCRIPTION AND TITLE , PAGINATION IS ALSO IMPLEMENTED HERE
const PieChartController = async (req, res) => {
  const { month } = req.query;
  const monthIndex = new Date(`${month} 1, 2000`).getMonth() + 1;
  try {
    const items = await TransactionModel.aggregate([
      {
        $match: {
          $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
        },
      },
    ]);
    const categoryData={}
    items.map((ele,i)=>{
        if(categoryData[ele.category]){
            categoryData[ele.category]++;
        }
        else{
            categoryData[ele.category]=1;
        }
    })
    res.send(categoryData);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { PieChartController };

// else if (req.query.month) {
//     const { month } = req.query;
//     const monthIndex = new Date(`${month} 1, 2000`).getMonth() + 1;

//     try {
//       const items = await TransactionModel.aggregate([
//         {
//           $match: {
//             $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
//           },
//         },
//       ]);
//       res.send(items);
//     } catch (err) {
//       res.send(err);
//     }
//   }
