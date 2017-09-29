import alt from '../alt';

class homeActions{
  constructor(){
    this.generateActions(
      'updateCategory',
      'updateName',
      'updatePrice',
      'updateNews',
      'sendDone',
      'sendFail'
    );
  }
  sendToServer(data){
    $.ajax({ 
      type:'POST',
      url: '/redis/publish',
      data: data
    })
      .done(() => {
        this.actions.sendDone();
      })
      .fail((jqXhr) => {
        this.actions.sendFail(jqXhr)
      });
  }
}
export default alt.createActions(homeActions);