(function () {
  emailjs.init("HPCap5-FjcFCUB1Gv");
})();
function convertFormToJSON(form) {
  const array = $(form).serializeArray(); // Encodes the set of form elements as an array of names and values.
  const json = {};
  $.each(array, function () {
    json[this.name] = this.value || "";
  });
  return json;
}
$("#form").submit(function (e) {
  $("#sendData").attr("disabled", true);
  $("#sendData").html("Sending");
  e.preventDefault();
  const form = $(e.target);
  const json = convertFormToJSON(form);

  emailjs.send("service_s0blfc8", "template_5fpj54m", json).then(
    function (res) {
      $("#form").trigger("reset");
      $("#sendData").attr("disabled", false);
      $("#sendData").html("Send");
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
