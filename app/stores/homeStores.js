import alt from '../alt';
import action from '../actions/homeActions';

class homeStores {
  constructor(){
    this.bindActions(action);
    this.name = "";
    this.category = "History";
    this.price = 0;
    this.news = {};
  };
  onUpdateCategory(data){
    this.category = event.target.value;
  }
  onUpdateName(event){
    this.name = event.target.value;
  }
  onUpdatePrice(event){
    this.price = event.target.value;
  }
  onUpdateNews(data){
    this.news = data;
    toastr.success("Subscribe Success");
  }
  onSendDone(){
    toastr.success("Publish Success");
    this.name = "";
    this.category = "History";
    this.price = 0;
  }
  onSendFail(err){
    toastr.error("Publish failed");
  }
}
export default alt.createStore(homeStores);