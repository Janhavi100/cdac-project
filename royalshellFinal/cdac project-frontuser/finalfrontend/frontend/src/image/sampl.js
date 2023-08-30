const data = {
    data:[
      {
        facilityId:1,
        title:"A",
        description:"snjksgfk"
      },
      {
        facilityId:2,
        title:"B",
        description:"snjksgfk"
      },
      {
        facilityId:3,
        title:"C",
        description:"snjksgfk"
      }
    ]
 }
 

 class Ingredient extends React.Component {
     constructor(props){
         super(props)
         this.state = {
           ingredients: [],
           ingedientsList: [],
           checkedList:[],
           isChecked: false,
         }
     }
     
         componentDidMount() {
             const ingredients = data.data.map((facility, index) => {
                 return (
                     <tr key={index}>
                         <td scope="col">
                             <label>{data.data[index].title}</label>
                         </td>
                         <td scope="col">
                            <input
                               id={data.data[index].facilityId}
                               key={index}
                               type="checkbox"
                               name={"newIngredients"}
                               value={data.data[index].facilityId}    
                               onChange={(e)=>this.onFacilityChange(e,data.data[index].id)}
                             />
                         </td>
                         <td scope="col">
                             <input
                                 id={data.data[index].id + "amount"}
                                 key={index}
                                 type="number"
                                 min="0"
                                 max="500"
                                 name="amount"
                                 placeholder="grams"
                                 onChange={this.onIngredientChange}
                             />
                         </td>
                     </tr>
                 );
             });
             this.setState({ingredients: ingredients});
     }
     
      onIngredientChange = (e,id) => {
      let resultArray = []
      if(e.target.checked)      //if checked (true), then add this id into checkedList
      {
           resultArray = this.state.checkedList.filter(CheckedId=>
             CheckedId !== id
           )
           resultArray.push(id) 
      }
      else                    //if not checked (false), then remove this id from checkedList
      {
         resultArray = this.state.checkedList.filter(CheckedId=>
             CheckedId !== id
         )
      }
      console.log(resultArray)
 
      this.setState({
         checkedList:resultArray
      })
      }
     
     
     
     render() {
         return (
             <div className="form-group">
                 <table className="table tr-history table-striped small">
                     <thead>
                     <tr>
                         <th scope="col">
                             <h5>Ingredient</h5>
                         </th>
                         <th scope="col">
                             <h5>Check</h5>
                         </th>
                         <th scope="col">
                             <h5>Amount</h5>
                         </th>
                     </tr>
                     </thead>
                     <tbody>
                     {this.state.ingredients}
                     </tbody>
                 </table>
             </div>
         )
     }
 }
 // Render it
 ReactDOM.render(
   <Ingredient />,
   document.getElementById("react")
 );