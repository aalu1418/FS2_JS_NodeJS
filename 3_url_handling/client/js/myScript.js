const go_forward = () => {
  try {
    const path = window.location.pathname;
    const url = path.split("/");
    const page = url.pop();

    const new_url = page === "index.html" ? "page1.html" : "page2.html";
    url.push(new_url);

    window.location = url.join("/");
    console.log("[Forward Success]");
  } catch (e) {
    console.log("[Forward Failed] "+e);
  } finally {

  }
};

const go_home = () => {
  try {
    const path = window.location.pathname;
    const url = path.split("/");
    const page = url.pop();

    url.push("index.html");

    window.location = url.join("/");
    console.log("[Home Success]");
  } catch (e) {
    console.log("[Home Failed] "+e);
  } finally {

  }
}

const make_buttons = () => {
  try {
    const path = window.location.pathname;
    const url = path.split("/");
    const page = url.pop();

    const next_button = page === "page2.html" ? "" : "<button type=\"button\" name=\"button\" onclick = \"go_forward()\">Next</button>"
    document.getElementById("buttons").innerHTML = "<button type=\"button\" name=\"button\" onclick = \"go_home()\">Home</button>" + next_button;
    console.log("[Button Creation Success]");
  } catch (e) {
    console.log("[Button Creation Success] "+e);
  } finally {

  }
}

make_buttons();
