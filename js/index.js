const defaultValues = {
  number: "5454 1919 2602 1502",
  name: "Jane Appleseed",
  month: "02",
  year: "24",
  cvc: "000",
};

function setCardData(data) {
  $("#cc__number").text(data.number);
  $("#cc__month").text(data.month);
  $("#cc__name").text(data.name);
  $("#cc__year").text(data.year);
  $("#cc__cvc").text(data.cvc);
}

function toggleForm(setData) {
  $("form").toggle();
  $(".feedback").toggle();

  if (setData) {
    setCardData(defaultValues);
  }
}

$(document).ready(function () {
  $("form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 24,
        pattern: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
      },
      number: {
        required: true,
        pattern: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)(?:\d{4})/,
      },
      cvc: {
        required: true,
        maxlength: 3,
        minlength: 3,
        digits: true,
      },
      month: {
        required: true,
        pattern: /^(0[1-9]|1[0-2])$/,
      },
      year: {
        required: true,
        pattern: /^[0-9]{1,2}[:.,-]?$/,
      },
    },

    submitHandler: function (form) {
      const data = Object.fromEntries(new FormData(form).entries());

      setCardData(data);
      toggleForm();

      form.reset();
    },
  });

  $(".feedback").hide();
});
