// Submit feedback via google form
function submitFeedback(topic, solved, comment) {
  let url = "https://docs.google.com/forms/d/e/1FAIpQLScozzvmx1JriPPDhgI8ZfYei8UHE0KqMpBfZ-V6EDei7DxcZA/formResponse";

  let dataToPost = new FormData();
  log({"topic": topic, "solved": solved, "comment": comment});

  dataToPost.append("entry.296864934", topic);
  dataToPost.append("entry.845126131", solved);
  dataToPost.append("entry.1967247620", comment);

  fetch(url,{
    method: "POST",
    mode: "no-cors",
    header:{
      'Content-Type': 'application/json'
    },
    body: dataToPost
  })
  .then(data=>{
    log(data);
    log("feedback submitted");
  })
  .catch(err=>console.error(err));
}
