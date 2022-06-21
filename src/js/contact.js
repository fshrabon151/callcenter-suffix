(function () {
  emailjs.init("HPCap5-FjcFCUB1Gv");
})();
const form = document.getElementById("form");
const submitBtn = document.getElementById("sendData");
const formError = document.getElementById("formError");

// Handle submit events
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDataElements = new FormData(this);

  // Create an array to hold the name/value pairs
  const pairs = [];

  // Add each name/value pair to the array
  for (const [name, value] of formDataElements) {
    pairs.push({ name, value });
  }

  const formData = Object.assign(
    {},
    ...pairs.map((item) => ({ [item.name]: item.value }))
  );
  submitBtn.innerText = "Please wait...";
  submitBtn.setAttribute("disabled", true);

  emailjs.send("service_s0blfc8", "template_5fpj54m", formData).then(
    () => {
      submitBtn.innerText = "Send";
      submitBtn.setAttribute("disabled", false);
      formError.innerHTML = `
        <div
          class="bg-green-100 space-x-11 flex items-center border font-bold border-green-200 text-sm text-green-700 rounded-md p-4 mb-8"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Message sent successfully
        </div>`;
      form.reset();
    },
    (err) => {
      submitBtn.innerText = "Send";
      submitBtn.setAttribute("disabled", false);
      formError.innerHTML = `
        <div
          class="bg-red-100 space-x-11 flex items-center border font-bold border-red-200 text-sm text-red-500 rounded-md p-4 mb-8"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Something went wrong, try later
        </div>
      `;
      console.log(err.text);
    }
  );
});
