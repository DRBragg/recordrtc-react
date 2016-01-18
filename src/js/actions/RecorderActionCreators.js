export default {
  postFiles(data) {
    var body = JSON.stringify(data);

    fetch('/upload', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body  
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      Dispatcher.dispatch({
        type: ActionType.UPLOAD_RESPONSE,
        success: json.success,
        link: json.link
      })
    })
    .catch((err) => {
      console.log('error: ', err);
    })
  }
} 