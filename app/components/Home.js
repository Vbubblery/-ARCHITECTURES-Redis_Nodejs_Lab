import React from 'react';
import action from '../actions/homeActions';
import store from '../stores/homeStores';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.onChange = this.onChange.bind(this);
   }
    componentDidMount() {
      store.listen(this.onChange);
      let socket = io.connect();
      socket.on('news', (data) => {
        action.updateNews(data);
      });
    }
    componentWillUnmount() {
      store.unlisten(this.onChange);
    }
    onChange(state) {
    this.setState(state);
  }

   handleSubmit(event) {
     var data = {
       name: this.state.name,
       category:this.state.category,
       price:this.state.price
     };
     action.sendToServer(data);
   }
  render() {
    return (
    <div className='container'>
         <form className="form-horizontal"> 
          <div className="form-group"> 
           <label className="col-sm-2 control-label">Book Name</label> 
           <div className="col-sm-10"> 
           
            <input type="text" className="form-control" value={this.state.name} onChange={action.updateName} placeholder="Name"/> 
           </div> 
          </div> 
          <div className="form-group"> 
           <label>Category</label>
              <select value={this.state.category} onChange={action.updateCategory} className="form-control">
                <option>History</option>
                <option>Science</option>
                <option>Biology</option>
                <option>physics</option>
                <option>Language</option>
              </select>
          </div> 
          <div className="form-group"> 
           <label className="col-sm-2 control-label">Price</label> 
           <div className="col-sm-10"> 
            <input type="number" value={this.state.price} onChange={action.updatePrice} className="form-control" placeholder="Price" /> 
           </div> 
          </div> 
          <div className="form-group"> 
           <div className="col-sm-offset-2 col-sm-10"> 
            <button type="button" onClick={this.handleSubmit.bind(this)} className="btn btn-default">Submit</button> 
           </div> 
          </div> 
         </form> 
      <ul className="list-group">
        <li key="1" className="list-group-item active">Client get message</li>
        <li key="2" className="list-group-item">Book Name: {this.state.news.name}</li>
        <li key="3" className="list-group-item">Category: {this.state.news.category}</li>
        <li key="4" className="list-group-item">Price: {this.state.news.price}</li>
      </ul>
    </div>
    );
  }
}

export default Home;
