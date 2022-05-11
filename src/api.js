export const searchUser = async (email) => {
  let url = `https://fd01-2806-2f0-60c0-9ad8-c964-238a-84ee8700.ngrok.io/api/auth/user/email`;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({
      email: email,
    }),
  }).then(() => {
    console.log("it works");
  });
};

export const getAllUser = async () => {
  try {
    let url = `https://fd01-2806-2f0-60c0-9ad8-c964-238a-84ee-8700.ngrok.io/api/auth/user/all`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (name,email,password, role,hub) => {
  let url = `https://fd01-2806-2f0-60c0-9ad8-c964-238a-84ee8700.ngrok.io/api/auth/user/email`;
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      hub: hub,
    }),
  }).then(() => {
    console.log("it works");
  });
};
